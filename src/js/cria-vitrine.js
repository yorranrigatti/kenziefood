class CriaVitrine {

    static dom(obj) {
        const {imagem, nome, categoria, descricao, preco, id} = obj

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


        img.setAttribute('src', imagem)
        img.setAttribute('alt', nome)

        button.setAttribute('data-id', id)

        category.innerText    = categoria
        name.innerText        = nome
        description.innerText = descricao
        price.innerText       = preco
   }
}

export {CriaVitrine}