<template>
  <div class="carousel-container">
    <div 
      class="bg-blur" 
      :style="{ backgroundImage: `url(${images[activeIndex]?.img})` }"
    ></div>

    <div class="slider-wrapper">
      
      <swiper
        :modules="modules"
        :space-between="10"
        :effect="'fade'"
        :fade-effect="{ crossFade: true }"
        :thumbs="{ swiper: thumbsSwiper }"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        class="main-swiper"
        @swiper="setMainSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(item, index) in images" :key="'main-' + index">
          <div class="img-box">
            <img :src="item.img" :alt="item.alt" />
          </div>
        </swiper-slide>
      </swiper>

      <swiper
        :space-between="12" 
        :slides-per-view="images.length" 
        :watch-slides-progress="true"
        class="thumbs-swiper"
        @swiper="setThumbsSwiper"
      >
        <swiper-slide v-for="(item, index) in images" :key="'thumb-' + index">
          <img :src="item.thumb || item.img" :alt="item.alt" />
        </swiper-slide>
      </swiper>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Thumbs, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

const modules = [Thumbs, Autoplay, EffectFade];

const images = ref([
  { img: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/Heaven-Burns-Red.jpg', thumb: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/Heaven-Burns-Red.jpg', alt: '海报1' },
  { img: 'https://picsum.photos/1200/600?random=2', thumb: 'https://picsum.photos/300/150?random=2', alt: '海报2' },
  { img: 'https://picsum.photos/1200/600?random=3', thumb: 'https://picsum.photos/300/150?random=3', alt: '海报3' },
  { img: 'https://picsum.photos/1200/600?random=4', thumb: 'https://picsum.photos/300/150?random=4', alt: '海报4' },
  { img: 'https://picsum.photos/1200/600?random=5', thumb: 'https://picsum.photos/300/150?random=5', alt: '海报5' },
  { img: 'https://picsum.photos/1200/600?random=6', thumb: 'https://picsum.photos/300/150?random=6', alt: '海报6' },
  { img: 'https://picsum.photos/1200/600?random=7', thumb: 'https://picsum.photos/300/150?random=7', alt: '海报7' },
]);

const mainSwiperInstance = ref(null);
const thumbsSwiper = ref(null);

const setMainSwiper = (swiper) => {
  mainSwiperInstance.value = swiper;
};

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const activeIndex = ref(0);
const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex;
};

// 强制刷新防歪逻辑
const handleResize = () => {
  if (mainSwiperInstance.value) mainSwiperInstance.value.update();
  if (thumbsSwiper.value) thumbsSwiper.value.update();
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
/* 组件最外层容器：设为 100% 从而完全继承你在父组件中指定的 div 大小 */
.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #111;
}

/* 轮播主体包裹区 */
.slider-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  box-sizing: border-box;
  padding: 20px;
}

/* 动态模糊背景 */
.bg-blur {
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  background-size: cover;
  background-position: center;
  filter: blur(30px);
  opacity: 0.6;
  z-index: 0;
  transition: background-image 0.5s ease;
}

/* 主轮播图：宽度占满包裹区的 100%，通过 max-width 控顶 */
.main-swiper {
  width: 100%;
  max-width: 900px;
  margin: 0 auto 24px auto;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  flex-shrink: 0;
}

.img-box {
  width: 100%;
  position: relative;
  padding-bottom: 50%; /* 保持 2:1 的标准比例，缩放绝不扭曲 */
  overflow: hidden;
  border-radius: 12px;
}

.img-box img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbs-swiper {
  width: 100%;
  max-width: 900px; /* 与大图的最大宽度对齐，视觉上更规整 */
  height: 80px;
  flex-shrink: 0;
  transition: height 0.3s ease;
}

/* 缩略图中的每一项 */
.thumbs-swiper .swiper-slide {
  height: 100%;
  opacity: 0.5; /* 未选中时保持 0.5 透明度 */
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  transition: opacity 0.3s ease, transform 0.2s ease; /* 加入轻微的缩放过渡 */
  
  /* 🧱 核心避坑：彻底清除浏览器默认的点击/聚焦外框 */
  -webkit-tap-highlight-color: transparent; /* 清除移动端点击时的蓝色高亮阴影 */
}

/* 鼠标悬停时的视觉反馈（加分项，不要可以删掉） */
.thumbs-swiper .swiper-slide:hover {
  opacity: 1;
}

:deep(.thumbs-swiper .swiper-slide-thumb-active) {
  box-shadow: inset 0 0 0 3px #df8181 ;
  transform: scale(0.98); 
}

.thumbs-swiper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ==========================================================================
   响应式媒体查询：当浏览器或父级容器缩小到 768px 以下时
   ========================================================================== */
@media (max-width: 768px) {
  .slider-wrapper {
    padding: 10px;
  }
  .main-swiper {
    margin-bottom: 16px;
  }
  .thumbs-swiper {
    height: 50px; /* 响应式：小窗口下缩略图自动变矮，防止由于均分导致格子太窄变成细长条 */
  }
  :deep(.thumbs-swiper .swiper-slide-thumb-active) {
    box-shadow: inset 0 0 0 2px #fff; /* 小白边同步变细 */
  }
}
</style>