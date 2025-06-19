let count: number = 0

while (count < 5) {
    console.log(count)
    count++
}


let num: number = 1

while (num <= 20) {
    if (num % 5 == 0) {
        console.log('o primeiro numero multipo de 5 entre 1 e 20 é:', num)
        break
    }
    num++
}


let userCount: number = 0
const arrayUsers: Array<string> = ['Gabriel', 'Nomit', 'Alduin']

while (arrayUsers[userCount]) {
    console.log('Usuarios....:', arrayUsers[userCount])
    userCount++
}


let count01: number = 0

do {
    console.log(count01)
    count01++
} while (count < 5)