const choices = [...document.querySelectorAll('section')]

function choiceGame(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

choices.map((el, i) => {
    el.addEventListener('click', () => {
        console.log(el.innerText)
        console.log(i)
        calcularResultado(i, choiceGame(0, 2))
        let cc = undefined
        if(choiceGame(0, 2) == 0 ){
            cc = 'Pedra'
        }else if(choiceGame(0, 2) == 1){
            cc = 'Papel'
        }else if(choiceGame(0, 2) == 2){
            cc = 'Tesoura'
        }
        console.log('VOCÊ: '+el.innerText+' JOGO: '+cc)
    })
})

function calcularResultado(p1, p2) {
    // GAME OVER
    if((p1 == 0 && p2 == 1)||(p1 == 1 && p2 == 2)||(p1 == 2 && p2 == 0)){
        alert('perdeu')
    }

    // EMPATE
    else if((p1 == 0 && p2 == 2)||(p1 == 1 && p2 == 0)||(p1 == 2 && p1 == 1 )){
        alert('ganhou')
    }

    // VITÓRIA
    else if((p1 == 0 && p2 ==0)||(p1 == 1 && p1 == 1)||(p2 == 2 && p2 == 2)){
        alert('empate')
    }
}
// const choiceJogador