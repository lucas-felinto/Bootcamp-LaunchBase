// Calculo de IMC

const name = 'Lucas'
const weight = 75
const height = 1.77

const imc = weight / (height * height)

if (imc >= 30) {
    console.log(`${name}, você está acima do weight.`)
} else {
    console.log(`${name}, você está dentro do weight ideal.`)
}

// Calculo de Aposentadoria

const name1 = 'Lucas'
const sex = 'M'
const age = 50
const contr = 35

if (sex == 'M') {
    if (contr >= 35 && (age + contr >= 95)) {
    console.log(`${name1}, você pode se aposentar!`)
} else {
    console.log(`${name1}, você ainda não pode se aposentar!`)
}
} if (sex == 'F') {
    if (contr >= 30 && (age + contr >= 85)) {
    console.log(`${name1}, você pode se aposentar!`)
} else {
    console.log(`${name1}, você ainda não pode se aposentar!`)
}
}
// OUTRA FORMA DE RESOLVER USANDO MENOS LINHAS E IF/ELSE

// const calculoContribuicao = age + contribuicao

// essas variáveis irão retornar true ou false
// const homemPodeAposentar = sex == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
// const mulherPodeAposentar = sex == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

// if ( homemPodeAposentar || mulherPodeAposentar) {
//     console.log(`${name}, você pode se aposentar!`)
// } else {
//     console.log(`${name}, você não pode se aposentar!`)
// }