const mostra = document.querySelector('.mochila-click');
const curso = document.querySelector('.cursos-adquiridos');

mostra.addEventListener("click", function(){
    curso.classList.add("block");
})

function descerMeusCursos(){
    document.getElementById('meus-cursos-adquiridos').scrollIntoView({behaviour:'smooth'})
}

// elementos/variaveis usados para mostar(ou nao) o formulario de contato
const mostar = document.querySelector("#btn-contato")
const formulario = document.querySelector(".formulario")
const fechar = document.querySelector("#fechar-contato")

// iniciando logica da mostar o formulario
mostar.addEventListener("click", function(){
    formulario.classList.add("block")
  })
  
  fechar.addEventListener("click", function(){
    formulario.classList.remove("block")
  })
  
  const mostrar = document.querySelector('#mochila-click');
  const cursos = document.querySelector('.cursos-adquiridos');
  
  mostrar.addEventListener("click", function(){
      cursos.classList.add("block");
  })