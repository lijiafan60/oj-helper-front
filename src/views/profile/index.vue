<template>
  <div class="profile">
    <n-card hoverable>
      <div class="content">
        <div class="basicInfo">
          <n-upload :custom-request="uploadAvatar" :show-file-list="false">
            <n-button> 更新头像 </n-button>
          </n-upload>
        </div>
        <div class="statisticsInfo">
          <n-tabs
            default-value="overview"
            justify-content="space-evenly"
            type="line"
            tabs-padding="30"
          >
            <n-tab-pane name="overview" tab="总览">
              刷题数据 (题目类型占比) 、活跃天数、 cf rating图</n-tab-pane
            >
            <n-tab-pane name="achievement" tab="成就"> 比赛奖项 、刷题成就</n-tab-pane>
            <n-tab-pane name="plan" tab="计划"> todo list</n-tab-pane>
          </n-tabs>
        </div>
      </div>
    </n-card>
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
  margin-top: @gap_width;

  .content {
    height: 100%;
    width: @content_width;
    display: flex;
    flex-direction: row;

    .basicInfo {
      height: 100%;
      width: @content_side_width;
      display: flex;
    }

    .statisticsInfo {
      height: 100%;
      width: @content_body_width;
    }
  }
}

.n-card {
  border-radius: 10px;
}
</style>
