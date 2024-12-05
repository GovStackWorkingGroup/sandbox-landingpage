<script setup lang="ts">
import { useRouter } from 'vue-router'
import { mdiOpenInNew } from '@mdi/js'

const emit = defineEmits<{
  scroll: [value: string]
}>()

const router = useRouter()
const goHome = () => {
  emit('scroll', 'enter-sandbox-wrapper')
  router.push({ name: 'home' })
}
</script>

<template>
  <header class="app-header">
    <!-- logo -->
    <div class="logo-wrapper" @click="goHome">
      <i class="logo-gs" color="gs-primary"></i>
    </div>

    <!-- nav links -->
    <div class="nav-links">
      <v-btn variant="text" @click="emit('scroll', 'understanding-wrapper')">Overview</v-btn>
      <v-btn variant="text" @click="emit('scroll', 'demo-wrapper')">Demos</v-btn>
      <v-btn variant="text" @click="emit('scroll', 'contact-wrapper')">Contact</v-btn>
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
  padding: 0 2.5rem 0 3.5rem;
  color: var(--gs-black);
  background: var(--gs-surface-light);
  z-index: 9999;
}

.logo-wrapper:hover {
  cursor: pointer;
}
</style>
