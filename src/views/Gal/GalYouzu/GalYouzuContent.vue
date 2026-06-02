<template>
<div class="company-profile">
  <!-- 顶部品牌标题区 -->
  <header class="profile-hero">
    <h1 class="brand-name">{{ company?.company_name || '柚子社' }}</h1>
    <a v-if="company?.website"
       :href="company.website"
       target="_blank"
       class="brand-website">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        官方网站
      </a>
  </header>

  <!-- 公司介绍（markdown） -->
  <section v-if="company?.introduction"
           v-html="marked.parse(company.introduction)"
           class="profile-intro" />

  <!-- 作品列表 -->
  <section class="works-section">
    <h2 class="works-title">作品列表</h2>
    <p v-if="store.isLoading" class="works-loading">加载中...</p>
    <ul v-else class="works-list">
      <li v-for="w in store.works" :key="w.id" class="work-item">
        <span class="work-name">{{ w.title }}</span>
        <span class="work-date">{{ w.release_date?.split('T')[0] }}</span>
      </li>
    </ul>
  </section>
</div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useGalgameStore } from '@/stores/galgameStore'
import { marked } from 'marked'

const store = useGalgameStore()

const company = computed(() =>
  store.companies.find(c => c.id === 1)
)

onMounted(() => {
  store.fetchCompanies()
  store.fetchWorks(1)
})
</script>

<style scoped>
/* ======= Noto 日文字体 ======= */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@500;600;700&display=swap');

/* ======= 根容器 ======= */
.company-profile {
  max-width: 720px;
  margin: 0 auto;
  padding: 48px 24px 64px;
  color: #44403C;
  font-family: 'Noto Sans JP', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.75;
}

/* ======= 顶部品牌标题 ======= */
.profile-hero {
  text-align: center;
  padding-bottom: 32px;
  margin-bottom: 40px;
  border-bottom: 1px solid #E7E5E4;
}

.brand-name {
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Noto Serif JP', serif;
  letter-spacing: 0.06em;
  color: #1C1917;
  margin: 0 0 12px;
}

.brand-website {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #CA8A04;
  text-decoration: none;
  padding: 6px 18px;
  border: 1px solid #F5DEB3;
  border-radius: 999px;
  transition: background 0.2s, border-color 0.2s;
  cursor: pointer;
}

.brand-website:hover {
  background: #FFFDF5;
  border-color: #CA8A04;
}

/* ======= 公司介绍 markdown ======= */
.profile-intro {
  margin-bottom: 44px;
  font-family: 'Noto Sans JP', sans-serif;
}

.profile-intro :deep(h2) {
  font-family: 'Noto Serif JP', serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1C1917;
  margin: 28px 0 12px;
  padding-left: 12px;
  border-left: 3px solid #CA8A04;
}

.profile-intro :deep(h3) {
  font-size: 1.05rem;
  font-weight: 600;
  color: #292524;
  margin: 22px 0 10px;
}

.profile-intro :deep(p) {
  font-size: 15px;
  color: #44403C;
  margin: 0 0 14px;
  line-height: 1.85;
}

.profile-intro :deep(a) {
  color: #CA8A04;
  text-decoration: underline;
}

.profile-intro :deep(ul),
.profile-intro :deep(ol) {
  padding-left: 20px;
  margin: 0 0 14px;
}

.profile-intro :deep(li) {
  font-size: 15px;
  color: #44403C;
  margin-bottom: 6px;
}

.profile-intro :deep(strong) {
  color: #1C1917;
  font-weight: 600;
}

/* ======= 作品列表 ======= */
.works-section {
  background: #FAFAF9;
  border-radius: 12px;
  padding: 28px 32px;
  border: 1px solid #E7E5E4;
}

.works-title {
  font-family: 'Noto Serif JP', serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1C1917;
  margin: 0 0 20px;
}

.works-loading {
  color: #A8A29E;
  font-size: 14px;
}

.works-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.work-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 12px 0;
  border-bottom: 1px solid #E7E5E4;
  transition: background 0.2s;
  cursor: default;
}

.work-item:last-child {
  border-bottom: none;
}

.work-item:hover {
  background: #FFFDF5;
  margin: 0 -12px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 6px;
}

.work-name {
  font-size: 15px;
  font-weight: 500;
  color: #1C1917;
  flex: 1;
  padding-right: 16px;
}

.work-date {
  font-size: 13px;
  color: #A8A29E;
  white-space: nowrap;
}
</style>
