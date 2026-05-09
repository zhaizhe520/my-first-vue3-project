<template>
  <div class="gal-layout">
    <aside class="gal-side-nav" aria-label="側邊導覽">
      <div class="gal-side-nav__brand">GALGAME会社</div>
      <div class="gal-side-nav__rail"></div>
      <ul class="gal-side-nav__list">
        <li v-for="item in navItems" :key="item.id" class="gal-side-nav__row">
          <component
            :is="item.to ? 'router-link' : 'div'"
            v-bind="item.to ? { to: item.to } : {}"
            class="gal-side-nav__item"
          >
            <span
              class="gal-side-nav__dot"
              :class="{ 'gal-side-nav__dot--placeholder': !item.icon }"
              :style="item.icon ? { backgroundImage: `url(${item.icon})` } : undefined"
              aria-hidden="true"
            ></span>
            <span class="gal-side-nav__label">{{ item.label }}</span>
          </component>
        </li>
      </ul>
      <div class="gal-side-nav__footer"></div>
    </aside>

    <main class="gal-main">
      <!-- 主內容，之后接功能 -->
       <gal-home-right />
    </main>
  </div>

</template>

<script setup>
// 首頁：to: '/' 會進 Home。其餘之後要圖可在該筆加 icon:（import 的圖或 URL）
import yusoft from "@/assets/yuzusoft-logo.png"
import homeLogo from "@/assets/noacg-logo.png"
import alicesoft from "@/assets/A-logo.png"
import keylogo from "@/assets/key_logo.png"
import pltlogo from "@/assets/palatelogo.png"
import august from "@/assets/august-soft.png"


//右边GalHomeRight组件
import GalHomeRight from "./GalHomeRight.vue"
//左边跳转组件
import GalYouZu from "./GalYouzu.vue"
import GalAlice from "./GalAlice.vue"
import GalKey from "./GalKey.vue"
import GalPalette from "./GalPalette.vue"
import GalAugust from "./GalAugust.vue"



const navItems = [
  { id: 'home', label: '首頁', to: '/' ,icon:homeLogo},
  { id: 'gallery', label: 'YUZU SOFT',icon:yusoft ,to:''},
  { id: 'chars', label: 'ALICESOFT' , icon:alicesoft},
  { id: 'story', label: 'Key' ,icon:keylogo},
  { id: 'contact', label: 'Palette',icon:pltlogo },
  { id: 'game', label: 'August',icon:august },
]
</script>

<style scoped>
.gal-layout {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

/* 左側豎向導覽：天藍 ↔ 淡粉 水邊式漸層 */
.gal-side-nav {
  position: relative;
  flex-shrink: 0;
  width: 220px;
  min-height: 100vh;
  padding: 1.75rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: linear-gradient(
    165deg,
    #38bdf8 0%,
    #7dd3fc 22%,
    #bae6fd 45%,
    #e0f2fe 58%,
    #fce7f3 78%,
    #fbcfe8 92%,
    #fdf2f8 100%
  );
  box-shadow: 4px 0 24px rgba(56, 189, 248, 0.12), 2px 0 12px rgba(244, 114, 182, 0.08);
  border-right: 1px solid rgba(255, 255, 255, 0.55);
}

.gal-side-nav__brand {
  padding: 0 1.25rem 1.25rem;
  font-weight: 700;
  font-size: 1.35rem;
  letter-spacing: 0.12em;
  color: rgba(15, 23, 42, 0.88);
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}

.gal-side-nav__rail {
  margin: 0 1rem 1.25rem;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.15), rgba(255, 182, 193, 0.5));
  opacity: 0.85;
}

.gal-side-nav__list {
  list-style: none;
  margin: 0;
  padding: 0 0.65rem;
  flex: 1;
}

.gal-side-nav__row {
  margin-bottom: 0.35rem;
}

.gal-side-nav__item {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.65rem 0.85rem;
  border-radius: 12px;
  color: rgba(15, 23, 42, 0.82);
  font-size: 0.9rem;
  cursor: pointer;
  border: 1px solid transparent;
  background: transparent;
  transition: color 0.2s, border-color 0.2s;
  text-decoration: none;
}

a.gal-side-nav__item {
  color: inherit;
}

.gal-side-nav__item:hover {
  color: rgba(15, 23, 42, 1);
  border-color: rgba(255, 255, 255, 0.35);
}

/* 有 icon 時：背景圖：之後在 navItems 該筆加 icon 即可 */
.gal-side-nav__dot {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.92);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 88%;
  border: 1px solid rgba(255, 255, 255, 0.75);
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9);
  transition: transform 0.15s, box-shadow 0.2s;
}

.gal-side-nav__dot--placeholder {
  background-image: none;
  background-color: rgba(255, 255, 255, 0.35);
  border: 1px dashed rgba(15, 23, 42, 0.18);
  box-shadow: none;
}

.gal-side-nav__item:hover .gal-side-nav__dot:not(.gal-side-nav__dot--placeholder) {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.95);
}

.gal-side-nav__label {
  font-weight: 500;
}

.gal-side-nav__footer {
  margin: 1rem 1rem 0;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.08));
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.gal-main {
  flex: 1;
  min-height: 100vh;
  background: #fafafa;
}
</style>
