import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', {
  state: () => ({
    token: '',
    isLogin: false,
  }),
  getters: {
    getToken: (state) => state.token,
    loginState: (state) => state.isLogin,
  },
  actions: {
    login() {
      this.isLogin = true
    },
    logout() {
      this.isLogin = false
    },
  },
})
