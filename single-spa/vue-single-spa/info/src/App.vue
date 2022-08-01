<template>
  <div id="app">
    <section>
      <div>You could download icon of {{ animal.name }}:</div>
      <div>Description: {{ animal.desc }}</div>
      <img :src="animal.img" :alt="animal.name" />
    </section>
  </div>
</template>

<script>
import { animals } from './data.js';

export default {
  name: 'App',
  data() {
    return {
      animal: {}
    }
  },
  mounted() {
   this.animal = animals.find(animal => animal.id === parseInt(this.$route.query.id, 10));
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
