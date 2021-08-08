import { readFileSync } from 'fs';
import { assert } from './src/assert';
import { Instruction, parseJumpdest, parsePushOperator } from './src/instruction';
import { fromMnemonic } from './src/mapping';
import { TagToOffsetMapping } from './src/models';
import { sanitize } from './src/sanitizer';

const inPath = process.argv[2];
const outPath = '';

const inFile = readFileSync(inPath, 'utf-8').toUpperCase();
const sanitized = sanitize(inFile);

const tagMap: TagToOffsetMapping = {};

const lines = sanitized.split('\n');
let lineNumber = 1;

/// parse instructions
let instructions: Instruction[] = [];
for (const line of lines) {
    // push handling
    if(line.startsWith('PUSH')){
        const instruction = parsePushOperator(line, lineNumber);
        instructions.push(instruction);
    }
    else if(line.startsWith('JUMPDEST')){
        const instruction = parseJumpdest(line, lineNumber);
        instructions.push(instruction);
    }else{
        if(!line){
            lineNumber++;
            continue;
        }
        const opcode = fromMnemonic[line];
        assert(!!opcode, `opcode ${line} not found at line ${lineNumber}.`);
        const instruction: Instruction = {
            type: 'GENERAL',
            opcode: opcode,
            size: 1,
            params: []
        };
        instructions.push(instruction);
    }
    lineNumber++;
}

/// create tag map
let pc = 0;
for (const instruction of instructions){
    if(instruction.type == 'JUMPDEST'){
        if(!instruction.params){
            throw new Error(`unexpected error at instruction ${JSON.stringify(instruction)}`);
        }
        tagMap[instruction.params[0]] = pc;
    }
    pc += instruction.size;
}

/// parse bytes
let outCode = '';
for (const instruction of instructions){
    if(instruction.type == 'PUSH'){             //  PUSHx 0x...
        outCode += instruction.opcode.uint8;
        outCode += instruction.params[0];
    }else if(instruction.type == 'PUSH_TAG'){   //  PUSH2 @tag
        outCode += instruction.opcode.uint8;
        const tag = instruction.params[0];
        if(tagMap[tag] < 256){
            outCode += '00'+Buffer.from([tagMap[tag]]).toString('hex');
        }else{
            outCode += Buffer.from([tagMap[tag]]).toString('hex');
        }
    }else if(instruction.type == 'JUMPDEST'){   // JUMPDEST @tag
        outCode += instruction.opcode.uint8;
    }else if(instruction.type == 'GENERAL'){    // OPCODE
        outCode += instruction.opcode.uint8;
    }
}

console.log(outCode);