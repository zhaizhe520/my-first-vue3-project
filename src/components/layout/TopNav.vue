<template>
  <div class="nav-wrap" >
    <div class="nav-img">
      
    </div>

    <!-- 顶部导航栏：左侧GitHub + 中间搜索 + 右侧路由 -->
    <div class="nav-container" >
      <div class="github">
        <button :class="searchBtn.btn" @click="openGithub" v-pet-tip="'这是我的Github仓库哦,開源Code都在里面哦,可以的话可以进去点个小星星吗?Ciallo～(∠・ω< )⌒☆'" >Github</button>
        <button :class="searchBtn.btn" @click="blog" v-pet-tip="'技術博客並非卖課！！'">博客</button>
      </div>

      <!-- 搜索框放中间 -->
      <form :class="formStyle.formField"  @submit.prevent>
        <input required="" type="text"   v-model="searchText"  @keyup.enter="goSearch" v-pet-tip="'要搜些什么呢?'"/>
        <span>查詢</span>
        <button :class="navBtn.btn">搜索</button>
      </form>

      <!-- 右侧路由菜单 -->
      <div class="nav-menu">
        <router-link
          v-for="item in navList"
          :key="item.id"
          :to="item.path"
          v-pet-tip="item.tip"
          active-class="active"
          class="nav-item"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
/*live2d交互 */
//写了封装可以不写调用
//import { usePetStore } from '@/stores/petStore'
//const petStore = usePetStore()
//const componentId = 'nav-home' // 每個組件給一個唯一的 ID



const router = useRouter()
const searchText = ref('')

const navList = ref([
  { id: 1, name: 'ホーム', path: '/' ,tip:'主页返回了哦'},
  { id: 2, name: 'GALGame会社', path: '/gal',tip:'这是GAL公司介绍哦' },
  { id: 3, name: 'アニメ会社', path: '/anime' ,tip:'这是动漫公司介绍哦'},
  { id: 4, name: "ライトノベル", path:"/light" ,tip:'这是轻小说哦'}
])

const goSearch = () => {
  if(!searchText.value) return
  router.push({
    path: '/search',
    query: { key: searchText.value }
  })
}
//打開github
const openGithub = () => {
  window.open('https://github.com/zhaizhe520', '_blank')
}
const blog = () => {
  window.open('https://zhaizhe520.github.io/', '_blank')
}

import formStyle from '@/assets/formField.module.css'
import navBtn from '@/assets/nav-button.module.css'
import searchBtn from '@/assets/search-button.module.css'

</script>

<style >

/* 导航栏图片*/
.nav-img{
  position: absolute;
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, #74EBD5 0%, #9FACE6 100%);
}
.nav-img img{
  width: 100%;
  height: 80px;
  z-index: -1;
  position: absolute;
  object-fit: cover;
}
.nav-wrap {
  position: relative;
  width: 100%;
  height: 180px;
  position: sticky;
  top: 0;
  z-index: 999;
}
/* 核心布局：左侧GitHub + 中间搜索 + 右侧路由 */
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
}
.github {
  display: flex;
  align-items: center;
  gap: 12px;
}
.nav-menu {
  display: flex;
  gap: 32px;
}
.nav-item {
  font-size: 16px;
  color: #e9ecee;
  text-decoration: none;
  transition: all 0.3s;
  padding: 6px 0;
  position: relative;
}
.nav-item:hover {
  color: #e61e1e;
}
/* 路由点击高亮样式 */
.active {
  color: #38bdf8 !important;
  font-weight: 500;
}
.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #38bdf8;
}

</style>