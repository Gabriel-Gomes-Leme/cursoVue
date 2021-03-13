<template>
  <div id="app">
    <h1>Filtros & Mixins (Desafio)</h1>
    <!-- Exercício 1 -->
    <!-- Construir um filtro local que troca espaços por vírgula -->
    <p>{{ frase | modifica }}</p>
    <hr />
    <!-- Exercício 2 -->
    <!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
    <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
    <p><strong>Filtro: </strong>{{ frase | contarPalavras }}</p>
    <!-- Exercício 3 -->
    <!-- Implementar o exercicio 2 com propriedade computada -->
    <p>{{ palavraComVirgula }}</p>
    <p><strong>Propriedade Computada:</strong>{{ contarPalavras2 }}</p>
    <!-- Exercício 4 -->
    <!-- Compartilhe a propriedade computada via mixin -->
  </div>
</template>

<script>
import fraseMixin from "./fraseMixin";
export default {
  mixins: [fraseMixin],
  data() {
    return {
      frase: "Ola, meu nome é Gabriel, sou desenvolvedor Web",
    };
    g;
  },
  filters: {
    modifica(frase) {
      return frase.replace(/ /g, ",");
    },
  },
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
</style>
