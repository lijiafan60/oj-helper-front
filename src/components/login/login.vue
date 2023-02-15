<template>
  <Dialog v-model="active" ref="dialog">
    <template #head></template>
    <template #body>
      <div class="form-tabs">
        <n-tabs
          default-value="signIn"
          size="large"
          justify-content="space-evenly"
        >
          <n-tab-pane name="signIn" tab="登录">
            <n-form label-placement="left" label-width="auto">
              <n-form-item-row label="用户名">
                <n-input />
              </n-form-item-row>
              <n-form-item-row label="密码">
                <n-input />
              </n-form-item-row>
            </n-form>
            <n-button type="primary" block secondary strong @click="close">
              登录
            </n-button>
          </n-tab-pane>
          <n-tab-pane name="signUp" tab="注册">
            <n-form label-placement="left" label-width="auto">
              <n-form-item-row label="用户名">
                <n-input />
              </n-form-item-row>
              <n-form-item-row label="密码">
                <n-input />
              </n-form-item-row>
              <n-form-item-row label="重复密码">
                <n-input />
              </n-form-item-row>
            </n-form>
            <n-button type="primary" block secondary strong @click="close">
              注册
            </n-button>
          </n-tab-pane>
        </n-tabs>
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import Dialog from '@cp/dialog/dialog.vue'
import { ref, toRefs, watch } from 'vue'
import { NTabPane, NTabs, NInput, NButton, NForm, NFormItemRow } from 'naive-ui'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  remove: {
    type: Function,
    default: null,
  },
})

let active = ref(false)
active.value = toRefs(props).visible.value

watch(
  () => active.value,
  (val) => {
    !val && props.remove()
  }
)

const dialog = ref()

function close() {
  dialog.value.closeDialog()
  props.remove()
}
</script>

<style lang="less" scoped>
.form-tabs {
  height: 300px;
  margin-bottom: 20px;
}
</style>
