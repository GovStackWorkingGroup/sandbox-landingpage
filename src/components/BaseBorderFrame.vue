<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  colorL: {
    type: String as () => 'green' | 'primary' | 'orange' | 'white',
    default: 'primary',
  },
  colorT: {
    type: String as () => 'green' | 'primary' | 'orange' | 'white',
    default: 'primary',
  },
  colorR: {
    type: String as () => 'green' | 'primary' | 'orange' | 'white',
    default: 'primary',
  },
  colorB: {
    type: String as () => 'green' | 'primary' | 'orange' | 'white',
    default: 'primary',
  },
  borderWidth: {
    type: Number,
    default: 6,
  },
})

const style = computed(() => {
  return `
    min-width: 2rem;
    min-height: 2rem;
    background:
      linear-gradient(to right, var(--gs-${props.colorL}) ${props.borderWidth}px, transparent ${props.borderWidth}px) 0 0,
      linear-gradient(to left, var(--gs-${props.colorR}) ${props.borderWidth}px, transparent ${props.borderWidth}px) 100% 100%,
      linear-gradient(to bottom, var(--gs-${props.colorT}) ${props.borderWidth}px, transparent ${props.borderWidth}px) 0 0,
      linear-gradient(to top, var(--gs-${props.colorB}) ${props.borderWidth}px, transparent ${props.borderWidth}px) 100% 100%;
    background-repeat: no-repeat;
    background-size: 50% 50%;
  `
})
</script>

<template>
  <div :style="style">
    <div class="wrapper-border">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.wrapper-border {
  border: 1px solid var(--gs-gray-light);
  padding: 2em;
  margin: 6px;
}
</style>
