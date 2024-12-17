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
  height: 2642px;
  width: 100vw;
}

.egov-page {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1200px;
  height: 2207px;
  margin-top: 2rem;
  border-radius: 20px;
  background: url('@/assets/images/gs-demo-2400.png') bottom center / 1200px no-repeat;
  box-shadow: 0px 0px 20px rgba(0, 48, 135, 0.25);
  box-sizing: content-box;
}

.sticker {
  position: absolute;
  bottom: 29rem;
  right: -7rem;
}
</style>
