<template>
  <!-- 只有當 hideNav 不為 true 時才顯示 -->
  <TopNav v-if="!route.meta.hideNav" />
  <!-- 【動態坑位】切換頁面就自動換內容 -->
  <router-view  />
  <!-- 以後你加底部組件也放這裡，所有頁面都顯示 -->

  <!--murasame的懒加载組件（后台静默加载，模型就绪前不可见）-->
  <asyncPte v-if="startLoad" :style="{ visibility: modelLoaded ? 'visible' : 'hidden' }" @loaded="onModelLoaded" />
  <!--murasame站位组件（模型就绪前一直显示）-->
  <BoxAnime v-if="!modelLoaded" />

<Login />

  
  <!--页脚-->
  <FooterBox/>




</template>

<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue'

// 導入導航欄組件
import TopNav from "@/components/layout/TopNav.vue"


import { useRoute } from 'vue-router'

//homey页脚
import FooterBox from "./components/home/footerBox.vue";

//占位组件来实现组件没出现之前的动画效果
import BoxAnime from './components/common/BoxAnime.vue';
import Login from './Login.vue';


const route = useRoute()
// murasame组件做懒加载
const startLoad = ref(false)
const modelLoaded = ref(false)

const asyncPte = defineAsyncComponent(() =>
  import('./components/common/murasame.vue')
)

function onModelLoaded() {
  modelLoaded.value = true
}

onMounted(() => {
  // 给 BoxAnime 一点时间先渲染，再开始后台加载 murasame
  startLoad.value = true
})




</script>
