//Objetos
const company = {
    name: "RocketSeat",
    color: "Roxo",
    main: "Programação",
    adress: {
        rua: "Rua Guilherme Gembala",
        num: 260
    }
}

console.log(`A company ${company.name} está localizada em ${company.adress.rua} número ${company.adress.num}`)


//Arrays
const developer = {
    name: "Lucas",
    age: 22,
    tec: [
        { nametec: 'html', especialidade: 'Web'},
        { nametec: 'javascript', especialidade: 'Mobile'}
    ]
};

console.log(`O developer ${developer.name}, de ${developer.age} anos, usa a tecnologia${developer.tec[0].nametec} de especialidade ${developer.tec[0].especialidade}`)