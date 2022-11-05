let num = document.getElementById(`num`)
let selec = document.getElementById(`sel`)
let res = document.getElementById(`res`)
let valores = []

function isNumero(n){
    if ( (Number(n)) > 0 && (Number(n)) < 101){
        return true
    } else {
        return false
    }

}

function inlista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function add(){
    if(isNumero(num.value) && !inlista(num.value, valores)){
  
        valores.push(Number(num.value))
        let item = document.createElement(`option`)  // criou elemento option, mas não exibiu em lugar algum
        item.text =  ('O valor ') + num.value +  (' foi adicionado')
        selec.appendChild(item)  // o elemento criado (item) agr vai ser filho de select
        
        
    
    }else{
        window.alert('Número inválido')
    }
    num.value = " "
    
}


function finalizar(){
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma  = 0
    let media = 0
         for(let pos in valores){
            soma += valores[pos]
           
            if (valores[pos] > maior)
                maior = valores[pos]
            
                if (valores[pos] < menor)
                menor =  valores[pos]
                
            }
         
        
    media =  soma / total
    res.innerHTML = ''
    res.innerHTML +=  `<p> Temos ${total} número(s) cadastrado(s) </p>`
    res.innerHTML +=  `<p> O maior número cadastrado foi ${maior} </p>`
    res.innerHTML +=  `<p> O menor número cadastrado foi ${menor} </p>`
    res.innerHTML +=  `<p> A soma de todos os números cadastrados é ${soma} </p>`
    res.innerHTML +=  `<p> A média de todos os números cadastrados é ${media} </p>`
}