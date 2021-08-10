import { OpCode } from "./opcode"

type FromMnemonicMapping = {
    [key: string]: OpCode
}

export const fromMnemonic: FromMnemonicMapping = {
    'STOP': {
        mnemonic: 'STOP',
        uint8: '00',
        input: 0,
        output: 0,
        gas: 0
    },
    'ADD': {
        mnemonic: 'ADD',
        uint8: '01',
        input: 0,
        output: 0,
        gas: 3
    },
    'MUL': {
        mnemonic: 'MUL',
        uint8: '02',
        input: 0,
        output: 0,
        gas: 5
    },
    'SUB': {
        mnemonic: 'SUB',
        uint8: '03',
        input: 0,
        output: 0,
        gas: 3
    },
    'DIV': {
        mnemonic: 'DIV',
        uint8: '04',
        input: 0,
        output: 0,
        gas: 5
    },
    'SDIV': {
        mnemonic: 'SDIV',
        uint8: '05',
        input: 0,
        output: 0,
        gas: 5
    },
    'MOD': {
        mnemonic: 'MOD',
        uint8: '06',
        input: 0,
        output: 0,
        gas: 5
    },
    'SMOD': {
        mnemonic: 'SMOD',
        uint8: '07',
        input: 0,
        output: 0,
        gas: 5
    },
    'ADDMOD': {
        mnemonic: 'ADDMOD',
        uint8: '08',
        input: 0,
        output: 0,
        gas: 8
    },
    'MULMOD': {
        mnemonic: 'MULMOD',
        uint8: '09',
        input: 0,
        output: 0,
        gas: 8
    },
    'EXP': {
        mnemonic: 'EXP',
        uint8: '0a',
        input: 0,
        output: 0,
        gas: 10
    },
    'SIGNEXTEND': {
        mnemonic: 'SIGNEXTEND',
        uint8: '0b',
        input: 0,
        output: 0,
        gas: 5
    },
    'LT': {
        mnemonic: 'LT',
        uint8: '10',
        input: 0,
        output: 0,
        gas: 3
    },
    'GT': {
        mnemonic: 'GT',
        uint8: '11',
        input: 0,
        output: 0,
        gas: 3
    },
    'SLT': {
        mnemonic: 'SLT',
        uint8: '12',
        input: 0,
        output: 0,
        gas: 3
    },
    'SGT': {
        mnemonic: 'SGT',
        uint8: '13',
        input: 0,
        output: 0,
        gas: 3
    },
    'EQ': {
        mnemonic: 'EQ',
        uint8: '14',
        input: 0,
        output: 0,
        gas: 3
    },
    'ISZERO': {
        mnemonic: 'ISZERO',
        uint8: '15',
        input: 0,
        output: 0,
        gas: 3
    },
    'AND': {
        mnemonic: 'AND',
        uint8: '16',
        input: 0,
        output: 0,
        gas: 3
    },
    'OR': {
        mnemonic: 'OR',
        uint8: '17',
        input: 0,
        output: 0,
        gas: 3
    },
    'XOR': {
        mnemonic: 'XOR',
        uint8: '18',
        input: 0,
        output: 0,
        gas: 3
    },
    'NOT': {
        mnemonic: 'NOT',
        uint8: '19',
        input: 0,
        output: 0,
        gas: 3
    },
    'BYTE': {
        mnemonic: 'BYTE',
        uint8: '1a',
        input: 0,
        output: 0,
        gas: 3
    },
    'SHL': {
        mnemonic: 'SHL',
        uint8: '1b',
        input: 0,
        output: 0,
        gas: 3
    },
    'SHR': {
        mnemonic: 'SHR',
        uint8: '1c',
        input: 0,
        output: 0,
        gas: 3
    },
    'SAR': {
        mnemonic: 'SAR',
        uint8: '1d',
        input: 0,
        output: 0,
        gas: 3
    },
    'KECCAK256': {
        mnemonic: 'KECCAK256',
        uint8: '20',
        input: 0,
        output: 0,
        gas: 30
    },
    'ADDRESS': {
        mnemonic: 'ADDRESS',
        uint8: '30',
        input: 0,
        output: 0,
        gas: 2
    },
    'BALANCE': {
        mnemonic: 'BALANCE',
        uint8: '31',
        input: 0,
        output: 0,
        gas: 700
    },
    'ORIGIN': {
        mnemonic: 'ORIGIN',
        uint8: '32',
        input: 0,
        output: 0,
        gas: 2
    },
    'CALLER': {
        mnemonic: 'CALLER',
        uint8: '33',
        input: 0,
        output: 0,
        gas: 2
    },
    'CALLVALUE': {
        mnemonic: 'CALLVALUE',
        uint8: '34',
        input: 0,
        output: 0,
        gas: 2
    },
    'CALLDATALOAD': {
        mnemonic: 'CALLDATALOAD',
        uint8: '35',
        input: 0,
        output: 0,
        gas: 3
    },
    'CALLDATASIZE': {
        mnemonic: 'CALLDATASIZE',
        uint8: '36',
        input: 0,
        output: 0,
        gas: 2
    },
    'CALLDATACOPY': {
        mnemonic: 'CALLDATACOPY',
        uint8: '37',
        input: 0,
        output: 0,
        gas: 3
    },
    'CODESIZE': {
        mnemonic: 'CODESIZE',
        uint8: '38',
        input: 0,
        output: 0,
        gas: 2
    },
    'CODECOPY': {
        mnemonic: 'CODECOPY',
        uint8: '39',
        input: 0,
        output: 0,
        gas: 3
    },
    'GASPRICE': {
        mnemonic: 'GASPRICE',
        uint8: '3a',
        input: 0,
        output: 0,
        gas: 2
    },
    'EXTCODESIZE': {
        mnemonic: 'EXTCODESIZE',
        uint8: '3b',
        input: 0,
        output: 0,
        gas: 700
    },
    'EXTCODECOPY': {
        mnemonic: 'EXTCODECOPY',
        uint8: '3c',
        input: 0,
        output: 0,
        gas: 700
    },
    'RETURNDATASIZE': {
        mnemonic: 'RETURNDATASIZE',
        uint8: '3d',
        input: 0,
        output: 0,
        gas: 2
    },
    'RETURNDATACOPY': {
        mnemonic: 'RETURNDATACOPY',
        uint8: '3e',
        input: 0,
        output: 0,
        gas: 3
    },
    'EXTCODEHASH': {
        mnemonic: 'EXTCODEHASH',
        uint8: '3f',
        input: 0,
        output: 0,
        gas: 700
    },
    'BLOCKHASH': {
        mnemonic: 'BLOCKHASH',
        uint8: '40',
        input: 0,
        output: 0,
        gas: 20
    },
    'COINBASE': {
        mnemonic: 'COINBASE',
        uint8: '41',
        input: 0,
        output: 0,
        gas: 2
    },
    'TIMESTAMP': {
        mnemonic: 'TIMESTAMP',
        uint8: '42',
        input: 0,
        output: 0,
        gas: 2
    },
    'NUMBER': {
        mnemonic: 'NUMBER',
        uint8: '43',
        input: 0,
        output: 0,
        gas: 2
    },
    'DIFFICULTY': {
        mnemonic: 'DIFFICULTY',
        uint8: '44',
        input: 0,
        output: 0,
        gas: 2
    },
    'GASLIMIT': {
        mnemonic: 'GASLIMIT',
        uint8: '45',
        input: 0,
        output: 0,
        gas: 2
    },
    'CHAINID': {
        mnemonic: 'CHAINID',
        uint8: '46',
        input: 0,
        output: 0,
        gas: 2
    },
    'SELFBALANCE': {
        mnemonic: 'SELFBALANCE',
        uint8: '47',
        input: 0,
        output: 0,
        gas: 5
    },
    'BASEFEE': {
        mnemonic: 'BASEFEE',
        uint8: '48',
        input: 0,
        output: 0,
        gas: 2
    },
    'POP': {
        mnemonic: 'POP',
        uint8: '50',
        input: 0,
        output: 0,
        gas: 2
    },
    'MLOAD': {
        mnemonic: 'MLOAD',
        uint8: '51',
        input: 0,
        output: 0,
        gas: 3
    },
    'MSTORE': {
        mnemonic: 'MSTORE',
        uint8: '52',
        input: 0,
        output: 0,
        gas: 3
    },
    'MSTORE8': {
        mnemonic: 'MSTORE8',
        uint8: '53',
        input: 0,
        output: 0,
        gas: 3
    },
    'SLOAD': {
        mnemonic: 'SLOAD',
        uint8: '54',
        input: 0,
        output: 0,
        gas: 800
    },
    'SSTORE': {
        mnemonic: 'SSTORE',
        uint8: '55',
        input: 0,
        output: 0,
        gas: 20000
    },
    'JUMP': {
        mnemonic: 'JUMP',
        uint8: '56',
        input: 0,
        output: 0,
        gas: 8
    },
    'JUMPI': {
        mnemonic: 'JUMPI',
        uint8: '57',
        input: 0,
        output: 0,
        gas: 10
    },
    'GETPC': {
        mnemonic: 'GETPC',
        uint8: '58',
        input: 0,
        output: 0,
        gas: 2
    },
    'MSIZE': {
        mnemonic: 'MSIZE',
        uint8: '59',
        input: 0,
        output: 0,
        gas: 2
    },
    'GAS': {
        mnemonic: 'GAS',
        uint8: '5a',
        input: 0,
        output: 0,
        gas: 2
    },
    'JUMPDEST': {
        mnemonic: 'JUMPDEST',
        uint8: '5b',
        input: 0,
        output: 0,
        gas: 1
    },
    'PUSH1': {
        mnemonic: 'PUSH1',
        uint8: '60',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH2': {
        mnemonic: 'PUSH2',
        uint8: '61',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH3': {
        mnemonic: 'PUSH3',
        uint8: '62',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH4': {
        mnemonic: 'PUSH4',
        uint8: '63',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH5': {
        mnemonic: 'PUSH5',
        uint8: '64',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH6': {
        mnemonic: 'PUSH6',
        uint8: '65',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH7': {
        mnemonic: 'PUSH7',
        uint8: '66',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH8': {
        mnemonic: 'PUSH8',
        uint8: '67',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH9': {
        mnemonic: 'PUSH9',
        uint8: '68',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH10': {
        mnemonic: 'PUSH10',
        uint8: '69',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH11': {
        mnemonic: 'PUSH11',
        uint8: '6a',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH12': {
        mnemonic: 'PUSH12',
        uint8: '6b',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH13': {
        mnemonic: 'PUSH13',
        uint8: '6c',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH14': {
        mnemonic: 'PUSH14',
        uint8: '6d',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH15': {
        mnemonic: 'PUSH15',
        uint8: '6e',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH16': {
        mnemonic: 'PUSH16',
        uint8: '6f',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH17': {
        mnemonic: 'PUSH17',
        uint8: '70',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH18': {
        mnemonic: 'PUSH18',
        uint8: '71',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH19': {
        mnemonic: 'PUSH19',
        uint8: '72',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH20': {
        mnemonic: 'PUSH20',
        uint8: '73',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH21': {
        mnemonic: 'PUSH21',
        uint8: '74',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH22': {
        mnemonic: 'PUSH22',
        uint8: '75',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH23': {
        mnemonic: 'PUSH23',
        uint8: '76',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH24': {
        mnemonic: 'PUSH24',
        uint8: '77',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH25': {
        mnemonic: 'PUSH25',
        uint8: '78',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH26': {
        mnemonic: 'PUSH26',
        uint8: '79',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH27': {
        mnemonic: 'PUSH27',
        uint8: '7a',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH28': {
        mnemonic: 'PUSH28',
        uint8: '7b',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH29': {
        mnemonic: 'PUSH29',
        uint8: '7c',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH30': {
        mnemonic: 'PUSH30',
        uint8: '7d',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH31': {
        mnemonic: 'PUSH31',
        uint8: '7e',
        input: 0,
        output: 0,
        gas: 3
    },
    'PUSH32': {
        mnemonic: 'PUSH32',
        uint8: '7f',
        input: 0,
        output: 0,
        gas: 3
    },
    'DUP1': {
        mnemonic: 'DUP1',
        uint8: '80',
        input: 0,
        output: 0,
        gas: 3
    },
    'DUP2': {
        mnemonic: 'DUP2',
        uint8: '81',
        input: 0,
        output: 0,
        gas: 3
    },
    'DUP3': {
        mnemonic: 'DUP3',
        uint8: '82',
        input: 0,
        output: 0,
        gas: 3
    },
    'DUP4': {
        mnemonic: 'DUP4',
        uint8: '83',
        input: 0,
        output: 0,
        gas: 3
    },
    'DUP5': {
        mnemonic: 'DUP5',
        uint8: '84',
        input: 0,
        output: 0,
        gas: 3
    },
    'DUP6': {
        mnemonic: 'DUP6',
        uint8: '85',
        input: 0,
        output: 0,
        gas: 3
    },
    'DUP7': {
        mnemonic: 'DUP7',
        uint8: '86',
        input: 0,
        output: 0,
        gas: 3
    },
    'DUP8': {
        mnemonic: 'DUP8',
        uint8: '87',
        input: 0,
        output: 0,
        gas: 3
    },
    'DUP9': {
        mnemonic: 'DUP9',
        uint8: '88',
        input: 0,
        output: 0,
        gas: 3
    },
    'DUP10': {
        mnemonic: 'DUP10',
        uint8: '89',
        input: 0,
        output: 0,
        gas: 3
    },
    'DUP11': {
        mnemonic: 'DUP11',
        uint8: '8a',
        input: 0,
        output: 0,
        gas: 3
    },
    'DUP12': {
        mnemonic: 'DUP12',
        uint8: '8b',
        input: 0,
        output: 0,
        gas: 3
    },
    'DUP13': {
        mnemonic: 'DUP13',
        uint8: '8c',
        input: 0,
        output: 0,
        gas: 3
    },
    'DUP14': {
        mnemonic: 'DUP14',
        uint8: '8d',
        input: 0,
        output: 0,
        gas: 3
    },
    'DUP15': {
        mnemonic: 'DUP15',
        uint8: '8e',
        input: 0,
        output: 0,
        gas: 3
    },
    'DUP16': {
        mnemonic: 'DUP16',
        uint8: '8f',
        input: 0,
        output: 0,
        gas: 3
    },
    'SWAP1': {
        mnemonic: 'SWAP1',
        uint8: '90',
        input: 0,
        output: 0,
        gas: 3
    },
    'SWAP2': {
        mnemonic: 'SWAP2',
        uint8: '91',
        input: 0,
        output: 0,
        gas: 3
    },
    'SWAP3': {
        mnemonic: 'SWAP3',
        uint8: '92',
        input: 0,
        output: 0,
        gas: 3
    },
    'SWAP4': {
        mnemonic: 'SWAP4',
        uint8: '93',
        input: 0,
        output: 0,
        gas: 3
    },
    'SWAP5': {
        mnemonic: 'SWAP5',
        uint8: '94',
        input: 0,
        output: 0,
        gas: 3
    },
    'SWAP6': {
        mnemonic: 'SWAP6',
        uint8: '95',
        input: 0,
        output: 0,
        gas: 3
    },
    'SWAP7': {
        mnemonic: 'SWAP7',
        uint8: '96',
        input: 0,
        output: 0,
        gas: 3
    },
    'SWAP8': {
        mnemonic: 'SWAP8',
        uint8: '97',
        input: 0,
        output: 0,
        gas: 3
    },
    'SWAP9': {
        mnemonic: 'SWAP9',
        uint8: '98',
        input: 0,
        output: 0,
        gas: 3
    },
    'SWAP10': {
        mnemonic: 'SWAP10',
        uint8: '99',
        input: 0,
        output: 0,
        gas: 3
    },
    'SWAP11': {
        mnemonic: 'SWAP11',
        uint8: '9a',
        input: 0,
        output: 0,
        gas: 3
    },
    'SWAP12': {
        mnemonic: 'SWAP12',
        uint8: '9b',
        input: 0,
        output: 0,
        gas: 3
    },
    'SWAP13': {
        mnemonic: 'SWAP13',
        uint8: '9c',
        input: 0,
        output: 0,
        gas: 3
    },
    'SWAP14': {
        mnemonic: 'SWAP14',
        uint8: '9d',
        input: 0,
        output: 0,
        gas: 3
    },
    'SWAP15': {
        mnemonic: 'SWAP15',
        uint8: '9e',
        input: 0,
        output: 0,
        gas: 3
    },
    'SWAP16': {
        mnemonic: 'SWAP16',
        uint8: '9f',
        input: 0,
        output: 0,
        gas: 3
    },
    'LOG0': {
        mnemonic: 'LOG0',
        uint8: 'a0',
        input: 0,
        output: 0,
        gas: 3
    },
    'LOG1': {
        mnemonic: 'LOG1',
        uint8: 'a1',
        input: 0,
        output: 0,
        gas: 3
    },
    'LOG2': {
        mnemonic: 'LOG2',
        uint8: 'a2',
        input: 0,
        output: 0,
        gas: 3
    },
    'LOG3': {
        mnemonic: 'LOG3',
        uint8: 'a3',
        input: 0,
        output: 0,
        gas: 3
    },
    'LOG4': {
        mnemonic: 'LOG4',
        uint8: 'a4',
        input: 0,
        output: 0,
        gas: 3
    },
    'JUMPTO': {
        mnemonic: 'JUMPTO',
        uint8: 'b0',
        input: 0,
        output: 0,
        gas: -1
    },
    'JUMPIF': {
        mnemonic: 'JUMPIF',
        uint8: 'b1',
        input: 0,
        output: 0,
        gas: -1
    },
    'JUMPSUB': {
        mnemonic: 'JUMPSUB',
        uint8: 'b2',
        input: 0,
        output: 0,
        gas: -1
    },
    'JUMPSUBV': {
        mnemonic: 'JUMPSUBV',
        uint8: 'b3',
        input: 0,
        output: 0,
        gas: -1
    },
    'BEGINSUB': {
        mnemonic: 'BEGINSUB',
        uint8: 'b4',
        input: 0,
        output: 0,
        gas: -1
    },
    'BEGINDATA': {
        mnemonic: 'BEGINDATA',
        uint8: 'b5',
        input: 0,
        output: 0,
        gas: -1
    },
    'RETURNSUB': {
        mnemonic: 'RETURNSUB',
        uint8: 'b6',
        input: 0,
        output: 0,
        gas: -1
    },
    'PUTLOCAL': {
        mnemonic: 'PUTLOCAL',
        uint8: 'b7',
        input: 0,
        output: 0,
        gas: -1
    },
    'GETLOCAL': {
        mnemonic: 'GETLOCAL',
        uint8: 'b8',
        input: 0,
        output: 0,
        gas: -1
    },
    'SLOADBYTES': {
        mnemonic: 'SLOADBYTES',
        uint8: 'e0',
        input: 0,
        output: 0,
        gas: 0
    },
    'SSTOREBYTES': {
        mnemonic: 'SSTOREBYTES',
        uint8: 'e1',
        input: 0,
        output: 0,
        gas: 0
    },
    'SSIZE': {
        mnemonic: 'SSIZE',
        uint8: 'e2',
        input: 0,
        output: 0,
        gas: 0
    },
    'CREATE': {
        mnemonic: 'CREATE',
        uint8: 'f0',
        input: 0,
        output: 0,
        gas: 32000
    },
    'CALL': {
        mnemonic: 'CALL',
        uint8: 'f1',
        input: 0,
        output: 0,
        gas: -1
    },
    'CALLCODE': {
        mnemonic: 'CALLCODE',
        uint8: 'f2',
        input: 0,
        output: 0,
        gas: -1
    },
    'RETURN': {
        mnemonic: 'RETURN',
        uint8: 'f3',
        input: 0,
        output: 0,
        gas: 0
    },
    'DELEGATECALL': {
        mnemonic: 'DELEGATECALL',
        uint8: 'f4',
        input: 0,
        output: 0,
        gas: -1
    },
    'CREATE2': {
        mnemonic: 'CREATE2',
        uint8: 'f5',
        input: 0,
        output: 0,
        gas: -1
    },
    'STATICCALL': {
        mnemonic: 'STATICCALL',
        uint8: 'fa',
        input: 0,
        output: 0,
        gas: 40
    },
    'TXEXECGAS': {
        mnemonic: 'TXEXECGAS',
        uint8: 'fc',
        input: 0,
        output: 0,
        gas: 3
    },
    'REVERT': {
        mnemonic: 'REVERT',
        uint8: 'fd',
        input: 0,
        output: 0,
        gas: 0
    },
    'INVALID': {
        mnemonic: 'INVALID',
        uint8: 'fe',
        input: 0,
        output: 0,
        gas: 0
    },
    'SELFDESTRUCT': {
        mnemonic: 'SELFDESTRUCT',
        uint8: 'ff',
        input: 0,
        output: 0,
        gas: 5000
    },
    
}

type FromGlobalTagMapping = {
    [key: string]: string
}
export const fromGlobalTag: FromGlobalTagMapping = {
    '@RUNTIMELENGTH': 'RT_L',
    '@CODESIZE': 'CDSZ',
}