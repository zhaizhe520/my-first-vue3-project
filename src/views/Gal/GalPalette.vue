<template>
  <section class="omniCubeContainer">
    <OmniCube />
  </section>
  <section class="pageContainer">
    <div class="passage">


    </div>
  </section>
</template>


<script setup>

import OmniCube from '@/components/common/OmniCube.vue';


</script>


<style scoped>
.omniCubeContainer{
  width: 100%;
  height: 500px;
  background-color: antiquewhite;
}
.pageContainer{
  display: flex;
  justify-content: center;
  align-items: center;
}
.passage{
width: 80%;
height: 1200px;
background-color: rgb(190, 245, 245);


}

</style>