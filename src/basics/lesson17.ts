for (let i = 0; i < 10; i++) {
    console.log(i)
}


const arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8]


for (const number of arrayNumbers) {
    console.log(number)
}


const arrayNumbers01: number[] = [3, 4, 5, 7, 9, 2, 19, 20]


for (const number in arrayNumbers01) {
    console.log(number)
}


const arrayNumbers02: Array<number> = [2, 3, 4, 5, 1].sort()
console.log(arrayNumbers02)