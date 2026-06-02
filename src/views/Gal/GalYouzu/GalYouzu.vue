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
  <div class="homeContainer">
    <div>
      <GalYouzuContent />
    </div>

    <div class="gal-container">
      <h1>
        介绍
      </h1>
      <div class="gal-grid">
        <GalYouzuContentList v-for="item in cards" :key="item.id" :data="item" />
      </div>
    </div>

  </div>

</template>

<style scoped>
.homeContainer{
  background-color: #FEFCE8;

}
.gal-container {
  min-height: 100vh;
  padding: 40px 20px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.gal-container h1 {
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto 24px;
  font-size: 3rem;
  font-weight: 700;
  color: #18d91e;
  padding-left: 4px;
  cursor: default;
  transition: text-shadow 0.3s ease;
}

.gal-container h1:hover {
  text-shadow: 0 4px 12px rgba(70, 223, 23, 0.35);
    cursor:pointer;
}

.gal-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
</style>