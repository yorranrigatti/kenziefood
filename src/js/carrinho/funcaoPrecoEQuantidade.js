import { cartList } from "./criaCarrinho.js"

function valorTotal(obj) {
    const preco = document.querySelector('.total')
    const quantidade = document.querySelector('.quantidade')

    quantidade.innerHTML = cartList.length

    const novoValorTot = () => {
        const valor = preco.textContent.replace(',', '.').split(' ')
        const novoValor = (Number(valor[1]) + obj.preco).toFixed(2)
        return `R$ ${String(novoValor).replace('.', ',')}`
    }

    preco.innerHTML = novoValorTot()
}

export {valorTotal}