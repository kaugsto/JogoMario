
//Atribuído endereço HTML IMG class mario na constante mario.
const mario = document.querySelector('.mario')

//Atribuído endereço HTML IMG class pipe na constante pipe.
const pipe = document.querySelector('.pipe')

//Criação da função jump!
//Qual a função dessa função ?
//Substituir o HTML IMG com class mario para class jump!
const jump = () => {
    
    mario.classList.add('jump'); 

    //setTimeout recebe sempre dois parâmetros!
    //O 1° é uma função e o 2°é o tempo!
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {

    console.log('loop')
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px','');
    
    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 &&  marioPosition < 80) { 
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom  = `${marioPosition}px`;

        mario.src = './img/GameOverMarioImg.jpg';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
    

}, 10)

document.addEventListener("keydown", jump);
