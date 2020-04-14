const projects = document.querySelectorAll('.project') 

for (let project of projects) {
    project.addEventListener("click", function(){
        const pageId = project.getAttribute("id");
        window.location.href = `/courses?id=${pageId}` 
    }) 
}