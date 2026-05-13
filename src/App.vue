<template>
  <!-- 只有當 hideNav 不為 true 時才顯示 -->
  <TopNav v-if="!route.meta.hideNav" />
  <!-- 【動態坑位】切換頁面就自動換內容 -->
  <router-view  />
  <!-- 以後你加底部組件也放這裡，所有頁面都顯示 -->

  <!--murasame組件-->
  <asyncPte v-if="isReady" />
  <!--murasame站位组件-->
  <BoxAnime  v-else/>

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
//占位组件
import BoxAnime from './components/common/BoxAnime.vue';


const route = useRoute()

// murasame组件做懒加载
const isReady = ref(false)

const asyncPte = defineAsyncComponent({
  // 1. 还原纯净的 import，让浏览器根据缓存速度决定加载时间
  loader: () => import('./components/common/murasame.vue'),
  
  loadingComponent: BoxAnime,
  
  // 2. 设置一个合理的延迟时间（例如 200ms-500ms）
  // 如果浏览器有缓存，加载几乎是瞬间的，动画直接被跳过
  delay: 2000 
})

onMounted(() => {
  isReady.value = true // 挂载后开启显示
  
})


</script>
