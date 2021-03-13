export default{
    namespaced:true, // os métodos estarão restritos ao carrinho
    state:{ //estado central que é gerenciado pelo vuex
        produtos:[
        ],
    },
    getters:{
        valorTotal(state){
           return state.produtos.map(p => p.quantidade * p.preco)
            .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations:{
        adicionarProduto(state, payload){ //aqui pode manter apenas state, ou pode passar outro dado adicional, por convenção=payload
            //vamos usar a mutation através do commit
            state.produtos.push(payload) //altera o estado
        }, 
    },
    actions:{
        adicionarProduto(context, payload){ // OU adicionarProduto({commit}, payload) ai chama apenas commit(adiciona....)
            setTimeout(()=>{
                context.commit('adicionarProduto', payload)
            }, 1000)
        }
    }
}