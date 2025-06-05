const personName: string = "Gabriel Oliveira"
console.log(personName)

const animals: string[] = ["Elefante", "Girafa", "Tigre"]
console.log(animals)

let car: {
    carName: string
    year: string
    price: number
}

car = {carName: 'Toyota', year: "120", price: 123}
console.log(car)

function multiNumber(number1: number, number2: number) {
    return number1 * number2
}

const number1: number = 2
const number2: number = 3
console.log(multiNumber(number1, number2))
