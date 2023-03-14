<template>
  <div class="content">
    <n-card class="content-body" :hoverable="isHoverable" title="刷题数查询">
      <template #header-extra>
        <n-space>
          <n-input
            v-model:value="allName"
            type="text"
            placeholder="或许你所有OJ的ID都一样TT"
            style="border-radius: 10px"
          />
          <n-button type="primary" :on-click="setAllName"> 一键填入用户名 </n-button>
          <n-button type="warning" :on-click="clear"> 清空</n-button>
          <n-button type="success"> 查询</n-button>
        </n-space>
      </template>
      <n-dynamic-input v-model:value="dynamicInputValue" :on-create="onDynamicInputCreate">
        <template #create-button-default> 添加</template>
        <template #default="{ value }">
          <div style="display: flex; align-items: center; width: 100%">
            <n-checkbox v-model:checked="value.isCheck" style="margin-right: 12px" />
            <n-select
              v-model:value="value.ojName"
              :options="value.ojOptions"
              placeholder="选择OJ"
              style="margin-right: 12px; width: 250px"
            />
            <n-input v-model:value="value.username" type="text" placeholder="输入用户名" />
          </div>
        </template>
      </n-dynamic-input>
    </n-card>
    <div class="content-side">
      <n-card :hoverable="isHoverable" title="支持的OJ">
        <n-list>
          <n-list-item></n-list-item>
        </n-list>
      </n-card>
      <n-card :hoverable="isHoverable" title="比赛时刻表" class="contest-time">
        <n-list>
          <n-list-item></n-list-item>
        </n-list>
      </n-card>
      <n-card :hoverable="isHoverable" title="热门题单" class="hot-title-set">
        <n-list>
          <n-list-item></n-list-item>
        </n-list>
      </n-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isHoverable = ref(true)

const dynamicInputValue = ref([
  {
    isCheck: ref(true),
    ojName: ref('codeforces'),
    ojOptions: [
      {
        label: 'codeforces',
        value: 'codeforces',
      },
      {
        label: 'atcoder',
        value: 'atcoder',
      },
      {
        label: 'hdu',
        value: 'hdu',
      },
    ],
    username: '',
  },
  {
    isCheck: ref(true),
    ojName: ref('atcoder'),
    ojOptions: [
      {
        label: 'codeforces',
        value: 'codeforces',
      },
      {
        label: 'atcoder',
        value: 'atcoder',
      },
      {
        label: 'hdu',
        value: 'hdu',
      },
    ],
    username: '',
  },
  {
    isCheck: ref(true),
    ojName: ref('hdu'),
    ojOptions: [
      {
        label: 'codeforces',
        value: 'codeforces',
      },
      {
        label: 'atcoder',
        value: 'atcoder',
      },
      {
        label: 'hdu',
        value: 'hdu',
      },
    ],
    username: '',
  },
])

function onDynamicInputCreate() {
  return {
    isCheck: ref(true),
    ojName: ref(null),
    ojOptions: [
      {
        label: 'codeforces',
        value: 'codeforces',
      },
      {
        label: 'atcoder',
        value: 'atcoder',
      },
      {
        label: 'hdu',
        value: 'hdu',
      },
    ],
    username: ref(''),
  }
}

const allName = ref('')

function setAllName() {
  for (let item of dynamicInputValue.value) {
    item.username = allName.value
  }
}

function clear() {
  dynamicInputValue.value = []
}
</script>

<style lang="less" scoped>
@import '@less/global.less';

.content {
  height: 920px;
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

  .hot-title-set {
    margin-top: @gap_width;
  }
}

.n-card {
  border-radius: 10px;
}
</style>
