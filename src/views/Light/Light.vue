<template>
  <div class="page-container">
    <!-- 增加加載狀態判斷，防止數據還沒抓到時 pageData[0] 報錯 -->
    <div class="content" v-if="!isLoading && pageAllData[currentPage]">
      <light-page :pageData="pageAllData[currentPage]" />
    </div>
    <!-- 數據加載中顯示 -->

    <div class="bottom-buttons">
      <button @click="prevPage" :disabled="currentPage === 1">←</button>
      <div class="page-num">{{ currentPage }} / 100</div>
      <button @click="nextPage" :disabled="currentPage === 100">→</button>
    </div>
  </div>
</template>

<script>
import { useWorkStore } from '@/stores/useWorkStore' // 確保路徑正確
import LightPage from './LightPage.vue';

export default {
  components: { LightPage },
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    workStore() { return useWorkStore() },
    pageAllData() { return this.workStore.pageAllData },
    isLoading() { return this.workStore.isLoading }
  },
  methods: {
    prevPage() { if (this.currentPage > 1) this.currentPage-- },
    nextPage() { if (this.currentPage < 100) this.currentPage++ }
  },
  mounted() {
    // 組件掛載後抓取數據
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