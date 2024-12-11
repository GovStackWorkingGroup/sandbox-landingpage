<script setup lang="ts">
import TheBuildingBlocks from '@/components/TheBuildingBlocks.vue'
import BaseSticker from '@/components/BaseSticker.vue'
const title = 'eGov Mockup'
const content = 'This is a demonstration to showcase GovStack Building Blocks in action'
</script>

<template>
  <div class="egov-wrapper">
    <div class="egov-page">
      <BaseSticker :title="title" :content="content" class="sticker" />
    </div>
    <TheBuildingBlocks />
  </div>
</template>

<style scoped>
.egov-wrapper {
  position: relative;
  height: 2600px;
  width: 100vw;
}

.egov-page {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1200px;
  height: 2200px;
  margin-top: 2rem;
  border-radius: 20px;
  background: url('@/assets/images/gs-demo-1200.png') center center no-repeat;
  box-shadow: 0px 0px 20px rgba(0, 48, 135, 0.25);
  backdrop-filter: blur(34.8px);
  border: 0.5rem solid var(--gs-gray);
  border-radius: 1rem;
  box-sizing: content-box;
}

.sticker {
  position: absolute;
  bottom: 29rem;
  right: -7rem;
}
</style>
