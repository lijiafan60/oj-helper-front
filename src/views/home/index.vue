<template>
  <n-card>
    <div class="x"></div>
  </n-card>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import '@less/global.less';
.n-card {
  margin-top: 18px;
  height: 100%;
  width: @content_width;
  border-radius: 10px;
}
.x {
  height: 3000px;
  width: 5px;
  background-color: black;
}
</style>
