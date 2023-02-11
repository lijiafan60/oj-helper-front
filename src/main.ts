import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'

createApp(App)
  .use(createPinia()) // 启用 Pinia
  .use(router)
  .mount('#app')
