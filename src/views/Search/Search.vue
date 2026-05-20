<template>
  <div class="search-page" >
    <div class="full-container"></div>
    <div class="work-container">
      <div class="search-header">
        <h2>正在搜尋：<span class="highlight">{{ keyword }}</span></h2>
        <p>找到 {{ filteredResults.length }} 個相關結果</p>
      </div>

      <section class="line-container">
        <div v-for="(item, index) in filteredResults" :key="index" class="item-block">
          <div class="click-box" @click="openModal(item)">
            <img :src="item.imgSrc" :alt="item.alt" loading="lazy">
          </div>
          <div class="textName">{{ item.textName }}</div>
          <div class="tags">
            <span v-for="tag in item.tagList" :key="tag" class="tag-badge">{{ tag }}</span>
          </div>
        </div>

        <div v-if="filteredResults.length === 0 && !workStore.isLoading" class="no-result">
          沒有找到「{{ keyword }}」換個名字
        </div>
      </section>

      <div v-if="activeItem" class="modal-mask" @click="closeModal">
        <div class="modal-content" @click.stop>
          <div class="modal-img">
            <img :src="activeItem.imgSrc" :alt="activeItem.alt" loading="lazy">
          </div>
          <div class="mask-text1">
            <div class="text0">{{ activeItem.text0 }}</div>
            <p class="text1">{{ activeItem.text1 }}</p>
            <p class="text2">{{ activeItem.text2 }}</p>
            <p class="text3">{{ activeItem.text3 }}</p>
            <div class="tag-group">
              <span v-for="(tag, tIdx) in activeItem.tagList" :key="tIdx" class="tag-item">
                {{ tag }}
              </span>
            </div>
            <div class="text5">
              {{ activeItem.text5 }}
              <p>{{ activeItem.text6 }}</p>
            </div>
          </div>
          <button type="button" @click="closeModal">X</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useWorkStore } from '@/stores/useWorkStore'

const route = useRoute()
const workStore = useWorkStore()
const activeItem = ref(null)

const keyword = computed(() => route.query.key || '')

const filteredResults = computed(() => {
  if (!keyword.value) return []

  const allItems = Object.values(workStore.pageAllData).flat()

  return allItems.filter((item) => {
    const searchTarget = keyword.value.toLowerCase()
    const matchTitle = item.textName.toLowerCase().includes(searchTarget)
    const matchTags = item.tagList.some((tag) => tag.toLowerCase().includes(searchTarget))

    return matchTitle || matchTags
  })
})

onMounted(() => {
  if (Object.values(workStore.pageAllData).flat().length === 0) {
    workStore.fetchWpPosts()
  }
})

const openModal = (item) => {
  activeItem.value = item
}

const closeModal = () => {
  activeItem.value = null
}
</script>

<style scoped>
.search-page {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
}

.full-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  min-height: 100vh;
  z-index: -1;
  background: linear-gradient(165deg, #f9a8d4 0%, #fbcfe8 32%, #fce7f3 58%, #fdf2f8 82%, #ffffff 100%);
}

.work-container {
  position: relative;
  z-index: 0;
  padding-bottom: 40px;
}

.search-header {
  padding: 24px 20px 8px;
}

.search-header h2 {
  margin: 0 0 8px;
  font-size: 1.25rem;
  color: #1e293b;
}

.search-header p {
  margin: 0;
  color: #64748b;
}

.highlight {
  color: #db2777;
  font-weight: bold;
}

.line-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  padding: 0 20px 20px;
}

.item-block {
  width: calc(25% - 20px);
  margin-bottom: 30px;
}

.line1,
.line2 {
  display: flex;
  justify-content: space-between;
}

.click-box {
  position: relative;
  margin: 20px;
  width: 250px;
  height: 400px;
  background: #eee;
  cursor: pointer;
}

.click-box img {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 400px;
  object-fit: cover;
  border: solid;
  border-radius: 5px;
  border-style: groove;
}

.click-box:hover {
  transform: translateY(-5px);
}

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background: rgb(253, 253, 253);
  border-radius: 3px;
  width: 850px;
  height: 700px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.mask-text1 {
  margin-top: 20px;
  justify-content: space-evenly;
}

.modal-img {
  width: 300px;
  height: 500px;
  background-color: aqua;
}

.modal-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.modal-content button {
  position: absolute;
  top: 10px;
  right: 10px;
  gap: 10px;
  z-index: 999;
  cursor: pointer;
  color: pink;
  font-size: 20px;
  border: none;
  background: transparent;
}

.textName {
  opacity: 0;
  transition: all 0.5s;
  color: pink;
  margin: 20px;
  width: 250px;
  display: flex;
  justify-content: center;
}

.click-box:hover~.textName {
  opacity: 1;
}

.text0 {
  color: rgb(140, 205, 195);
  font-size: 20px;
  display: flex;
  justify-content: center;
}

.text1 {
  color: red;
  font-size: 16px;
}

.text2 {
  color: red;
  font-size: 16px;
}

.text3 {
  color: rgb(7, 165, 245);
  font-size: 16px;
}

.text4 {
  color: rgb(7, 165, 245);
  font-size: 16px;
}

.text5 {
  margin-top: 20px;
  width: 500px;
  height: 200px;
  color: rgb(161, 161, 163);
  text-indent: 2em;
  white-space: pre-line;
}

.text6 {
  width: 500px;
  height: 200px;
  color: rgb(161, 161, 163);
  text-indent: 2em;
  white-space: pre-line;
}

.tag-group {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}

.tag-title {
  color: #1b8ca8;
  font-size: 16px;
}

.tag-item {
  border: 2px solid rgb(9, 125, 227);
  background-color: rgb(136, 217, 244);
  padding: 2px 6px;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
}

.tags {
  margin: 0 20px 0;
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag-badge {
  font-size: 12px;
  background: rgb(136, 217, 244);
  border: 1px solid rgb(9, 125, 227);
  padding: 2px 6px;
  border-radius: 4px;
  color: #fff;
}

.no-result {
  width: 100%;
  padding: 40px 20px;
  text-align: center;
  color: #64748b;
}

@media (max-width: 1200px) {
  .item-block {
    width: calc(33.333% - 20px);
  }
}

@media (max-width: 900px) {
  .item-block {
    width: calc(50% - 20px);
  }

  .modal-content {
    width: 95vw;
    max-width: 850px;
    height: auto;
    min-height: 500px;
    flex-direction: column;
    padding: 48px 16px 24px;
    overflow-y: auto;
  }

  .mask-text1 {
    width: 100%;
  }

  .text5,
  .text5 p {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
}
</style>
