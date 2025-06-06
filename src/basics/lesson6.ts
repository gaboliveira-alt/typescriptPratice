const fruits: string[] = ['manga', 'banana', 'kiwi', 'morango', 'cacau']
console.log(fruits)

const fruits1: Array<string> = ['manga', 'banana', 'kiwi', 'morango', 'cacau']
console.log(fruits1)

const languages: Array<string> = ['Italiano', 'Inglês', 'Espanhol', 'Grego']
console.log(languages.length)
languages.push('Mandarim')
languages.push('Nairobe')
console.log(languages)

let numberList: number[] = [1, 2, 3, 4, 5, 6, 7]
numberList = [...numberList, 8, 9, 10]
console.log(numberList)

const programmingLanguage: Array<string> = ['Python', 'Java', 'Typescript']

function forLanguage(languages: string[]) {
    for (let i = 0; i < languages.length; i++) {
        console.log(languages[i])
    }
}

forLanguage(programmingLanguage)

