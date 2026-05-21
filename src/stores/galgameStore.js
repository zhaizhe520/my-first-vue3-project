import {defineStore}  from 'pinia'
import axios from 'axios'

export const useGalgameStore = defineStore('galgame',{
    state:()=>({
        companies:[],
        isLoading:false,
    }),

    actions: {
    async fetchCompanies() {
      this.isLoading = true
      try {
        const res = await axios.get('http://localhost:3000/api/companies')
        this.companies = res.data
      } catch (err) {
        console.error('获取公司数据失败:', err)
      } finally {
        this.isLoading = false
      }
    }
  }
})


