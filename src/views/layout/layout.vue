<template>
  <n-layout>
    <n-layout-header bordered>
      <navigation />
    </n-layout-header>
    <n-layout-content content-style="padding: 24px;">
      <router-view />
    </n-layout-content>
  </n-layout>
</template>

<script setup lang="ts">
import { NLayout } from 'naive-ui'
import { NLayoutHeader } from 'naive-ui'
import { NLayoutContent } from 'naive-ui'
import Navigation from '@views/layout/navigation/navigation.vue'
</script>

<style lang="less" scoped>
.n-layout-header {
  height: 56px;
  background-color: white;
}
</style>
