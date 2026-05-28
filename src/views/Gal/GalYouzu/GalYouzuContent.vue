<template>
<div>
    <h2>{{ company?.company_name || '柚子社' }}</h2>
    <div v-if="company?.website" class="website">
      <a :href="company.website" target="_blank">官网</a>
    </div>

    <!-- 公司介绍（markdown） -->
    <div v-if="company?.introduction" v-html="marked.parse(company.introduction)" class="company-intro"></div>
    
    <h3>作品列表</h3>
    <p v-if="store.isLoading">加载中</p>
    <ul v-else>
        <li v-for="w in store.works" :key="w.id">
            <strong>{{ w.title }}</strong>
            {{ w.release_date?.split('T')[0] }}
        </li>
    </ul>
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
.intro :deep(p) {
    margin: 4px 0;
    font-size: 14px;
}
</style>