const numberMax: number = 100
let count: number = 100

if (count < numberMax) {
    count++
}

console.log(count)


const cnh: number = 16

if (cnh >= 18) {
    console.log('Pode dirigir')
}


const cnh01: number = 18

if (cnh <= 17) {
    console.log('Voce pode dirigir')
}
else {
    console.log('Não pode dirigir')
}


let discount: number
const value: number = 14


if (value >= 0 && value <= 5) {
    discount = 5
}
else if (value > 5 && value <= 10) {
    discount = 10
}
else {
    discount = 15
}


console.log('Voce teve um desconto de:', discount)


const ageVotation: number = 16


const votation = (ageVotation >= 18) ? 'Voce pode votar': 'Voce nao pode votar'

console.log(votation)