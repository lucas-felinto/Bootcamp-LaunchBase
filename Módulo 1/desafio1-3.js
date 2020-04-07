//Tecnologias

const usuarios = [
    { 
        nome: 'Carlos', 
        tecnologias: ['HTML', 'CSS'] 
    },
    {
        nome: 'Jasmine',
        tecnologias: ['JavaScript', 'CSS']
    },
    {
        nome: 'Tuane',
        tecnologias: ['HTML', 'Node.js']
    }
];

for (let i = 0; i < usuarios.length; i++) {
    console.log (`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologia[0]}, ${usuarios[i].tecnologia[1]};`)
}

//OUTRA FORMA 

//  for (let usuario of usuarios) {
//  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`) PESQUISAR CONCENTO .join(', ')
//  }


function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS')
            return true
        }
        return false
}


function messageUser(usuario) {
    for (let i = 0; i < usuario.length; i++) {
        const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i])

        if (usuarioTrabalhaComCSS) {
        console.log (`O usuário ${usuario[i].nome} trabalha com CSS`)
        }
    }
}

messageUser(usuarios)


//Receitas e Despesas
const users = [
    {
        name: 'Savio',
        income: [115.3, 48.7, 98.3, 14.5],
        expense: [85.3, 13.5, 19.9]
    },
    {
        name: 'Marcio',
        income: [24.6, 214.3, 45.3],
        expense: [185.3, 12.1, 120.0]
    },
    {
        name: 'Lucia',
        income: [9.8, 120.3, 340.2, 45.3],
        expense: [450.2, 29.9]
    }
]

function balanceCalculet(income, expense) { //criada função para calcular a receita e a despesa para 2 parametros
    const sumIncome = sumNumbers(income)
    const sumExpense = sumNumbers(expense)

    return sumExpense - sumIncome //retorna balanço
}

function sumNumbers(numeros) { //função para calcular a soma de income/expense, retorna para a função balanceCalculet
    let sum = 0

    for (let number of numeros) {
        sum = sum + number
    }

    return sum
    
}

for (let user of users) { //fim da função - uso das mensagens
    const balance = balanceCalculet(user.income, user.expense)

    if (balance > 0) {
        console.log(`O usuário ${user.name} possui saldo POSITIVO de ${balance.toFixed(2)}`)
    } else {
        console.log(`O usuário ${user.name} possui saldo NEGATIVO de ${balance.toFixed(2)}`)
    }
}