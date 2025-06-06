enum Language {
    Portugues,
    Espanhol,
    Italiano,
    Francês,
    Grego
}
console.log(Language)

enum Day {
    SEGUNDA = 'SEG',
    TERÇA = 'TER',
    QUARTA = 'QUA',
    QUINTA = 'QUI',
    SEXTA = 'SEX'
}

console.log(Day)

const enum Foods {
    Hamburguer = 'Burguer',
    Pizza = 'Pizza',
    Camarao = 'Camarao'
}

function food(food: Foods) {
    return 'Comidas Deliciosas'
}

console.log(food(Foods.Hamburguer))
console.log(food(Foods.Camarao))

enum Task {
    Todo,
    Done,
    Progress
}

const taskConclusion = {
    id: 1,
    description: 'Tarefa Concluida',
    stats: Task.Done
}

if (taskConclusion.stats == Task.Done) {
    console.log('Enviar e-mail:', taskConclusion.description)
}