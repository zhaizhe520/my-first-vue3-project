<script setup>
import { ref } from 'vue'

const messages = ref([])
const inputPrompt = ref('')
const loading = ref(false)

// 💡 新增：记录是否正在调用工具/查询数据
const isCallingTool = ref(false)

const sendMessage = async () => {
  const text = inputPrompt.value.trim()
  if (!text || loading.value) return

  messages.value.push({ role: 'user', content: text })
  inputPrompt.value = ''
  loading.value = true
  isCallingTool.value = false // 重置状态

  messages.value.push({ role: 'assistant', content: '' })
  const lastIndex = messages.value.length - 1

  try {
    const response = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: messages.value.slice(0, -1)
      })
    })

    if (!response.ok) throw new Error('网络请求失败')

    const reader = response.body.getReader()
    const decoder = new TextDecoder('utf-8')

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      const chunk = decoder.decode(value, { stream: true })
      const lines = chunk.split('\n\n')

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const dataStr = line.replace('data: ', '').trim()
          if (dataStr === '[DONE]') break

          try {
            const parsed = JSON.parse(dataStr)

            // 💡 核心解析逻辑：
            // 1. 如果捕获到后端发来的工具调用状态
            if (parsed.status === 'calling_tool') {
              isCallingTool.value = true
            }

            // 2. 正常追加回答文本（一旦开始输出字符，关闭调用状态）
            if (parsed.content) {
              isCallingTool.value = false
              messages.value[lastIndex].content += parsed.content
            }
          } catch (e) {
            // 忽略非 JSON 解析异常
          }
        }
      }
    }
  } catch (error) {
    console.error('通信失败:', error)
    messages.value[lastIndex].content = '（出错了，请检查后端服务）'
  } finally {
    loading.value = false
    isCallingTool.value = false
  }
}
</script>

<template>
  <div class="chat-container">
    <h2>Agent 对接测试窗口</h2>

    <div class="message-box">
      <div 
        v-for="(msg, index) in messages" 
        :key="index" 
        :class="['msg-item', msg.role]"
      >
        <div class="role-tag">{{ msg.role === 'user' ? '我' : '丛雨' }}:</div>
        <div class="content">
          <!-- 💡 优化体验：当消息还没字且在调工具时，显示特定的提示 -->
          <template v-if="!msg.content && isCallingTool && msg.role === 'assistant'">
            <span class="tool-loading">🔍 正在查询实时数据...</span>
          </template>
          <template v-else>
            {{ msg.content }}
          </template>
        </div>
      </div>
    </div>

    <!-- 输入框与按钮 -->
    <div class="input-box">
      <input 
        v-model="inputPrompt" 
        @keyup.enter="sendMessage"
        placeholder="输入消息，按 Enter 发送..." 
        :disabled="loading"
      />
      <button @click="sendMessage" :disabled="loading">
        <!-- 💡 按钮状态切换 -->
        {{ isCallingTool ? '查数据中...' : (loading ? '思考中...' : '发送') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  width: 500px;
  margin: 20px auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background: #f9f9f9;
  font-family: sans-serif;
}

.message-box {
  height: 350px;
  overflow-y: auto;
  border: 1px solid #eee;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.msg-item {
  display: flex;
  flex-direction: column;
}

.msg-item.user {
  align-items: flex-end;
}

.msg-item.user .content {
  background: #409eff;
  color: #fff;
}

.msg-item.assistant {
  align-items: flex-start;
}

.msg-item.assistant .content {
  background: #e9e9e9;
  color: #333;
}

.role-tag {
  font-size: 12px;
  color: #888;
  margin-bottom: 2px;
}

.content {
  padding: 8px 12px;
  border-radius: 6px;
  max-width: 80%;
  white-space: pre-wrap;
  word-break: break-all;
}

.input-box {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background: #a0cfff;
  cursor: not-allowed;
}
</style>