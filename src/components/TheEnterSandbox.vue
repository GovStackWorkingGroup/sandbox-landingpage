<script setup lang="ts">
import BaseSection from '@/components/BaseSection.vue'
</script>

<template>
  <BaseSection rightBottomImage="enter-sandbox-bg-bottom-right">
    <div class="enter-sandbox-wrapper" id="enter-sandbox-wrapper">
      <!-- text -->
      <div class="enter-sandbox-intro-text">
        <h1>Enter the</h1>
        <i class="logo-sandbox"></i>
        <p>
          The GovStack Sandbox is a demonstration environment for teams from governments and service
          providers to learn and test how to practically apply the GovStack approach.
        </p>
      </div>

      <!-- image -->
      <div class="enter-sandbox-image"></div>
    </div>
  </BaseSection>
</template>

<style scoped>
.enter-sandbox-wrapper {
  display: flex;
  align-items: center;
}

.enter-sandbox-intro-text h1 {
  margin-bottom: 0.5rem;
}

.enter-sandbox-intro-text p {
  margin-top: 1rem;
}

.logo-sandbox {
  position: relative;
  left: -1rem;
}

.enter-sandbox-image {
  right: 0;
  min-height: 564px;
  min-width: 736px;
  background: url('@/assets/images/enter-sandbox-image.png') center center no-repeat;
}
</style>
