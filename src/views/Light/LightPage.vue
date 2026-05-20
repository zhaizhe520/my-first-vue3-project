<template>
  <div class="full-container">

  </div>
  <div class="work-container">
    <!--加載動畫-->
    <section>

    </section>
    <!-- 使用 v-for 自動渲染所有盒子，不再限制只有 4 個 -->
    <section class="line-container">
      <div v-for="(item, index) in pageData" :key="index" class="item-block">
        <div class="click-box" @click="openModal(index)">
          <img :src="item.imgSrc" :alt="item.alt" loading="lazy">
        </div>
        <div class="textName">{{ item.textName }}</div>
      </div>
    </section>

    <!-- 統一的動態彈窗：只要 activeItem 有值就顯示 -->
    <div class="modal-mask" v-if="activeItem" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-img">
          <img :src="activeItem.imgSrc" :alt="activeItem.alt" loading="lazy">
        </div>
        <div class="mask-text1">
          <div class="text0">{{ activeItem.text0 }}</div>
          <p class="text1">{{ activeItem.text1 }}</p>
          <p class="text2">{{ activeItem.text2 }}</p>
          <p class="text3">{{ activeItem.text3 }}</p>
          <div class="tag-group">
            <span v-for="(tag, tIdx) in activeItem.tagList" :key="tIdx" class="tag-item">
              {{ tag }}
            </span>
          </div>
          <div class="text5">
            {{ activeItem.text5 }}
            <p>{{ activeItem.text6 }}</p>
          </div>
        </div>
        <button @click="closeModal">X</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeItem: null
    }
  },
  methods: {
    openModal(index) {
      this.activeItem = this.pageData[index];
    },
    closeModal() {
      this.activeItem = null;
    }
  }
}
</script>

<style scoped>
.full-container{
  width: 100%;
  height: 1000px;
  position: absolute;
  z-index: -1;
  background: linear-gradient(120deg, #fff 60%, #a7eff5 60%);
}

.line-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
}

.item-block {
  width: calc(25% - 20px); /* 4 個一排 */
  margin-bottom: 30px;
}
/* 点击区域样式 */
.line1,.line2{
  display: flex;
  justify-content: space-between;
}
.click-box {
  margin: 20px;
  width: 250px;
  height: 400px;
  background: #eee;
  cursor: pointer;
}

.click-box img{
  position: absolute;
  width: 250px;
  height: 400px;
  object-fit: cover;
  border: solid;
  border-radius: 5px;
  border-style: groove;
}
.click-box:hover {
  /* skew(X轴倾斜角度, Y轴倾斜角度) */
  /* -30deg 通常能产生向右下伸展的视觉倾斜感 */
  transform: translateY(-5px) rotate(-3deg) scale(1.05);

  transition: transform 0.2s ease; /* 让动作更平滑 */
}


/* 遮罩全屏覆盖 */
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

/* 彈窗 */
.modal-content {
  background: rgb(253, 253, 253);
  border-radius: 3px;
  width: 850px;
  height: 700px;
  position: relative;
  display: flex;
  justify-content: space-evenly;  /* 间距全部相等（最好看）*/
  align-items: center;       /* 垂直居中（最常用！）*/
}
/* 彈窗文字 */
.mask-text1{
  margin-top: 20px;
  justify-content: space-evenly;
}
/*彈窗圖片box */
.modal-img{
  width: 300px;
  height:500px;
  background-color: aqua;
}
/*彈窗圖片樣式 */
.modal-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center; /* 圖片居中裁切 */
}
/* 中间内容框的按鈕 */
.modal-content button{
  position: absolute;
  top: 10px;
  right: 10px;
  gap: 10px;
  z-index: 999;
  cursor: pointer;
  color: pink;
  font-size: 20px;
}


/*作品名字 */
.textName{
  opacity: 0;
  transition: all 0.5s;
  color: pink;
  margin: 20px;
  width: 250px;
  display: flex;
  justify-content: center;
}
.click-box:hover ~ .textName {
  opacity: 1;
}

/*字体 */
.text0{
  color: rgb(140, 205, 195);
  font-size: 20px;
  display: flex;
  justify-content: center;
}
.text1{
  color: red;
  font-size: 16px;
}
.text2{
  color: red;
  font-size: 16px;
}
.text3{
  color: rgb(7, 165, 245);
  font-size: 16px;
}
.text4{
  color: rgb(7, 165, 245);
  font-size: 16px;
}
.text5{
  margin-top: 20px;
  width: 500px;
  height: 200px;
  color:rgb(161, 161, 163);
  text-indent: 2em; /* 2em 代表縮排兩個字體的寬度 */
  white-space: pre-line;
}
.text6{
  width: 500px;
  height: 200px;
  color:rgb(161, 161, 163);
  text-indent: 2em; /* 2em 代表縮排兩個字體的寬度 */
  white-space: pre-line;
}
/*標籤元素 */
.tag-group {
  display: flex;
  gap: 6px;
  align-items: center;
}
.tag-title {
  color: #1b8ca8;
  font-size: 16px;
}
/*標籤框 */
.tag-item {
  border: 2px solid rgb(9, 125, 227);
  background-color: rgb(136, 217, 244) ;
  padding: 2px 6px;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
}


</style>
