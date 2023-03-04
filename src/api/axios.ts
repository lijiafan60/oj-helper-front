import axios from 'axios'
import { userStore } from '@/stores/userStore'
import qs from 'qs'

// Content-Type=application/json ==> @RequestBody axios默认方式
// Content-Type=application/x-ww-form-urlencoded ==> @RequestParam 需要qs序列化
const http = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  withCredentials: false,
})

const store = userStore()
http.interceptors.request.use(
  (config) => {
    config.headers['token'] = store.token
    if (!config.headers['content-type']) {
      // 如果没有设置请求头
      if (config.method === 'post') {
        config.headers['content-type'] = 'application/x-www-form-urlencoded' // post 请求
        config.data = qs.stringify(config.data) // 序列化,比如表单数据
      } else {
        config.headers['content-type'] = 'application/json' // 默认类型
      }
    }
    return config
  },
  (error) => {
    Promise.reject(error).then(() => console.log(error))
  }
)
