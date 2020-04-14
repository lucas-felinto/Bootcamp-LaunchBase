const express = require('express') 
const nunjucks = require('nunjucks') 

const server = express() 
const projects = require("./data")

server.use(express.static('public')) //ainda não sei

server.set("view engine", "njk") //qual tipo de arquivo o servidor está lendo


nunjucks.configure("views", { //configuração do nunjucks
    express: server,
    noCache: true,
    autoescape: false
})

server.get("/", function(req, res) { // rota para about - rota raíz
    const data = {
        img: "https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/s960x960/88166282_2879810075445688_6102658720955629568_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_eui2=AeFMnyKXI7jAagB5Mt3CBnxo8PPATaDhFGjw88BNoOEUaD51laDz8HmMzmZVw4hu0Bp2UHsfJpHuef9ZNPLGJRQa&_nc_ohc=1l7oQqzIqN4AX9JLgRO&_nc_ht=scontent.fbsb8-2.fna&_nc_tp=7&oh=2cf6b51d0e9f6b595dc3c2ec5a127d1b&oe=5EB1809D",
        name: "Lucas Felinto",
        role: "Full Stack Developer",
        education: "Estudante de Análise e Desenvolvimento de Sistemas",
        tecnologies: "HTML | CSS | JavaScript | Node.js"
    }

    return res.render("about" , {about: data})
})

server.get("/projects", function(req, res) { // rota para projects
    return res.render("projects", {items: projects}) //passando a variável projects para o nunjucjs projects
}) 

server.get("/courses", function(req, res){ // courses = params
    const id = req.query.id                //query = parametros enviados depois do ? - id vem depois de query
//                                         de forma genérica, temos: params/query?id=códigodoid
//                                         nesse caso, a const id está guardando o códigoid 

    const course = projects.find(function(course){ //faz uma procura dentro da array data, se o id do curso for = ao id da url, retornará verdadeiro e o site segue a rota, se não for igual, não encontrará a página
        if (course.id == id) {
            return true
        }
    })

        if (!course) {
            res.send("Video Not Found")
        }

        return res.render("courses", { item: course } ) //passa a variável course para a página courses contendo os ids dos curos. 
})

server.listen(5000, function (){
    console.log('server is running')
})