<template>
  <div class="search-page">
    <!-- 显示当前搜索关键词 -->
    <div>正在搜索：{{ keyword }}</div>

    <!-- 搜索结果区域，后续自己加列表、样式就行 -->
    <div class="result-box">
      <p>搜索结果展示区</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// 引入拿路由参数的方法
import { useRoute } from 'vue-router'

// 路由实例
const route = useRoute()
// 存放搜索关键词
const keyword = ref('')

// 页面加载完成，自动获取参数
onMounted(() => {
  // 接收首页搜索框传过来的 key
  if (route.query.key) {
    keyword.value = route.query.key
    // 在这里写：根据 keyword 去请求接口 / 过滤本地数据 的逻辑
  }
})
</script>