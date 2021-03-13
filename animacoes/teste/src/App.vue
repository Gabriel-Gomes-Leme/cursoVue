<template>
  <div>
    <button @click="exibir = !exibir">Exibir</button>
    <transition name="slide">
      <div class="frase" v-if="exibir">Ola, como vc está?</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      exibir: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.frase {
  width: 50%;
  background-color: brown;
  padding: 20px;
  color: white;
  margin: 5% auto;
}
@keyframes movey {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes movex {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}
.slide-enter-active {
  animation: movey 3s ease;
}
.slide-leave-active {
  animation: movex 3s ease;
}
</style>
