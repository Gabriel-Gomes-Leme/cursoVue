<template>
  <div class="usuario-editar">
      <h3> Usuario editar </h3>
      <p> <strong>Código</strong> {{id}}/{{$route.params.id}}</p>
      <p><strong>Completo:</strong>{{$route.query.completo ? 'sim' : 'não'}}</p>
      <p> <strong>Língua : </strong> {{$route.query.lingua}}</p>
      <hr>
      <button primario @click="confirmou=true"> Confirmar</button>
      <div id="rodape">
        <h3>Curso VueJs </h3>
      </div>
  </div>
</template>

<script>
export default {
props:['id'],
data(){
  return{
    confirmou:false,
  }
},
  beforeRouteLeave(to, from, next){
    if (this.confirmou){
      next();
    }
    else{
      if (confirm('tem certeza')){
        next()
      }
      else{
        next(false)
      }
    }
  }
}
</script>

<style>
#rodape{
margin-top: 3000px;
}
</style>