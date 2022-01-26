import { dbVitrine } from './modela-vitrine.js'
import {interceptButton} from './carrinho/criaCarrinho.js'

window.addEventListener('click', interceptButton)

dbVitrine()



import { filtrarPanificadora } from './filtros.js'
import { filtrarFrutas } from './filtros.js'
import { filtrarBebidas } from './filtros.js'
import { filtrarPesquisa } from './filtros.js'
import { filtrarPesquisaButton } from './filtros.js'

const buttonPanificadora = document.querySelector('.panificadora')
buttonPanificadora.addEventListener('click', filtrarPanificadora)

const buttonFrutas = document.querySelector('.frutas')
buttonFrutas.addEventListener('click', filtrarFrutas)

const buttonBebidas = document.querySelector('.bebidas')
buttonBebidas.addEventListener('click', filtrarBebidas)

const campoPesquisar = document.querySelector('.campoPesquisaProduto')
campoPesquisar.addEventListener('keyup', filtrarPesquisa)

const buttonPesquisar = document.querySelector('.pesquisa')
buttonPesquisar.addEventListener('click', filtrarPesquisaButton)
