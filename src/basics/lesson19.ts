function sumNum(num1: number, num2: number): number {
    return num1 + num2
}


const result: number = sumNum(3, 4)
console.log(result)


const saudation = function(message: string): string {
    return message
}

console.log(saudation('Oython'))


const saudation01 = (message: string) => {
    return message
}


console.log(saudation01('Devs'))


const saudation02 = new Function('message', 'return "Fala " + message')

console.log(saudation02('Galera'))