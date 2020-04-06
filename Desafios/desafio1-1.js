// Calculo de IMC

const nome = 'Lucas'
const peso = 75
const altura = 1.77

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${nome}, você está acima do peso.`)
} else {
    console.log(`${nome}, você está dentro do peso ideal.`)
}

// Calculo de Aposentadoria

const nome1 = 'Lucas'
const sexo = 'M'
const idade = 50
const contr = 35

if (sexo == 'M') {
    if (contr >= 35 && (idade + contr >= 95)) {
    console.log(`${nome1}, você pode se aposentar!`)
} else {
    console.log(`${nome1}, você ainda não pode se aposentar!`)
}
} if (sexo == 'F') {
    if (contr >= 30 && (idade + contr >= 85)) {
    console.log(`${nome1}, você pode se aposentar!`)
} else {
    console.log(`${nome1}, você ainda não pode se aposentar!`)
}
}