<template>
  <div class="detalhe">
    <h1 v-if="!usuario">Nenhum usuário selecionado</h1>
    <div v-else>
      <h2>
        <strong>Id :</strong>
        {{usuario.id}}
      </h2>
      <h2>
        <strong>Nome :</strong>
        {{usuario.nome}}
      </h2>
      <h2>
        <strong>Idade :</strong>
        {{usuario.idade}}
      </h2>
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
    barramento.usuarioSelecionado((usuario) => {
      this.usuario = usuario;
    });
  },
};
</script>

<style>
.detalhe {
  width: 40%;
  height: 300px;
  border: 1px solid darkgray;
  position: absolute;
  top: 8%;
  right: 5%;
  padding: 20px;
  box-sizing: border-box;
}
</style>