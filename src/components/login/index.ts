import Vue from 'vue'
import login from './loginDialog.vue'

const LoginDialog = Vue.createApp(login)

login.install = function () {
  const parent = document.createElement('div')
  LoginDialog.mount(parent)
}
export default login
