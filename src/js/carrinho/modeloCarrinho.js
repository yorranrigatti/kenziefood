import { cartList } from "./criaCarrinho.js"

class CartModel {
    static cartTemplate(obj) {

        const {nome, categoria, preco, imagem} = obj

        const carrinho = document.querySelector('.cart-body')

        const card        = document.createElement('div')
        const figure      = document.createElement('figure')
        const img         = document.createElement('img')
        const category    = document.createElement('span')
        const name        = document.createElement('h2')
        const price       = document.createElement('span')
        const removeProd  = document.createElement('button')

        card.classList.add('cartCard')
        removeProd.classList.add('removeProduct')

        carrinho.appendChild(card)
        card    .appendChild(figure)
        card    .appendChild(name)
        card    .appendChild(category)
        card    .appendChild(price)
        card    .appendChild(removeProd)
        figure  .appendChild(img)

        img.setAttribute('src', imagem)
        img.setAttribute('alt', nome)
        
        category.innerText    = categoria
        name.innerText        = nome
        price.innerText       = `R$ ${String(preco.toFixed(2)).replace('.', ',')}`
    }

    static quantTotal(){

        const carrinho  = document.querySelector('#carrinho')

        const divQuant  = document.createElement('div')
        const divTotal  = document.createElement('div')
        const pQuant    = document.createElement('p')
        const pTotal    = document.createElement('p')
        const spanQuant = document.createElement('span')
        const spanTotal = document.createElement('span')

        spanQuant.classList.add('quantidade')
        spanTotal.classList.add('total')
        
        

        if(cartList.length === 0){
            carrinho.appendChild(divQuant)
            carrinho.appendChild(divTotal)
            divQuant.appendChild(pQuant)
            divQuant.appendChild(spanQuant)
            divTotal.appendChild(pTotal)
            divTotal.appendChild(spanTotal)
            
            pQuant.innerText    = 'Quantidade'
            pTotal.innerText    = 'Total'

            spanTotal.innerHTML = 'R$ 00,00'
        }
        
    }
}

export {CartModel}