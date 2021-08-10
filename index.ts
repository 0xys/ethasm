import { readFileSync } from 'fs';
import { assert } from './src/assert';
import { Instruction, parseJumpdest, parsePushOperator } from './src/instruction';
import { fromGlobalTag, fromMnemonic } from './src/mapping';
import { TagToOffsetMapping } from './src/models';
import { sanitize } from './src/sanitizer';
import BN from 'bn.js';

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
    }else if(line.startsWith('@')){
        const instruction: Instruction = {
            type: 'TAG',
            params: [line.trim()],
            size: 0     // tag is just a tag
        }
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
    if(instruction.type == 'TAG'){
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
        outCode += instruction.opcode?.uint8;
        outCode += instruction.params[0];
    }else if(instruction.type == 'PUSH_TAG'){   //  PUSH2 @tag
        outCode += instruction.opcode?.uint8;
        const tag = instruction.params[0];
        if(!tagMap[tag]){
            throw new Error(`tag '${tag} not defined.'`);
        }

        if(tagMap[tag] < 256){
            outCode += '00'+Buffer.from([tagMap[tag]]).toString('hex');
        }else{
            outCode += Buffer.from([tagMap[tag]]).toString('hex');
        }
    }else if(instruction.type == 'PUSH_GLOBAL'){
        outCode += instruction.opcode?.uint8;
        const tag = instruction.params[0];
        outCode += fromGlobalTag[tag];
    }else if(instruction.type == 'TAG'){        //  @tag
        continue;
    }else if(instruction.type == 'GENERAL'){    // OPCODE
        outCode += instruction.opcode?.uint8;
    }
}

// finalize
const codeSizeHex = new BN(outCode.length/2).toString('hex', 4).toUpperCase();
outCode = outCode.replaceAll('CDSZ', codeSizeHex);

console.log(outCode);