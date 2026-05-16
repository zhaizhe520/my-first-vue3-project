<template>
    <div class="swiperContainer">
        <SwiperTwo />
    </div>


</template>

<script setup>
import SwiperTwo from '@/components/common/SwiperTwo.vue';



//传值给SwiperOne


props:{


}


</script>


<style scoped>
.swiperContainer{
width: 100%;
height: 600px;
}
</style>