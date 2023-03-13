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
  school: string
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
      school: '',
    },
  }),
  getters: {
    getToken: (state) => state.token,
    loginState: (state) => state.isLogin,
    getAvatarPath: (state) => {
      return 'http://localhost:9001/' + state.userInfo.avatar
    },
  },
  actions: {
    login(data: userData) {
      this.isLogin = true
      this.token = data.token
      this.userInfo.nickname = data.nickname
      this.userInfo.email = data.email
      this.userInfo.phone = data.phone
      this.userInfo.avatar = data.avatar
      this.userInfo.school = data.school
    },
    logout() {
      this.isLogin = false
      this.token = ''
    },
  },
  persist: true,
})
