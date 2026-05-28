<script setup>

defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="gal-card">
    <div class="image-wrapper">
      <img :src="data.image" alt="news cover" class="card-img" />
      <span v-if="data.isNew" class="badge-new">NEW</span>
    </div>

    <div class="card-content">
      <div class="card-date">{{ data.date }}</div>
      <p class="card-text">{{ data.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.gal-card {
  background-color: #1b1d21; /* 卡片比底色更深一点，凸显层次 */
  border-radius: 12px;
  overflow: hidden; /* 保证图片圆角不溢出 */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

/* 鼠标悬停时的微互动效果 */
.gal-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10; /* 固定图片比例，防止图片高矮不一导致排版错乱 */
  background-color: #2a2d32;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 图片等比例裁剪铺满 */
}

/* NEW 标签样式 */
.badge-new {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #ff6b00; /* 亮眼橙色 */
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1; /* 让文字区域自动撑满卡片高度 */
}

.card-date {
  color: #71767e;
  font-size: 13px;
  font-weight: 500;
}

/* 绿色文字样式 */
.card-text {
  color: #8ae639; /* 仿照图中的绿色高亮，你也可以换成白色 #ffffff */
  font-size: 15px;
  line-height: 1.5;
  margin: 0;
  /* 限制文字最多显示 3 行，超出显示省略号，防止内容过多撑坏排版 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>