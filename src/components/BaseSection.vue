<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  hasBlur: {
    type: Boolean,
    default: true,
  },
  blurColor: {
    type: String as () => 'light' | 'dark',
    default: 'light',
  },
  rightTopImage: {
    type: String,
  },
  rightBottomImage: {
    type: String,
  },
  leftTopImage: {
    type: String,
  },
  leftBottomImage: {
    type: String,
  },
})

const bgStyle = computed(() => {
  return `     
    background: 
        url('/${props.rightTopImage}.png') right top no-repeat,
        url('/${props.rightBottomImage}.png') right bottom no-repeat,
        url('/${props.leftTopImage}.png') left top no-repeat,
        url('/${props.leftBottomImage}.png') left bottom no-repeat;
    `
})
</script>

<template>
  <div class="wrapper" :style="bgStyle">
    <div :class="[props.blurColor, { blur: props.hasBlur }]">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100vw;
  min-height: 8rem;
}

/* blur */

.blur {
  margin: 2rem 4rem;
  padding: 4rem;
  background: rgba(255, 255, 255, 0.6);
  border: 0.5rem solid transparent;
  border-radius: 1rem;
  box-shadow: 0 0 1.5rem rgba(0, 48, 135, 0.25);
  backdrop-filter: blur(2rem);
}

.light {
  background: rgba(255, 255, 255, 0.6);
}

.dark {
  background: rgba(0, 11, 48, 0.8);
}

/* content */

.content {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
