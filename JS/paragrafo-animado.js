// Criando função de texto animado na página - SOBRE

let sections = document.querySelectorAll('section'); // criando variável sections que pega tudo o que está na tag section 

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animate');
    }

    else {
      sec.classList.remove('show-animate');
    }

  })
}