<template>
  <section class="omniCubeContainer">
    <OmniCube :list="imgList" />
  </section>
  <section class="pageContainer">
    <div class="passage">
      你好
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'
import OmniCube from '@/components/common/OmniCube.vue';

const imgList = ref([
  {
    url: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/Inui-Sana.jpg',
    tip: '纯白交响曲的乾纱凪学姐哦！'
  },
  {
    url: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/もしも明日が晴れならば.jpg',
    tip: '假如明日天放晴!'
  },
  {
    url: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/9-nine-雪色雪花雪之痕.jpg',
    tip: '9-nine - 雪色雪花雪余痕,这是第九系列的第三部'
  },

  {
    url: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/9-nine-春色春恋春熙风.png',
    tip: '9-nine-春色春恋春熙风,这是第九系列的第一部'

  },

  {
    url: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/19-nine-支配者的王冠.jpg',
    tip: '9-nine - 支配者的王冠,这是第九系列的最终作'


  },

  {
    url: 'http://110.42.248.8:8080/wp-content/uploads/2026/05/9-nine-天色天歌天籁音.jpg',
    tip: '9-nine - 天色天歌天籁音,这是第九系列的第二部'

  },

]);


</script>


<style scoped>
.omniCubeContainer {
  width: 100%;
  height: 500px;
  background-image: url("http://110.42.248.8:8080/wp-content/uploads/2026/05/backgorund.jpg");
}

.pageContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url("http://110.42.248.8:8080/wp-content/uploads/2026/05/backgorund.jpg");
}
.passage {
  width: 80%;
  height: 1200px;
  background-color: rgb(190, 245, 245);

}
</style>