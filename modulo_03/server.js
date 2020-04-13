const express = require('express') // puxa o express
const nunjucks = require('nunjucks') // puxa o nunjucks

const server = express() // joga a função do express na variável server

server.use(express.static('public'))

server.set("view engine", "html")


nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) { // manda a resposta para o servidor
    return res.render("index")
})

server.get("/projects", function(req, res) { // manda a resposta para o servidor
    return res.render("projects")
}) 

server.listen(5000, function (){ //abre a porta 5000 para o servidor
    console.log('server is running')
})