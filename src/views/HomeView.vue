<script setup lang="ts">
import { ref } from 'vue'

const imageFrameOpacity = ref(0)
const maskFrameOpacity = ref(0)
const maskFrameScale = ref(1)
const maskFrameTransform = ref(1)
const imageFrame = ref()
const maskFrame = ref()

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY
  const maxScrollPosition = document.body.scrollHeight - window.innerHeight

  imageFrameOpacity.value = 1 - scrollPosition / maxScrollPosition
  imageFrame.value.style.opacity = imageFrameOpacity.value.toFixed(2)

  maskFrameOpacity.value = 0 + scrollPosition / maxScrollPosition
  maskFrame.value.style.opacity = maskFrameOpacity.value.toFixed(2)

  maskFrameScale.value = 1 + (scrollPosition / maxScrollPosition) * 0.1
  maskFrame.value.style.scale = maskFrameScale.value.toFixed(2)

  const transformPercentage = (scrollPosition / maxScrollPosition) * 100
  maskFrameTransform.value = 75 - transformPercentage
  maskFrame.value.style.transform = `translateY(${maskFrameTransform.value.toFixed(2)}%)`
})
</script>

<template>
  <main>
    <div class="image-frame" ref="imageFrame"></div>
    <div class="mask-frame" ref="maskFrame"></div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

.image-frame {
  padding: 0;
  width: 1200px;
  height: 2200px;
  background: url('@/assets/images/gs-demo-1200.png') center top no-repeat;
  border: 0.5rem solid var(--gs-gray);
  box-sizing: content-box;
  border-radius: 1rem;
  scrollbar-width: none;
}

.mask-frame {
  position: absolute;
  top: 1835px;
  padding: 0;
  width: 1200px;
  min-height: 560px;
  background: url('@/assets/images/gs-demo-1200.png') center bottom no-repeat;
  border: 0.5rem solid var(--gs-gray);
  box-sizing: content-box;
  border-radius: 1rem;
  scrollbar-width: none;
}

@media screen and (max-width: 1399px) {
  .image-frame {
    width: 900px;
    background: url('@/assets/images/gs-demo-900.png') center bottom no-repeat;
  }
  .mask-frame {
    width: 900px;
    background: url('@/assets/images/gs-demo-900.png') center bottom no-repeat;
  }
}
</style>
