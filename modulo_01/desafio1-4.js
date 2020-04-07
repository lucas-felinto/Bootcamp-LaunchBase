const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
};

//Criar transação
function createTransaction(transaction) {
    user.transactions.push(transaction) //Adiciona um elemento ao final de uma array e retorna o novo comprimento

    if (transaction.type === 'credit') {
        user.balance = user.balance + transiction.value
    } else { 
        (user.balance = user.balance - transiction.value)
    }
}

//Relatórios
function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValue
    
    for (let transactions of user.transactions) {
        if (transaction.type == type && trans.value > higherValue) {
            higherTransaction = transaction.value
            higherTransaction = value
        }
    }
}

return higherTransaction 