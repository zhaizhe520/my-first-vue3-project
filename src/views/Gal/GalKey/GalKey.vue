<template>
    <div class="swiperContainer">
        <SwiperTwo :images="parentImages"/>
    </div>


</template>

<script setup>
import {ref} from 'vue'
import SwiperTwo from '@/components/common/SwiperTwo.vue';

 const parentImages=ref([
  { img: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/anemoi.jpg', thumb: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/anemoi.jpg', alt: '海报1' },
  { img: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/Stella-of-The-End.jpg', thumb: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/Stella-of-The-End.jpg', alt: '海报2' },
  { img: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/summerPocket.jpg', thumb: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/summerPocket.jpg', alt: '海报3' },
  { img: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/augment-protocol.jpg', thumb: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/augment-protocol.jpg', alt: '海报4' },
  { img: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/Heaven-Burns-Red.jpg', thumb: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/Heaven-Burns-Red.jpg', alt: '海报5' },
  { img: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/Little-Busters-Perfect-Edition.jpg', thumb: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/Little-Busters-Perfect-Edition.jpg', alt: '海报6' },
  { img: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/CLANNAD.jpg', thumb: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/CLANNAD.jpg', alt: '海报7' },

 ])


</script>


<style scoped>
.swiperContainer{
width: 100%;
height: 600px;
}
</style>