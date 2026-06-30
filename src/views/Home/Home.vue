<script setup>
import CardBox from '@/components/home/githubCardBox.vue'
import ListBox from '@/components/home/listBox.vue'
import ImageBox2 from '@/assets/tech.jpg'
</script>

<template>
  <div class="home-page">
    <!-- Hero -->
    <section class="hero">
      <h1 class="hero-title">No<span class="accent">ACG</span></h1>
      <p class="hero-sub">Galgame 会社 · 动画公司 · 轻小说 — 全栈技术项目</p>
      <div class="hero-tags">
        <span class="tag">Vue3</span><span class="tag">TypeScript</span><span class="tag">Node.js</span>
        <span class="tag">MariaDB</span><span class="tag">Nginx</span><span class="tag">PixiJS</span>
      </div>
    </section>

    <!-- 导航卡片 -->
    <section class="nav-grid">
      <router-link to="/gal" class="nav-card gal-card">
        <span class="nav-icon">GAL公司</span>
        <h3>Galgame 会社</h3>
        <p>26 家品牌 · 作品数据 · 卡片展示</p>
      </router-link>
      <router-link to="/anime" class="nav-card anime-card">
        <span class="nav-icon">动画公司</span>
        <h3>动画公司</h3>
        <p>业界品牌与制作信息</p>
      </router-link>
      <router-link to="/light" class="nav-card light-card">
        <span class="nav-icon">轻小说</span>
        <h3>轻小说</h3>
        <p>文库数据 · 爬虫采集</p>
      </router-link>
    </section>

    <!-- GitHub 贡献 + 技术博客 -->
    <section class="info-section">
      <div class="info-card">
        <CardBox />
      </div>
      <a href="https://zhaizhe520.github.io" target="_blank" class="blog-card">
        <ListBox :imageSrc="ImageBox2" v-pet-tip="'对我如何实现的感兴趣吗?'" />
        <span class="blog-label">技术博客 →</span>
      </a>
    </section>

    <!-- 页脚 -->
    <footer class="home-footer">
      <p>技术栈 Vue3 + Express + MariaDB · 个人开发</p>
      <p>© 2026 NoACG</p>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Archivo:wght@400;500;600;700&display=swap');

.home-page {
  min-height: 100vh;
  background: #d5eee9;
  color: #F8FAFC;
  font-family: 'Space Grotesk', 'Archivo', sans-serif;
}

/* ====== Hero ====== */
.hero {
  text-align: center;
  padding: 80px 20px 60px;
}

.hero-title {
  font-family: 'Archivo', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  margin: 0 0 16px;
  letter-spacing: -0.03em;
}

.accent {
  color: #3B82F6;
}

.hero-sub {
  font-size: 17px;
  color: #94A3B8;
  margin: 0 0 28px;
  font-weight: 400;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.tag {
  padding: 6px 18px;
  background: rgba(59, 130, 246, 0.12);
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 999px;
  color: #60A5FA;
  font-size: 13px;
  font-weight: 500;
}

/* ====== 导航卡片 ====== */
.nav-grid {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px 48px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.nav-card {
  display: block;
  padding: 32px 28px;
  background: #d4d4f3;
  border: 1px solid #e0e0f7;
  border-radius: 16px;
  text-decoration: none;
  color: #F8FAFC;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.nav-card:hover {
  transform: translateY(-4px);
  border-color: #3B82F6;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.12);
}

.nav-card.gal-card:hover { border-color: #F472B6; box-shadow: 0 8px 24px rgba(244, 114, 182, 0.12); }
.nav-card.anime-card:hover { border-color: #38BDF8; box-shadow: 0 8px 24px rgba(56, 189, 248, 0.12); }
.nav-card.light-card:hover { border-color: #34D399; box-shadow: 0 8px 24px rgba(52, 211, 153, 0.12); }

.nav-icon {
  font-size: 28px;
  display: block;
  margin-bottom: 16px;
}

.nav-card h3 {
  margin: 0 0 8px;
  font-size: 1.1rem;
  font-weight: 600;
}

.nav-card p {
  margin: 0;
  font-size: 14px;
  color: #64748B;
}

/* ====== 信息区 ====== */
.info-section {
  max-width: 680px;
  margin: 0 auto;
  padding: 0 20px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.info-card {
  width: 100%;
  background: #16161E;
  border: 1px solid #1E1E2E;
  border-radius: 16px;
  padding: 8px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.info-card:hover {
  transform: translateY(-2px);
  border-color: #38BDF8;
}

.blog-card {
  position: relative;
  display: block;
  width: 100%;
  max-width: 660px;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.blog-card:hover {
  transform: translateY(-4px);
}

.blog-label {
  position: absolute;
  bottom: 16px;
  right: 20px;
  background: #3B82F6;
  color: #F8FAFC;
  padding: 6px 18px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
}

/* ====== 页脚 ====== */
.home-footer {
  text-align: center;
  padding: 40px 20px;
  border-top: 1px solid #b8b8ed;
  color: #d1ddee;
  font-size: 13px;
  line-height: 1.8;
}

.home-footer p {
  margin: 0;
}
</style>
