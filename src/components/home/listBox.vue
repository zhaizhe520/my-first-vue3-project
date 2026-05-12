<template>
  <div class="card-container">
    <div class="image-box">
     <img :src="imageSrc">
    </div>
    
    <div class="hover-text" >
        {{ title }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  //接受图片  
  imageSrc: {
    type: String,
    required: true
  },
  //接收字
  title:{
    type: String,
    default: '默认标题' // 如果父组件没传，就用这个，或者直接给空字符串 ''
  }
})




</script>

<style scoped>
.card-container {
  width: 300px;
  margin-top: 20px;
  cursor: pointer;
}

/* 图片方块容器 */
.image-box {
  width: 300px;
  height: 300px;
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden; /* 保证图片不超出圆角 */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保证图片铺满不失真 */
}

/* 下方文字行：初始透明度为 0 */
.hover-text {
  margin-top: 12px;
  text-align: center;
  color: #0fc1ee; /* 使用你之前的亮蓝色 */
  font-size: 16px;
  font-weight: bold;
  
  /* 核心逻辑：透明度过渡 */
  opacity: 0;
  transition: opacity 0.4s ease, transform 0.4s ease;
  transform: translateY(5px); /* 初始位置稍微下移，增加上浮动画感 */
}

/* 鼠标悬停在整个容器上时触发的效果 */
.card-container:hover .hover-text {
  opacity: 1;
  transform: translateY(0); /* 回到原位 */
}

/* 稍微给图片加个缩放感 */
.card-container:hover .image-box {
  transform: scale(1.02);
}
</style>