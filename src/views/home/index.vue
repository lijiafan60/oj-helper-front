<template>
  <div>home</div>
  <button @click="active = true">点击</button>
  <Dialog v-model="active"> h </Dialog>
</template>

<script setup lang="ts">
import Dialog from '@cp/dialog/dialog.vue'
import { ref } from 'vue'
let active = ref(false)
</script>

<style lang="less" scoped></style>
