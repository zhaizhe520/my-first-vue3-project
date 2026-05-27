<template>
<div class="all-company-panel">
    <h2>公司列表</h2>
    <p v-if="store.isLoading">加载中</p>
    <ul v-else class="company-list">
        <li v-for="c in store.companies" :key="c.id"
            class="company-item"
            @click="$emit('select', c.id)">
            {{ c.company_name }}
        </li>
    </ul>
</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useGalgameStore } from '@/stores/galgameStore'

defineEmits(['select'])

const store = useGalgameStore()

onMounted(() => {
    store.fetchCompanies()
})
</script>

<style scoped>
.all-company-panel {
    padding: 10px 20px;
    background: #fff;
    border-bottom: 1px solid #eee;
}
.company-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
    padding: 0;
}
.company-item {
    padding: 6px 14px;
    background: #e0f2fe;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
}
.company-item:hover {
    background: #7dd3fc;
    color: #fff;
}
</style>
