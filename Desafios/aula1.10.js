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
    return ((alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3)
} //O parâmetro alunos dentro da função funciona como uma "variável" que vai receber o valor quando executar a função.

const media1 = calculaMedia(alunosA) //executa a função, passando por parametro alunosA - substitui por alunos na função e retorna a média para a constante media1
const media2 = calculaMedia(alunosB)

function enviarMensagem(media, turma) { //Cria função com dois parametros - um recebe a media e outro a turma
    if (media > 5) {
        console.log(`A média da ${turma} foi ${media}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} foi menor que 5.`)
    }
}

enviarMensagem(media1, 'turma A') //Passando parametros para dentro do bloco de código da função
enviarMensagem(media2, 'turma B') //Passando parametros para dentro do bloco de código da função