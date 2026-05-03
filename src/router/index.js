import { createRouter, createWebHistory } from 'vue-router'
// 引入所有頁面
import Home from '@/views/Home.vue'
import GAL from '@/views/GAL.vue'
import Anime from '@/views/anime.vue'
import light from '@/views/light.vue'
// 路徑對應頁面規則
// 懶加載
const routes = [
  { path: '/', component: Home },
  { path: '/gal', component: GAL },
  { path: '/anime', component: Anime },
  { path: '/light', component: light },
  {
  path: '/search',
  name: 'Search',
  component: () => import('@/views/Search.vue')
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router