const usuarios = [
    { 
        nome: 'Carlos', 
        tecnologia: ['HTML', 'CSS'] 
    },
    {
        nome: 'Jasmine',
        tecnologia: ['JavaScript', 'CSS']
    },
    {
        nome: 'Tuane',
        tecnologia: ['HTML', 'Node.js']
    }
];

for (let i = 0; i < usuarios.length; i++) {
    console.log (`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologia[0]}, ${usuarios[i].tecnologia[1]};`)
}

//OUTRA FORMA 

//  for (let usuario of usuarios) {
//  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
//  }

function checaUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologia) { //percorre objetos, arrays chamando a função personalizada - aqui percorre a função tecnologia, dentro de usuário.tecnologia   
        if (tecnologia == 'CSS') return true //função
    }
    return false 
} //Ou seja, essa função cria um loop que percorre o array procurando usuários com tecnologia css, caso retorne TRUE, o usuário estára salvo dentro da função ChecarUsuarioUsaCSS, caso retorne FALSE, nada acontecerá

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaUsuarioUsaCSS(usuarios[i]) //Para cada true guardado na função anterior, a variável usuarioTrabalhaComCSS receberá o nome do usuário
if (usuarioTrabalhaComCSS == true) { //Se o usuário trabalha com CSS, então:
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}

//Complicado