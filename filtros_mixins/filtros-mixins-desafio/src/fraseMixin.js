export default{
    computed: {
        contarPalavras2() {
          return this.frase.split(" ").map((p) => `${p} (${p.length})`);
        },
        palavraComVirgula() {
          return this.frase.replace(/ /g, ",");
        },
      },
}