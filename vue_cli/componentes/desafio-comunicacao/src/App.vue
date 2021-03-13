<template>
  <div id="app">
    <app-lista :usuarios="usuarios" />
    <app-detalhe />
  </div>
</template>
<script>
import Lista from "./components/Lista";
import Detalhe from "./components/Detalhe";
export default {
  name: "#app",
  components: {
    appLista: Lista,
    appDetalhe: Detalhe,
  },
  data() {
    return {
      usuarios: [
        { id: 1, nome: "Gabriel", idade: 21 },
        { id: 2, nome: "Marcela", idade: 23 },
        { id: 3, nome: "Yasmin", idade: 19 },
        { id: 4, nome: "Lucas", idade: 18 },
        { id: 5, nome: "Ricardo", idade: 27 },
      ],
    };
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
