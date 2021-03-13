<template>
  <nav class="menu">
    <ul>
      <router-link to="/" tag="Li" active-class="active" exact><a>Inicio</a></router-link> <!-- exact faz com que o link só fique ativo, se a url for exatamente à definida la no router -->
      <router-link to="/Usuario" tag="Li" active-class="active"><a>Usuário</a></router-link>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>