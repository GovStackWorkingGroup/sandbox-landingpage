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
  <main>
    <!-- hero -->
    <div class="enter-sandbox-wrapper">
      <div class="enter-sandbox-bg-bottom-right"></div>
      <div class="enter-sandbox-blur"></div>
      <div class="enter-sandbox-intro-text">
        <h1>Enter the</h1>
        <i class="logo-sandbox"></i>
        <p>
          The GovStack Sandbox is a demonstration environment for teams from <br />
          governments and service providers to learn and test how to practically <br />
          apply the GovStack approach.
        </p>
      </div>
    </div>

    <!-- understanding gov stack -->
    <div class="understanding-wrapper">
      <div class="understanding-bg-top-right"></div>
      <div class="understanding-blur"></div>
      <div class="understanding-content"></div>
    </div>

    <!-- egov intro-->
    <div class="egov-intro-wrapper">
      <div class="egov-intro-blur"></div>
      <div class="egov-intro-text">
        <h1>
          Ever Wonder How to Build <br />
          Digital Government <br />
          Services?
        </h1>
        <p>
          Step into our Sandbox to explore how modern e-government <br />
          solutions are created using reusable components, <br />
          proven patterns, and scalable architecture.
        </p>
      </div>
    </div>

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
            <span
              class="building-blocks-description-random-text"
              :style="{ color: currentColor }"
              >{{ currentText }}</span
            >
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
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

/**
hero
*/

.enter-sandbox-wrapper {
  position: relative;
  height: 60rem;
  width: 100vw;
}

.enter-sandbox-intro-text {
  position: absolute;
  top: 30%;
  left: 10%;
  width: 50%;
}

.enter-sandbox-intro-text h1 {
  margin-bottom: 0.5rem;
}

.enter-sandbox-intro-text p {
  margin-top: 1rem;
}

.logo-sandbox {
  position: relative;
  left: -1rem;
}

.enter-sandbox-blur {
  position: absolute;
  height: 55rem;
  width: calc(100vw - 8rem);
  margin: 0 4rem 2rem 4rem;
  background: var(--gs-white);
  opacity: 0.6;
  filter: blur(2px);
  border: 0.5rem solid transparent;
  box-sizing: content-box;
  border-radius: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
}

.enter-sandbox-bg-bottom-right {
  position: absolute;
  width: 100vw;
  height: 60rem;
  background: url('@/assets/images/enter-sandbox-bg-bottom-right.png') right bottom -1px no-repeat;
}

/**
understanding
*/

.understanding-wrapper {
  position: relative;
  height: 60rem;
  width: 100vw;
}

.understanding-bg-top-right {
  position: absolute;
  width: 100vw;
  height: 60rem;
  background: url('@/assets/images/understanding-bg-top-right.png') right top no-repeat;
}

.understanding-blur {
  position: absolute;
  height: 55rem;
  width: calc(100vw - 8rem);
  margin: 0 4rem 2rem 4rem;
  background: var(--gs-dark);
  opacity: 0.8;
  filter: blur(2px);
  border: 0.5rem solid transparent;
  border-radius: 1rem;
  box-sizing: content-box;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
}

.understanding-content {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 60rem;
  background: url('@/assets/images/understanding-content.png') center center no-repeat;
}

/**
egov intro
*/

.egov-intro-wrapper {
  position: relative;
  height: 30rem;
  width: 100vw;
}

.egov-intro-blur {
  position: absolute;
  height: 22.5rem;
  width: calc(100vw - 8rem);
  margin: 0 4rem 2rem 4rem;
  background: var(--gs-white);
  opacity: 0.6;
  filter: blur(2px);
  border: 0.5rem solid transparent;
  box-sizing: content-box;
  border-radius: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
}

.egov-intro-text {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  left: 50%;
  width: 80vw;
  transform: translateX(-50%);
  height: 25rem;
}

.egov-intro-text h1 {
  font-size: 3rem;
  white-space: nowrap;
  color: var(--gs-primary);
}

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
  width: 1200px;
  height: 2200px;
  left: 50%;
  transform: translateX(-50%);
  background: url('@/assets/images/gs-demo-1200.png') center top no-repeat;
  border: 0.5rem solid var(--gs-gray);
  border-radius: 1rem;
  box-sizing: content-box;
}

.egov-page-mask {
  position: absolute;
  left: 50%;
  top: 1610px;
  width: 1200px;
  height: 580px;
  background: url('@/assets/images/gs-demo-1200.png') center bottom no-repeat;
  border: 0.5rem solid var(--gs-gray);
  box-sizing: content-box;
  border-radius: 1rem;
  transform: translateX(-50%) scale(1);
  transition: transform 0.5s ease-out;
}

.egov-page-mask.change {
  transform: translateX(-50%) scale(1.05);
}
/* 
@media screen and (max-width: 1399px) {
  .egov-page {
    width: 900px;
    background: url('@/assets/images/gs-demo-900.png') center top no-repeat;
  }
  .egov-page-mask {
    width: 900px;
    background: url('@/assets/images/gs-demo-900.png') center bottom no-repeat;
  }
} */

/**
building blocks
*/

.building-blocks-wrapper {
  position: absolute;
  height: 38rem;
  width: 100vw;
  bottom: 0;
  transform: scale(1.05);
}

.building-blocks-bg-bottom-right {
  position: absolute;
  width: 100vw;
  height: 38rem;
  background: url('@/assets/images/building-blocks-bg-bottom-right.png') right bottom no-repeat;
}

.building-blocks-blur {
  position: absolute;
  height: 36rem;
  width: calc(100vw - 14rem);
  margin: 0 7rem 2rem 7rem;
  background: var(--gs-white);
  opacity: 0.6;
  filter: blur(2px);
  box-sizing: content-box;
  border-radius: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
}

/* hover areas */

.building-blocks-hover-areas {
  position: absolute;
  display: flex;
  width: 1200px;
  height: 120px;
  left: 50%;
  /* background: url('@/assets/images/building-blocks-hover-areas.png') center top no-repeat; */
  transform: translateX(-50%);
}

.building-blocks-hover-areas-left {
  height: 120px;
  width: 400px;
  background: var(--gs-white) url('@/assets/images/building-blocks-hover-areas-left.png') 19.5px 0
    no-repeat;
}

.building-blocks-hover-areas-left:hover {
  background: var(--gs-white) url('@/assets/images/building-blocks-hover-areas-left-hover.png')
    19.5px 0 no-repeat;
  cursor: pointer;
}

.building-blocks-hover-areas-center {
  height: 120px;
  width: 400px;
  background: var(--gs-white) url('@/assets/images/building-blocks-hover-areas-center.png') 19px 0
    no-repeat;
}

.building-blocks-hover-areas-center:hover {
  height: 120px;
  width: 400px;
  background: var(--gs-white) url('@/assets/images/building-blocks-hover-areas-center-hover.png')
    19px 0 no-repeat;
  cursor: pointer;
}

.building-blocks-hover-areas-right {
  height: 120px;
  width: 400px;
  background: var(--gs-white) url('@/assets/images/building-blocks-hover-areas-right.png') 16px 0
    no-repeat;
}

.building-blocks-hover-areas-right:hover {
  height: 120px;
  width: 400px;
  background: var(--gs-white) url('@/assets/images/building-blocks-hover-areas-right-hover.png')
    16px 0 no-repeat;
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
  top: 16rem;
  font-size: 1.75rem;
  color: var(--gs-primary);
}

.building-blocks-headline p {
  margin-right: 1rem;
}

.building-blocks-elements {
  position: absolute;
  top: 19rem;
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
  top: 28rem;
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
