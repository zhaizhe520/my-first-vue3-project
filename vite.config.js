import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/medias': {
        target: 'https://cdn.jsdelivr.net/gh/zhaizhe520/my-img-bed@main',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/medias/, '')
      }
    }
  }
})