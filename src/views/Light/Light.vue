<template>
  <div class="page-container">
    
    <!-- 1. 用骨架屏组件包裹真实的列表内容，并把全局的加载状态传给 loading 属性 -->
    <novel-skeleton :loading="isLoading">
      
      <!-- 当 loading 为 false 时，骨架屏内部会自动展示这里的真实内容 -->
      <!-- 这样你就不用担心 pageAllData[currentPage] 还没抓到时报错了 -->
      <div class="content">
        <light-page :pageData="pageAllData[currentPage]" />
      </div>

    </novel-skeleton>

    <!-- 下方的翻页按钮保持原样，不受骨架屏影响，用户随时可见 -->
    <div class="bottom-buttons">
      <button @click="prevPage" :disabled="currentPage === 1">←</button>
      <div class="page-num">{{ currentPage }} / 100</div>
      <button @click="nextPage" :disabled="currentPage === 100">→</button>
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from '@/stores/loadingGlobalStore' // ⭐ 引入全局信号灯 Store
import { useWorkStore } from '@/stores/useWorkStore'
import LightPage from './LightPage.vue'
import NovelSkeleton from '@/components/common/Skeleton.vue' // ⭐ 引入你的骨架屏组件

//vue2选项写法
export default {
  components: { 
    LightPage,
    NovelSkeleton // ⭐ 注册骨架屏组件
  },
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    // 全局 Store 和文章 Store
    globalStore() { return useGlobalStore() },
    workStore() { return useWorkStore() },
    
    pageAllData() { return this.workStore.pageAllData },
    
    // ⭐ 把这里改为监听全局的加载状态，因为 Axios 拦截器控制的是全局电闸
    isLoading() { return this.globalStore.isLoading }
  },
  methods: {
    prevPage() { if (this.currentPage > 1) this.currentPage-- },
    nextPage() { if (this.currentPage < 100) this.currentPage++ }
  },
  mounted() {
    // 组件挂载后抓取数据（会自动触发 Axios 拦截器开启和关闭全局 loading）
    this.workStore.fetchWpPosts()
  }
}
</script>
<style scoped>
.bottom-buttons {
  width: 100%;
  position: fixed;
  bottom: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

button {
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
}

.page-num {
  font-size: 20px;
  font-weight: bold;
}

/*加載動畫 */
.loading-container {
  width: 100%;
  height: 100%;
  /* 給予一定高度，避免加載時畫面塌陷 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  /* 頂部顏色 */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loading-container p {
  color: #95a5a6;
  font-size: 14px;
  letter-spacing: 2px;
}
</style>