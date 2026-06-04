<template>
  <div class="auth-form">
    <form @submit.prevent="isLogin ? handleLogin() : handleRegister()">
      <h2>{{ isLogin ? '登录' : '注册' }}</h2>
      <input v-model="username" placeholder="用户名" required />
      <input v-model="password" type="password" placeholder="密码" required />
      <button type="submit">{{ isLogin ? '登录' : '注册' }}</button>
      <p v-if="auth.error" class="error">{{ auth.error }}</p>
      <p v-if="auth.user" class="success">{{ auth.user.username }}，{{ isLogin ? '欢迎回来' : '注册成功' }}</p>
    </form>
    <p class="toggle">没有账号？<a @click.prevent="toggleMode" href="#">{{ isLogin ? '去注册' : '去登录' }}</a></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'

const auth = useAuthStore()
const username = ref('')
const password = ref('')
const isLogin = ref(true)  // true = 登录, false = 注册

const toggleMode = () => {
  isLogin.value = !isLogin.value
  auth.error = null
}

const handleLogin = () => auth.login(username.value, password.value)
const handleRegister = () => auth.register(username.value, password.value)
</script>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 40px auto;
  padding: 32px;
  background: #1C1917;
  border-radius: 12px;
  color: #E2E8F0;
}
.auth-form h2 {
  margin: 0 0 20px;
  font-size: 1.4rem;
  color: #FAFAF9;
}
.auth-form input {
  display: block;
  width: 100%;
  padding: 10px 14px;
  margin-bottom: 14px;
  border: 1px solid #44403C;
  border-radius: 6px;
  background: #0C0A09;
  color: #E2E8F0;
  font-size: 15px;
  box-sizing: border-box;
}
.auth-form button {
  width: 100%;
  padding: 10px;
  background: #CA8A04;
  color: #1C1917;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.auth-form button:hover {
  background: #E5A700;
}
.toggle {
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  color: #A8A29E;
}
.toggle a {
  color: #CA8A04;
  text-decoration: none;
}
.error {
  color: #F43F5E;
  margin-top: 8px;
  font-size: 14px;
}
.success {
  color: #22C55E;
  margin-top: 8px;
  font-size: 14px;
}
</style>
