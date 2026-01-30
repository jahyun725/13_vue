<script setup>
  const props = defineProps({
    message: String /* 부모로부터 전달받은 message가 String 타입인지 검사 */
  });
</script>

<template>
  <h3>전달 받응 props :{{props.message}}</h3>
</template>

<style scoped>

</style>