import { db } from "../getAPI.js";
import {CartModel} from './modeloCarrinho.js'
import {valorTotal} from './funcaoPrecoEQuantidade.js'

let cartList = []

function addCart(id){
    if (cartList.length == 0) {
        const cartBody = document.querySelector('.cart-body')
        cartBody.innerHTML = ''
    }
    CartModel.quantTotal()
    
    const product = db
    const idFilter = product.find(element => Number(id) === element.id)
    cartList.push(idFilter)
    CartModel.cartTemplate(cartList)
    valorTotal(cartList)
}

function interceptButton(evt) {
    const buyButton = evt.target
    if(buyButton.className == 'addCart'){
        const productId = buyButton.getAttribute('data-id')
        addCart(productId)
    }
}

export {interceptButton, cartList}