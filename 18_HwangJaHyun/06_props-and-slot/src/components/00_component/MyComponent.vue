<script setup>
import axios from 'axios';
import {onMounted, ref} from 'vue';

const users = ref([]);

onMounted(async()=>{
  const response = await axios.get('/api/users');
  console.log(response.data);
  users.value = response.data;
});
</script>

<template>
  <div>
    <h1>My Component</h1>
    <p>{{users}}</p>
  </div>
</template>

<style scoped>
h1{
  color : red;
}
</style>