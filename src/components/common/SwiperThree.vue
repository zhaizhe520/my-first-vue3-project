<template>
  <div class="swiper-wrapper">
    <button
      v-if="showNavButtons"
      class="swiper-nav swiper-prev"
      @click="slidePrev"
      aria-label="Previous slide"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <button
      v-if="showNavButtons"
      class="swiper-nav swiper-next"
      @click="slideNext"
      aria-label="Next slide"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
    </button>

    <swiper
      :modules="modules"
      :slides-per-view="slidesPerView"
      :space-between="spaceBetween"
      :effect="effect"
      :autoplay="autoplayEnabled ? autoplayConfig : false"
      :loop="loop"
      :pagination="paginationEnabled ? { clickable: true } : false"
      class="swiper-three"
      @swiper="onSwiperInit"
      @slide-change="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in images" :key="index">
        <div class="slide-content">
          <img :src="item.img" :alt="item.alt || 'slide ' + (index + 1)" />
          <div v-if="item.title || item.desc" class="slide-caption">
            <h3 v-if="item.title">{{ item.title }}</h3>
            <p v-if="item.desc">{{ item.desc }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, EffectCoverflow } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-coverflow'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  },
  effect: {
    type: String,
    default: 'slide'
  },
  slidesPerView: {
    type: Number,
    default: 1
  },
  spaceBetween: {
    type: Number,
    default: 0
  },
  autoplay: {
    type: [Boolean, Object],
    default: true
  },
  loop: {
    type: Boolean,
    default: true
  },
  showNavButtons: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['swiper-init', 'slide-change'])

const modules = [Autoplay, EffectFade, EffectCoverflow]

const autoplayEnabled = ref(props.autoplay !== false)
const autoplayConfig = ref(
  typeof props.autoplay === 'object'
    ? props.autoplay
    : { delay: 3000, disableOnInteraction: false }
)

const swiperInstance = ref(null)

const onSwiperInit = (swiper) => {
  swiperInstance.value = swiper
  emit('swiper-init', swiper)
}

const onSlideChange = (swiper) => {
  emit('slide-change', {
    swiper,
    activeIndex: swiper.activeIndex,
    realIndex: swiper.realIndex
  })
}

const slideNext = () => swiperInstance.value?.slideNext()
const slidePrev = () => swiperInstance.value?.slidePrev()

defineExpose({
  swiper: swiperInstance,
  slideNext,
  slidePrev,
  slideTo: (index) => swiperInstance.value?.slideTo(index)
})
</script>

<style scoped>
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.swiper-three {
  width: 100%;
  height: 100%;
}

.slide-content {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide-content img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.65));
  color: #fff;
}

.slide-caption h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 4px 0;
}

.slide-caption p {
  font-size: 0.875rem;
  margin: 0;
  opacity: 0.85;
}

/* ===== Navigation Buttons ===== */
.swiper-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.85);
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: background 0.2s ease-out, box-shadow 0.2s ease-out;
}

.swiper-nav:hover {
  background: #fff;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
}

.swiper-prev {
  left: 12px;
}

.swiper-next {
  right: 12px;
}

@media (max-width: 768px) {
  .swiper-nav {
    width: 36px;
    height: 36px;
  }

  .swiper-nav svg {
    width: 16px;
    height: 16px;
  }

  .swiper-prev {
    left: 8px;
  }

  .swiper-next {
    right: 8px;
  }
}
</style>
