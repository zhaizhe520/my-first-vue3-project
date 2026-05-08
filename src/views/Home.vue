<script setup>

import CardBox from '@/components/home/cardBox.vue';
import ListBox from '@/components/home/listBox.vue';


//传图向listBox
import ImageBox1 from '@/assets/cy.jpg'
import ImageBox2 from '@/assets/tech.jpg'
import HeaderBox from '@/components/home/headerBox.vue';
//传文字向listBox
const dynamicText1 = "我是看板娘丛雨哦"
const dynamicText2 = "感兴趣的话技术博客里有实现效果"

</script>


<template>
<section class="githubCard">
    <CardBox />
    <div class="imgBox">
        <ListBox :imageSrc="ImageBox1" :title="dynamicText1" v-pet-tip="'点击可以详细查看我是谁哦！'"/>
        <ListBox :imageSrc="ImageBox2" :title="dynamicText2" v-pet-tip="'对我如何实现的感兴趣吗?'"/>
    </div>
</section>
<section>
    
</section>





</template>

<style>
/*github卡片 */
.githubCard{
    margin-top: 20px;

}
.imgBox{
    display: flex;
    width: 680px;
    justify-content: space-between; /* 两端对齐，中间自动分 */
}
</style>
