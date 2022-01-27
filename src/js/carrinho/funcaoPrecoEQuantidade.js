function valorTotal(array) {
    const preco = document.querySelector('.total')
    const quantidade = document.querySelector('.quantidade')

    // quantidade.innerHTML = array.length
    quantidade.innerHTML = quantTotal(array)

    const novoValorTot = () => {
        let newValue = 0
        array.forEach(element => {
            if(typeof element.preco == 'number') {
             newValue += element.preco
            }
        });
        // const newValue = array.reduce((acc, cur) => {
        //         return (acc + cur.preco)
        // }, 0)
        return `R$ ${String(newValue.toFixed(2)).replace('.', ',')}`
    }

    preco.innerHTML = novoValorTot()
}

function quantTotal(array) {
    let result = 0
    for (let i = 0; i < array.length; i++) {
        if(array[i] != '') {
            result ++
        }
    }
    return result
}
export {valorTotal}