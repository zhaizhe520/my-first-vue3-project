<template>
  <div class="character-page-container">
    <div class="bg-decoration"></div>

    <div class="main-layout">
      <div class="left-column">
        <div class="info-section">
          <div class="title-row">
            <h1 class="char-name">{{ activeChar.textName }}</h1>
            <div class="cv-info">
              <span>● 中文CV {{ activeChar.cvCN }}</span>
              <span>● 日文CV {{ activeChar.cvJP }}</span>
            </div>
          </div>
          <div class="quote-box">
            「{{ activeChar.quote }}」
          </div>
          <p class="description">
            {{ activeChar.desc }}
          </p>
        </div>

        <div class="slider-wrapper">
          <button class="arrow-btn">＜</button>
          <div class="thumbnails">
            <div 
              v-for="(item, index) in charList" 
              :key="index"
              :class="['thumb-card', { active: activeIndex === index }]"
              @click="activeIndex = index"
            >
              <div class="thumb-img-box">
                <img :src="item.imgSrc" :alt="item.textName">
              </div>
              <span class="thumb-name">{{ item.textName }}</span>
            </div>
          </div>
          <button class="arrow-btn">＞</button>
        </div>
      </div>

      <div class="center-display">
        <div class="main-image-wrapper">
          <img :src="activeChar.imgSrc" class="character-art" />
          
          <div class="hover-overlay">
             <img :src="activeChar.imgSrc" class="zoom-art" />
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>PAGE. 02</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 這裡你可以接入你的 useWorkStore 數據
const activeIndex = ref(0)

// 模擬數據，你可以替換成從 API 抓取的數據
const charList = ref([
  {
    textName: '乙葉',
    cvCN: '張安琪',
    cvJP: '加隈亞衣',
    quote: '此情此景......要與我共飲一杯嗎？',
    desc: '花原的師父乙葉，作為前谷風家政的頂級忍者，卻突然離奇失蹤，離開了組織。如今，她在暗中實施自己的計劃，她的真實目的撲朔迷離。',
    imgSrc: '', // 替換為你的角色立繪
  },
  {
    textName: '密涅瓦',
    cvCN: 'XXX',
    cvJP: 'XXX',
    quote: '戰場上的勝利，才是唯一的真理。',
    desc: '性格冷酷的戰士，對於指令絕對服從。',
    imgSrc: '',
  }
])

const activeChar = computed(() => charList.value[activeIndex.value])
</script>

<style scoped>
/* 核心容器 */
.character-page-container {
  position: relative;
  width: 100%;
  height: 600px;
  background-color: #f0f4f8;
  overflow: hidden;
  font-family: "Microsoft JhengHei", sans-serif;
  display: flex;
  align-items: center;
}

/* 布局控制 */
.main-layout {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  z-index: 2;
}

/* 左側欄位 */
.left-column {
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.char-name {
  font-size: 64px;
  color: #2c3e50;
  margin: 0;
}

.cv-info {
  font-size: 14px;
  color: #7f8c8d;
  margin-top: 10px;
}

.quote-box {
  background: #74b9ff;
  color: white;
  padding: 8px 20px;
  border-radius: 4px;
  display: inline-block;
  margin: 20px 0;
  font-weight: bold;
}

.description {
  color: #34495e;
  line-height: 1.8;
  max-width: 400px;
}

/* 幻燈片樣式 */
.slider-wrapper {
  display: flex;
  align-items: center;
  margin-top: 40px;
  gap: 10px;
}

.thumbnails {
  display: flex;
  gap: 15px;
}

.thumb-card {
  width: 80px;
  cursor: pointer;
  transition: transform 0.2s;
  text-align: center;
}

.thumb-card.active {
  transform: translateY(-5px);
}

.thumb-img-box {
  width: 80px;
  height: 110px;
  background: #fff;
  border: 2px solid transparent;
  overflow: hidden;
  border-radius: 4px;
}

.thumb-card.active .thumb-img-box {
  border-color: #38bdf8;
}

.thumb-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumb-name {
  font-size: 12px;
  display: block;
  margin-top: 5px;
}

/* 中間展示與 Hover 效果 */
.center-display {
  width: 50%;
  position: relative;
}

.main-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.character-art {
  height: 550px;
  position: relative;
  z-index: 5;
  transition: transform 0.3s ease;
}

/* 核心 Hover 邏輯：向右出現半透明圖 */
.hover-overlay {
  position: absolute;
  top: 0;
  right: -100px; /* 初始偏移 */
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s ease;
  pointer-events: none; /* 防止干擾鼠標 */
}

.zoom-art {
  height: 120%; /* 放大一點更有張力 */
  object-fit: cover;
  opacity: 0.5;
  filter: grayscale(30%);
}

.main-image-wrapper:hover .hover-overlay {
  opacity: 1;
  right: -250px; /* 向右滑出 */
}

.main-image-wrapper:hover .character-art {
  transform: scale(1.02);
}

/* 裝飾性背景 */
.bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, #fff 60%, #dff9fb 60%);
  z-index: 1;
}

.page-footer {
  position: absolute;
  bottom: 20px;
  right: 40px;
  background: #2c3e50;
  color: white;
  padding: 5px 20px;
  transform: skewX(-20deg);
}
</style>