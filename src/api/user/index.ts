import http from '@/api/axios'
export function doPasswordLogin(params: any) {
  return http.post('/user/login', params)
}

export function doLogout() {
  return http.post('/user/logout')
}
