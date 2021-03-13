<template>
  <div class="usuario">
    <h2>Usuario</h2>
    <hr>
    <router-view/>
    <button @click="irParaInicio" sucesso>Voltar</button>
  </div>
</template>

<script>
export default {

  methods: {
    irParaInicio() {
      // irá passar o path, e navegar para o componente com este path associado
      //this.$router.push("/"); // ou this.$router.push({path:'/'})
      this.$router.push({name:'inicio'})
    },
  },
};
</script>

<style>
</style>