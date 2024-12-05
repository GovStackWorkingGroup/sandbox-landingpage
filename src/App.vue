<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheAppHeader from '@/components/TheAppHeader.vue'
import { useUI } from '@/composables/useUI'

const { scrollIntoView } = useUI()
</script>

<template>
  <TheAppHeader @scroll="(target) => scrollIntoView(target)" />
  <RouterView class="router-view" />
</template>
