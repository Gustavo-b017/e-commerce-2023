const button = document.querySelector("button");
const inputEmail = document.querySelector("#email")
const inputSenha = document.querySelector("#senha")

const pMensagem = document.createElement('p')


function clearForm() {
inputEmail.value = ""
inputSenha.value = ""
}

button.addEventListener("click", function(event){
event.preventDefault()

// validacao

if(inputEmail.value.trim() === ""){
	pMensagem.textContent = "*É obrigatório por o email ou CPF!!"
	inputEmail.insertAdjacentElement("afterend", pMensagem)
	pMensagem.setAttribute("class", "erro")

	return false
}

if(inputSenha.value.trim() === ""){
	pMensagem.textContent = "*É obrigatório por senha!!"
	inputSenha.insertAdjacentElement("afterend", pMensagem)
	pMensagem.setAttribute("class", "erro")

	return false
}

// logica


pMensagem.classList.add("esconder")
clearForm()
})


