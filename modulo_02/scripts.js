//DECLARANDO VARIÁVEIS
const modalOverlay = document.querySelector('.modal-overlay') //variável recebe a classe .modal-overlay pelo querySelector
const projects = document.querySelectorAll('.link_project') //SelectorAll pega todos os elementos da classe project e declara variável

for (let project of projects) { //project é um elemento de todos os projects
    project.addEventListener("click", function(){ //EventListener é uma função: quando ouvir o click acionará ação
        modalOverlay.classList.add('actived') //Adiciona classe no modal-overlay
        event.preventDefault()
        document.querySelector('body').classList.add('overflow')
        modalOverlay.querySelector('img').src = "https://i.gyazo.com/0c3d41970c926353f1141a6733cf785c.gif"
    }) 
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('actived')
    document.querySelector('body').classList.remove('overflow')
})










// <a href="https://github.com/lucas-felinto/Workshop-Casa-Criativa"><img src="https://i.gyazo.com/0c3d41970c926353f1141a6733cf785c.gif" alt="Casa Criativa" width="100%"/></a>