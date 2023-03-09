<template>
  <div class="nav">
    <div class="header-left"></div>
    <div class="header-mid">
      <n-menu mode="horizontal" :options="menuOptions" />
    </div>
    <div class="header-right">
      <NDropdown
        v-show="store.isLogin"
        :options="dropdownOptions"
        size="small"
        @select="handleSelect"
      >
        <NAvatar
          round
          size="medium"
          :src="store.userInfo.avatar"
          fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          style="cursor: pointer"
        ></NAvatar>
      </NDropdown>
      <NButton
        v-show="!store.isLogin"
        color="#32ca99"
        round
        strong
        @click="showLogin"
      >
        登录 / 注册
      </NButton>
      <Login v-model="active"></Login>
    </div>
  </div>
</template>

<script setup lang="ts" name="Navigation">
import { h, ref } from 'vue'
import type { Component } from 'vue'
import { NButton, NIcon, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { doLogout } from '@/api/user'
import { NAvatar } from 'naive-ui'
import { userStore } from '@/stores/userStore'
import Login from '@cp/login/login.vue'
import { LogOutOutline } from '@vicons/ionicons5'
import { UserProfile } from '@vicons/carbon'
import { IosSettings } from '@vicons/ionicons4'

const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    })
  }
}

const dropdownOptions = [
  {
    label: '主页',
    key: 'profile',
    icon: renderIcon(UserProfile),
  },
  {
    label: '设置',
    key: 'setting',
    icon: renderIcon(IosSettings),
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogOutOutline),
  },
]

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
  {
    label: () =>
      h(RouterLink, { to: { name: 'school' } }, { default: () => '排名' }),
    key: 'about',
  },
  {
    label: () =>
      h(RouterLink, { to: { name: 'school' } }, { default: () => '关于' }),
    key: 'about',
  },
]

const active = ref(false)

function showLogin() {
  active.value = true
}

function handleSelect(key: String) {
  switch (key) {
    case 'logout': {
      logout()
      break
    }
    case 'profile': {
      logout()
      break
    }
    case 'setting': {
      logout()
      break
    }
  }
}

const store = userStore()

function logout() {
  doLogout().then(() => {
    store.logout()
  })
}
</script>

<style lang="less" scoped>
@import '@less/global.less';

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
    width: @content_width - 600px;
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
