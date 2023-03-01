import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@renderer/assets/css/tailwind.css'
import '@renderer/assets/css/styles.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

// ElementPlus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)

// pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.mount('#app')
