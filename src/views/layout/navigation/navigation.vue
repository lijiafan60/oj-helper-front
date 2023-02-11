<template>
  <div class="nav">
    <div class="logo"></div>
    <div class="navMenu">
      <n-menu mode="horizontal" :options="menuOptions" />
    </div>
    <div class="userOption"></div>
  </div>
</template>

<script setup lang="ts" name="Navigation">
import { h } from 'vue'
import { NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(RouterLink, { to: { name: 'home' } }, { default: () => '首页' }),
    key: 'home',
  },
  {
    label: () =>
      h(RouterLink, { to: { name: 'school' } }, { default: () => '学校' }),
    key: 'school',
  },
]
</script>

<style lang="less" scoped>
.nav {
  height: 100%;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .logo {
    height: 100%;
    width: 100px;
    background-color: black;
  }

  .navMenu {
    margin-left: 100px;
    width: 600px;
  }

  .userOption {
    height: 100%;
    width: 100px;
    margin-left: auto;
    background-color: antiquewhite;
  }
}
</style>
