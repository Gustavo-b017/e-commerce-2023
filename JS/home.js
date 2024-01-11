// elementos/variaveis usados para mostar(ou nao) o formulario de contato
const mostar = document.querySelector("#btn-contato")
const formulario = document.querySelector(".formulario")
const fechar = document.querySelector("#fechar-contato")

// mudanca de slide da home
let conta = 1
document.getElementById("radio1").checked = true
setInterval( function(){
    nextImg(    )
}, 4000)

function nextImg(){
    conta ++
    if (conta>5){
        conta = 1
    }
    document.getElementById("radio" + conta ).checked = true
}

// iniciando logica da mostar o formulario

mostar.addEventListener("click", function(){
  formulario.classList.add("block")
})

fechar.addEventListener("click", function(){
  formulario.classList.remove("block")
})