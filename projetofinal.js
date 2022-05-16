function escolhaPersonagem(){
    let escolha = prompt("Escolha sua personagem: ")
    let personagem = ['1','2','3']

    while (!personagem.includes(escolha)) {
        escolha = prompt("Escolha sua personagem: ") 
    }

    if (escolha == 1){
        location.replace("./capitamarvelFase1.html")
    }
    if (escolha == 3){
        location.replace("./feiticeiraFase1.html")
    }
    if (escolha == 2){
        location.replace("./tempestadeFase1.html")
    }
}

function escolhaResposta(respostaCerta, proximaPagina){
    let escolha = prompt("Escolha sua Resposta: ")
    let resposta = ['a','b','A','B']
    
    while (!resposta.includes(escolha)) {
        escolha = prompt("Escolha sua Respota: ") 
    }

    if (escolha.toLowerCase() == respostaCerta){
        location.replace(proximaPagina)
    }
    else {
        location.replace('./gameOver.html')
    }
    
}
