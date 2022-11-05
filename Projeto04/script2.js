function verificar(){       
    
    var data = new Date()
    var anods = data.getFullYear()
    var fano = document.getElementById(`txt`)
    var res = document.getElementById(`secun`)
    var fsex = document.getElementsByName(`radsex`) 
    if (fano.value.length == 0 || Number (fano.value) > anods || fsex[0].checked && fsex[1].checked){
        window.alert ("Erro ! Verifique os dados e tente novamente")
        
    }
    
        else {
            var idade = anods - Number(fano.value)
            var genero = ""  
            var img = document.createElement('img')     
            img.setAttribute ('id', 'foto')         
             if (fsex[0].checked){         
                 genero = 'homem'
             if(idade >=0 && idade <11 ){
                img.setAttribute ('src', 'img2/menino.png')  
        }
            else if (idade <=21){
                img.setAttribute ('src', 'img2/adoles.png')
            }

            else if (idade <=50){
                img.setAttribute ('src', 'img2/homem.png')
            }

            else  {
                img.setAttribute ('src', 'img2/homem-idoso.png')
            }

        }                                
        else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade <11 ){
                img.setAttribute ('src', 'img2/menina.png')
        }
            else if (idade <=21){
                img.setAttribute ('src', 'img2/adolesm.png')
            }

            else if (idade <=50){
                img.setAttribute ('src', 'img2/mulher.png')
            }

            else  {
                img.setAttribute ('src', 'img2/mulher-idosa.png')
            }

    } 
     res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)  
    }
                                                              
    
} 