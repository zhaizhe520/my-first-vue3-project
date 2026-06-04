import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/Home.vue'
import GAL  from '@/views/GAL/GalHome.vue'
import Anime from '@/views/Anime/Anime.vue'
import Light from '@/views/Light/Light.vue'
import Login from '@/Login.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { hideNav: true }
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/gal',
    component: GAL,
    meta: { hideNav: true }
  },
  {
    path: '/anime', component: Anime
  },
  {
    path: '/light', component: Light,
    meta: { hideNav: true }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search/Search.vue'),
    meta: { hideNav: true }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫 —— 未登录全部踢到 /login
router.beforeEach(async (to) => {
  if (to.path === '/login') return true
  const { useAuthStore } = await import('@/stores/authStore')
  const auth = useAuthStore()
  if (!auth.user) return '/login'
  return true
})

export default router
