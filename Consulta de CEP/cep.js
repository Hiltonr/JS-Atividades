    // Buscando o cep na api
   
   function BuscarCep(e){
    e.preventDefault();
    var cep = document.getElementById("text").value;
    if(cep == false) alert("Digite um CEP");
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((resp) => resp.json()).then((resp) => cal(resp))

};
 
    // Mostrando as informações do cep

function cal(conte) {
    console.log(conte)
    document.querySelector('#cepnum').innerText = `CEP: ${conte.cep}` ;
    document.querySelector('#logradouro').innerText =  `Logradouro: ${conte.logradouro}` ;
    document.querySelector('#localidade').innerText =  `Localidade: ${conte.localidade}` ;
    document.querySelector('#bairro').innerText =  `Bairro: ${conte.bairro}` ;
    document.querySelector('#ddd').innerText =  `DDD: ${conte.ddd}` ;
    
    document.getElementById("text").value = ""

};