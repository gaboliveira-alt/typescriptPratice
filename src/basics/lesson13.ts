function error(message: string): never {
    throw new Error(message)
}

console.log(error('Erro de mensagem - 01'))


function rejectMessage() {
    return error('Erro de mensagem - 02')
}

console.log(rejectMessage())

const infinityLoop = function loop() {
    while (true) {
        console.log('Oi, Devs')
    }
}



