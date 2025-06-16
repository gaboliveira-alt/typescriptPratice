function logError(errorMensage: string): void {
    console.log(errorMensage)
}

logError('Required field - Name')


const logErrorExample2 = (errorMessage: string): void => {
    console.log(errorMessage)
}

logErrorExample2('Required field - Age')


let variableVoid: void

// variableVoid = null
variableVoid = undefined

console.log(variableVoid)
