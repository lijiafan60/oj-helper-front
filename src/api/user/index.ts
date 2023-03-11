import http from '@/api/axios'
export function doPasswordLogin(params: any) {
  return http.post('/user/login', params)
}

export function doLogout() {
  return http.post('/user/logout')
}

export function doUploadAvatar(data: any) {
  return http.post('/user/uploadAvatar', data, {
    headers: {
      // 表示上传的是文件,而不是普通的表单数据
      'Content-Type': 'multipart/form-data',
    },
  })
}
