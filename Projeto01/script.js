
    setInterval(carregar,1000); //a funcao setinterval executa a funcao carregar a cada 1s q por sua vez pega a hr exata, fazendo uma combinação para termos a hr exata em tempo real
                                    //funcao como parametro de outra é CALLBECK
                                    
     function carregar (){
    var titulo = document.getElementById(`principal`)
    var foto = document.getElementById(`foto`)
    var agora = new Date()
    var hora = agora.getHours()
    var minu = zero(agora.getMinutes())
    var segun = zero(agora.getSeconds())
    titulo.innerHTML = (`Agora são ${hora}: ${minu}: ${segun}`)
    
   
    if ( hora >= 0 && hora <= 12 ){
        foto.src = `img/manha.png` 
        document.body.style.background = `#006400`
    }
    else if ( hora >= 13 && hora < 18){
        foto.src = `img/tarde.png`
        document.body.style.background = `#8B4726`
    }

    else {
        foto.src =`img/noite.png`
        document.body.style.background = `#363636`
    }

    //função para adicionar um zero quando i for >=0 e <10
    function zero(i){
        if (i >=0 && i < 10)
            i = "0" + i
        return i
    }
}
   