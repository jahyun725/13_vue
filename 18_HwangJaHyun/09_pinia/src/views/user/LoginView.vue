<script setup>
import LoginForm from '@/components/user/LoginForm.vue';
import {loginUser} from '@/api/user.js';
import {useAuthStore} from '@/stores/auth.js';
import {useRouter} from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();

const handleLogin = async (formData) => {
  try{
    const response = await loginUser(formData);
    const at = response.data.data.accessToken; // 응답 데이터(response.data)안에 data필드, data필드안에 accessToken이있다.
    //pinia의 저장소에 accessToken 저장
    authStore.setAuth(at);
    await router.push('/mypage');
  }catch(e){
    console.log('로그인 실패', e);
  }
}

</script>


<template>
  <div class="container">
    <h1>로그인</h1>
    <LoginForm @submit="handleLogin"/>
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