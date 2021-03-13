<template>
  <div class="usuario-detalhe">
    <h2 v-if="!usuario">Usuário não selecionado</h2>
    <div v-else>
      <p>
        Nome:
        <strong>{{usuario.nome}}</strong>
      </p>
      <p>
        Idade:
        <strong>{{usuario.idade}}</strong>
      </p>
    </div>
  </div>
</template>
<script>
import barramento from "@/barramento";
export default {
  data() {
    return {
      usuario: null,
    };
  },
  created() {
    barramento.onUsuarioSelecionado((usuario) => {
      this.usuario = usuario;
    });
  },
};
</script>
<style>
.usuario-detalhe {
  position: absolute;
  top: 5%;
  right: 5%;
  width: 35%;
  height: 300px;
  border: 1px solid chocolate;
}
</style>