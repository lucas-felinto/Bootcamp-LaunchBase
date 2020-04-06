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

//Função para calcular a média dos alunos das turmas A e B, retornando o valor para fora da função.
function calculaMedia(alunos) {
    return ((alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3)
}

//variável recebe os valores retornados da função
const media1 = calculaMedia(alunosA) 
const media2 = calculaMedia(alunosB)

//função para ler a mensagem no console, recebendo a média e a turma
function enviarMensagem(media, turma) {
    if (media > 5) {
        console.log(`A média da ${turma} foi ${media}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} foi menor que 5.`)
    }
}

enviarMensagem(media1, 'turmaA') //Passando parametros para dentro do bloco de código
enviarMensagem(media2, 'turmaB') //Passando parametros para dentro do bloco de código