<template>
  <div class="profile">
    <n-upload :custom-request="uploadAvatar" :show-file-list="false">
      <n-button> 上传头像</n-button>
    </n-upload>
  </div>
</template>

<script setup lang="ts">
import { UploadCustomRequestOptions, NotificationType, useNotification } from 'naive-ui'
import { doUploadAvatar } from '@/api/user'

const notification = useNotification()

function notify(type: NotificationType, msg: string) {
  notification[type]({
    content: msg,
    duration: 2500,
    keepAliveOnHover: true,
  })
}

function uploadAvatar({ file }: UploadCustomRequestOptions) {
  const formData = new FormData()
  formData.append('avatar', file.file as File)
  console.log(formData)
  doUploadAvatar(formData).then((response) => {
    notify('success', response.data.data)
  })
}
</script>

<style lang="less" scoped>
@import '@less/global.less';
.profile {
  height: 920px;
  width: @content_width;
  display: flex;
  flex-direction: row;
  margin-top: @gap_width;
}
</style>
