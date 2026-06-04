import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({ user: null, error: null }),
  actions: {
    async login(username, password) {
      try {
        const api = import.meta.env.VITE_API_BASE
        const res = await axios.post(`${api}/api/login`, { username, password })
        this.user = res.data.user
        this.error = null
      } catch (err) {
        this.error = '登录失败'
      }
    },
    async register(username, password) {
      try {
        const api = import.meta.env.VITE_API_BASE
        const res = await axios.post(`${api}/api/register`, { username, password })
        this.user = res.data.user
        this.error = null
      } catch (err) {
        this.error = err.response?.data?.error || '注册失败'
      }
    }
  }
})
