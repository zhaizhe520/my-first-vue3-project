<template>
  <div class="search-page">
    <div class="search-header">
      <h2>正在搜尋：<span class="highlight">{{ keyword }}</span></h2>
      <p>找到 {{ filteredResults.length }} 個相關結果</p>
    </div>

    <!-- 搜尋結果展示區 -->
    <section class="line-container">
      <div v-for="(item, index) in filteredResults" :key="index" class="item-block">
        <div class="click-box" @click="openModal(item)">
          <img :src="item.imgSrc" :alt="item.alt">
        </div>
        <div class="textName">{{ item.textName }}</div>
        <!-- 顯示標籤 -->
        <div class="tags">
          <span v-for="tag in item.tagList" :key="tag" class="tag-badge">{{ tag }}</span>
        </div>
      </div>

      <!-- 空狀態處理 -->
      <div v-if="filteredResults.length === 0 && !workStore.isLoading" class="no-result">
        沒有找到「{{ keyword }}」換個名字
      </div>
    </section>
    
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useWorkStore } from '@/stores/useWorkStore' // 引入你的 Store

const route = useRoute()
const workStore = useWorkStore()

// 1. 從 URL 獲取關鍵字
const keyword = computed(() => route.query.key || '')

// 2. 核心過濾邏輯：將物件裡的陣列攤平後過濾
const filteredResults = computed(() => {
  if (!keyword.value) return []

  // 將 { 1: [], 2: [], ... } 轉為一維陣列
  const allItems = Object.values(workStore.pageAllData).flat()

  // 根據 標題(textName) 或 標籤(tagList) 進行模糊搜尋
  return allItems.filter(item => {
    const searchTarget = keyword.value.toLowerCase()
    const matchTitle = item.textName.toLowerCase().includes(searchTarget)
    const matchTags = item.tagList.some(tag => tag.toLowerCase().includes(searchTarget))
    
    return matchTitle || matchTags
  })
})

// 確保頁面載入時，如果 Store 是空的，就去抓資料
onMounted(() => {
  if (Object.values(workStore.pageAllData).flat().length === 0) {
    workStore.fetchWpPosts()
  }
})

const openModal = (item) => {
  // 實作你的彈窗邏輯
  console.log('查看項目：', item)
}
</script>

<style scoped>
/* 這裡可以沿用你原本首頁的卡片樣式 */
.click-box img{
  width: 200px;
  height: 300px;
}
.highlight { color: #38bdf8; font-weight: bold; }
.line-container { display: flex; flex-wrap: wrap; gap: 20px; padding: 20px; }
.item-block { width: 200px; }
.tag-badge { font-size: 12px; background: #eee; margin-right: 5px; padding: 2px 5px; border-radius: 4px; }
</style>