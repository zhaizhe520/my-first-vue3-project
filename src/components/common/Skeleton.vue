<template>
  <!-- 当 loading 为 true 时显示骨架屏 -->
  <div v-if="loading" class="skeleton-wrapper">
    <div v-for="i in 4" :key="i" class="skeleton-card">
      <div class="skeleton-img"></div>
      <div class="skeleton-info">
        <div class="skeleton-line title"></div>
        <div class="skeleton-line text"></div>
        <div class="skeleton-line text short"></div>
      </div>
    </div>
  </div>

  <!-- 当 loading 为 false 时显示插槽里的真实内容 -->
  <slot v-else />
</template>

<script setup>
// 纯 JS 的接收属性写法，非常简单
defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
/* 这里的 CSS 和之前完全一样，负责骨架屏的流光动画 */
.skeleton-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
}
.skeleton-card {
  display: flex;
  gap: 15px;
  background: #fff;
  padding: 10px;
  border-radius: 8px;
}
.skeleton-img {
  width: 100px;
  height: 140px;
  background: #f2f2f2;
  border-radius: 4px;
}
.skeleton-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
}
.skeleton-line {
  height: 16px;
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
  background-size: 400% 100%;
  animation: loading-animation 1.4s ease infinite;
  border-radius: 4px;
}
.skeleton-line.title { height: 22px; width: 50%; }
.skeleton-line.text { width: 90%; }
.skeleton-line.text.short { width: 60%; }

@keyframes loading-animation {
  0% { background-position: 100% 0; }
  100% { background-position: 0 0; }
}
</style>