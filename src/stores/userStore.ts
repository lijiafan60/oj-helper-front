import { defineStore } from 'pinia'

interface userData {
  id: number
  username: string
  nickname: string
  password: string
  avatar: string
  email: string
  phone: string
  token: string
}
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
    login(data: userData) {
      this.isLogin = true
      this.token = data.token
      this.userInfo.nickname = data.nickname
      this.userInfo.email = data.email
      this.userInfo.phone = data.phone
      this.userInfo.avatar = data.avatar
    },
    logout() {
      this.isLogin = false
      this.token = ''
    },
  },
  persist: true,
})
