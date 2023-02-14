<template>
  <div>home</div>
  <button @click="active = true">点击</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let active = ref(false)
</script>

<style lang="less" scoped></style>
