<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-alert
      show
      dismissible
      :variant="mensagem.tipo"
      :key="mensagem.texto"
      v-for="mensagem in mensagens"
    >
      {{ mensagem.texto }}
    </b-alert>
    <b-card class="form-area">
      <b-form-group label="Nome:">
        <b-form-input
          v-model="usuario.nome"
          placeholder="informe o nome"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Email:">
        <b-form-input
          v-model="usuario.email"
          placeholder="informe o email"
        ></b-form-input>
        <hr />
        <b-button variant="info" size="lg" @click="salvar"> Salvar </b-button>
        <b-button
          variant="success"
          size="lg"
          @click="obterUsuarios"
          class="ml-3"
        >
          Mostrar usuários
        </b-button>
      </b-form-group>
    </b-card>
    <hr />
    <b-list-group>
      <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
        <strong> Id : </strong> {{ id }} <br />
        <strong> Nome : </strong> {{ usuario.nome }} <br /><strong>
          E-mail :
        </strong>
        {{ usuario.email }}<br />
        <b-button variant="warning" @click="visualizar(id)">
          Visualizar</b-button
        >
        <b-button variant="danger" class="ml-3" @click="excluir(id)">
          Excluir</b-button
        >
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensagens: [],
      usuarios: [],
      id: null, //representa o usuário selecionado
      usuario: {
        nome: "",
        email: "",
      },
    };
  },
  methods: {
    salvar() {
      const metodo = this.id ? "patch" : "post";
      const finalUrl = this.id ? `/${this.id}.json` : ".json";
      this.$http[metodo](`/usuarios${finalUrl}`, this.usuario).then(() => {
        this.limpar();
        this.mensagens.push({
          texto: "Usuário adicionado com sucesso",
          tipo: "success",
        });
      });
    },
    limpar() {
      this.usuario.nome = "";
      this.usuario.email = "";
    },
    visualizar(id) {
      this.id = id;
      this.usuario = {
        ...this.usuarios[id], // cria um clone do objeto para não alterar a instância
      };
    },
    excluir(id) {
      this.$http
        .delete(`/usuarios/${id}.json`)
        .then(() => this.limpar())
        .catch((err) => {
          this.mensagens.push({
            texto: "Houve um problema na hora de excluir a mensagem!",
            tipo: "danger",
          });
        });
    },
    obterUsuarios() {
      this.$http.get("usuarios.json").then((res) => {
        this.usuarios = res.data;
      });
      // this.$http.defaults.headers.common["Authorization"] = "abc345"; header
    },
  },
  /* created() {
    this.$http // se trata de uma requisição, e o padrão do firebase exige o ".json no final"
      .post("usuarios.json", {
        nome: "Gabriel", // objetos que irá mandar pro firebase
        email: "gabriel@outlook.com",
      })
      .then((res) => console.log(res));
  }, */
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
