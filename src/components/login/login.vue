<template>
  <Dialog v-model="active" ref="dialog">
    <template #body>
      <div class="form-tabs">
        <n-tabs size="large" justify-content="space-evenly">
          <n-tab-pane name="signIn" tab="免密登录">
            <n-form label-width="auto" :model="noPasswordLoginInfo" label-placement="left">
              <n-form-item-row>
                <n-input v-model:value="noPasswordLoginInfo.phoneNumber" placeholder="手机号" />
              </n-form-item-row>
              <n-form-item-row>
                <n-input-group>
                  <n-input
                    v-model:value="noPasswordLoginInfo.verificationCode"
                    placeholder="验证码"
                  />
                  <n-button> 获取验证码 </n-button>
                </n-input-group>
              </n-form-item-row>
            </n-form>
            <n-button class="login-button" type="primary" block circle @click="noPasswordLogin">
              登录 / 注册
            </n-button>
          </n-tab-pane>
          <n-tab-pane name="signUp" tab="密码登录">
            <n-form label-width="auto" :model="passwordLoginInfo" label-placement="left">
              <n-form-item-row>
                <n-input
                  v-model:value="passwordLoginInfo.username"
                  placeholder="手机号/邮箱/用户名"
                />
              </n-form-item-row>
              <n-form-item-row>
                <n-input
                  v-model:value="passwordLoginInfo.password"
                  type="password"
                  show-password-on="mousedown"
                  placeholder="密码"
                  @keydown.enter="passwordLogin"
                />
              </n-form-item-row>
            </n-form>
            <n-button class="login-button" type="primary" block circle @click="passwordLogin">
              登录
            </n-button>
          </n-tab-pane>
        </n-tabs>
      </div>
      <div>其他登陆方式</div>
    </template>
  </Dialog>
</template>

<script setup>
import Dialog from '@cp/dialog/dialog.vue'
import { ref, toRefs, watch } from 'vue'
import { NTabPane, NTabs, NInput, NButton, NForm, NFormItemRow } from 'naive-ui'
import { doPasswordLogin } from '@/api/user'
import { userStore } from '@/stores/userStore'

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

const noPasswordLoginInfo = ref({
  phoneNumber: '',
  verificationCode: '',
})

const passwordLoginInfo = ref({
  username: '',
  password: '',
})

const dialog = ref()
function close() {
  dialog.value.closeDialog()
}

const store = userStore()
function noPasswordLogin() {
  console.log(noPasswordLoginInfo.value)
  close()
}
function passwordLogin() {
  doPasswordLogin(passwordLoginInfo.value).then((res) => {
    let code = res.data.code
    if (code === 20231) {
      store.login(res.data.data)
      close()
    }
  })
}
</script>

<style lang="less" scoped>
@import '@less/global.less';
.form-tabs {
  height: 300px;
  margin: 20px 15px;
}
.login-button {
  margin-top: 19px;
}
</style>
