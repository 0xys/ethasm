import { OpCode } from "./opcode";
import BN from 'bn.js';
import { fromMnemonic } from "./mapping";
import { assert } from "./assert";

export interface Instruction {
    type: InstructionType,
    opcode?: OpCode,
    size: number,
    params: string[]
}

type InstructionType = 'GENERAL'|'PUSH'|'PUSH_TAG'|'PUSH_GLOBAL'|'TAG';

/**
 * 
 * @param line 
 * @param at 
 * @returns 
 */
export const parsePushOperator = (line: string, at: number): Instruction => {
    const tmp = line.split(' ');
    assert(tmp.length == 2, `wrong number of params for PUSH instruction. got ${tmp.length} at line ${at}. "${line}"`);
    const operator = tmp[0];
    const { operand, type } = parsePushOperand(tmp[1]);

    if(type == 'Tag'){
        return {
            type: 'PUSH_TAG',
            opcode: fromMnemonic['PUSH2'],
            params: [operand],
            size: 3
        };
    }

    if(type == 'CodeSize' || type == 'RuntimeLength'){
        return {
            type: 'PUSH_GLOBAL',
            opcode: fromMnemonic['PUSH2'],
            params: [operand],
            size: 3
        };
    }

    if(operator == 'PUSH'){
        const byteSize = operand.length/2;
        assert(byteSize > 0 && byteSize <= 32, `param of PUSH must be in [1,32] at line ${at}. ${line}`);
        const operator = 'PUSH'+byteSize;
        return {
            type: 'PUSH',
            opcode: fromMnemonic[operator],
            params: [operand],
            size: 1+byteSize
        };
    }else if(operator.startsWith('PUSH')){
        const opcode = fromMnemonic[operator];
        assert(!!opcode, `opcode now found at line ${at}. ${line}`);
        return {
            type: 'PUSH',
            opcode: opcode,
            params: [operand],
            size: 1+parseInt(operator.slice(4))
        };
    }else{
        throw new Error(`something is wrong. ${line}`);
    }
}

type PushType = 'Value'|'Tag'|'CodeSize'|'RuntimeLength';
const parsePushOperand = (operand: string): { operand: string, type: PushType } => {
    if(operand.startsWith('0x')){
        return {
            operand: operand.slice(2),
            type: 'Value'
        };
    }else if(operand.startsWith('@')){
        return { 
            operand,
            type: classifyTag(operand)
        };
    }else{
        const num = parseInt(operand);
        const hex = new BN(num).toString('hex');
        if(hex.length % 2 == 1){
            return {
                operand: '0'+hex,
                type: 'Value'
            };
        }else{
            return {
                operand: hex,
                type: 'Value'
            };
        }
    }
}

const classifyTag = (tag: string): PushType => {
    if(tag == '@CODESIZE'){
        return 'CodeSize';
    }else if(tag == '@RUNTIMELENGTH'){
        return 'RuntimeLength';
    }else{
        return 'Tag';
    }
}

/**
 * 
 * @param line 
 * @param at 
 * @returns 
 */
export const parseJumpdest = (line: string, at: number): Instruction => {
    return {
        type: 'GENERAL',
        opcode: fromMnemonic['JUMPDEST'],
        params: [],
        size: 1
    };
}