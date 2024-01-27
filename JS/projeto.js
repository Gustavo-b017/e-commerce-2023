// perguunta 1
const pergunta_1 = document.querySelector("#pergunta-01")
const resposta_01 = document.querySelector("#proposito")
const esconder_1 = document.querySelector("#fechar-1")

pergunta_1.addEventListener("click", function(){
  resposta_01.classList.add("block");
})
esconder_1.addEventListener("click", function(){
  resposta_01.classList.remove("block");
})

// perguunta 2
const pergunta_2 = document.querySelector("#pergunta-02")
const resposta_2 = document.querySelector("#projeto-dados")
const esconder_2 = document.querySelector("#fechar-2")

pergunta_2.addEventListener("click", function(){
  resposta_2.classList.add("block");
})
esconder_2.addEventListener("click", function(){
  resposta_2.classList.remove("block");
})
// perguunta 3
const pergunta_3 = document.querySelector("#pergunta-3")
const resposta_3 = document.querySelector("#criadores")
const esconder_3 = document.querySelector("#fechar-3")

pergunta_3.addEventListener("click", function(){
  resposta_3.classList.add("block");
})
esconder_3.addEventListener("click", function(){
  resposta_3.classList.remove("block");
})
// criadaor 1 - guss
const pergunta_guss = document.querySelector("#pergunta-guss")
const resposta_guss = document.querySelector("#criadores-guss")
const esconder_guss = document.querySelector("#fechar-guss")
const box = document.querySelector(".box-geral")

pergunta_guss.addEventListener("click", function(){
  resposta_guss.classList.add("block");
  box.classList.add("aumentar");
})
esconder_guss.addEventListener("click", function(){
  resposta_guss.classList.remove("block");
  box.classList.remove("aumentar");
})

// criadaor 2 - fell
const pergunta_fell = document.querySelector("#pergunta-fell")
const resposta_fell = document.querySelector("#criadores-fell")
const esconder_fell = document.querySelector("#fechar-fell")

pergunta_fell.addEventListener("click", function(){
  resposta_fell.classList.add("block");
  box.classList.add("aumentar");
})
esconder_fell.addEventListener("click", function(){
  resposta_fell.classList.remove("block");
  box.classList.remove("aumentar");
})