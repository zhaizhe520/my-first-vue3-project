import axios from 'axios'
import { useGlobalStore } from '../stores/loadingStore' // 引入上面的全局信号灯

// 1. 创建一个标准的 axios 实例
const request = axios.create({
  baseURL: '', 
  timeout: 15000 // 15秒超时
})

// 2. 计数器，防止多个请求同时发，导致 Loading 闪烁
let requestCount = 0

// 开启 Loading 的函数
const showLoading = () => {
  if (requestCount === 0) {
    const globalStore = useGlobalStore()
    globalStore.setLoading(true) // 拉起骨架屏
  }
  requestCount++
}

// 关闭 Loading 的函数
const hideLoading = () => {
  requestCount--
  if (requestCount <= 0) {
    requestCount = 0
    const globalStore = useGlobalStore()
    globalStore.setLoading(false) // 关闭骨架屏
  }
}

// 3. 请求拦截器（数据发出去了，把幕布拉上）
request.interceptors.request.use(
  (config) => {
    showLoading()
    return config
  },
  (error) => {
    hideLoading()
    return Promise.reject(error)
  }
)

// 4. 响应拦截器（数据回来了，把幕布拉开）
request.interceptors.response.use(
  (response) => {
    hideLoading()
    // 关键：JS 没有类型限制，这里直接返回 response.data，外面用起来最舒服
    return response.data
  },
  (error) => {
    hideLoading()
    return Promise.reject(error)
  }
)

export default request