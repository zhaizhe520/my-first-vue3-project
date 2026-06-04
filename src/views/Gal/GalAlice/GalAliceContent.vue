<template>
<div class="alice-profile">
  <!-- 顶部品牌标题区 -->
  <header class="profile-hero">
    <h1 class="brand-name">{{ company?.company_name || 'ALICESOFT' }}</h1>
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
    <h2 class="works-title">▸ 作品列表</h2>
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
  store.companies.find(c => c.id === 2)
)

onMounted(() => {
  store.fetchCompanies()
  store.fetchWorks(2)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Russo+One&display=swap');

/* ======= 根容器 ======= */
.alice-profile {
  max-width: 720px;
  margin: 0 auto;
  padding: 48px 24px 64px;
  color: #E2E8F0;
  font-family: 'Chakra Petch', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.75;
  background: #0F0F23;
  border-radius: 16px;
  border: 1px solid #7C3AED33;
  box-shadow: 0 0 40px rgba(124, 58, 237, 0.08);
}

/* ======= 顶部品牌标题 ======= */
.profile-hero {
  text-align: center;
  padding-bottom: 32px;
  margin-bottom: 40px;
  border-bottom: 1px solid #7C3AED44;
}

.brand-name {
  font-size: 2.2rem;
  font-weight: 400;
  font-family: 'Russo One', sans-serif;
  letter-spacing: 0.1em;
  color: #E2E8F0;
  text-shadow: 0 0 20px rgba(212, 195, 240, 0.4);
  margin: 0 0 12px;
}

.brand-website {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #A78BFA;
  text-decoration: none;
  padding: 6px 18px;
  border: 1px solid #7C3AED66;
  border-radius: 4px;
  transition: border-color 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.brand-website:hover {
  border-color: #F43F5E;
  box-shadow: 0 0 12px rgba(244, 63, 94, 0.25);
}

/* ======= 公司介绍 markdown ======= */
.profile-intro {
  margin-bottom: 44px;
}

.profile-intro :deep(h2) {
  font-family: 'Russo One', sans-serif;
  font-size: 1.15rem;
  font-weight: 400;
  color: #A78BFA;
  margin: 28px 0 12px;
  padding-left: 12px;
  border-left: 3px solid #F43F5E;
}

.profile-intro :deep(h3) {
  font-size: 1.05rem;
  font-weight: 600;
  color: #C4B5FD;
  margin: 22px 0 10px;
}

.profile-intro :deep(p) {
  font-size: 15px;
  color: #CBD5E1;
  margin: 0 0 14px;
  line-height: 1.85;
}

.profile-intro :deep(a) {
  color: #F43F5E;
  text-decoration: underline;
}

.profile-intro :deep(ul),
.profile-intro :deep(ol) {
  padding-left: 20px;
  margin: 0 0 14px;
}

.profile-intro :deep(li) {
  font-size: 15px;
  color: #CBD5E1;
  margin-bottom: 6px;
}

.profile-intro :deep(strong) {
  color: #E2E8F0;
  font-weight: 600;
}

/* ======= 作品列表 ======= */
.works-section {
  background: #1A1A2E;
  border-radius: 8px;
  padding: 28px 32px;
  border: 1px solid #7C3AED22;
}

.works-title {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #A78BFA;
  text-shadow: 0 0 8px rgba(167, 139, 250, 0.3);
  margin: 0 0 20px;
}

.works-loading {
  color: #64748B;
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
  border-bottom: 1px solid #7C3AED1A;
  transition: background 0.2s, text-shadow 0.2s;
  cursor: default;
}

.work-item:last-child {
  border-bottom: none;
}

.work-item:hover {
  background: #7C3AED11;
  margin: 0 -12px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 4px;
}

.work-item:hover .work-name {
  text-shadow: 0 0 6px rgba(167, 139, 250, 0.4);
}

.work-name {
  font-size: 15px;
  font-weight: 500;
  color: #E2E8F0;
  flex: 1;
  padding-right: 16px;
  transition: text-shadow 0.2s;
}

.work-date {
  font-size: 13px;
  color: #64748B;
  white-space: nowrap;
}
</style>
