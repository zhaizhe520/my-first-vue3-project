import { createRouter, createWebHistory } from 'vue-router'
// 引入所有頁面
import Home from '@/views/Home/Home.vue'
import GAL  from '@/views/GAL/GalHome.vue'
import Anime from '@/views/Anime/Anime.vue'
import Light from '@/views/Light/Light.vue'

// 路徑對應頁面規則
// 懶加載
const routes = [
  {
    path: '/',
    component: Home,

  },
  {
    path: '/gal',
    component: GAL,
    meta: { hideNav: true } // 標記這個頁面不需要導航欄
  },
  {
    path: '/anime', component: Anime
  },
  {
    path: '/light', component: Light,
    meta: { hideNav: true } // 標記這個頁面不需要導航欄
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search/Search.vue'),
    meta: { hideNav: true } // 標記這個頁面不需要導航欄
  },
  

]


const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
