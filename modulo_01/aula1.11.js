const alunosA = [
    {
        nome: 'Lucas',
        nota: 10
    },
    {
        nome: 'Aluno 2',
        nota: 8
    },
    {
        nome: 'Aluno 3',
        nota: 7
    }
]

const alunosB = [
    {
        nome: 'Miguel',
        nota: 7
    },
    {
        nome: 'Aluno 4',
        nota: 5
    },
    {
        nome: 'Aluno 5',
        nota: 3
    }
]


function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) { 
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media 
}


const media1 = calculaMedia(alunosA) 
const media2 = calculaMedia(alunosB)


function enviarMensagem(media, turma) {
    if (media > 5) {
        console.log(`A média da ${turma} foi ${media}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} foi menor que 5.`)
    }
}

enviarMensagem(media1, 'turmaA') 
enviarMensagem(media2, 'turmaB') 