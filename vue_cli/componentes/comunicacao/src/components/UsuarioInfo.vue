<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do Usuário :
      <strong>{{inverterNome()}}</strong>
    </p>
    <p>Idade:{{idade}}</p>
    <button @click="reiniciarNome">Reiniciar</button>
    <button @click="reiniciarFn()">Reiniciar Nome (callback)</button>
  </div>
</template>

<script>
export default {
  props: {
    nome: String,
    reiniciarFn: Function,
    idade: Number,
  },
  data() {
    return {
      nome2: this.nome,
    };
  },
  methods: {
    inverterNome() {
      return this.nome.split("").reverse().join("-");
    },
    reiniciarNome() {
      this.nome = "Gabriel";
      this.$emit("nomeMudou", this.nome);
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
