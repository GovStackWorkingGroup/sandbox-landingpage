<script setup lang="ts">
import { useRouter } from 'vue-router'
import { mdiOpenInNew, mdiChevronDown } from '@mdi/js'

const emit = defineEmits<{
  scroll: [value: string]
}>()

const router = useRouter()
const goHome = () => {
  emit('scroll', 'enter-sandbox-wrapper')
  router.push({ name: 'home' })
}

const menuItems = [
  { title: 'Early Warning System', route: 'earlyWarning' },
  { title: 'USCT', route: 'cashTransfer' },
  { title: 'Construction Permit', route: 'constructionPermit' },
  { title: 'High School Certificate', route: 'highSchool' },
]
</script>

<template>
  <header class="app-header">
    <!-- logo -->
    <div class="logo-wrapper" @click="goHome">
      <i class="logo-gs" color="gs-primary"></i>
    </div>

    <!-- nav links -->
    <div class="nav-links">
      <v-btn
        v-if="$route.name == 'home'"
        variant="text"
        @click="emit('scroll', 'understanding-wrapper')"
        >Overview</v-btn
      >
      <v-menu v-if="$route.name == 'home'">
        <template v-slot:activator="{ props }">
          <v-btn :append-icon="mdiChevronDown" v-bind="props" variant="text"> Demos </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in menuItems" :key="index" :value="index">
            <v-list-item-title @click="$router.push({ name: item.route })">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn v-if="$route.name == 'home'" variant="text" @click="emit('scroll', 'contact-wrapper')"
        >Contact</v-btn
      >
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
  width: 100vw;
  height: var(--gs-app-header-height);
  padding: 0 4.5rem 0 3.5rem;
  color: var(--gs-black);
  background: var(--gs-surface-light);
  z-index: 1000;
}

.logo-wrapper:hover {
  cursor: pointer;
}

.nav-links > * {
  margin: 0 2rem;
}
</style>
