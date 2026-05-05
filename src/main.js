// import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia' // 引入 Pinia
import App from './App.vue'
// 此時 router 資料夾&文件已建立，導入不會報錯
import router from './router'
const app = createApp(App)
// 全局掛載
app.use(router)
app.use(createPinia()) // 注册 Pinia
app.mount('#app')