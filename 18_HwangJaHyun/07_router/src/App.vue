<script setup>

</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Router Test</h1>
      <hr>
      <h2>Router 기초</h2>

    <!--
    RouterLink : 페이지간 네비게이션을 위한 컴포넌트, -a태그 처럼 동작 - 클릭시 to 속성의 URL로 라우팅 된다
    (라우팅 되면 해당 컴포넌트가 화면에 렌더링)

    active-class="클래스명"
    - 현재 라우트와 일차하는 <RouterLink> 테이블에 지정된 클래스를 추가하는 속성
    (브라우저 주소, to속성값이 같으면 클래스 추가
    -->
      <nav>
        <RouterLink to="/" active-class="active" replace>Home</RouterLink>
        <RouterLink to="/pathvariable/1" active-class="active">PathVariable(id:1)</RouterLink>
        <RouterLink to="/querystring?name=빈티나&age=1" active-class="active">QueryString</RouterLink>
      </nav>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <nav>
        <h2>Nested Router</h2>
        <RouterLink to="/nested">HOME</RouterLink>
        <RouterLink to="/nested/home">중첩 HOME VIEW</RouterLink>
        <RouterLink to="/nested/other">중첩 OHTER VIEW</RouterLink>
      </nav>
      <!-- 현재 활성화 된 라우트에 따라 해당 컴포넌트를 렌더링 하는 역할-->
      <RouterView/>

    </div>
  </header>
</template>

<style scoped>
  nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  font-size: 30px;
  }

  a {
  margin-left: 10px;
  }

  .active {
    background-color: red;
  color: white;
  }

  main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }
</style>


