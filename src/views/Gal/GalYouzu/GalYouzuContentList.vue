<script setup>

defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="gal-card">
    <div class="image-wrapper">
      <img :src="data.image" alt="news cover" class="card-img" />
      <span v-if="data.isNew" class="badge-new">NEW</span>
    </div>

    <div class="card-content">
      <div class="card-date">{{ data.date }}</div>
      <p class="card-text">{{ data.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.gal-card {
  background-color: #FAFAF9;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid #E7E5E4;
}

.gal-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(28, 25, 23, 0.12);
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  background-color: #E7E5E4;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge-new {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #CA8A04;
  color: #FFFDF5;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  letter-spacing: 0.04em;
}

.card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
}

.card-date {
  color: #A8A29E;
  font-size: 13px;
  font-weight: 500;
}

.card-text {
  color: #292524;
  font-size: 15px;
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>