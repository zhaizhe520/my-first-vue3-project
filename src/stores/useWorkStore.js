//轻小说接口
import { defineStore } from 'pinia'

import request from '../utils/request'

const PAGE_COUNT = 100

export const useWorkStore = defineStore('work', {
  state: () => ({
    // 动态生成 { 1: [], 2: [], 3: [], 4: [] }
    pageAllData: Object.fromEntries(
      Array.from({ length: PAGE_COUNT }, (_, i) => [i + 1, []])
    ),
    isLoading: false
  }),

  actions: {
    async fetchWpPosts() {
      
      try {
        // 1. 使用 _embed 確保一次拿回圖片和內容
        const allPosts = await request.get('http://110.42.248.8/wp-json/wp/v2/posts?categories=9&_embed')

        const pageSize = 8
        for (let i = 0; i < 4; i++) {
          const start = i * pageSize
          const pagePosts = allPosts.slice(start, start + pageSize)

          this.pageAllData[i + 1] = pagePosts.map(post => {
            // --- 特色圖片提取 ---
            const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]
            const imgUrl = featuredMedia ? featuredMedia.source_url : ""
            // wp:term[1] 通常存放的是標籤數組
            const wpTags = post._embedded?.['wp:term']?.[1] || [];

            // 2. 提取標籤名稱，轉為字串數組 ['標籤A', '標籤B']
            const tagNames = wpTags.map(tag => tag.name);

            // --- 段落提取邏輯 ---
            // 從 content.rendered 中按 </p> 標籤分割文章
            const paragraphs = post.content.rendered.split('</p>')

            // 輔助函式：提取純文字並去標籤,正则表达式
            const getParaText = (index) => {
              if (paragraphs[index]) {
                return paragraphs[index].replace(/<[^>]+>/g, '').trim()
              }
              return "" // 如果該段落不存在則返回空字串
            }

            return {
              imgSrc: imgUrl,
              alt: post.title.rendered,
              textName: post.title.rendered,

              // --- 對應你要求的段落結構 ---
              // 第一段通常用 excerpt 比較乾淨，也可從 paragraphs[0] 抓
              text0: getParaText(0),

              // 從全文提取後續段落 (paragraphs[1] 是第二段，以此類推)
              text1: getParaText(1), // 第二段
              text2: getParaText(2), // 第三段
              text3: getParaText(3), // 第四段

              text4: "簡介:",

              text5: getParaText(4),
              text6: getParaText(5),
              tagList: tagNames,
            }

          })
        }
        // ==================== 💡 【新加代码：图片预加载】 ====================
        // 2. 放在 try 的最后面。定义一个预加载工具函数
        const loadImages = (urls) => {
          return Promise.all(urls.map(url => {
            return new Promise((resolve) => {
              if (!url) return resolve() // 没图片直接跳过
              const img = new Image()
              img.src = url
              // 关键：浏览器下载完这张图后，才会触发 resolve()
              img.onload = () => resolve() 
              img.onerror = () => resolve() // 就算图片加载失败也放行，防止页面卡死
            })
          }))
        }

        // 3. 提取第 1 页这 8 本小说的封面图片 URL 变成一个纯数组
        const currentImages = this.pageAllData[1].map(item => item.imgSrc)

        // 4. ⭐ 核心卡点：使用 await 拦截在这里！
        // 只有等这 8 张图片全部被浏览器下载到本地缓存后，代码才会继续往下走
        await loadImages(currentImages)
      } catch (error) {
        console.error('抓取 WP 數據失敗:', error)
      }
    }
  }
})
//拦截器实现路由守卫