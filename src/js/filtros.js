import { getAPI } from './getAPI.js';
import { CriaVitrine } from './cria-vitrine.js'


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
        console.log(listBebidas)
    }
}


// filtro campo de pesquisa ---- Não finalizado 
async function filtrarPesquisa(){
    const vitrine = document.querySelector('#vitrine')
    vitrine.innerHTML = ''
    const produto = document.querySelector('.campoPesquisaProduto')
    const valor   = produto.value.toLocaleLowerCase()
    const dataBase = await getAPI()
    const listPesquisar = dataBase.filter((element) =>{
        for(let i = 0; i < valor.length; i++ ){
            for(let j = 0; j < element.categoria.length;j++){
                if(valor[i]===element.categoria[j].toLocaleLowerCase()){
                return element.categoria
                }
            }
        }
    })
    for(let i = 0; i < listPesquisar.length; i++){
        CriaVitrine.dom(listPesquisar[i])
    }
  
    

}
async function filtrarPesquisaButton(){
    const vitrine = document.querySelector('#vitrine')
    vitrine.innerHTML = ''
    const dataBase = await getAPI()
    const produto = document.querySelector('.campoPesquisaProduto')
    const valor   = produto.value.toLocaleLowerCase()
    const listPesquisar = dataBase.filter((element) =>{
        if(element.categoria.toLocaleLowerCase() === valor){
            return element.categoria
        }
    })
    for(let i = 0; i < listPesquisar.length; i++){
        CriaVitrine.dom(listPesquisar[i])
    }
}


export{filtrarFrutas}
export{filtrarPanificadora}
export{filtrarBebidas}
export{filtrarPesquisaButton}
export{filtrarPesquisa}