<template>
  <swiper
    :modules="modules"
    :slides-per-view="slidesPerView"
    :space-between="spaceBetween"
    :effect="effect"
    :autoplay="autoplayEnabled ? autoplayConfig : false"
    :loop="loop"
    :pagination="paginationEnabled ? { clickable: true } : false"
    :navigation="navigationEnabled"
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
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

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
  pagination: {
    type: Boolean,
    default: false
  },
  navigation: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['swiper-init', 'slide-change'])

const modules = [Autoplay, EffectFade, EffectCoverflow, Pagination, Navigation]

const autoplayEnabled = ref(props.autoplay !== false)
const autoplayConfig = ref(
  typeof props.autoplay === 'object'
    ? props.autoplay
    : { delay: 3000, disableOnInteraction: false }
)
const paginationEnabled = ref(props.pagination)
const navigationEnabled = ref(props.navigation)

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

defineExpose({
  swiper: swiperInstance,
  slideNext: () => swiperInstance.value?.slideNext(),
  slidePrev: () => swiperInstance.value?.slidePrev(),
  slideTo: (index) => swiperInstance.value?.slideTo(index)
})
</script>

<style scoped>
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
</style>
