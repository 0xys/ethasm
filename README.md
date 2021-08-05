# Solidity Assembler

```
push1 0x80
push1 0x40
mstore
callvalue
dup1
iszero
push @tag
jumpi
push1 0x00
dup1
revert
@tag:
pop
push1 0x01
return
stop
```

```
npm start <FILE_PATH> 
6080604052348015611057600080fd5b506001f300
```