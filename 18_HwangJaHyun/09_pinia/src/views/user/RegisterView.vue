<script setup>

import RegisterForm from "@/components/user/RegisterForm.vue";
import {useRouter} from "vue-router";
import {registerUser} from "@/api/user.js"; // @ << src

const router = useRouter();

const handleRegister = async (formData) => {
  // 회원 가입 api 호출
  try {
    await registerUser(formData); // await 동기 처리
    await router.push('/login'); // 라우팅도 비동기니까 동기처리 기다림...
  }catch (e) {
    console.log('회원 가입 실패', e);
  }
}
</script>

<template>
  <div class="container">
    <h1>회원 가입</h1>
    <RegisterForm @submit="handleRegister" />
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>