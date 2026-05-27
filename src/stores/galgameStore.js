import {defineStore}  from 'pinia'
import axios from 'axios'

export const useGalgameStore = defineStore('galgame',{
    state:()=>({
        companies:[],
        works:[],
        isLoading:false,
    }),

    actions: {
    async fetchCompanies() {
      this.isLoading = true
      try {
        const api = import.meta.env.VITE_API_BASE
        const res = await axios.get(`${api}/api/companies`)
        this.companies = res.data
      } catch (err) {
        console.error('获取公司数据失败:', err)
      } finally {
        this.isLoading = false
      }
    },
    async fetchWorks() {
      this.isLoading = true
      try {
        const api = import.meta.env.VITE_API_BASE
        const res = await axios.get(`${api}/api/works`)
        this.works = res.data
      } catch (err) {
        console.error('获取作品数据失败:', err)
      } finally {
        this.isLoading = false
      }
    }
  }
})


