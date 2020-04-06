const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {
    user.transactions.push(transaction) //Adiciona um elemento ao final de uma array e retorna o novo comprimento

    if (transaction.type === 'credit') {
        user.balance = user.balance + transiction.value
    } else { 
        (user.balance = user.balance - transiction.value)
    }
}

