//Objetos
const empresa = {
    nome: "RocketSeat",
    cor: "Roxo",
    foco: "Programação",
    end: {
        rua: "Rua Guilherme Gembala",
        num: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.end.rua} número ${empresa.end.num}`)


//Arrays
const programador = {
    nome: "Lucas",
    idade: 22,
    tec: [
        { nometec: 'html', especialidade: 'Web'},
        { nometec: 'javascript', especialidade: 'Mobile'}
    ]
};

console.log(`O programador ${programador.nome}, de ${programador.idade} anos, usa a tecnologia${programador.tec[0].nometec} de especialidade ${programador.tec[0].especialidade}`)