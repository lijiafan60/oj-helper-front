import axios from 'axios'
import { userStore } from '@/stores/userStore'

// Content-Type=application/json ==> @RequestBody axios默认方式
// Content-Type=application/x-ww-form-urlencoded ==> @RequestParam 需要qs序列化
const http = axios.create({
  baseURL: 'http://localhost:9001',
  timeout: 1000,
  withCredentials: false,
})

export interface IResponseData {
  code: number
  msg: string
  data: object
}

http.interceptors.request.use(
  (config) => {
    config.headers['token'] = userStore().token
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

export default http
