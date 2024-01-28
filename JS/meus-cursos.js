// função para fazer mostrar os cursos 
function toggle(){
    var x = document.getElementById('div-cursos');
    if(x.style.display = 'none'){
        x.style.display = 'flex';
    }
}
//função para fechar os cursos
function closeCourses(){
    var cursos = document.getElementById('div-cursos');
    if(cursos.style.display = 'flex'){
        cursos.style.display = 'none';
    }
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
  
  