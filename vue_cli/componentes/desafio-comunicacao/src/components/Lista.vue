<template>
  <div class="usuario-lista">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id" @click="selecionarUsuario(usuario)">
          <td>{{usuario.id}}</td>
          <td>{{usuario.nome}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import barramento from "@/barramento";
export default {
  props: {
    usuarios: Array,
  },
  methods: {
    selecionarUsuario(usuario) {
      barramento.selecionarUsuario(usuario);
    },
  },
};
</script>
<style>
table {
  width: 50%;
  position: absolute;
  top: 5%;
  left: 5%;
  height: 300px;
  border-collapse: separate;
  border-spacing: 0px;
}
th,
td {
  padding: 10px 5px;
  background-color: rgb(230, 230, 230);
  cursor: pointer;
}
</style>