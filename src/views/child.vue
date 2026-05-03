<template>
  <div class="nav-wrap">
    <!-- 背景图 -->
    <div class="nav-img">
      <img src="@/assets/nav-back.png" alt="背景" />
    </div>

    <div class="nav-container">
      <!-- 左侧 Logo -->
      <div class="logo">B站风格导航</div>

      <!-- 中间导航菜单 -->
      <div class="nav-menu">
        <router-link
          v-for="item in navList"
          :key="item.id"
          :to="item.path"
          active-class="active"
          class="nav-item"
        >
          {{ item.name }}
        </router-link>
      </div>

      <!-- 搜索框 -->
      <form class="formField" @submit.prevent>
        <input
          required
          type="text"
          v-model="searchText"
          @keyup.enter="goSearch"
          placeholder="请输入搜索内容"
        />
        <span @click="goSearch">查询</span>
      </form>

      <!-- 右侧功能区 -->
      <div class="nav-right">
        <!-- 消息图标（带红点） -->
        <div class="icon-wrapper message-icon">
          <svg
            t="1620000000000"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3135"
            width="24"
            height="24"
          >
            <path
              d="M885.333333 170.666667H138.666667c-46.933333 0-85.333333 38.4-85.333333 85.333333v512c0 46.933333 38.4 85.333333 85.333333 85.333333h746.666666c46.933333 0 85.333333-38.4 85.333333-85.333333v-512c0-46.933333-38.4-85.333333-85.333333-85.333333zM853.333333 341.333333L512 576 170.666667 341.333333v-85.333333l341.333333 234.666667 341.333333-234.666667v85.333333z"
              fill="#ffffff"
              p-id="3136"
            ></path>
          </svg>
          <span class="badge">4</span>
        </div>

        <!-- 上传/创作中心 -->
        <div class="icon-wrapper upload-icon">
          <svg
            t="1620000000001"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3200"
            width="24"
            height="24"
          >
            <path
              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m32 608c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-96h-96c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h96v-96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96h96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-96v96z"
              fill="#ffffff"
              p-id="3201"
            ></path>
          </svg>
        </div>

        <!-- 用户头像 -->
        <div class="avatar-wrapper">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="头像"
            class="avatar"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchText = ref('')

// 导航菜单数据
const navList = ref([
  { id: 1, name: '首页', path: '/' },
  { id: 2, name: '番剧', path: '/anime' },
  { id: 3, name: '直播', path: '/live' },
  { id: 4, name: '游戏中心', path: '/game' },
  { id: 5, name: '会员购', path: '/vip' },
  { id: 6, name: '漫画', path: '/comic' },
  { id: 7, name: '赛事', path: '/event' },
  { id: 8, name: '毕业歌会', path: '/concert' },
])

// 搜索方法
const goSearch = () => {
  if (searchText.value.trim()) {
    router.push(`/search?keyword=${encodeURIComponent(searchText.value)}`)
  }
}
</script>

<style scoped>
.nav-wrap {
  position: relative;
  width: 100%;
  height: 60px;
  overflow: hidden;
}

.nav-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.nav-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nav-container {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px;
  color: #fff;
}

.logo {
  font-size: 22px;
  font-weight: bold;
  margin-right: 40px;
  cursor: pointer;
}

.nav-menu {
  display: flex;
  gap: 24px;
  margin-right: auto;
}

.nav-item {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s;
}

.nav-item:hover,
.nav-item.active {
  color: #00a1d6;
}

.formField {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 0 12px;
  margin: 0 20px;
}

.formField input {
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  padding: 8px 0;
  font-size: 14px;
  width: 200px;
}

.formField input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.formField span {
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  margin-left: 8px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icon-wrapper {
  position: relative;
  cursor: pointer;
}

.badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff5555;
  color: #fff;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 18px;
  text-align: center;
}

.avatar-wrapper .avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #fff;
}
</style>