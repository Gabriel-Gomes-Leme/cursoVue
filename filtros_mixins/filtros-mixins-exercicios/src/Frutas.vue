<template>
  <div>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
    </ul>
    <input
      type="text"
      v-model="fruta"
      @keydown.enter="add"
      placeholder="Nova fruta"
    />
  </div>
</template>

<script>
import FrutasMixins from "./FrutasMixins";
export default {
  mixins: [FrutasMixins],
};
</script>

<style scoped>
input {
  margin: 10px 0 30px;
}
ul {
  width: 40%;
  display: block;
  background-color: chocolate;
  color: white;
  margin: 10px auto;
  padding: 10px;
  box-sizing: border-box;
}
ul li {
  list-style: none;
}
</style>