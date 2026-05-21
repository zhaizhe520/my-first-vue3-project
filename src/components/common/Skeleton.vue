<template>
  <!-- v-show：两个元素始终在 DOM 中，图片在骨架屏背后偷偷加载 -->
  <div v-show="loading" class="skeleton-bg">
   <div class="imgContainer">
    <img src="http://110.42.248.8:8080/wp-content/uploads/2026/05/1953be89a7d39bb2c19e1b4d743f4991.jpg" alt="">
   </div>
  </div>

  <div v-show="!loading">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false
  },
})
</script>
<style>
.skeleton-bg {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #ffe4ec 0%, #a7eff5 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.imgContainer {
  width: 500px;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
}

.imgContainer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>


