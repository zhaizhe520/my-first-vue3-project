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
.skeleton-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}

.skeleton-card {
  display: flex;
  gap: 16px;
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.06);
}

.skeleton-img {
  width: 100px;
  min-width: 100px;
  height: 140px;
  background: #f3f3f3;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}

/* Image placeholder icon */
.skeleton-img::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 42px;
  height: 38px;
  border: 2.5px solid #e0e0e0;
  border-radius: 8px;
  opacity: 0.4;
}

/* Shimmer sweep */
.skeleton-img::after,
.skeleton-line::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 35%,
    rgba(255, 255, 255, 0.5) 45%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0.5) 55%,
    transparent 65%
  );
  animation: shimmer 2s ease-in-out infinite;
}

.skeleton-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  min-width: 0;
}

.skeleton-line {
  height: 14px;
  background: #f0f0f0;
  border-radius: 7px;
  position: relative;
  overflow: hidden;
}

.skeleton-line.title {
  height: 20px;
  width: 55%;
  background: #e8e8e8;
}

.skeleton-line.text { width: 90%; }
.skeleton-line.text.short { width: 65%; }

@keyframes shimmer {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>