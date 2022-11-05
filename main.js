
// FUNÇÕES ENCARREGADAS DE ABIR E FECHAR MODAL
    const openModal = () => {
    document.getElementById('modal').classList.add('active')
                        }

    const closeModal = () => {
    limparcampos()
    document.getElementById('modal').classList.remove('active') 
                            }

// FUNÇÕES GET E SET QUE FAZEM AS DEVIDAS CONVERSÕES E ACESSAM O LOCALSTORAGE
    const acessarLocalstorage = () => JSON.parse(localStorage.getItem('dbcliente')) ?? []  
    const setandoLocalStorage = (dbcliente) => localStorage.setItem("dbcliente", JSON.stringify(dbcliente)) 

 

// FUNCÃO RESPONSÁVEL POR LIMPAR OS CAMPOS ANTES OU DEPOIS Q A MODAL É FECHADA
    const limparcampos = () =>{
    const campos = document.querySelectorAll('.modal-field') 
    campos.forEach(campo => campo.value ="") 
    document.getElementById('salve').dataset.index =  'novocliente'
                        }


//  FUNÇÃO ENCARREGADA DE PEGAR DOS DADOS E DECIDIR A AÇÃO, SALVAR OU EDITAR O CLIENTE  
    const salvarcliente = () =>{ 
        const cliente = {  
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        celular: document.getElementById('celular').value,
        cidade: document.getElementById('cidade').value
                        }
        const SaveAcao = document.getElementById('salve').dataset.index
        if( SaveAcao == `novocliente`){ 
        inserindoCliente(cliente) 
        closeModal()
        atualizarTabela()
                                    } 
        else {
        atualizar(SaveAcao, cliente) 
        closeModal()
        
            }
                            }

// O CRUD - CREATE
   const inserindoCliente = (cliente) =>{
   const dbcliente = acessarLocalstorage() 
   dbcliente.push(cliente)                  
   setandoLocalStorage(dbcliente)           
                                        }
                                        
//          READ                                   
    const lerdb = () => acessarLocalstorage() 
    
//          UPDATE
    const atualizar = (indice, cliente) => {  
    const dbcliente = acessarLocalstorage()
    dbcliente[indice] = cliente   
    setandoLocalStorage(dbcliente)          
    atualizarTabela()
                                            }

//          DELETE
    const Excluir = (indice) => {
    const dbcliente = acessarLocalstorage()
    dbcliente.splice(indice, 1)
    setandoLocalStorage(dbcliente)
                                }

                

//  FUNÇÃO QUE CRIA NOVAS LINHAS COM NOVOS CLIENTES PARA PARA A TABELA
    const criarTabela = (cliente, index) =>{     
    const linha = document.createElement('tr')   
    linha.innerHTML =`                           
    <td>${cliente.nome}</td>
    <td>${cliente.email}</td> 
    <td>${cliente.celular}</td>
    <td>${cliente.cidade}</td>
    <td>
                        <button type="button"  class="button green" id="Editar-${index}">Editar</button>  
                        <button type="button"  class="button red" id="Excluir-${index}">Excluir</button>
    </td>
   `                                                        
   document.querySelector('tbody').appendChild(linha) 
                                            }

//  FUNÇÃO ENCARREGADA DE ATUALIZAR A TABELA
    const atualizarTabela = () =>{         
    const dbcliente = lerdb()
    limpartabela()
    dbcliente.forEach(criarTabela) 
                                }

//  FUNÇÃO QUE LIMPA A TABELA 
    const limpartabela = () =>{
    const linhas = document.querySelectorAll('table>tbody tr')
    linhas.forEach(linha => linha.parentNode.removeChild(linha) )
                                }

atualizarTabela()   

//  FUNÇÃO ENCARREGADA DE PREENCHER TODOS OS DADOS PASSADOS NA MODAL PARA A EDIÇÃO DO CLIENTE
    const preenchercampos = (cliente)=> { 
     document.getElementById('nome').value = cliente.nome,
     document.getElementById('email').value = cliente.email,
     document.getElementById('celular').value = cliente.celular,
     document.getElementById('cidade').value = cliente.cidade
     document.getElementById('salve').dataset.index = cliente.index  
                                    }

//  FUNÇÃO QUE EDITAR AS INFORMAÇÕES DO CLIENTE 
    const editacaocliente = (index) =>{ 
    const cliente = lerdb()[index]
    cliente.index = index 
    preenchercampos(cliente) 
    openModal()  
    atualizarTabela()
                                    }


// fUNÇÃO ENCARREGADA DE DIFERENCIAR BOTÕES E MANDAR INFO PARA A AÇÃO DO BOTÃO QUE FOI SELECIONADA
    const editaredeletar = (event) =>{ 
    if(event.target.type == "button"){ 
    const [acao, index] = event.target.id.split('-') 
        if( acao == 'Editar'){
        editacaocliente(index)
                            }
     
            // EXCLUINDO CLIENTE
        else{ 
        const cliente = lerdb()[index] 
        const aviso = confirm(`Deseja mesmo excluir ${cliente.nome}`)    
        if(aviso){       
        Excluir(index)
        atualizarTabela()
                }
            }                   
                                    } 
                                    }


    // Eventos para abrir e fechar modal 
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)


    // Eventos que fazem a interação
document.getElementById('salve')
.addEventListener('click', salvarcliente)

document.querySelector('#tabcliente')
.addEventListener('click', editaredeletar)