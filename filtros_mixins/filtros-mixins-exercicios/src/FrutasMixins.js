export default{
    data() {
        return {
          fruta: "",
          frutas: ["Banana", "Maçã", "Laranja"],
        };
      },
      methods: {
        add() {
          this.frutas.push(this.fruta);
          this.fruta = "";
        },
      },
}