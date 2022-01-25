class CriaVitrine {

    static dom(obj) {
        const vitrine     = document.getElementById('vitrine')

        const card        = document.createElement('div')
        const figure      = document.createElement('figure')
        const img         = document.createElement('img')
        const category    = document.createElement('span')
        const infos       = document.createElement('div')
        const name        = document.createElement('h2')
        const description = document.createElement('p')
        const buy         = document.createElement('div')
        const price       = document.createElement('span')
        const button      = document.createElement('button')
        const buyIcon     = document.createElement('img')

        card.classList.add('card')
        infos.classList.add('infos')
        buy.classList.add('buy')
        button.classList.add('addCart')

        vitrine.appendChild(card)
        card.appendChild(figure)
        card.appendChild(infos)
        card.appendChild(buy)
        figure.appendChild(img)
        figure.appendChild(category)
        infos.appendChild(name)
        infos.appendChild(description)
        buy.appendChild(price)
        buy.appendChild(button)
        button.appendChild(buyIcon)


        img.setAttribute('src', obj.imagem)
        img.setAttribute('alt', obj.nome)

        button.setAttribute('data-id', obj.id)

        category.innerText    = obj.categoria
        name.innerText        = obj.nome
        description.innerText = obj.descricao
        price.innerText       = obj.preco
        button.innerText      = 'Adicionar ao Carrinho'
   }
}

export {CriaVitrine}