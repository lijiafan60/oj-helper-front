<template>
  <AppProvider>
    <router-view />
  </AppProvider>
</template>

<script setup lang="ts">
import AppProvider from '@cp/application/AppProvider.vue'
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
</style>
