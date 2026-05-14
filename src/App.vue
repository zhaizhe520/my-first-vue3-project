<template>
  <!-- 只有當 hideNav 不為 true 時才顯示 -->
  <TopNav v-if="!route.meta.hideNav" />
  <!-- 【動態坑位】切換頁面就自動換內容 -->
  <router-view  />
  <!-- 以後你加底部組件也放這裡，所有頁面都顯示 -->

  <!--murasame的懒加载組件-->
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

//占位组件来实现组件没出现之前的动画效果
import BoxAnime from './components/common/BoxAnime.vue';


const route = useRoute()

// murasame组件做懒加载
const isReady = ref(false)

const asyncPte = defineAsyncComponent({
  loader: () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./components/common/murasame.vue'))
    }, 5000)
  }),
  // 【重点】Vue 内部会处理：在 loader 没完成前，它会一直显示这个组件

  // 并且不会因为 App.vue 的生命周期而闪现消失
  loadingComponent: BoxAnime,
  delay: 0 //超过2毫秒进入没加载出来进入BoxAnime组件?我那个live2dcubismcore.min.js要加载出来才能判断显示不显示，很烦
})

onMounted(() => {
  isReady.value = true // 挂载后开启显示
  
})


</script>
