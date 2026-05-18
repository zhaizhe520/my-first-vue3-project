// src/store/petStore.js
import { defineStore } from 'pinia'

export const usePetStore = defineStore('pet', {
  state: () => ({
    message: '我是站娘丛雨!有什么可以帮助你的吗？',
    isVisible: false,
    lastTrigger: null // 紀錄最後一個觸發的組件 ID，防止閃爍
  }),

  // stores/petStore.js
  actions: {
    showPet(message, id) {
      // 1. 如果有人正準備要隱藏氣泡，立刻攔截（清除定時器）
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.message = message;
      this.lastTrigger = id;
      this.isVisible = true;
    },

    hidePet() {
      // 2. 離開時不要立刻隱藏，先開啟一個 x 秒的倒數計時
      if (this.timer) clearTimeout(this.timer); // 確保只有一個計時器在跑

      this.timer = setTimeout(() => {
        this.isVisible = false;
        this.message = '';
        this.lastTrigger = null;
        this.timer = null;
      }, 1200);
    }
  }
})