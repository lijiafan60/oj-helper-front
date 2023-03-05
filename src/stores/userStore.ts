import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', {
  state: () => ({
    token: '',
    isLogin: false,
    userInfo: {
      nickname: '',
      avatar: '',
      email: '',
      phone: '',
    },
  }),
  getters: {
    getToken: (state) => state.token,
    loginState: (state) => state.isLogin,
  },
  actions: {
    login(token: string) {
      this.isLogin = true
      this.token = token
    },
    logout() {
      this.isLogin = false
      this.token = ''
    },
  },
})
