import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import NCard from 'naive-ui'

const app = createApp(App)
app.use(createPinia()) // 启用 Pinia
app.use(router).use(NCard)
app.mount('#app')
