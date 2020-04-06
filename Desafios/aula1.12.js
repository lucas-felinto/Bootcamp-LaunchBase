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
    let soma = 0
    for (let i = 0; i < alunos.length; i++) { //Leia-se: Repita essa função até atingir o número de alunos
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media //aqui retorna a média para as constas media1 e media2
}

//variável recebe os valores retornados da função, inserido-os em suas respectivas turmas
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

//Marcar aluno como reprovado
//E enviar como mensagem

function marcarComoReprovado(aluno) { //Função para marcar aluno como reprovado
    aluno.reprovado = false //Declaro como falso
    if (aluno.nota < 5) {
        aluno.reprovado = true // Identifica cada aluno reprovado
    }
} 

function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado == true) {
        console.log(`O aluno ${aluno.nome} está reprovado`)
    }
}

function alunoReprovado(alunos) { //junta as duas funções anteriores em uma só
    for (let aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMensagemReprovado(aluno)
    }
}

alunoReprovado(alunosA)
alunoReprovado(alunosB)