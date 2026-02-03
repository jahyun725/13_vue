import { createApp } from 'vue'
import { createPinia } from 'pinia' // pinia instance 생성 함수 가져오기

import App from './App.vue'
import router from './router'

import {useAuthStore} from '@/stores/auth.js';
import {refreshUserToken} from '@/api/user.js';

async function bootstrap(){
  const app = createApp(App)

  app.use(createPinia()) // pinia instance를 생성한 후 App 컴포넌트에서 사용

  const authStore = useAuthStore();

  try{
    const response = await refreshUserToken();
    // 성공 == accessToken발급 + 쿠키에 있는 리프레시 토큰이 갱신 됨

    authStore.setAuth(response.data.data.accessToken);

    console.log('초기화 : 로그인 상태 유지');
  }catch(e){
    console.log('초기화 : 로그아웃 상태 유지');
  }

  app.use(router)
  app.mount('#app')
}

bootstrap();
/* 새로고침 -> 메모리 초기화 -> 로그아웃
* -> 리프레시토큰 가지고 토큰 재발급 -> pinia 수정
* -> 화면 리렌더링 -> 로그인 된 화면 === 로그인 유지
* */