
var altura = 0
var largura = 0
var botao2 = document.querySelector('.botao2');

botao2.addEventListener('mouseover', function() {
    altura = window.innerWidth;
    largura = window.innerHeight;
    var random1 = Math.random()*altura;
    var random2 = Math.random()*largura;
    random1 = random1 / 2.5
    random2 = random2 / 2.5
    if (Math.random() < 0.5) {
        random1 = -random1  
    }
    if (Math.random() < 0.5) {
        random2 = -random2 
    }
    this.style.left = random1 + 'px';
    this.style.top = random2 + 'px';
    this.classList.add('move');
});

botao2.addEventListener('mouseleave', function() {
    this.classList.remove('move');
});