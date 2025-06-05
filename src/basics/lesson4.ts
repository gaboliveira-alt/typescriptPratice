const num1: number = 23.0
const num2: number = 0x78CF
const num3: number = 0o577
const num4: number =  0b110001

console.log('Number - Ponto Flutuante: ', num1)
console.log('Number - Hexadecimal: ', num2)
console.log('Number - Octal: ', num3)
console.log('Number - Binário: ', num4)

const big1: bigint = 9007199254740991n
const big2: bigint = 0b100000000000000000000000000000000000000000000000000011n
const big3: bigint = 0x20000000000003n
const big4: bigint = 0o400000000000000003n

console.log('Bigint...: ', big1)
console.log('Bigint - Binário...: ', big2)
console.log('Bigint - Hexadecimal...: ', big3)
console.log('Bigint - Octal...: ', big4)

