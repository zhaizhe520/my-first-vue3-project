<template>
  
  <div class="container" 
       @mousedown="startRotate" 
       @touchstart="startRotate"
       @mousemove="rotating"
       @touchmove="rotating"
       @mouseup="stopRotate"
       @mouseleave="stopRotate"
       @touchend="stopRotate">
    
    <div class="cube" :style="cubeStyle">
      <div class="face front">
        <img src="" alt="">
      </div>
      <div class="face back">
        <img src="" alt="">
      </div>
      <div class="face left">
        <img src="" alt="">
      </div>
      <div class="face right">
        <img src="" alt="">
      </div>
      <div class="face top">
        <img src="" alt="">
      </div>
      <div class="face bottom">
        <img src="" alt="">
      </div>
    </div>
    
    <div class="tip"></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 旋转角度状态
const rotateX = ref(-25); // 初始仰角
const rotateY = ref(45);  // 初始偏角

// 拖拽逻辑状态
let isDragging = false;
let lastMouseX = 0;
let lastMouseY = 0;

// 计算样式
const cubeStyle = computed(() => ({
  transform: `rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg)`
}));

const startRotate = (e) => {
  isDragging = true;
  // 兼容触摸屏
  const clientX = e.clientX || e.touches[0].clientX;
  const clientY = e.clientY || e.touches[0].clientY;
  lastMouseX = clientX;
  lastMouseY = clientY;
};

const rotating = (e) => {
  if (!isDragging) return;

  const clientX = e.clientX || (e.touches && e.touches[0].clientX);
  const clientY = e.clientY || (e.touches && e.touches[0].clientY);

  const deltaX = clientX - lastMouseX;
  const deltaY = clientY - lastMouseY;

  // 这里的逻辑：
  // 鼠标横向移动 (deltaX) -> 绕着 Y 轴转
  // 鼠标纵向移动 (deltaY) -> 绕着 X 轴转
  rotateY.value += deltaX * 0.5; // 0.5 是灵敏度系数
  rotateX.value -= deltaY * 0.5;

  lastMouseX = clientX;
  lastMouseY = clientY;
};

const stopRotate = () => {
  isDragging = false;
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px; /* 必须要有透视感 */
  overflow: hidden;
  cursor: grab;
  user-select: none;
}

.container:active {
  cursor: grabbing;
}

.cube {
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out; /* 增加一点平滑感 */
}

/* 每个面的通用样式 */
.face {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
  font-weight: bold;
  opacity: 0.9;
}

/* 核心：通过 transform 将面定位到 3D 空间的六个方向 */
.front  { background: #3498db; transform: rotateY(0deg) translateZ(100px); }
.back   { background: #e74c3c; transform: rotateY(180deg) translateZ(100px); }
.left   { background: #2ecc71; transform: rotateY(-90deg) translateZ(100px); }
.right  { background: #f1c40f; transform: rotateY(90deg) translateZ(100px); }
.top    { background: #9b59b6; transform: rotateX(90deg) translateZ(100px); }
.bottom { background: #e67e22; transform: rotateX(-90deg) translateZ(100px); }

</style>