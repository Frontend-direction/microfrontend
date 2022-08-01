<template>
  <div id="app">
    <ul>
      <li>name: {{ user.name }}</li>
      <li>address: {{ user.address }}</li>
      <li>phone: {{ user.phone }}</li>
      <li style="display: flex">favorite icons: <img :src="user.icons[0]" alt="icon"></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      user: {
        name: 'Vova',
        address: 'Lviv',
        phone: '888-999',
        icons: [require('./assets/Crab.svg')]
      }
    }
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
