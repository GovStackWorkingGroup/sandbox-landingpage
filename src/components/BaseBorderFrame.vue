<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  colorL: {
    type: String as () => 'green' | 'primary' | 'orange' | 'white',
    default: 'white',
  },
  colorT: {
    type: String as () => 'green' | 'primary' | 'orange' | 'white',
    default: 'white',
  },
  colorR: {
    type: String as () => 'green' | 'primary' | 'orange' | 'white',
    default: 'white',
  },
  colorB: {
    type: String as () => 'green' | 'primary' | 'orange' | 'white',
    default: 'white',
  },
})

const style = computed(() => {
  return `
    min-width: 4rem;
    min-height: 4rem;
    background:
      linear-gradient(to right, var(--gs-${props.colorL}) 4px, transparent 4px) 0 0,
      linear-gradient(to left, var(--gs-${props.colorR}) 4px, transparent 4px) 100% 100%,
      linear-gradient(to bottom, var(--gs-${props.colorT}) 4px, transparent 4px) 0 0,
      linear-gradient(to top, var(--gs-${props.colorB}) 4px, transparent 4px) 100% 100%;
    background-repeat: no-repeat;
    background-size: 50% 50%;
    padding: 2rem;
  `
})
</script>

<template>
  <div :style="style">
    <slot></slot>
  </div>
</template>
