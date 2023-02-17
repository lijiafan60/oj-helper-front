<template>
  <div class="content">
    <n-card class="content-body" hoverable="true" title="刷题数统计">
      <template #header-extra>
        <n-input
          v-model:value="allName"
          type="text"
          placeholder="一键填入用户名"
        />
        <n-button type="primary"> 填入</n-button>
      </template>
      <n-dynamic-input
        v-model:value="value"
        preset="pair"
        key-placeholder="选择OJ"
        value-placeholder="用户名"
      />
    </n-card>
    <div class="content-side">
      <n-card hoverable="true" title="支持的OJ">
        <n-list>
          <n-list-item></n-list-item>
        </n-list>
      </n-card>
      <n-card hoverable="true" title="比赛时刻表" class="contest-time">
        <n-list>
          <n-list-item></n-list-item>
        </n-list>
      </n-card>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      value: ref(['', '', '']),
      allName: ref(''),
    }
  },
})
</script>

<style lang="less" scoped>
@import '@less/global.less';

.content {
  height: 920px;
  width: @content_width;
  display: flex;
  flex-direction: row;
  margin-top: @gap_width;
}

.content-body {
  height: 100%;
  width: @content_body_width;
}

.content-side {
  height: 100%;
  margin-left: @gap_width;
  width: @content_side_width;
  .contest-time {
    margin-top: @gap_width;
  }
}
.n-card {
  border-radius: 10px;
}
</style>
