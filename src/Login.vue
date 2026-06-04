<template>
  <div class="login-page">
    <!-- 背景视频 -->
    <video autoplay loop muted playsinline class="bg-video">
      <source src="/bg.mp4" type="video/mp4" />
    </video>

    <!-- 遮罩 -->
    <div class="overlay" />

    <!-- 表单居中 -->
    <div class="auth-form">
      <form @submit.prevent="isLogin ? handleLogin() : handleRegister()">
        <h2>{{ isLogin ? '登录' : '注册' }}</h2>
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
  background: rgba(15, 15, 35, 0.65);
  backdrop-filter: blur(2px);
  z-index: 1;
}

.auth-form {
  position: relative;
  z-index: 2;
  width: 380px;
  max-width: 90vw;
  padding: 36px 32px;
  background: rgba(28, 25, 23, 0.85);
  border: 1px solid rgba(202, 138, 4, 0.15);
  border-radius: 16px;
  color: #E2E8F0;
  backdrop-filter: blur(8px);
  box-shadow: 0 16px 48px rgba(0,0,0,0.5);
}

.auth-form h2 {
  margin: 0 0 24px;
  font-size: 1.5rem;
  color: #FAFAF9;
  text-align: center;
}

.auth-form input {
  display: block;
  width: 100%;
  padding: 12px 14px;
  margin-bottom: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
  background: rgba(255,255,255,0.06);
  color: #E2E8F0;
  font-size: 15px;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.25s;
}

.auth-form input:focus {
  border-color: #CA8A04;
}

.auth-form button {
  width: 100%;
  padding: 12px;
  margin-top: 4px;
  background: #CA8A04;
  color: #1C1917;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}

.auth-form button:hover {
  background: #E5A700;
}

.toggle {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #A8A29E;
}

.toggle a {
  color: #CA8A04;
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