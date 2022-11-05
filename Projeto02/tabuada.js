    
function gerar(){
    var nf = document.getElementById(`txt`)
    var res = document.getElementById(`res`)
    var tabu = document.getElementById(`seltabu`)
    var nff = Number(nf.value)
    tabu.innerHTML = " " 
    var c = 1
    
    
    if (nf.value.length == 0){
        window.alert('Erro ! Digite um número')
                         
    }
        else  {  
            tabu.innerHTML = " " //imprime nada para limpar o select antes de iniciar o loop com um novo NU
        while (  c <= 10 ) {
              
            var item = document.createElement('option')
            item.text = `${nff} x ${c} = ${nff*c}`
            tabu.appendChild(item)  //cria automaticamente um elemento filho (option) para o select. a qtdade de elemento é conforme necessicade
            c++
        }
    }
  
}