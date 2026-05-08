<template>
  <div class="company-container">
    <div v-for="(item, index) in companyList" :key="index" class="company-card">
      <h3 class="role-title">{{ item.role }}</h3>
      
      <div class="avatar-wrapper">
        <img :src="item.avatar" :alt="item.name" />
      </div>

      <div class="info-section">
        <h2 class="name">{{ item.name }}</h2>
        <p class="description">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const companyList = [
  { role: '柚子社', name: '', desc: '', avatar: 'https://via.placeholder.com/150' },
  { role: 'A社', name: 'A社', desc: '长期活跃于中日动画界第一线及插画界、游戏圈的多栖实力派绘师。', avatar: 'https://via.placeholder.com/150' },
  { role: 'KEY社', name: 'KEY社', desc: '日本美少女游戏界异色风格代表绘师，擅长诡谲的视觉设计及绚丽的色彩表现。', avatar: 'https://via.placeholder.com/150' },
  { role: '调色板社', name: '调色板社', desc: '测试超长文本自动换行功能：这是一段非常非常长的描述文字，用来确保它在达到容器宽度时会自动向下延伸而不会横向溢出。', avatar: 'https://via.placeholder.com/150' },
  { role: '人物设计', name: 'Werkbau', desc: '近期参与作品有《女神异闻录：夜幕魅影》《Summer Pockets》等。', avatar: 'https://via.placeholder.com/150' },
  { role: '概念设计', name: '大石龙子', desc: '主要负责作品有《Forest》《赫炎的印加诺克》《徒花异谭》等。', avatar: 'https://via.placeholder.com/150' },
];
</script>

<style scoped>
.company-container {
  display: flex;
  justify-content: space-around; /* 均匀分布 */
  align-items: flex-start;
  padding: 60px 20px;
  background-color: #fceec5;
  height: 100%; /* 撑满全屏高度 */
  box-sizing: border-box;
  overflow: hidden; /* 防止内容过多出现外部滚动条 */
}

.company-card {
  flex: 1;
  position: relative; /* 为伪元素定位 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
}

/* 绘制粉色竖线 */
.company-card::after {
  content: "";
  position: absolute;
  right: -10px; /* 定位在卡片右侧 */
  top: 20%; /* 线条高度起始点 */
  height: 60%; /* 线条长度 */
  width: 2px;
  background-color: #ffb6c1; /* 浅粉色 */
}

/* 最后一个卡片不显示竖线 */
.company-card:last-child::after {
  display: none;
}

.company-card:nth-child(even) {
  margin-top: 100px;
}

.role-title {
  font-family: "KaiTi", "STKaiti", cursive;
  color: #63b3ba;
  font-size: 1.5rem;
  margin-bottom: 15px;
  /* 标题阴影 */
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.avatar-wrapper {
  width: 120px; /* 固定宽度或百分比 */
  aspect-ratio: 1/1;
  border: 4px solid #fff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  margin-bottom: 20px;
}

.avatar-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-section {
  width: 100%;
  text-align: center;
}

.name {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  /* 名字文字阴影 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.description {
  font-size: 0.85rem;
  line-height: 1.6;
  color: #333;
  text-align: justify;
  
  /* 关键：处理文本换行 */
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal; 
  
  /* 描述文字轻微阴影，增加立体感 */
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
  padding: 0 5px;
}
</style>