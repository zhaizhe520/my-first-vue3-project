<script setup>
//引入路由

import CardBox from '@/components/home/cardBox.vue';
import ListBox from '@/components/home/listBox.vue';


//传图向listBox
import ImageBox2 from '@/assets/tech.jpg'
//传文字向listBox
//路由跳转
</script>


<template>
    <section class="githubCard">
        <CardBox />
        <div class="imgBox">
            <a href="https://zhaizhe520.github.io" target="_blank">
                <ListBox class="tech" :imageSrc="ImageBox2" v-pet-tip="'对我如何实现的感兴趣吗?'" />
            </a>
        </div>
    </section>
    <section>

    </section>





</template>

<style scoped>
/*github卡片 */
.githubCard {
    margin-top: 20px;

}

.imgBox {
    display: flex;

}

/* 意思是：在带有 .tech 标识的组件深层查找 .image-box */
.tech:deep(.image-box) {
    width: 700px;

}
</style>
