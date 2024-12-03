<script setup lang="ts">
import { useRouter } from 'vue-router'
import { mdiOpenInNew } from '@mdi/js'

const router = useRouter()
const goHome = () => {
  router.push({ name: 'home' })
}
</script>

<template>
  <header>
    <!-- logo -->
    <div class="logo-wrapper" @click="goHome">
      <i class="logo-gs" color="gs-primary"></i>
    </div>

    <!-- nav links -->
    <div class="nav-links">
      <v-btn variant="text">Overview</v-btn>
      <v-btn variant="text">Demos</v-btn>
      <v-btn variant="text">Contact</v-btn>
    </div>

    <!-- menu -->
    <div class="menu-wrapper">
      <v-btn :prepend-icon="mdiOpenInNew" color="gs-green">GOVSTACK.GLOBAL</v-btn>
    </div>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: var(--gs-app-header-height);
  padding: 0 2rem;
  color: var(--gs-black);
  background: var(--gs-surface-light);
  z-index: 9999;
}

.logo-wrapper:hover {
  cursor: pointer;
}
</style>
