<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr />
    <button
      class="btn btn-primary mb-4"
      variant="primary"
      @click="exibir = !exibir"
    >
      Exibir mensagem
    </button>
    <!-- <transition name="fade">
      <b-alert v-if="exibir" show>{{ msg }}</b-alert>
    </transition>
    <transition name="slide" type="animation">
      <b-alert v-if="exibir" show>{{ msg }}</b-alert>
    </transition>
    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated swing"
    >
      <b-alert v-if="exibir" show>{{ msg }}</b-alert>
    </transition>
    <hr /> -->
    <b-select v-model="tipoAnimation">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>
    <transition :name="tipoAnimation" class="mb-4" mode="out-in">
      <b-alert variant="success" key="success" show v-if="exibir">{{
        msg
      }}</b-alert>
      <b-alert variant="danger" key="danger" show v-else>{{ msg }}</b-alert>
    </transition>

    <hr />
    <b-button variant="info" @click="exibir2 = !exibir2"> Animar </b-button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="exibir2" class="caixa"></div>
    </transition>
    <div class="m-3">
      <b-button variant="primary" @click="componenteSelect = 'AlertaInfo'"
        >Alerta info
      </b-button>
      <b-button
        variant="primary"
        class="ml-2"
        @click="componenteSelect = 'AlertaWarn'"
        >Alerta Warning
      </b-button>
    </div>
    <transition name="fade" mode="out-in">
      <component :is="componenteSelect"></component>
    </transition>

    <hr />
    <b-button variant="info" class="m-2" @click="adicionarAluno"
      >Adicionar aluno
    </b-button>
    <b-list-group>
      <transition-group name="slide" tag="div">
        <b-list-group-item
          v-for="(aluno, i) in alunos"
          :key="aluno"
          @click="removerAluno(i)"
          >{{ aluno }}</b-list-group-item
        >
      </transition-group>
    </b-list-group>
    <hr />
    <b-button variant="success" @click="exibir3 = !exibir3">
      Animar 2
    </b-button>
    <transition name="cor">
      <div class="quadrado" v-if="exibir3"></div>
    </transition>
  </div>
</template>

<script>
import AlertaInfo from "./AlertaInfo.vue";
import AlertaWarn from "./AlertaWarn.vue";
export default {
  components: {
    AlertaInfo,
    AlertaWarn,
  },
  data() {
    return {
      alunos: ["Robert", "Gabriel", "Marcela", "Rita"],
      msg: "Winter is coming",
      exibir: false,
      exibir2: true,
      exibir3: false,
      tipoAnimation: "fade",
      larguraBase: 0,
      componenteSelect: "AlertaInfo",
      colorir: false,
    };
  },
  methods: {
    adicionarAluno() {
      const s = Math.random().toString(36).substring(2);
      this.alunos.push(s);
    },
    removerAluno(indice) {
      this.alunos.splice(indice, 1);
    },
    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura =
          this.larguraBase + (negativo ? -rodada * 10 : rodada * 10);
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },
    enter(el, done) {
      this.animar(el, done, false);
    },
    afterEnter(el) {
      console.log("after enter");
    },
    enterCancelled() {
      console.log("enter cancelled");
    },
    beforeLeave(el) {
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },
    leave(el, done) {
      this.animar(el, done, true);
    },
    afterLeave(el) {
      console.log("after leave");
    },
    leaveCancelled() {
      console.log("leave cancelled");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}
.caixa {
  height: 100px;
  width: 300px;
  background-color: seagreen;
  margin: 30px auto;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}
.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}
.slide-leave-active {
  position: absolute; /* serve para que o elemento consiga ficar temporariamente por cima do outro durante o momento de transição (saída/entrada)*/
  width: 100%;
  animation: slide-out 2s ease;
  transition: opacity 6s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-move {
  transition: transform 2s;
}

.quadrado {
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin: 20px auto 100px auto;
}
.cor-enter,
.cor-leave-to {
  background: none;
}
.cor-enter-active,
.cor-leave-active {
  transition: all 2s;
}
.cor-enter-to {
  background: green;
}
.cor-leave {
  background: red;
}
</style>
