const studentsA = [
    {
        name: 'Lucas',
        grade: 10
    },
    {
        name: 'Aluno 2',
        grade: 8
    },
    {
        name: 'Aluno 3',
        grade: 7
    }
]

const studentsB = [
    {
        name: 'Miguel',
        grade: 7
    },
    {
        name: 'Aluno 4',
        grade: 5
    },
    {
        name: 'Aluno 5',
        grade: 3
    }
]

function calcAverage(students) {
    return ((students[0].grade + students[1].grade + students[2].grade) / 3)
} //O parâmetro students dentro da função funciona como uma "variável" que vai receber o valor quando executar a função.

const average1 = calcAverage(studentsA) //executa a função, passando por parametro studentsA - substitui por students na função e retorna a média para a constante average1
const average2 = calcAverage(studentsB)

function sendMessage(average, classes) { //Cria função com dois parametros - um recebe a average e outro a classes
    if (average > 5) {                    // Para função average, usa-se condição if else, classes é usado apenas como string
        console.log(`A média da ${classes} foi ${average}. Parabéns`)
    } else {
        console.log(`A média da classes ${classes} foi menor que 5.`)
    }
}

sendMessage(average1, 'classe A') //Passando parametros para dentro do bloco de código da função
sendMessage(average2, 'classe B') //Passando parametros para dentro do bloco de código da função


// REVISED CODE //