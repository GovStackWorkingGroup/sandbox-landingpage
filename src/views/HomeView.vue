<script setup lang="ts">
import TheBuildingBlocks from '@/components/TheBuildingBlocks.vue'
import TheAccessDemos from '@/components/TheAccessDemos.vue'
import BaseSection from '@/components/BaseSection.vue'
</script>

<template>
  <main>
    <!-- hero -->
    <BaseSection rightBottomImage="enter-sandbox-bg-bottom-right">
      <div class="enter-sandbox-wrapper">
        <!-- text -->
        <div class="enter-sandbox-intro-text">
          <h1>Enter the</h1>
          <i class="logo-sandbox"></i>
          <p>
            The GovStack Sandbox is a demonstration environment for teams from governments and
            service providers to learn and test how to practically apply the GovStack approach.
          </p>
        </div>

        <!-- image -->
        <div class="enter-sandbox-image"></div>
      </div>
    </BaseSection>

    <!-- understanding gov stack -->
    <BaseSection
      rightTopImage="understanding-bg-top-right"
      leftBottomImage="understanding-bg-bottom-left"
      blurColor="dark"
    >
      <div class="understanding-wrapper">
        <div class="understanding-content"></div>
      </div>
    </BaseSection>

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
    <TheBuildingBlocks />
    <TheAccessDemos />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/**
hero
*/

.enter-sandbox-wrapper {
  display: flex;
  align-items: center;
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

.enter-sandbox-image {
  right: 0;
  min-height: 564px;
  min-width: 736px;
  background: url('@/assets/images/enter-sandbox-image.png') center center no-repeat;
}

/**
understanding
*/

.understanding-wrapper {
  /* position: relative;
  height: 60rem;
  width: 100vw; */
}

.understanding-content {
  width: 1200px;
  height: 592px;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100vw - 8rem);
  height: 25rem;
  box-shadow: 0px 0px 20px rgba(0, 48, 135, 0.25);
  backdrop-filter: blur(34.8px);
  background: rgba(255, 255, 255, 0.6);
  border: 0.5rem solid transparent;
  box-sizing: content-box;
  border-radius: 1rem;
}

.egov-intro-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80vw;
}

.egov-intro-text h1 {
  font-size: 3rem;
  white-space: nowrap;
  color: var(--gs-primary);
}
</style>
