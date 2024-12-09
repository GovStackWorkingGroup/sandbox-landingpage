<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { mdiInformationOutline } from '@mdi/js'

const buildingBlocksWrapper = ref()
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

  observer.observe(buildingBlocksWrapper.value)
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
</script>

<template>
  <!-- egov page -->
  <div class="egov-wrapper">
    <div class="egov-page"></div>
    <!-- building blocks -->
    <div class="building-blocks-wrapper" ref="buildingBlocksWrapper">
      <div class="building-blocks-bg-bottom-right"></div>
      <div class="building-blocks-blur"></div>
      <div class="building-blocks-hover-areas">
        <!-- left -->
        <div class="building-blocks-hover-areas-left">
          <div class="building-blocks-hover-areas-frame">
            <p>Methodology demo showcasing the usage of service design templates.</p>
            <div>
              <v-btn
                color="gs-primary"
                class="learn-more"
                variant="outlined"
                @click="$router.push({ name: 'highSchool' })"
                >Learn more</v-btn
              >
            </div>
          </div>
        </div>

        <!-- center -->
        <div class="building-blocks-hover-areas-center">
          <div class="building-blocks-hover-areas-frame">
            <p>Methodology demo showcasing the usage of service design templates.</p>
            <div>
              <v-btn
                color="gs-primary"
                class="learn-more"
                variant="outlined"
                @click="$router.push({ name: 'constructionPermit' })"
                >Learn more</v-btn
              >
            </div>
          </div>
        </div>

        <!-- right -->
        <div class="building-blocks-hover-areas-right">
          <div class="building-blocks-hover-areas-frame">
            <p>Methodology demo showcasing the usage of service design templates.</p>
            <div>
              <v-btn
                color="gs-primary"
                class="learn-more"
                variant="outlined"
                @click="$router.push({ name: 'cashTransfer' })"
                >Learn more</v-btn
              >
            </div>
          </div>
        </div>
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

/**
building blocks
*/

.building-blocks-wrapper {
  position: absolute;
  height: 35rem;
  width: 100vw;
  bottom: 2px;
  transform: scale(0.8);
  transition: transform 0.5s ease-out;
}

.building-blocks-wrapper.change {
  transform: scale(1);
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

.building-blocks-hover-areas-left,
.building-blocks-hover-areas-center,
.building-blocks-hover-areas-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 120px;
  width: 400px;
}

.building-blocks-hover-areas-frame {
  position: relative;
  width: 362px;
  margin-left: 3px;
  padding: 1rem;
  border: 1px solid var(--gs-primary);
  border-radius: 1rem;
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.building-blocks-hover-areas-center .building-blocks-hover-areas-frame {
  margin-left: 1px;
}

.building-blocks-hover-areas-right .building-blocks-hover-areas-frame {
  margin-left: -3px;
}

.building-blocks-hover-areas-frame div {
  text-align: right;
  padding: 0.5rem 0;
}

.building-blocks-hover-areas-frame p {
  color: var(--gs-primary);
  font-family: monospace;
}

.building-blocks-hover-areas-frame .v-btn:hover {
  background: var(--gs-green) !important;
  color: var(--gs-primary) !important;
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
  font-weight: bold;
  font-family: monospace;
}

.building-blocks-description-where {
  color: var(--gs-primary);
  font-weight: bold;
  font-style: italic;
}
</style>
