import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore('global', () => {
  // 全局的加载状态，true 表示加载中，false 表示加载完了
  const isLoading = ref(false)

  // 改变这个状态的方法
  const setLoading = (status) => {
    isLoading.value = status
  }

  return {
    isLoading,
    setLoading
  }
})