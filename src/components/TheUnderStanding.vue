<script setup lang="ts">
import BaseSection from '@/components/BaseSection.vue'
</script>

<template>
  <BaseSection
    rightTopImage="understanding-bg-top-right"
    leftBottomImage="understanding-bg-bottom-left"
    blurColor="dark"
  >
    <div class="understanding-wrapper">
      <div class="understanding-content"></div>
    </div>
  </BaseSection>
</template>

<style scoped>
/**
understanding
*/

.understanding-content {
  width: 1200px;
  height: 592px;
  background: url('@/assets/images/understanding-content.png') center center no-repeat;
}
</style>
