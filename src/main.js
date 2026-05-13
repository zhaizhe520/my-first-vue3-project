import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import App from './App.vue'
import router from './router'
import { vPetTip } from './composables/petTip'

// 1. 创建实例
const app = createApp(App)
const pinia = createPinia() // 创建唯一的 Pinia 实例

// 2. 注册插件 (每个插件只 use 一次)
app.use(pinia)    // 【修改点】只保留这一个
app.use(router)

// 3. 注册指令
app.directive('pet-tip', vPetTip)

// 4. 挂载
app.mount('#app')