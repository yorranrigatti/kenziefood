import { getAPI } from "./getAPI.js";

const dataBase = await getAPI()

// filtro para botão panificação
async function filtrarPanificadora() {
    
    const listPanificadora = dataBase.filter((element) => {
        return element.categoria === 'Panificadora'
        
    });
    
    console.log(listPanificadora)
}
// filtro para botão frutas
async function filtrarFrutas() {
    
    const listFrutas = dataBase.filter((element) => {
        return element.categoria === 'Frutas'
        
    });
    
    console.log(listFrutas)
}

// filtro para botão bebidas
async function filtrarBebidas() {
    
    const listBebidas = dataBase.filter((element) => {
        return element.categoria === 'Bebidas'
        
    });
    
    console.log(listBebidas)
}


// filtro campo de pesquisa
async function filtrarPesquisaButton(){
    const produto = document.querySelector('.campoPesquisaProduto')
    const valor   = produto.value.toLocaleLowerCase()
    const listPesquisar = dataBase.filter((element) =>{
        if(element.categoria.toLocaleLowerCase() === valor){
            return element.categoria
        }
    })
    console.log(listPesquisar)
}


async function filtrarPesquisa(){
    const produto = document.querySelector('.campoPesquisaProduto')
    const valor   = produto.value.toLocaleLowerCase()
    const listPesquisar = dataBase.filter((element) =>{
        for(let i = 0; i < valor.length; i++ ){
            for(let j = 0; j < element.categoria.length;j++){
                if(element.categoria[j].toLocaleLowerCase() === valor[i]){
                return element.categoria
                }
            }
        }
        
    })
    console.log(listPesquisar)
}


export{filtrarFrutas}
export{filtrarPanificadora}
export{filtrarBebidas}
export{filtrarPesquisaButton}
export{filtrarPesquisa}

