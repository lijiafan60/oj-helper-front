<template>
  <div class="nav">
    <div class="header-left"></div>
    <div class="header-mid">
      <n-menu mode="horizontal" :options="menuOptions" />
    </div>
    <div class="header-right">
      <NAvatar
        v-show="isLogin"
        round
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        @click="logout"
      ></NAvatar>
      <NButton v-show="!isLogin" color="#32ca99" round strong @click="login">
        登录 / 注册
      </NButton>
      <Login v-model="active"></Login>
    </div>
  </div>
</template>

<script setup lang="ts" name="Navigation">
import { h, ref } from 'vue'
import { NButton, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { NAvatar } from 'naive-ui'
import { userStore } from '@/stores/userStore'
import Login from '@cp/login/login.vue'

const store = userStore()

const isLogin = ref(store.isLogin)

const active = ref(false)

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

function login() {
  active.value = true
}

function logout() {
  store.logout()
  isLogin.value = store.isLogin
}
</script>

<style lang="less" scoped>
.nav {
  height: 100%;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .header-left {
    height: 100%;
    width: 100px;
    background-color: black;
  }

  .header-mid {
    margin-left: 100px;
    width: 600px;
  }

  .header-right {
    height: 100%;
    width: 100px;
    margin-left: auto;
    display: flex;
    align-items: center;
  }
}
</style>
