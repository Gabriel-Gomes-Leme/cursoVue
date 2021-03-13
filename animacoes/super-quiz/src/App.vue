<template>
  <div id="app">
    <h1>Super Quiz</h1>
    <transition name="flip" mode="out-in">
      <Question
        v-if="questionMode"
        :question="questions[currentQuestion]"
        @answered="showResult"
      />
      <Result v-else :result="result" @confirmed="nextQuestion" />
    </transition>
  </div>
</template>

<script>
import questions from "./util/questions";
import Question from "./components/Question.vue";
import Result from "./components/Result.vue";
export default {
  components: {
    Question,
    Result,
  },
  data() {
    return {
      result: false,
      questionMode: true,
      questions, //array importado
      currentQuestion: 0,
    };
  },
  methods: {
    showResult(result) {
      this.result = result;
      this.questionMode = false; //esconde a pergunta e mostra o resultado
    },
    nextQuestion() {
      this.questionMode = true;
      let r = Math.random() * this.questions.length; // pega um valor aleatório de zero até o tamanho do array
      this.currentQuestion = parseInt(r);
    },
  },
};
</script>

<style>
body {
  background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
  font-family: "Oswald", sans-serif;
  color: #fff;
  height: 100vh;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  font-weight: 200;
  font-size: 4rem;
}

@keyframes flip-out {
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(90deg);
  }
}

@keyframes flip-in {
  from {
    transform: rotateX(90deg);
  }
  to {
    transform: rotateX(0deg);
  }
}

.flip-enter-active {
  animation: flip-in 0.3s ease;
}

.flip-leave-active {
  animation: flip-out 0.3s ease;
}
</style>
