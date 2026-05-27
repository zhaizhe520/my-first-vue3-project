<template>
<div>
    <h2>useGalgameStore</h2>
    <p v-if="store.isLoading">加载中</p>
    <ul v-else>
        <li v-for="w in store.works" :key="w.work_id">
            {{ w.title }} — {{ w.company?.name || '未知公司' }}
        </li>
    </ul>
</div>

</template>


<script setup>
import{ onMounted } from 'vue'
import { useGalgameStore } from '@/stores/galgameStore'

const store = useGalgameStore()

onMounted ( ()=>{
    store.fetchWorks();
})
</script>

<style scoped>


</style>


