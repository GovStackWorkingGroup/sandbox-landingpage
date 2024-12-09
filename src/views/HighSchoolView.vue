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
  <div class="high-school-page-wrapper">
    <div class="high-school-page-bg-center-right"></div>
    <div class="high-school-page-blur"></div>
    <div class="high-school-page-content">
      <h1>High School Graduation Certificate</h1>
    </div>
  </div>
</template>

<style scoped>
button {
  margin-left: 3rem;
}
.high-school-page-wrapper {
  position: relative;
  height: 20rem;
  width: 100vw;
}

.high-school-page-bg-center-right {
  position: absolute;
  width: 100vw;
  background: url('/public/access-demos-bg-top-right.png') right center no-repeat;
}

.high-school-page-blur {
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

.high-school-page-content {
  position: absolute;
  top: 0;
  width: 100vw;
  padding: 4rem 8rem;
}

.high-school-page-content h1 {
  font-size: 3rem;
  white-space: nowrap;
  color: var(--gs-primary);
}
</style>
