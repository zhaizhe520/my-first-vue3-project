//GAL组件categories=10里面的图片抓取接口

import { defineStore } from 'pinia'
import axios from 'axios' // 

export const useGalGameStore = defineStore('work', {
  state: () => ({
    GalImgData: [], 
    isLoading: false
  }),

  actions: {
    // 定义一个抓取数据的方法
    async fetchGalImgData(categories=10) {
      this.isLoading = true
      try {
        // 请求你的 WordPress 接口，记得带上 _embed 才能拿到图片
        const response = await axios.get(`http://110.42.248.8:8080/wp-json/wp/v2/posts`, {
          params: {
            categories:categories,
            _embed: true 
          }
        })
        // 把抓到的数组赋值给 state
        this.GalImgData = response.data
      } catch (error) {
        console.error('抓取失败:', error)
      } finally {
        this.isLoading = false
      }
    }
  }
})