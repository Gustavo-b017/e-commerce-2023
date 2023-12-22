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
