import Vue from 'vue'
import axios from 'axios'
// url base para acessar a api no back end
//axios.defaults.baseURL='https://curso-vue-63756.firebaseio.com/'

//headers .... serviria se estivesse acessando o axios de forma global
//axios.defaults.headers.common['Authorization']='abc345'
//axios.defaults.headers.get['Accepts']='application/json'
Vue.use({
    install(vue){
        Vue.prototype.$http=axios.create({
            baseURL:'https://curso-vue-63756.firebaseio.com/',
            Headers:{
                get:{
                    "Authorization":"abc345"
                }
            }
        }) //todos os metodos do axios usando $http
        Vue.prototype.$http.interceptors.request.use(config=>{ //interceptar requisição
            console.log(config.method);
            return config
        }, error=>Promise.reject(error))
        Vue.prototype.$http.interceptors.response.use(res=>{
           // const arr=[];
          //  for (let chave in res.data){
           //     arr.push({id:chave, ...res.data[chave] }) // o spread vai espalhar todos os atributos dentro do objeto criado aqui
            // }
           // res.data=arr; // substitui a resposta padrão pelo array criado
            return res
        })
    }

})