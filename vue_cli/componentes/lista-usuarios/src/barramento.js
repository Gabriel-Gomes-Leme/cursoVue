import Vue from 'vue';
export default new Vue({
    methods:{
        selecionarUsuario(usuario){
            this.$emit('usuarioSelecionado', usuario)
        },
        usuarioSelecionado(callback){
            this.$on('usuarioSelecionado', callback)
        }
    }
})