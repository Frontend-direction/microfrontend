<template>
  <nav class="header">
    <router-link to="/">
      <img :src='homeUrl' alt="home" style="height: 35px;" />
    </router-link>
    
    <router-link to="/profile">
      <img :src='profileUrl' alt="profile" style="height: 35px;" />
    </router-link>
</nav>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      homeUrl: require('../assets/home.png'),
      profileUrl: require('../assets/logo.jpg'),
    }
  }
}
</script>

<style>
  .header {
  height: 40px;
  background: cornflowerblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  }
</style>