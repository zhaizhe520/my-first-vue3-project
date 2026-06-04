<template>
  <form @submit.prevent="handleLogin">
    <input v-model="username" placeholder="用户名" />
    <input v-model="password" type="password" placeholder="密码" />
    <button type="submit">登录</button>
    <p v-if="auth.error" style="color:red">{{ auth.error }}</p>
    <p v-if="auth.user">已登录: {{ auth.user.username }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'

const auth = useAuthStore()
const username = ref('')
const password = ref('')

const handleLogin = () => auth.login(username.value, password.value)
</script>
