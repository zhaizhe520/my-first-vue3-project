<template>
  <div class="page-container">
    
    <!-- 1. 用骨架屏组件包裹真实的列表内容，并把全局的加载状态传给 loading 属性 -->
    <novel-skeleton :loading="isLoading" >
      
      <!-- 当 loading 为 false 时，骨架屏内部会自动展示这里的真实内容 -->
      <!-- 这样你就不用担心 pageAllData[currentPage] 还没抓到时报错了 -->
      <div class="content">
        <light-page :pageData="pageAllData[currentPage]" />
      </div>

    </novel-skeleton>

    <!-- 下方的翻页按钮保持原样，不受骨架屏影响，用户随时可见 -->
    <div v-show="!isLoading" class="bottom-buttons">
      <button @click="prevPage" :disabled="currentPage === 1"><</button>
      <div class="page-num">{{ currentPage }} / 100</div>
      <button @click="nextPage" :disabled="currentPage === 100">></button>
    </div>
  </div>
</template>

<script>
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
    workStore() { return useWorkStore() },
    
    pageAllData() { return this.workStore.pageAllData },
    
    // API 数据回来且最低展示 3 秒后，骨架屏才消失
    isLoading() { return this.workStore.isLoading }
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
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

button {
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(6px);
  color: #41db50;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.25s ease;
}

button:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

button:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.page-num {
  font-size: 16px;
  font-weight: 600;
  color: #6b8a9a;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(6px);
  padding: 8px 20px;
  border-radius: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
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