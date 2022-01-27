import { dbVitrine } from './modela-vitrine.js'
import {interceptButton} from './carrinho/criaCarrinho.js'
import { filtrarTodos, filtrarPanificadora, filtrarFrutas, filtrarBebidas, filtrarPesquisa  } from './filtros.js'

window.addEventListener('click', interceptButton)



dbVitrine()



const buttonTodos = document.querySelector('.todos')
buttonTodos.addEventListener('click', filtrarTodos)

const buttonPanificadora = document.querySelector('.panificadora')
buttonPanificadora.addEventListener('click', filtrarPanificadora)

const buttonFrutas = document.querySelector('.frutas')
buttonFrutas.addEventListener('click', filtrarFrutas)

const buttonBebidas = document.querySelector('.bebidas')
buttonBebidas.addEventListener('click', filtrarBebidas)

const campoPesquisar = document.querySelector('.campoPesquisaProduto')
campoPesquisar.addEventListener('input', filtrarPesquisa)

