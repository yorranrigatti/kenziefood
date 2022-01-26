function valorTotal(array) {
    const preco = document.querySelector('.total')
    const quantidade = document.querySelector('.quantidade')

    quantidade.innerHTML = array.length

    const novoValorTot = () => {
        const newValue = array.reduce((acc, cur) => {
            return (acc + cur.preco)
        }, 0)
        return `R$ ${String(newValue.toFixed(2)).replace('.', ',')}`
    }

    preco.innerHTML = novoValorTot()
}

export {valorTotal}