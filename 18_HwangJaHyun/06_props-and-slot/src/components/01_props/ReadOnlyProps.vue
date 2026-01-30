<script setup>
  const props = defineProps({
    readValue : {
      type : String,
      required : true
    }
  });
</script>

<template>
  <p>부모값 변경 확인</p>
  <h1>{{props.readValue}}</h1>
  자식 컴포넌트에서 부모 readValue 수정 시도 :
  <input type="text" v-model="props.readValue">

</template>

<style scoped>

</style>