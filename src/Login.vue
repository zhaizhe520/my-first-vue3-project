<template>
  <div class="login-page">
    <!-- 背景视频 -->
    <video autoplay loop muted playsinline class="bg-video">
      <source src="/bg.mp4" type="video/mp4" />
    </video>

    <!-- 遮罩 -->
    <div class="overlay" />

    <!-- 表单居中 -->
    <div class="auth-form" v-pet-tip="'必须要登录才能进入哦'">
      <form @submit.prevent="isLogin ? handleLogin() : handleRegister()">
        <h2>{{ isLogin ? '登录NOANG' : '注册' }}</h2>
        <input v-model="username" autocomplete="username" placeholder="用户名" required />
        <input v-model="password" type="password" autocomplete="current-password" placeholder="密码" required />
        <button type="submit">{{ isLogin ? '登录' : '注册' }}</button>
        <p v-if="auth.error" class="error">{{ auth.error }}</p>
        <p v-if="auth.user" class="success">{{ auth.user.username }}，{{ isLogin ? '欢迎回来' : '注册成功' }}</p>
      </form>
      <p class="toggle">没有账号？<a @click.prevent="toggleMode" href="#">{{ isLogin ? '去注册' : '去登录' }}</a></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
const router = useRouter()

const auth = useAuthStore()
const username = ref('')
const password = ref('')
const isLogin = ref(true)

const toggleMode = () => {
  isLogin.value = !isLogin.value
  auth.error = null
}

const handleLogin = async () => {
  await auth.login(username.value, password.value)
  if (auth.user) router.push('/')
}

const handleRegister = async () => {
  await auth.register(username.value, password.value)
  if (auth.user) router.push('/')
}
</script>

<style scoped>
.login-page {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.bg-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  z-index: 1;
}

.auth-form {
  position: relative;
  z-index: 2;
  width: 380px;
  max-width: 90vw;
  padding: 36px 32px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 16px;
  color: #334155;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(56, 189, 248, 0.15);
}

.auth-form h2 {
  margin: 0 0 24px;
  font-size: 1.5rem;
  color: #0C4A6E;
  text-align: center;
}

.auth-form input {
  display: block;
  width: 100%;
  padding: 12px 14px;
  margin-bottom: 16px;
  border: 1px solid #BAE6FD;
  border-radius: 8px;
  background: #F0F9FF;
  color: #0F172A;
  font-size: 15px;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.auth-form input:focus {
  border-color: #38BDF8;
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
}

.auth-form button {
  width: 100%;
  padding: 12px;
  margin-top: 4px;
  background: linear-gradient(135deg, #38BDF8, #818CF8);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
}

.auth-form button:hover {
  opacity: 0.9;
  transform: scale(1.02);
}

.toggle {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #64748B;
}

.toggle a {
  color: #F472B6;
  text-decoration: none;
  cursor: pointer;
}

.error {
  color: #F43F5E;
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
}

.success {
  color: #22C55E;
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
}
</style>