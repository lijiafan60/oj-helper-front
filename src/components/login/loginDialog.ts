import { createApp } from 'vue'
import login from './login.vue'

export default function LoginDialog() {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp(login, {
    visible: true,
    remove() {
      app.unmount()
      document.body.removeChild(div)
    },
  })
  return app.mount(div)
}
