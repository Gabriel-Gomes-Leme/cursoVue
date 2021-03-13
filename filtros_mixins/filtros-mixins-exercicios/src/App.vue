<template>
  <div id="app">
    <h1>Filtros & Mixins ---- {{ global }}</h1>
    <hr />
    <p>{{ cpf | cpf | inverter }}</p>
    <p>{{ usuarioLogado }}</p>
    <input type="text" :value="cpf | cpf" />
    <Frutas />

    <hr />

    <div>
      <ul>
        <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
      </ul>
      <input
        type="text"
        v-model="fruta"
        @keydown.enter="add"
        placeholder="Nova fruta"
      />
    </div>
  </div>
</template>

<script>
import Frutas from "./Frutas.vue";
import FrutasMixins from "./FrutasMixins";
import usuarioMixin from "./usuarioMixn";
export default {
  components: {
    Frutas,
  },
  mixins: [FrutasMixins, usuarioMixin],
  filters: {
    cpf(valor) {
      const arr = valor.split("");
      arr.splice(3, 0, "."); // adiciona um ponto na 3ª posição
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    },
  },
  data() {
    return {
      cpf: "45345879659",
    };
  },
  created() {
    console.log("created (app)");
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
input {
  width: 40%;
  height: 45px;
  font-size: 1.2rem;
}
</style>
