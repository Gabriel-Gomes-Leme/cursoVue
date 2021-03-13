import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('contarPalavras', function(valor){
	return valor.split(' ').map(p=>`${p} (${p.length}) `) //map percorre/mapeia cada elemento do array, aplicando o .length
})
new Vue({
	render: h => h(App),
}).$mount('#app')
