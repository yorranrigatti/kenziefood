import { getAPI } from './getAPI.js';
import { CriaVitrine } from './cria-vitrine.js'

// filtro para potão todos
async function filtrarTodos(){
    const vitrine = document.querySelector('#vitrine')
    vitrine.innerHTML = ''
    const dataBase = await getAPI()
    const listTodos = dataBase.filter((element)=>{
        return element.categoria
    })
    for(let i = 0; i < listTodos.length; i++){
        CriaVitrine.dom(listTodos[i])   
   }

}

// filtro para botão panificação
async function filtrarPanificadora() {
    const vitrine = document.querySelector('#vitrine')
    vitrine.innerHTML = ''
    const dataBase = await getAPI()
    const listPanificadora = dataBase.filter((element) => {
        return element.categoria === 'Panificadora'
        
    });
    for(let i = 0; i < listPanificadora.length; i++){
         CriaVitrine.dom(listPanificadora[i])   
    }
}


// filtro para botão frutas
async function filtrarFrutas() {
    const vitrine = document.querySelector('#vitrine')
    vitrine.innerHTML = ''
    const dataBase = await getAPI()
    const listFrutas = dataBase.filter((element) => {
        return element.categoria === 'Frutas'
    });
    for(let i = 0; i < listFrutas.length; i++){
        CriaVitrine.dom(listFrutas[i])  
   }
}

// filtro para botão bebidas
async function filtrarBebidas() {
    const vitrine = document.querySelector('#vitrine')
    vitrine.innerHTML = ''
    const dataBase = await getAPI()
    const listBebidas = dataBase.filter((element) => {
        return element.categoria === 'Bebidas'
    });
    for(let i = 0; i < listBebidas.length; i++){
        CriaVitrine.dom(listBebidas[i])
    }
}


// filtro campo de pesquisa
async function filtrarPesquisa(){
    const vitrine = document.querySelector('#vitrine')
    vitrine.innerHTML = ''
    const produto = document.querySelector('.campoPesquisaProduto')
    const valor   = produto.value.toLocaleLowerCase()
    const dataBase = await getAPI()
    const listPesquisar = []
    dataBase.forEach(element => {
       const indexValor = element.nome.toLocaleLowerCase().indexOf(valor)
       if(indexValor !== -1){
           listPesquisar.push(element)
       }
    });
    const listPesquisarUnica = [...new Set(listPesquisar)]
    
    for(let i = 0; i < listPesquisarUnica.length; i++){
        CriaVitrine.dom(listPesquisarUnica[i])
    }
}


export{filtrarTodos}
export{filtrarFrutas}
export{filtrarPanificadora}
export{filtrarBebidas}
export{filtrarPesquisa}

