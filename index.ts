import { readFileSync } from 'fs';
import { fromMnemonic } from './src/mapping';
import { TagToOffsetMapping } from './src/models';

const inPath = process.argv[2];
const outPath = '';

const inFile = readFileSync(inPath, 'utf-8').toUpperCase();
const out: string[] = [];

const tagMap: TagToOffsetMapping = {};

const lines = inFile.split('\n');
let pc = 0;
let lineNumber = 1;
for (const line of lines) {
    // console.log(`${pc} ${line}`);
    // push handling
    if(line.startsWith('PUSH')){
        const splits = line.split(' ');
        if(splits[1].startsWith('@')){
            //  only support PUSH2 for now.
            const opcode = fromMnemonic['PUSH2'];
            out.push(opcode.uint8);
            out.push(splits[1]);
            pc += 2;
        }else{
            const pushSize = parseInt(splits[0].slice(4));
            const instruction = splits[0];
            const param = splits[1].slice(2);
            const opcode = fromMnemonic[instruction];
            if(!opcode){
                throw new Error(`opcode not found. '${line}' at line ${lineNumber}.`);
            }
            out.push(opcode.uint8);
            out.push(param);
            pc += pushSize;
        }
    }
    //  tag handling
    else if(line.startsWith('@') && line.endsWith(':')){
        const tag = line.substring(1, line.length-1);
        if(tagMap[tag]){
            throw new Error(`tag scope '${tag}' is declared twice. at line ${lineNumber}.`);
        }
        tagMap[tag] = pc;
        out.push(fromMnemonic['JUMPDEST'].uint8);
    }else{
        const opcode = fromMnemonic[line];
        if(!opcode){
            throw new Error(`opcode not found. '${line}' at line ${lineNumber}.`);
        }
        out.push(opcode.uint8);
    }
    pc++;
    lineNumber++;
}

let outCode = '';
for (const code of out) {
    if(code.startsWith('@')){
        const tag = code.slice(1);
        if(tagMap[tag] < 256){
            outCode += '00'+Buffer.from([tagMap[tag]]).toString('hex');
        }else{
            outCode += Buffer.from([tagMap[tag]]).toString('hex');
        }
    }else{
        outCode += code;
    }
}

console.log(outCode);

/**
 * PUSH1 0x01
 * PUSH @CHECK
 * JUMPI
 * 
 * @CHECK:
 * PUSH2 0x0123
 * CALLVALUE
 * 
 * 
 * 
 */