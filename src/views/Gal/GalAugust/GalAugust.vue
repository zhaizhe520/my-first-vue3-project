<template>
    <section class="container" v-pet-tip="'八月社作品！'">
        <SwiperThree :images="images" :autoplay="{ delay: 3000 }" :loop="true" />
    </section>
    <section>
        <GalAugustContent/>

    </section>
</template>

<script setup>
import SwiperThree from '@/components/common/SwiperThree.vue'
import GalAugustContent from './GalAugustContent.vue';
//传给SwiperThree.vue
const images = [
  { img: 'https://picsum.photos/id/1015/900/500', alt: '风景1', title: '山间溪流', desc: 'August 社作品' },
  { img: 'https://picsum.photos/id/1016/900/500', alt: '风景2', title: '雪山远景', desc: 'August 社作品' },
  { img: 'https://picsum.photos/id/1018/900/500', alt: '风景3', title: '湖边山色', desc: 'August 社作品' },
  { img: 'https://picsum.photos/id/1020/900/500', alt: '风景4', title: '林间小径', desc: 'August 社作品' },
  { img: 'https://picsum.photos/id/1025/900/500', alt: '风景5', title: '秋日森林', desc: 'August 社作品' },
]
</script>


<style >
.container{
    width: 100%;
    height: 400px;
}

</style>