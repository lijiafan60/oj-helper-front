<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <slot name="default"></slot>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script setup lang="ts" name="AppProvider">
import { NDialogProvider, NNotificationProvider, NMessageProvider, NConfigProvider } from 'naive-ui'

const themeOverrides = {
  Card: {
    borderRadius: '10px',
  },
}
</script>
