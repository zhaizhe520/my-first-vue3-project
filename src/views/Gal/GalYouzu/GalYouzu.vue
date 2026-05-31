<script setup>
import { computed, onMounted } from 'vue'
import { useGalgameStore } from '@/stores/galgameStore'
import GalYouzuContentList from './GalYouzuContentList.vue';
import GalYouzuContent from './GalYouzuContent.vue';

const store = useGalgameStore()
const imgPrefix = import.meta.env.VITE_IMG_PREFIX

// 把 store.works 映射成卡片需要的格式，最新在前
const cards = computed(() =>
  store.works.map(w => ({
    id: w.id,
    date: w.release_date?.split('T')[0],
    isNew: w.release_date && new Date(w.release_date) > new Date(Date.now() - 90 * 86400000), // 90天内算新作
    image: w.image ? `${imgPrefix}${w.image}` : `https://picsum.photos/400/250?random=${w.id}`,
    text: w.title
  }))
)

onMounted(() => {
  store.fetchWorks(1)  // 1 = 柚子社
})
</script>

<template>
  <div>
    <GalYouzuContent />
  </div>

  <div class="gal-container">
    <div class="gal-grid">
      <GalYouzuContentList
        v-for="item in cards"
        :key="item.id"
        :data="item"
      />
    </div>
  </div>
</template>

<style scoped>
.gal-container {
  background-color: #22252a;
  min-height: 100vh;
  padding: 40px 20px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.gal-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
</style>