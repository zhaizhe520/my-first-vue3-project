<template>
  <div class="card-container">
    <div class="image-box">
      <img :src="imageSrc" :alt="title || ''" />
    </div>
    <div v-if="title" class="hover-text">
      {{ title }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: { type: String, required: true },
  title:    { type: String, default: '' },
})
</script>

<style scoped>
.card-container {
  width: 100%;
  cursor: pointer;
}

.image-box {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 12px;
  overflow: hidden;
  background: #1E1E2E;
  transition: transform 0.3s ease;
}

.image-box img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.card-container:hover .image-box {
  transform: scale(1.02);
}

.hover-text {
  margin-top: 10px;
  text-align: center;
  color: #38BDF8;
  font-size: 15px;
  font-weight: 600;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.card-container:hover .hover-text {
  opacity: 1;
  transform: translateY(0);
}
</style>
