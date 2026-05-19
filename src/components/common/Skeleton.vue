<template>
  <!-- v-show：两个元素始终在 DOM 中，图片在骨架屏背后偷偷加载 -->
  <div v-show="loading" class="skeleton-bg">
   <div>
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
.skeleton-bg{
display: flex;
justify-content: center;
align-items: center;

}



</style>


