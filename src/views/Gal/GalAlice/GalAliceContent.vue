<template>
<div>
    <h2>useGalgameStore</h2>
    <p v-if="store.isLoading">加载中</p>
    <ul v-else>
        <li v-for="w in store.works" :key="w.id">
            {{ w.title }}{{ w.id }}{{ w.release_date }}
        </li>
    </ul>
</div>

</template>


<script setup>
import{ onMounted } from 'vue'
import { useGalgameStore } from '@/stores/galgameStore'

const store = useGalgameStore()

onMounted(() => {
    store.fetchWorks(2)  //ALICE SOFT
})
</script>

<style scoped>


</style>


