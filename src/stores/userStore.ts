import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', {
  state: () => ({
    isLogin: false,
  }),
  getters: {
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
