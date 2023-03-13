<template>
  <div class="school">
    <!--应该从数据库取数据判断-->
    <div v-if="store.userInfo.school === ''">
      <n-button>设置学校</n-button>
    </div>
    <div v-else>
      <n-card class="school-table" hoverable>
        <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false">
        </n-data-table>
      </n-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userStore } from '@/stores/userStore'
import { DataTableColumns, NButton, useMessage } from 'naive-ui'
import { h } from 'vue'

const store = userStore()

interface userInfo {
  name: string
  cfName: string
  cfRating: number
  acName: string
  acRating: number
  allSolved: number
}

function show(row: userInfo) {
  message.info(`关注 ${row.name}`)
}

function createColumns(): DataTableColumns<userInfo> {
  return [
    {
      title: 'ID',
      key: 'name',
    },
    {
      title: 'Codeforces',
      key: 'codeforces',
      children: [
        {
          title: 'ID',
          key: 'cfName',
        },
        {
          title: 'Rating',
          key: 'cfRating',
          sorter: (row1, row2) => row1.cfRating - row2.cfRating,
        },
      ],
    },
    {
      title: 'Atcoder',
      key: 'atcoder',
      children: [
        {
          title: 'ID',
          key: 'acName',
        },
        {
          title: 'Rating',
          key: 'acRating',
          sorter: (row1, row2) => row1.acRating - row2.acRating,
        },
      ],
    },
    {
      title: '刷题数',
      key: 'allSolved',
      sorter: (row1, row2) => row1.allSolved - row2.allSolved,
    },
    {
      title: '暗箱操作',
      key: 'gift',
    },
    {
      title: 'PT',
      key: 'pt',
    },
    {
      title: '操作',
      key: 'action',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => show(row),
          },
          { default: () => '关注' }
        )
      },
    },
  ]
}

const message = useMessage()

const columns = createColumns()

const pagination = {
  pageSize: 10,
  page: 1,
}

const data: userInfo[] = [
  { name: 'test1', cfName: 'cf', cfRating: 1200, acName: 'ac', acRating: 1020, allSolved: 100 },
  { name: 'test2', cfName: 'cf', cfRating: 1000, acName: 'ac', acRating: 1100, allSolved: 200 },
  { name: 'test3', cfName: 'cf', cfRating: 1000, acName: 'ac', acRating: 1001, allSolved: 300 },
  { name: 'test3', cfName: 'cf', cfRating: 1000, acName: 'ac', acRating: 1001, allSolved: 300 },
  { name: 'test3', cfName: 'cf', cfRating: 1000, acName: 'ac', acRating: 1001, allSolved: 300 },
  { name: 'test3', cfName: 'cf', cfRating: 1000, acName: 'ac', acRating: 1001, allSolved: 300 },
  { name: 'test3', cfName: 'cf', cfRating: 1000, acName: 'ac', acRating: 1001, allSolved: 300 },
  { name: 'test3', cfName: 'cf', cfRating: 1000, acName: 'ac', acRating: 1001, allSolved: 300 },
  { name: 'test3', cfName: 'cf', cfRating: 1000, acName: 'ac', acRating: 1001, allSolved: 300 },
  { name: 'test3', cfName: 'cf', cfRating: 1000, acName: 'ac', acRating: 1001, allSolved: 300 },
  { name: 'test3', cfName: 'cf', cfRating: 1000, acName: 'ac', acRating: 1001, allSolved: 300 },
  { name: 'test3', cfName: 'cf', cfRating: 1000, acName: 'ac', acRating: 1001, allSolved: 300 },
  { name: 'test3', cfName: 'cf', cfRating: 1000, acName: 'ac', acRating: 1001, allSolved: 300 },
  { name: 'test3', cfName: 'cf', cfRating: 1000, acName: 'ac', acRating: 1001, allSolved: 300 },
  { name: 'test3', cfName: 'cf', cfRating: 1000, acName: 'ac', acRating: 1001, allSolved: 300 },
]
</script>

<style lang="less" scoped>
@import '@less/global.less';

.school {
  height: 920px;
  width: @content_width;
  display: flex;
  margin-top: @gap_width;

  .school-table {
    height: 920px;
    width: @content_width - @gap_width * 2;
    margin-left: @gap_width;
    margin-right: @gap_width;
  }
}
</style>
