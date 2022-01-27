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

function buttonRemove(evt) {
    const target = evt.target
    // const btnRemove = document.querySelector('.removeProduct')
    if (target.className === 'removeProduct' ) {
        const prodId = target.getAttribute('prod-id')
        const obj    = cartList.find(element => {
            if (element.id == prodId) {
                return element
            }
        })
        const elementIndex = cartList.indexOf(obj)
        cartList[elementIndex] = ""
        CartModel.cartTemplate(cartList)
        valorTotal(cartList)
    }
}

export {interceptButton, buttonRemove, cartList}