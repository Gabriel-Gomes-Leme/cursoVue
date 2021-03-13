<template>
  <div id="app">
    {{titulo}}
    <button @click="titulo+='#'">Adicionar</button>
  </div>
</template>
<script>
// scaffold já gera automaticamente
export default {
  data: function () {
    return {
      titulo: "Teste data usando Vue cliente",
    };
  },
};
</script>
<style>
#app {
  background-color: chocolate;
  color: white;
}
</style>