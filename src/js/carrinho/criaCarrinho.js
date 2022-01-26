import { getAPI } from "../getAPI.js";
import {CartModel} from './modeloCarrinho.js'


let cartList = []

async function addCart(id){
    
    const product = await getAPI()
    const idFilter = product.find(element => Number(id) === element.id)
    CartModel.cartTemplate(idFilter)
    cartList.push(idFilter.id)
    CartModel.quantTotal(idFilter)
    
}

function interceptButton(evt) {
    const buyButton = evt.target
    if(buyButton.className == 'addCart'){
        const productId = buyButton.getAttribute('data-id')
        addCart(productId)
    }
}

export {interceptButton, cartList}