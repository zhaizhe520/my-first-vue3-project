<script setup>
import { ref } from 'vue'
import GalYouzuContentList from './GalYouzuContentList.vue';
import GalYouzuContent from './GalYouzuContent.vue';
// 引入我们将要创建的子组件


// 模拟你图片里的数据，想多一个方框，就在这里多写一个 {}
const newsList = ref([
  {
    id: 1,
    date: '2026.5.1',
    isNew: true,
    image: 'https://picsum.photos/400/250?random=1', // 替换成你的真实图片路径
    text: 'ゆずソフト最新作『ライムライト・レモネードジャム』のサントラ＆VFBの発売が決定しました！'
  },
  {
    id: 2,
    date: '2026.1.31',
    isNew: false,
    image: 'https://picsum.photos/400/250?random=2',
    text: 'ゆずソフト8年ぶりのライブイベント『YUZUSOFT SONG FEST 2026』のチケット情報を公开しました！！'
  },
  {
    id: 3,
    date: '2025.09.26',
    isNew: false,
    image: 'https://picsum.photos/400/250?random=3',
    text: 'ゆずソフト最新作『ライムライト・レモネードジャム』本日発売です！'
  },
  {
    id: 4,
    date: '2025.09.08',
    isNew: false,
    image: 'https://picsum.photos/400/250?random=4',
    text: 'ゆずソフト最新作『ライムライト・レモネードジャム』マスターアップしました！'
  }
])
</script>

<template>
    <div>
        <GalYouzuContent/>
    </div>
  <div class="gal-container">
    <div class="gal-grid">
      <GalYouzuContentList
        v-for="item in newsList" 
        :key="item.id" 
        :data="item" 
      />
    </div>
  </div>
</template>

<style scoped>
/* 整个页面的背景和布局 */
.gal-container {
  background-color: #22252a; /* 深色暗黑风背景 */
  min-height: 100vh;
  padding: 40px 20px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

/* 核心核心：自动排版网格 */
.gal-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  /* 自动填充：卡片最小 300px，最大撑满剩余空间，一行放不下自动换行 */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px; /* 卡片之间的间距 */
}
</style>

