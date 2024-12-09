<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { mdiInformationOutline } from '@mdi/js'

const egovPageMask = ref()
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('change')
      } else {
        entry.target.classList.remove('change')
      }
    })
  })

  observer.observe(egovPageMask.value)
})

const buildingBlocksTexts = [
  { text: 'building blocks', color: 'var(--gs-primary)' },
  { text: 'designs', color: 'var(--gs-primary)' },
  { text: 'methodologies', color: 'var(--gs-green)' },
]
const intervalId = ref()
const currentIndex = ref(0)
const currentText = ref('building blocks')
const currentColor = ref('')
intervalId.value = setInterval(() => {
  currentIndex.value = (currentIndex.value + 1) % buildingBlocksTexts.length
  currentText.value = buildingBlocksTexts[currentIndex.value].text
  currentColor.value = buildingBlocksTexts[currentIndex.value].color
}, 2000)

onUnmounted(() => {
  clearInterval(intervalId.value)
})

const buildingBlocksElements = ref()
const changeBuildingsBlocks = (area: string) => {
  if (area == 'left') {
    buildingBlocksElements.value.classList.remove('building-blocks-elements-center')
    buildingBlocksElements.value.classList.remove('building-blocks-elements-right')
    buildingBlocksElements.value.classList.add('building-blocks-elements-left')
  }
  if (area == 'center') {
    buildingBlocksElements.value.classList.remove('building-blocks-elements-left')
    buildingBlocksElements.value.classList.remove('building-blocks-elements-right')
    buildingBlocksElements.value.classList.add('building-blocks-elements-center')
  }
  if (area == 'right') {
    buildingBlocksElements.value.classList.remove('building-blocks-elements-left')
    buildingBlocksElements.value.classList.remove('building-blocks-elements-center')
    buildingBlocksElements.value.classList.add('building-blocks-elements-right')
  }
  if (area == 'clear') {
    buildingBlocksElements.value.classList.remove('building-blocks-elements-left')
    buildingBlocksElements.value.classList.remove('building-blocks-elements-center')
    buildingBlocksElements.value.classList.remove('building-blocks-elements-right')
  }
}
</script>

<template>
  <!-- egov page -->
  <div class="egov-wrapper">
    <div class="egov-page"></div>
    <div class="egov-page-mask" ref="egovPageMask"></div>
    <!-- building blocks -->
    <div class="building-blocks-wrapper">
      <div class="building-blocks-bg-bottom-right"></div>
      <div class="building-blocks-blur"></div>
      <div class="building-blocks-hover-areas">
        <div
          class="building-blocks-hover-areas-left"
          @mouseover="changeBuildingsBlocks('left')"
          @mouseout="changeBuildingsBlocks('clear')"
        ></div>
        <div
          class="building-blocks-hover-areas-center"
          @mouseover="changeBuildingsBlocks('center')"
          @mouseout="changeBuildingsBlocks('clear')"
        ></div>
        <div
          class="building-blocks-hover-areas-right"
          @mouseover="changeBuildingsBlocks('right')"
          @mouseout="changeBuildingsBlocks('clear')"
        ></div>
      </div>
      <div class="building-blocks-headline">
        <p>Building Blocks</p>
        <v-icon :icon="mdiInformationOutline" size="32"></v-icon>
      </div>
      <div class="building-blocks-elements" ref="buildingBlocksElements"></div>
      <div class="building-blocks-description">
        <p>
          Reusing same
          <span class="building-blocks-description-random-text" :style="{ color: currentColor }">{{
            currentText
          }}</span>
        </p>
        <p>
          across all
          <span class="building-blocks-description-where"
            >services, departments and organizations.</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/**
egov page
*/

.egov-wrapper {
  position: relative;
  height: 2600px;
  width: 100vw;
}

.egov-page {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1200px;
  height: 2200px;
  margin-top: 2rem;
  border-radius: 20px;
  background: url('@/assets/images/gs-demo-1200.png') center center no-repeat;
  box-shadow: 0px 0px 20px rgba(0, 48, 135, 0.25);
  backdrop-filter: blur(34.8px);
  border: 0.5rem solid var(--gs-gray);
  border-radius: 1rem;
  box-sizing: content-box;
}

.egov-page-mask {
  position: absolute;
  left: 50%;
  top: 1640px;
  transform: translateX(-50%) scale(0.9);
  transition: transform 0.5s ease-out;
  width: 1200px;
  height: 580px;
  background: url('@/assets/images/gs-demo-1200.png') center bottom no-repeat;
  border: 0.5rem solid var(--gs-gray);
  box-sizing: content-box;
  border-radius: 1rem;
}

.egov-page-mask.change {
  transform: translateX(-50%) scale(1);
}

/**
building blocks
*/

.building-blocks-wrapper {
  position: absolute;
  height: 35rem;
  width: 100vw;
  bottom: 0;
}

.building-blocks-bg-bottom-right {
  position: absolute;
  width: 100vw;
  height: 35rem;
  background: url('@/assets/images/building-blocks-bg-bottom-right.png') right bottom no-repeat;
}

.building-blocks-blur {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100vw - 8rem);
  height: 33rem;
  background: rgba(255, 255, 255, 0.6);
  border: 0.5rem solid transparent;
  border-radius: 1rem;
  box-shadow: 0 0 1.5rem rgba(0, 48, 135, 0.25);
  backdrop-filter: blur(2rem);
}

@media screen and (max-width: 1410px) {
  .building-blocks-blur {
    width: 100vw;
    margin: 0;
  }
}

/* hover areas */

.building-blocks-hover-areas {
  position: absolute;
  display: flex;
  width: 1200px;
  height: 120px;
  left: 50%;
  transform: translateX(-50%);
}

.building-blocks-hover-areas-left {
  height: 120px;
  width: 400px;
  background: url('@/assets/images/building-blocks-hover-areas-left.png') 19.5px 0 no-repeat;
}

.building-blocks-hover-areas-left:hover {
  background: url('@/assets/images/building-blocks-hover-areas-left-hover.png') 19.5px 0 no-repeat;
  cursor: pointer;
}

.building-blocks-hover-areas-center {
  height: 120px;
  width: 400px;
  background: url('@/assets/images/building-blocks-hover-areas-center.png') 19px 0 no-repeat;
}

.building-blocks-hover-areas-center:hover {
  height: 120px;
  width: 400px;
  background: url('@/assets/images/building-blocks-hover-areas-center-hover.png') 19px 0 no-repeat;
  cursor: pointer;
}

.building-blocks-hover-areas-right {
  height: 120px;
  width: 400px;
  background: url('@/assets/images/building-blocks-hover-areas-right.png') 16px 0 no-repeat;
}

.building-blocks-hover-areas-right:hover {
  height: 120px;
  width: 400px;
  background: url('@/assets/images/building-blocks-hover-areas-right-hover.png') 16px 0 no-repeat;
  cursor: pointer;
}

/* builing block headline */

.building-blocks-headline {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  text-align: center;
  top: 10rem;
  font-size: 1.75rem;
  color: var(--gs-primary);
}

.building-blocks-headline p {
  margin-right: 1rem;
}

.building-blocks-elements {
  position: absolute;
  top: 14rem;
  width: 100vw;
  height: 120px;
  background: url('@/assets/images/building-blocks-elements.png') bottom center no-repeat;
}

.building-blocks-elements-left {
  background: url('@/assets/images/building-blocks-elements-left.png') bottom center no-repeat;
}

.building-blocks-elements-center {
  background: url('@/assets/images/building-blocks-elements-center.png') bottom center no-repeat;
}

.building-blocks-elements-right {
  background: url('@/assets/images/building-blocks-elements-right.png') bottom center no-repeat;
}

/* builing block description */

.building-blocks-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  text-align: center;
  top: 24rem;
  font-size: 1.75rem;
  color: var(--gs-primary);
}

.building-blocks-description-random-text {
  color: var(--gs-green);
  font-weight: bold;
  font-family: monospace;
}

.building-blocks-description-random-text {
  color: var(--gs-green);
  font-weight: bold;
  font-family: monospace;
}

.building-blocks-description-where {
  color: var(--gs-primary);
  font-weight: bold;
  font-style: italic;
}
</style>
