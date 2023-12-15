
let count = 1; // Criando variável para começar na primeira imagem.
document.getElementById("radio1").checked = true;

setInterval(function(){ // Intervalo de tempo
  nextImage() //chamando a função 
}, 4000) // Demora 2800 milisegundos

function nextImage(){ // criando a função
    count++; // incrementando, para passar de imagem para a próxima imagem
    if(count>5){ // caso a contagem ser maior que 5 
        count = 1; // volta para a primeira imagem
    }
    document.getElementById("radio"+count).checked = true; // Se a contagem não for maior que 5, muda para próxima imagem
}