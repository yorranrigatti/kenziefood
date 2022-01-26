class CriaVitrine {

    static dom(obj) {
        const {imagem, nome, categoria, descricao, preco, id} = obj
        
        const vitrine     = document.getElementById('vitrine')
        const card         = document.createElement('div')
        const figure       = document.createElement('figure')
        const img          = document.createElement('img')
        const categoryDiv  = document.createElement('div')
        const category     = document.createElement('span')
        const categoryIcon = document.createElement('img')
        const infos        = document.createElement('div')
        const name         = document.createElement('h2')
        const description  = document.createElement('p')
        const buy          = document.createElement('div')
        const price        = document.createElement('span')
        const button       = document.createElement('button')
        const buyIcon      = document.createElement('img')

        card.classList.add('card')
        categoryDiv.classList.add('categoryDiv')
        infos.classList.add('infos')
        buy.classList.add('buy')
        button.classList.add('addCart')
        buyIcon.classList.add('addCart')

        button.id = 'addCart'

        vitrine.appendChild(card)
        card.appendChild(figure)
        card.appendChild(infos)
        card.appendChild(buy)
        figure.appendChild(img)
        figure.appendChild(categoryDiv)
        categoryDiv.appendChild(categoryIcon)
        categoryDiv.appendChild(category)
        infos.appendChild(name)
        infos.appendChild(description)
        buy.appendChild(price)
        buy.appendChild(button)
        button.appendChild(buyIcon)

        category.innerText    = categoria
        name.innerText        = nome
        description.innerText = descricao
        price.innerText       = `R$ ${preco}`
        
        img.setAttribute('src', imagem)
        img.setAttribute('alt', nome)
        button.setAttribute('data-id', id)
        buyIcon.setAttribute('src', '../src/assets/Button Circle.png')
        buyIcon.setAttribute('alt', 'carrinho de compras')
        
        if(categoria == "Frutas") {
            categoryIcon.setAttribute('src', '../src/assets/Icon_fruits.png')
        } else if(categoria == "Panificadora") {
            categoryIcon.setAttribute('src', '../src/assets/Icon_bread.png')
        } else if(categoria == "Bebidas") {
            categoryIcon.setAttribute('src', '../src/assets/Icon_glass_of_wine.png')
        }
   }
}

export {CriaVitrine}