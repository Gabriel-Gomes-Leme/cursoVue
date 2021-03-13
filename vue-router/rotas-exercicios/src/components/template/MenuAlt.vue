<template>
  <nav class="menu">
    <ul>
      <router-link to="/" tag="Li" active-class="active" exact><a>Home2</a></router-link> <!-- exact faz com que o link só fique ativo, se a url for exatamente à definida la no router -->
      <router-link to="/Usuario" tag="Li" active-class="active"><a>User</a></router-link>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>