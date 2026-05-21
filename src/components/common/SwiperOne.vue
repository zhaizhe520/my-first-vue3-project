<script setup>
import { onMounted, computed } from 'vue'
import { useGalGameStore } from '@/stores/loadingGlobalStore' 
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const galStore = useGalGameStore()
const modules = [Pagination, Navigation, Autoplay]

onMounted(() => {
  galStore.fetchGalImgData(10)
})

// 🌟 修复：删除了重复嵌套的错误代码，整理干净后的计算属性
const myImages = computed(() => {
  // 1. 先确保 GalImgData 存在，且里面至少有一篇文章
  if (!galStore.GalImgData || galStore.GalImgData.length === 0) {
    return []
  }
  
  // 2. 安全地拿到第一篇文章的 acf 对象
  const acf = galStore.GalImgData[0].acf
  if (!acf) {
    return []
  }
  
  // 3. 严格对齐你后台真实的字段名（第一个没下划线，后面有下划线）
  const rawImages = [
    acf.gal_swiper_img_1,   
    acf.gal_swiper_img_2,  
    acf.gal_swiper_img_3,
    acf.gal_swiper_img_4,
    acf.gal_swiper_img_5,
    acf.gal_swiper_img_6
  ]

  // 4. 进行过滤与兼容性转换
  return rawImages
    .filter(url => url !== undefined && url !== null && url !== '')
    .map(url => {
      // 💡 超级兼容：如果你在 WP 后台还没来得及把 Return Value 改成 Image URL
      // 导致拿到的是数字 ID（比如 113），这里会自动帮你换成 WP 默认的图片直链格式去尝试加载
      if (typeof url === 'number' || !isNaN(Number(url))) {
        return `http://110.42.248.8:8080/?p=${url}` 
      }
      return url // 如果是正常的字符串网址，直接返回
    })
})
</script>

<template>
  <Swiper 
    v-if="!galStore.isLoading && myImages.length > 0"
    :modules="modules"
    :navigation="true"
    :pagination="{ clickable: true }"
    :autoplay="{ delay: 2500 }"
    style="width: 100%; max-height: 500px;"
  >
    
    <SwiperSlide v-for="(url, index) in myImages" :key="index">
      <img :src="url" style="width: 100%; height: auto; object-fit: cover;" />
    </SwiperSlide>

  </Swiper>
  
  <div v-else-if="galStore.isLoading">加载中...</div>
  
  <div v-else>暂无轮播图数据，请检查后台配置</div>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #df9d9d;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>