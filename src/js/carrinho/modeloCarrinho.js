class CartModel {
    static cartTemplate(obj) {

        const {nome, categoria, preco, imagem} = obj

        const carrinho = document.querySelector('#carrinho')

        const card        = document.createElement('div')
        const figure      = document.createElement('figure')
        const img         = document.createElement('img')
        const category    = document.createElement('span')
        const name        = document.createElement('h2')
        const price       = document.createElement('span')

        card.classList.add('cartCard')

        carrinho.appendChild(card)
        card.appendChild(figure)
        card.appendChild(name)
        card.appendChild(category)
        card.appendChild(price)
        figure.appendChild(img)

        img.setAttribute('src', imagem)
        img.setAttribute('alt', nome)
        
        category.innerText    = categoria
        name.innerText        = nome
        price.innerText       = preco
    }

}

export {CartModel}