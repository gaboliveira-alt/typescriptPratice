const person: [string, string, number] = ['Naruto', 'Hokage', 34]
console.log(person)

const person1: [string, string, number] = ['Naruto', 'Hokage', 34]
console.log(person1[2])

const person2: [name: string, occupation: string, age: number] = ['Sasuke', 'Shadow Hokage', 34]
console.log(person2)
console.log(person2[0])
console.log(person2[1])
console.log(person2[2])

const fruitList: [string, ...string[]] = ['morango', 'manga', 'kiwi', 'banana', 'cupuaçu']
console.log(...fruitList)

function personList(names: string[], ages: number[]) {
    return [...names, ...ages]
}

const result = personList(['Gabriel', 'Geovanna'], [19, 18])
console.log(result)

type Name =  
    | [firstName: string, surName: string]
    | [firstName: string, middleName: string, forName: string]

function createPerson(name: Name) {
    return [...name]
}

console.log(createPerson(['Gabriel', 'Pinto']))
console.log(createPerson(['Ganriel', 'Oliveira', 'Pinto']))
