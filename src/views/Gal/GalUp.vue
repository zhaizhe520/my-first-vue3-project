<template>
  <div v-show="visible" class="back-to-top" @click="goTop" title="回到顶部">
    <img src="/logo.png" alt="回到顶部" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['toTop'])
const visible = ref(false)

let el = null

const onScroll = () => {
  visible.value = el?.scrollTop > 300
}

const goTop = () => {
  el?.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  el = document.querySelector('.gal-main')
  el?.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  el?.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  left: 230px;
  bottom: 40px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(56, 189, 248, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 300;
  box-shadow: 0 2px 12px rgba(56, 189, 248, 0.3);
  transition: opacity 0.25s, transform 0.25s;
}
.back-to-top:hover {
  transform: scale(1.12);
  background: rgba(56, 189, 248, 1);
}
.back-to-top img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}
</style>
