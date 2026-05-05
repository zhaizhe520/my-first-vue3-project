<template>
  <!-- 只有當 hideNav 不為 true 時才顯示 -->
  <TopNav v-if="!route.meta.hideNav" />
  <!-- 【動態坑位】切換頁面就自動換內容 -->
  <router-view  />
  <!-- 以後你加底部組件也放這裡，所有頁面都顯示 -->
   
</template>

<script setup>
// 導入導航欄組件
import TopNav from "@/components/layout/TopNav.vue"
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
