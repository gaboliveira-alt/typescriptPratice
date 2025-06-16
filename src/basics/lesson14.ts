const person = {
    name: 'Gabriel Oliveira Pinto',
    age: 19,
    functionPerson: 'Student'
}

console.log(person)

function onBoarding01(employee: {name: string}) {
    return 'Seja bem-vindo' + employee.name
}

console.log(onBoarding01({name: 'Gabriel Oliveira'}))

interface Person2 {
    name: string
    function_employee: string
}

function onBoarding02(person: Person2): string {
    return 'Seja bem-vindo' + person.name + '!' + 'Sua função aqui é ' + person.function_employee + '.'
}

console.log(onBoarding02({name: 'Gabriel Oliveira Pinto', function_employee: 'Student'}))


type Person03 = {
    name: string,
    functionEmployee: string,
    language: string
}


function onBoarding03(person: Person03): string {
    return 'Seja bem-vindo' + person.name + '!' + 'Sua função aqui será ' + person.functionEmployee + 'você vai trabalhar com' + person.language
}


console.log(onBoarding03({name: 'Gabriel Oliveira Pinto', functionEmployee: 'Student', language: 'Python'}))


interface Person04 {
    name: string
    functionEmployee: string
    age?: number
    email?: string
    language: string
}

function onBoarding04(person: Person04): string {
    return (
        'Seja bem-vindo' + 
        person.name + 
        'Sua função aqui será ' +
        person.functionEmployee +
        'Você vai trabalhar com ' +
        person.language + '.'
    )
}

console.log(onBoarding04({name: 'Gabriel Oliveira Pinto', functionEmployee: 'Student', language: 'Java'}))

interface Person05 {
    name: string
    functionEmployee: string
    language: string
    readonly email: string
}

function onBoarding05(person: Person05): string {
    return (
        'Seja bem-vindo' + 
        person.name + 
        'Sua função aqui será ' +
        person.functionEmployee +
        'Você vai trabalhar com ' +
        person.language + '.' +
        'Seu email será ' + person.email
    )
}

onBoarding05({name: 'Gabriel Oliveira Pinto', functionEmployee: 'Student', language: 'Java', email: 'example123@gmail.com'})


interface Mother {
    name: string
}

interface Father {
    age: number
}

interface Daughter extends Mother, Father {
    surname: string
}

const daughter: Daughter = {
    name: 'Roberta',
    surname: 'Jamily',
    age: 19
}

console.log(daughter)

interface Dog {
    typeSpecie: string
}

interface Cat {
    typeSpecie: string
}

type Animal = Dog & Cat