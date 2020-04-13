const express = require('express') 
const nunjucks = require('nunjucks') 

const server = express() 

server.use(express.static('public')) //ainda não sei

server.set("view engine", "njk") //qual tipo de arquivo o servidor está lendo


nunjucks.configure("views", { //configuração do nunjucks
    express: server
})

server.get("/", function(req, res) { // rota para about
    return res.render("about")
})

server.get("/projects", function(req, res) { // rota para projects
    return res.render("projects")
}) 

server.listen(5000, function (){
    console.log('server is running')
})