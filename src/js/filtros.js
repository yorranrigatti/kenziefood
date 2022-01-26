import { db } from './getAPI.js';
import { CriaVitrine } from './cria-vitrine.js'

// filtro para botão todos
function filtrarTodos(){
    const vitrine = document.querySelector('#vitrine')
    vitrine.innerHTML = ''
    const dataBase = db
    const listTodos = dataBase.filter((element)=>{
        return element.categoria
    })
    for(let i = 0; i < listTodos.length; i++){
        CriaVitrine.dom(listTodos[i])   
   }
}


// filtro para botão panificação
function filtrarPanificadora() {
    const vitrine = document.querySelector('#vitrine')
    vitrine.innerHTML = ''
    const dataBase = db
    const listPanificadora = dataBase.filter((element) => {
        return element.categoria === 'Panificadora'
        
    });
    for(let i = 0; i < listPanificadora.length; i++){
         CriaVitrine.dom(listPanificadora[i])   
    }
}

// filtro para frutas
function filtrarFrutas() {
    const vitrine = document.querySelector('#vitrine')
    vitrine.innerHTML = ''
    const dataBase = db
    const listFrutas = dataBase.filter((element) => {
        return element.categoria === 'Frutas'
    });
    for(let i = 0; i < listFrutas.length; i++){
        CriaVitrine.dom(listFrutas[i])  
   }
}

// filtro para botão bebidas
function filtrarBebidas() {
    const vitrine = document.querySelector('#vitrine')
    vitrine.innerHTML = ''
    const dataBase = db
    const listBebidas = dataBase.filter((element) => {
        return element.categoria === 'Bebidas'
    });
    for(let i = 0; i < listBebidas.length; i++){
        CriaVitrine.dom(listBebidas[i])
    }
}


// filtro campo de pesquisa
    function filtrarPesquisa(){
    const vitrine = document.querySelector('#vitrine')
    vitrine.innerHTML = ''
    const produto = document.querySelector('.campoPesquisaProduto')
    const valor   = produto.value.toLowerCase()
    const dataBase = db
    const listPesquisar = []
    dataBase.forEach(element => {
       const indexValor = element.nome.toLowerCase().indexOf(valor)
       if(indexValor !== -1){
           listPesquisar.push(element)
       }
    });
    for(let i = 0; i < listPesquisar.length; i++){
        CriaVitrine.dom(listPesquisar[i]) 
    }
}

export{filtrarTodos, filtrarPanificadora, filtrarFrutas,filtrarBebidas, filtrarPesquisa}

