<template>
  <div id="app">
    <app-lista :usuarios="usuarios" />
    <app-detalhe />
  </div>
</template>

<script>
import Lista from "./components/Lista.vue";
import Detalhe from "./components/Detalhe.vue";
export default {
  name: "App",
  components: { appLista: Lista, appDetalhe: Detalhe },
  data() {
    return {
      usuarios: [
        { id: 1, nome: "Gabriel", idade: 21 },
        { id: 2, nome: "Lucia", idade: 24 },
        { id: 3, nome: "Marcela", idade: 22 },
        { id: 4, nome: "José", idade: 35 },
        { id: 5, nome: "Marcos", idade: 29 },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
