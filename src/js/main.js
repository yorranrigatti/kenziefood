import { dbVitrine } from "./modela-vitrine.js"
import {interceptButton} from "./carrinho/criaCarrinho.js"

window.addEventListener('click', interceptButton)

dbVitrine()