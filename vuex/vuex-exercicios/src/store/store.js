import Vue from 'vue'
import Vuex from 'vuex'
import carrinho from './modules/carrinho'
import parametros from './modules/parametros'
import * as getters from './getters'
Vue.use(Vuex)
export default new Vuex.Store({ //store é uma função que está dentro de Vuex, função construtora
   modules:{carrinho, parametros},
   state:{
       nome:'Gabriel',
       sobrenome:'Leme'
   },
   getters,
})