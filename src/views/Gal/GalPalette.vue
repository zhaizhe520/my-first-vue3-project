<template>
  <!--全方位方块组件-->
  <div class="cube">
    <omni-cube v-pet-tip="'这是个6面盒子哦!能拖动！'"/>
  </div>




</template>

<script setup>
import OmniCube from '@/components/common/OmniCube.vue';



</script>

<style>
.cube{
  z-index: 10px;
  width: 400px;
  height: 500px;
}

</style>