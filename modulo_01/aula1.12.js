const classA = [
    {
        name: 'Lucas',
        grade: 10
    },
    {
        name: 'student 2',
        grade: 8
    },
    {
        name: 'student 3',
        grade: 7
    }
]

const classB = [
    {
        name: 'Miguel',
        grade: 7
    },
    {
        name: 'student 4',
        grade: 5
    },
    {
        name: 'student 5',
        grade: 3
    }
]

function calculeAverage(students) { //Cálculo da média para número de alunos na classe - students recebe class A e class B
    let sum = 0
    for (let i = 0; i < students.length; i++) { // início ; teste ; incremento
        sum = sum + students[i].grade
    }
    const average = sum / students.length
    return average //retorna o valor para o parâmetro
}

const average1 = calculeAverage(classA) 
const average2 = calculeAverage(classB)

//função para ler a mensagem no console, recebendo a média e a class
function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`A média da ${turma} foi ${average}. Parabéns`)
    } else {
        console.log(`A média da class ${turma} foi menor que 5.`)
    }
}

sendMessage(average1, 'Class A') //Passando parametros para dentro do bloco de código
sendMessage(average2, 'Class B') //Passando parametros para dentro do bloco de código

//Marcar student como Flunked
//E enviar como mensagem

function checkFlunked(student) { //Função para marcar student como Flunked
    student.Flunked = false //Declaro como falso
    if (student.grade < 5) {
        student.Flunked = true // Guarda student como flunked ou não
    }
} 

function sendMessageFlunked(student) {
    if (student.Flunked == true) { //Se o student for guardado como flunked na função inteiro...
        console.log(`O student ${student.name} está Flunked`)
    }
}

function studentFlunked(students) { //junta as duas funções anteriores em uma só
    for (let student of students) { //procura por studentes flunked (function checkFlunked) dentro de classA e classB
        checkFlunked(student) //executa as funções anteriores
        sendMessageFlunked(student) //executa as funções anteriores
    }
}

studentFlunked(classA)
studentFlunked(classB)

// ASSISTIR AULA NOVAMENTE