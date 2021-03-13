<template>
  <div class="lista-usuarios">
    <table id="lista">
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
* {
  padding: 0;
  margin: 0;
}
#lista {
  width: 40%;
  border-spacing: 0;
  color: white;
  margin-left: 4%;
}
#lista tr th {
  padding: 10px 0;
  background-color: rgb(51, 51, 51);
}
#lista tbody {
  background-color: rgb(83, 83, 83);
}
#lista tbody tr td {
  padding: 10px 0;
  border-bottom: 1px solid rgb(128, 127, 127);
}
#lista tbody tr:hover {
  background-color: rgb(170, 165, 165);
  color: black;
  cursor: pointer;
}
</style>