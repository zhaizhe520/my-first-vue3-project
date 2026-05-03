<template>
  <!-- 【全站通用，所有頁面都顯示】導航欄 -->
  <TopNav />
  <GAL></GAL>
  <!-- 【動態坑位】切換頁面就自動換內容 -->
  <router-view  />

  <!-- 以後你加底部組件也放這裡，所有頁面都顯示 -->
</template>

<script setup>
// 導入導航欄組件
import TopNav from "@/components/layout/TopNav.vue"
import GAL from "./views/GAL.vue";
</script>
