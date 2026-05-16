<template>
  <div class="gal-layout" :class="{ 'is-nav-collapsed': !isNavVisible }">
      <!-- 1. 为最外层绑定类名，由 isNavVisible 控制 -->
    <aside class="gal-side-nav" aria-label="側邊導覽">
      <div class="gal-side-nav__brand">GALGAME会社</div>
      <div class="gal-side-nav__rail"></div>
      <ul class="gal-side-nav__list">
        <li v-for="item in navItems" :key="item.id" class="gal-side-nav__row">
          <component :is="item.to ? 'router-link' : 'div'" v-bind="item.to ? { to: item.to } : {}" v-pet-tip="item.tip"
            class="gal-side-nav__item" @click="handleNavClick(item)"
            :class="{ 'is-active': currentContent === item.comp }">
            <span class="gal-side-nav__dot" :class="{ 'gal-side-nav__dot--placeholder': !item.icon }"
              :style="item.icon ? { backgroundImage: `url(${item.icon})` } : undefined" aria-hidden="true"></span>
            <span class="gal-side-nav__label">{{ item.label }}</span>
          </component>
        </li>
      </ul>
      <div class="gal-side-nav__footer"></div>
      <!-- 2. 控制按钮：放在 aside 内部或紧邻 aside -->
      <button class="gal-nav-toggle" @click="toggleNav" aria-label="切换导航栏">
        <span class="toggle-icon">{{ isNavVisible ? '◀' : '▶' }}</span>
      </button>
    </aside>

    <main class="gal-main">
      <!-- 主內容，之后接功能 -->
      <!-- 逻辑或 (||) 运算符的 Vue 动态组件渲染写法 -->
      <component :is="currentContent || GalHomeRight  " />
    </main>
  </div>
</template>

<script setup>
// 首頁：to: '/' 會進 Home。其餘之後要圖可在該筆加 icon:（import 的圖或 URL）
import yusoft from "@/assets/yuzusoft-logo.png"
import homeLogo from "@/assets/noacg-logo.png"
import alicesoft from "@/assets/A-logo.png"
import keylogo from "@/assets/key_logo.png"
import palettelogo from "@/assets/palettelogo.png"
import august from "@/assets/august-soft.png"
import lumpofsugar from "@/assets/Lump of Sugar.png"
import navel from "@/assets/navel.jpg"
import minori from "@/assets/minori.png"
import innocentgrey from "@/assets/Innocent Grey.png"
import purplesoftware from "@/assets/Purple Software.png"
import aLcot from "@/assets/ALcot.png"
import favorite from "@/assets/FAVORITE.png"
import leaf from "@/assets/Leaf.png"
import circus from "@/assets/Circus.png"
import nitroplus from "@/assets/NitroPlus.png"
import MAGES from "@/assets/5bp..png"





//右边GalHomeRight组件
import GalHomeRight from "./GalHomeRight.vue"
//左边跳转组件
import GalYouZu from "./GalYouzu.vue"
import GalAlice from "./GalAlice.vue"
import GalKey from "./GalKey.vue"
import GalPalette from "./GalPalette.vue"
import GalAugust from "./GalAugust.vue"
import GalLumpOfSugar from "./GalLumpOfSugar.vue"
import GalNavel from "./GalNavel.vue"
import GalMinori from "./GalMinori.vue"
import GalInnocentGrey from "./GalInnocentGrey.vue"
import GalPurpleSoftware from "./GalPurpleSoftware.vue"
import GalALcot from "./GalALcot.vue"
import GalFAVORITE from "./GalFavorite.vue"
import GalLeaf from "./GalLeaf.vue"
import GalNitroPlus from "./GalNitroPlus.vue"
import Gal5pb from "./Gal5pb..vue"

//轻量切换
import { shallowRef ,ref} from 'vue'











const isNavVisible = ref(true)
const currentContent = shallowRef(null)

const toggleNav = () => {
  isNavVisible.value = !isNavVisible.value
}

const navItems = [
  { id: 'home', label: '首頁', to: '/', icon: homeLogo,tip:'回到主页了哦！' }, // 这个保留路由跳转
  { id: 'gallery', label: 'YuZuSoft', icon: yusoft, comp: GalYouZu ,tip:'这是柚子社!'}, // 增加 comp 属性
  { id: 'chars', label: 'AliceSOFT', icon: alicesoft, comp: GalAlice ,tip:'这是A社!'},
  { id: 'story', label: 'Key', icon: keylogo, comp: GalKey,tip:'这是Key社!' },
  { id: 'contact', label: 'Palette', icon: palettelogo, comp: GalPalette,tip:'这是板油社!' },
  { id: 'game', label: 'August', icon: august, comp: GalAugust,tip:'这是八月社!' },
  { id: 'game', label: 'Lump of Sugar', icon: lumpofsugar , comp: GalLumpOfSugar,tip:'这是方糖社!' },
  { id: 'game', label: ' Navel', icon: navel , comp: GalNavel,tip:'这是脐橙社（橘子社）!' },
  /*{ id: 'game', label: 'Minori ', icon: minori , comp: GalMinori,tip:'这是中二社!' },*/
  { id: 'gal', label: 'Innocent Grey ', icon: innocentgrey , comp: GalInnocentGrey,tip:'这是IG社!' },
  { id: 'gal', label: 'Purple Software ', icon: purplesoftware , comp: GalPurpleSoftware,tip:'这是紫社!' },
  { id: 'gal', label: 'ALcot', icon: aLcot , comp: GalALcot,tip:'这是彩牙社!' },
  { id: 'gal', label: 'FAVORITE', icon: favorite , comp: GalFAVORITE,tip:'这是F社!' },
  { id: 'gal', label: 'Leaf', icon: leaf , comp: GalLeaf,tip:'这是叶子社!' },
  { id: 'gal', label: 'Circus', icon: circus , comp: GalLeaf,tip:'这是马戏团社!' },
  { id: 'gal', label: 'NitroPlus', icon: nitroplus , comp: GalNitroPlus,tip:'这是N + 社!(虚渊玄老东家)' },
  { id: 'gal', label: '5pb.', icon: MAGES , comp: Gal5pb,tip:'这是5pb.社 !' },




]
// 切换函数
const handleNavClick = (item) => {
  if (item.comp) {
    currentContent.value = item.comp
  }
}
</script>

<style scoped>
/* 1. 基础布局 */
.gal-layout {
  display: flex;
  height: auto;
  width: 100vw;
  overflow: hidden;
  transition: all 0.3s ease;
}

/* 2. 左側豎向導覽：保留你的天藍 ↔ 淡粉 水邊式漸層，并加上动画 */
.gal-side-nav {
  position: relative;
  flex-shrink: 0;
  width: 220px; /* 你的宽度 */
  min-height: 100vh;
  padding: 1.75rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: linear-gradient(165deg,
      #38bdf8 0%,
      #7dd3fc 22%,
      #bae6fd 45%,
      #e0f2fe 58%,
      #fce7f3 78%,
      #fbcfe8 92%,
      #fdf2f8 100%);
  box-shadow: 4px 0 24px rgba(56, 189, 248, 0.12), 2px 0 12px rgba(244, 114, 182, 0.08);
  border-right: 1px solid rgba(255, 255, 255, 0.55);
  transition: margin-left 0.3s ease; /* 核心：加入平滑过渡 */
  z-index: 100;
}

/* 3. 核心修复：状态为收起时，向左负边距隐藏侧边栏 */
.is-nav-collapsed .gal-side-nav {
  margin-left: -220px; /* 必须跟你的 width: 220px 保持一致 */
}

/* 4. 收缩按钮：改成了浅色毛玻璃风格，更搭配你的渐变色 */
.gal-nav-toggle {
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  width: 20px;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  color: #38bdf8;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-left: none;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  transition: background 0.3s;
}

.gal-nav-toggle:hover {
  background: #fff;
  color: #f472b6; /* 悬停时变成粉色 */
}

.toggle-icon {
  font-size: 12px;
}

/* --- 下面是你原本列表和 Item 的绝美样式，原封不动 --- */

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

.gal-side-nav__item:hover, .gal-side-nav__item.is-active {
  color: rgba(15, 23, 42, 1);
  border-color: rgba(255, 255, 255, 0.55);
  background: rgba(255, 255, 255, 0.2);
}

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