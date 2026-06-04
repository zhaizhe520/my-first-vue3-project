<template>
  <div class="gal-home">
    <transition name="panel">
      <AllCompany
        v-show="showPanel"
        class="company-panel"
        @select="onCompanySelect"
      />
    </transition>

    <button class="panel-toggle" @click="showPanel = !showPanel">
      {{ showPanel ? '收起' : '展开公司列表' }}
    </button>

    <GalNav ref="galNavRef" />
  </div>
  <div class="">
    <GalUp />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GalNav from './GalNav.vue'
import AllCompany from './AllCompany.vue'
import GalUp from './GalUp.vue'


const galNavRef = ref(null)
const showPanel = ref(false)

const onCompanySelect = (id) => {
  galNavRef.value.selectCompany(id)
  showPanel.value = false
}
</script>

<style scoped>
.gal-home {
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.company-panel {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  max-height: 40%;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.panel-toggle {
  position: absolute;
  top: 4px;
  right: 12px;
  z-index: 210;
  padding: 4px 12px;
  background: #38bdf8;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
}
.panel-enter-active, .panel-leave-active {
  transition: all 0.3s ease;
}
.panel-enter-from, .panel-leave-to {
  max-height: 0 !important;
  opacity: 0;
}
</style>
