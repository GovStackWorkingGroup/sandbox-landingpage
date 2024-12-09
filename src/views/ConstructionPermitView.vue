<script setup lang="ts">
import { mdiChevronLeft } from '@mdi/js'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push({ name: 'home' })
}
</script>

<template>
  <v-btn :prepend-icon="mdiChevronLeft" variant="text" color="gs-primary" @click="goBack"
    >Back</v-btn
  >
  <div class="construction-permit-page-wrapper">
    <div class="construction-permit-page-bg-center-right"></div>
    <div class="construction-permit-page-blur"></div>
    <div class="construction-permit-page-content">
      <h1>Construction Permit</h1>
    </div>
  </div>
</template>

<style scoped>
button {
  margin-left: 3rem;
}
.construction-permit-page-wrapper {
  position: relative;
  height: 20rem;
  width: 100vw;
}

.construction-permit-page-bg-center-right {
  position: absolute;
  width: 100vw;
  background: url('/public/access-demos-bg-top-right.png') right center no-repeat;
}

.construction-permit-page-blur {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100vw - 8rem);
  height: 15rem;
  box-shadow: 0px 0px 20px rgba(0, 48, 135, 0.25);
  backdrop-filter: blur(34.8px);
  background: rgba(255, 255, 255, 0.6);
  border: 0.5rem solid transparent;
  box-sizing: content-box;
  border-radius: 1rem;
}

.construction-permit-page-content {
  position: absolute;
  top: 0;
  width: 100vw;
  padding: 4rem 8rem;
}

.construction-permit-page-content h1 {
  font-size: 3rem;
  white-space: nowrap;
  color: var(--gs-primary);
}
</style>
