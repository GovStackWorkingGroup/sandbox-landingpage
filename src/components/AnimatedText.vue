<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

const props = defineProps({
  texts: {
    type: Array<string>,
    required: true,
  },
})
const intervalId = ref()
const currentIndex = ref(0)
const currentText = ref(props.texts[0])
const nextText = ref(props.texts[1])
intervalId.value = setInterval(() => {
  currentIndex.value = (currentIndex.value + 1) % props.texts.length
  currentText.value = props.texts[currentIndex.value]
  nextText.value = props.texts[currentIndex.value + 1]
}, 2000)

onUnmounted(() => {
  clearInterval(intervalId.value)
})
</script>

<template>
  <span class="scrolling-words-box">
    <ul>
      <li v-for="(text, index) in texts" :key="text + '_' + index">{{ text }}</li>
    </ul>
  </span>
</template>

<style scoped>
.scrolling-words-box {
  height: 3rem;
  overflow: hidden;
}

.scrolling-words-box ul {
  margin: 0 0.5rem;
  padding: 0;
  animation: scrollUp 4s infinite;
}

.scrolling-words-box ul li {
  list-style: none;
  font-weight: 600;
}

@keyframes scrollUp {
  15%,
  25% {
    transform: translateY(-25%);
  }
  40%,
  50% {
    transform: translateY(-50%);
  }
  65%,
  75% {
    transform: translateY(-75%);
  }
  90%,
  100% {
    transform: translateY(-75%);
  }
}
</style>
