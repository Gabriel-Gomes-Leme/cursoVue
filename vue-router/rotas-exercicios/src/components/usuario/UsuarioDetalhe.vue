<template>
  <div class="usuario-detalhe">
      <h3> Usuario detalhe </h3>
     <hr />
     <p><strong> Código</strong> {{ id }}</p>
     <router-link tag="button" primario :to="{name:'editarUsuario', params:{id},
     query:{completo:true, lingua:'pt-br'}, hash:'#rodape'}" > Editar </router-link> <!-- passa parâmetros via query (url)-->
     <!-- :to="`/usuario/${$route.params.id}/editar`" -->
  </div>
</template>

<script>
export default {
  props:['id'],
  
  beforeRouteEnter(to, from, next){ // nesse ponto, o componente não foi criado ainda
    console.log('dentro do componente usuario detalhe');
    const autenticado=true;
    autenticado ? next() : next(false)


   /* next(vm=>{
      console.log(vm.id);
    }); */
  }
  /*
  data() {
    return {
      id: this.$route.params.id, //pega o parâmetro através do route
    };
  },
  watch: {
    $route(to, from) {
      // o to é o parametro novo, e o from é o antigo
      // vai mostrar o valor para qual rota está indo, e de qual rota ele veio
      this.id = to.params.id; // qual rota irá
    },
  },
  */
}
</script>

<style>

</style>