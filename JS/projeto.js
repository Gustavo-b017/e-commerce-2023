const virar = document.querySelector('.box-geral')
const voltar = document.querySelector('.voltar')
const estatico = document.querySelector('.box-estatico')

virar.addEventListener("click", function(){
  estatico.classList.add("rotacao")
})

voltar.addEventListener("click", function(){
  estatico.classList.remove("rotacao")
})