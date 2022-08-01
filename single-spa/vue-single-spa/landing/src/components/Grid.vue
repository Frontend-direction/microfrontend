<template>
<div>
  <div class="container">Get your best animal icon</div>
  <div class="grid">
    <div v-for="animal in animals" :key='animal.name' class="grid-item" @click="openInfo(animal)">
      <div>{{ animal.name }}</div>
      <img :src="animal.img" :alt="animal.name" class="grid-img">
    </div>
  </div>
</div>
  
</template>

<script>
import { animals } from '../data';

export default {
  name: 'Grid',
  data() {
    return {
      animals: animals
    }
  },
  methods: {
     openInfo(animal) {
      this.$router.push({ path: '/icons', query: { id: animal.id } })
    }
  }
  
}
</script>

<style>
.container {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  font-weight: bold
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px;
  grid-gap: 20px;
  padding: 15px;
  justify-items: center;
  align-items: center
}

.grid-img {
  height: 35px;
}

.grid-item {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
</style>