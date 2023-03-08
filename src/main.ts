import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from '@/App.vue'
import router from '@/router'
import NCard from 'naive-ui'

const app = createApp(App)
app.use(createPinia().use(piniaPluginPersistedstate)) // 启用 Pinia
app.use(router).use(NCard)
app.mount('#app')
