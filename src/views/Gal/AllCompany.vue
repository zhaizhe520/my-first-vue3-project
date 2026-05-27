<template>
<div>
    <h2>公司名</h2>
    <p v-if="store.isLoading">加载中</p>
    <ul v-else>
        <li v-for="c in store.companies" :key="c.id">
            {{ c.company_name }}
        </li>
    </ul>
</div>

</template>


<script setup>
import{ onMounted } from 'vue'
import { useGalgameStore } from '@/stores/galgameStore'

const store = useGalgameStore()

onMounted ( ()=>{
    store.fetchCompanies();
})
</script>

<style scoped>


</style>


