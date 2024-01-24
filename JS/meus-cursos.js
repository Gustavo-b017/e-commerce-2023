const mostrar = document.querySelector('.mochila-click');
const cursos = document.querySelector('.cursos-adquiridos');

mostrar.addEventListener("click", function(){
    cursos.classList.add("block");
})