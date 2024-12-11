<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { mdiInformationOutline } from '@mdi/js'
import AnimatedText from '@/components/AnimatedText.vue'

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
  <div class="building-blocks-wrapper" ref="buildingBlocksWrapper">
    <div class="building-blocks-bg-bottom-right"></div>
    <div class="building-blocks-blur"></div>
    <div class="building-blocks-hover-areas">
      <!-- left -->
      <div
        class="building-blocks-hover-areas-left"
        @mouseover="changeBuildingsBlocks('left')"
        @mouseout="changeBuildingsBlocks('clear')"
      >
        <div class="building-blocks-hover-areas-content">
          <p>Methodology demo showcasing the usage of service design templates. <br /><br /></p>
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
      <div
        class="building-blocks-hover-areas-center"
        @mouseover="changeBuildingsBlocks('center')"
        @mouseout="changeBuildingsBlocks('clear')"
      >
        <div class="building-blocks-hover-areas-content">
          <p>Design demo showcasing the methodology from service design to frontend development.</p>
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
      <div
        class="building-blocks-hover-areas-right"
        @mouseover="changeBuildingsBlocks('right')"
        @mouseout="changeBuildingsBlocks('clear')"
      >
        <div class="building-blocks-hover-areas-content">
          <p>Technology demo showcasing Building Block architecture. <br /><br /></p>
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
      <div class="animated-text-area">
        <span>Reusing same</span>
        <AnimatedText :texts="['building blocks', 'designs', 'methodologies', 'building blocks']" />
      </div>
      <p>
        across all
        <span class="building-blocks-description-where"
          >services, departments and organizations.</span
        >
      </p>
    </div>
  </div>
</template>

<style scoped>
/**
building blocks
*/

.building-blocks-wrapper {
  position: absolute;
  height: 35rem;
  width: 100%;
  bottom: 0;
  transform: scale(0.8);
  transition: transform 0.5s ease-out;
}

.building-blocks-wrapper.change {
  transform: scale(1);
}

.building-blocks-bg-bottom-right {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
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
  justify-content: center;
  width: 100%;
  gap: 34px;
}

.building-blocks-hover-areas-left,
.building-blocks-hover-areas-center,
.building-blocks-hover-areas-right {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.building-blocks-hover-areas-content {
  width: 364px;
  padding: 1rem;
  border: 1px solid var(--gs-primary);
  border-radius: 1rem;
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.building-blocks-hover-areas-content div {
  text-align: right;
  padding: 0.5rem 0;
}

.building-blocks-hover-areas-content p {
  color: var(--gs-primary);
  font-family: monospace;
}

.building-blocks-hover-areas-content .v-btn:hover {
  background: var(--gs-green) !important;
  color: var(--gs-primary) !important;
}

/* builing block headline */

.building-blocks-headline {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 11rem;
  font-size: 1.75rem;
  color: var(--gs-primary);
}

.building-blocks-headline p {
  margin-right: 1rem;
}

.building-blocks-elements {
  position: absolute;
  top: 14rem;
  width: 100%;
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
  position: absolute;
  top: 24rem;
  width: 100%;
  font-size: 1.75rem;
  color: var(--gs-primary);
}

.animated-text-area {
  display: flex;
}

.building-blocks-description-where {
  color: var(--gs-primary);
  font-weight: bold;
  font-style: italic;
}
</style>
