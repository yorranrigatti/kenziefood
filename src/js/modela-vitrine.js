import { getAPI } from "./getAPI.js"
import { CriaVitrine } from "./cria-vitrine.js"


class VitrineModel {
    constructor({nome, preco, categoria, descricao, imagem}) {
        this.nome = nome
        this.preco = preco
        this.categoria = categoria
        this.descricao = descricao
        this.imagem = imagem
    }
}


async function dbVitrine() {
    const dataBase = await getAPI()

    dataBase.forEach(element => {
        const newClass = new VitrineModel(element)
        CriaVitrine.dom(element)
    });
}

export {dbVitrine}
