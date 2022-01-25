import { getAPI } from "./getAPI.js"
import { CriaVitrine } from "./cria-vitrine.js"


class VitrineModel {
    constructor({id, nome, preco, categoria, descricao, imagem}) {
        this.id        = id
        this.nome      = nome
        this.preco     = preco
        this.categoria = categoria
        this.descricao = descricao
        this.imagem    = imagem
    }
}


async function dbVitrine() {
    const dataBase = await getAPI()
    
    dataBase.forEach(element => {
        const newClass = new VitrineModel(element)
        CriaVitrine.dom(newClass)
    });

}

export {dbVitrine}
