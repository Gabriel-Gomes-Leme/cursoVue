<template>
  <v-app>
    <Menu />
    <Toolbar />

    <v-content>
      <Carousel />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Menu from "./componentes/template/Menu.vue";
import Toolbar from "./componentes/template/Toolbar.vue";
import Carousel from "./componentes/widgets/Carousel.vue";
import Footer from "./componentes/template/Footer.vue";

export default {
  components: { Menu, Toolbar, Carousel, Footer },
};
</script>
