//轻小说接口
import { defineStore } from 'pinia'
import axios from 'axios'
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
      this.isLoading = true
      try {
        // 1. 使用 _embed 確保一次拿回圖片和內容
        const res = await axios.get('http://110.42.248.8/wp-json/wp/v2/posts?categories=9&_embed&per_page=100')
        const allPosts = res.data

        const pageSize = 8
        const totalPages = Math.ceil(allPosts.length / pageSize)
        for (let i = 0; i < totalPages; i++) {
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

            // 輔助函式：提取純文字並去標籤
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
      } catch (error) {
        console.error('抓取 WP 數據失敗:', error)
      } finally {
        this.isLoading = false
      }
    }
  }
})
//拦截器实现路由守卫
