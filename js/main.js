const choices = [...document.querySelectorAll('section')]
const divGame = document.querySelector('#game')
let yo = undefined
let maq = undefined


function choiceGame(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

choices.map((el, i) => {
    el.addEventListener('click', () => {
        calcularResultado(i, choiceGame(0, 2))
    })
})

document.addEventListener('keydown', (event) => {
    if((event.key == 1)||(event.key == 2)||(event.key == 3)){
        calcularResultado(event.key - 1, choiceGame(0, 2))
    }
})

function calcularResultado(p1, p2) {
    
    // VER O QUE O JOGADOR E A MAQUINA JOGOU
    if(p1 == 0){
        yo = 'Pedra'
    }
    else if(p1 == 1){
        yo = 'Papel'
    }else if(p1 == 2){
        yo = 'Tesoura'
    }

    if(p2 == 0){
        maq = 'Pedra'
    }
    else if(p2 == 1){
        maq = 'Papel'
    }else if(p2 == 2){
        maq = 'Tesoura'
    }

    // GAME OVER
    if((p1 == 0 && p2 == 1)||(p1 == 1 && p2 == 2)||(p1 == 2 && p2 == 0)){
        divGame.innerHTML = '<p>Voce: '+yo+'<br>maquina: '+maq+'<br>Derrota</p>'
    }

    // EMPATE
    else if((p1 == 0 && p2 == 2)||(p1 == 1 && p2 == 0)||(p1 == 2 && p1 == 1 )){
        divGame.innerHTML = '<p>Voce: '+yo+'<br>maquina: '+maq+'<br>Vitória</p>'
    }

    // VITÓRIA
    else if((p1 == 0 && p2 ==0)||(p1 == 1 && p1 == 1)||(p2 == 2 && p2 == 2)){
        divGame.innerHTML = '<p>Voce: '+yo+'<br>maquina: '+maq+'<br>Empate</p>'
    }

    // alert('VOCÊ: '+yo+' JOGO: '+maq)
}
// const choiceJogador