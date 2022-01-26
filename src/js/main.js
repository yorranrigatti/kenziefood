import { dbVitrine } from './modela-vitrine.js'
import {interceptButton} from './carrinho/criaCarrinho.js'

window.addEventListener('click', interceptButton)

dbVitrine()


import { filtrarTodos } from './filtros.js'
import { filtrarPanificadora } from './filtros.js'
import { filtrarFrutas } from './filtros.js'
import { filtrarBebidas } from './filtros.js'
import { filtrarPesquisa } from './filtros.js'


const buttonTodos = document.querySelector('.todos')
buttonTodos.addEventListener('click', filtrarTodos)

const buttonPanificadora = document.querySelector('.panificadora')
buttonPanificadora.addEventListener('click', filtrarPanificadora)

const buttonFrutas = document.querySelector('.frutas')
buttonFrutas.addEventListener('click', filtrarFrutas)

const buttonBebidas = document.querySelector('.bebidas')
buttonBebidas.addEventListener('click', filtrarBebidas)

const campoPesquisar = document.querySelector('.campoPesquisaProduto')
campoPesquisar.addEventListener('keyup', filtrarPesquisa)


