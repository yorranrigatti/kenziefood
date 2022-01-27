import { cartList, buttonRemove } from "./criaCarrinho.js"

class CartModel {
    static cartTemplate (array) {
        
        const carrinho = document.querySelector('.cart-body')

        carrinho.innerHTML = ''

        array.forEach(element => {
            if (element !== '') {
                const card        = document.createElement('div')
                const figure      = document.createElement('figure')
                const img         = document.createElement('img')
                const infos       = document.createElement('div')
                const category    = document.createElement('p')
                const name        = document.createElement('h2')
                const price       = document.createElement('span')
                const removeProd  = document.createElement('button')
                const removeIcon  = document.createElement('img')
    
                card.classList.add('cartCard')
                infos.classList.add('cart-infos')
                removeProd.classList.add('removeProduct')
                removeIcon.classList.add('removeProduct')
    
                carrinho.appendChild(card)
                card.appendChild(figure)
                card.appendChild(infos)
                infos.appendChild(name)
                infos.appendChild(category)
                infos.appendChild(price)
                card.appendChild(removeProd)
                figure.appendChild(img)
                removeProd.appendChild(removeIcon)
    
                img.setAttribute('src', element.imagem)
                img.setAttribute('alt', element.nome)
                removeIcon.setAttribute('src', '../src/assets/lixeiras.png')
                removeProd.setAttribute('prod-id', element.id)
                removeIcon.setAttribute('prod-id', element.id)
                
                category.innerText    = element.categoria
                name.innerText        = element.nome
                price.innerText       = `R$ ${String(element.preco.toFixed(2)).replace('.', ',')}`
            }
            
        });

        carrinho.addEventListener('click', buttonRemove);

        const {nome, categoria, preco, imagem} = array
    }

    static quantTotal(){

        const carrinho  = document.querySelector('#carrinho')

        const divQuant  = document.createElement('div')
        const divTotal  = document.createElement('div')
        const pQuant    = document.createElement('p')
        const pTotal    = document.createElement('p')
        const spanQuant = document.createElement('span')
        const spanTotal = document.createElement('span')

        divQuant.classList.add('divQuant')
        divTotal.classList.add('divTotal')
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

    static recreateCartDom() {
        const cartBody = document.querySelector('.cart-body')
        const divQuant = document.querySelector('.divQuant')
        const divTotal = document.querySelector('.divTotal')

        cartBody.innerHTML = ''
        divQuant.innerHTML = ''
        divTotal.innerHTML = ''
        
        const img = document.createElement('img')
        const span = document.createElement('span')
        const p = document.createElement('p')

        img.src = '../src/assets/shopping-bag.png'
        img.alt = 'imagem de um carrinho vazio'

        span.innerText = "Ops!"
        p.innerText = "Por enquanto não temos produtos no carrinho"

        cartBody.appendChild(img)
        cartBody.appendChild(span)
        cartBody.appendChild(p)
    }

}

export {CartModel}