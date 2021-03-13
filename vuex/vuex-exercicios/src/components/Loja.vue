<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
import {mapActions} from 'vuex' //para usar somente a mutation, troca por mapMutations
export default {
    data() {
        return {
            sequencia: 1,
        }
    },
    computed:{
        quantidade(){
            return this.$store.state.parametros.quantidade
        },
        preco(){
            return this.$store.state.parametros.preco
        }
    },
    methods: {
        //carrinho é o namespaced definido la no carrinho.js
        ...mapActions('carrinho',['adicionarProduto']), //adicionaa dentro dos metodos o metodo adicionar produto
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
           // this.$store.state.produtos.push(produto) // pega o produto criado e adiciona no store central
           // this.$store.commit('adicionarProduto', produto)
           // this.$store.dispatch('adicionarProduto', produto)
           this.adicionarProduto(produto)



           console.log(this.$store.getters.getNome) // chamou os getters globais
                console.log(this.$store.getters.getNomeCompleto)
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
