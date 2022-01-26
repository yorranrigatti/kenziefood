import { getAPI } from "../getAPI.js";
import {CartModel} from './modeloCarrinho.js'
import {valorTotal} from './funcaoPrecoEQuantidade.js'


let cartList = []

async function addCart(id){
    
    CartModel.quantTotal()
    const product = await getAPI()
    const idFilter = product.find(element => Number(id) === element.id)
    CartModel.cartTemplate(idFilter)
    cartList.push(idFilter.id)
    valorTotal(idFilter)
}

function interceptButton(evt) {
    const buyButton = evt.target
    if(buyButton.className == 'addCart'){
        const productId = buyButton.getAttribute('data-id')
        addCart(productId)
    }
}

export {interceptButton, cartList}