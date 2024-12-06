<script setup lang="ts">
import TheBuildingBlocks from '@/components/TheBuildingBlocks.vue'
import TheAccessDemos from '@/components/TheAccessDemos.vue'
</script>

<template>
  <main>
    <!-- hero -->
    <div class="enter-sandbox-wrapper">
      <div class="enter-sandbox-bg-bottom-right"></div>
      <div class="enter-sandbox-blur"></div>
      <div class="enter-sandbox-image"></div>
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
    <TheBuildingBlocks />
    <TheAccessDemos />
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100vw - 8rem);
  height: 55rem;
  box-shadow: 0px 0px 20px rgba(0, 48, 135, 0.25);
  backdrop-filter: blur(34.8px);
  background: rgba(255, 255, 255, 0.6);
  border: 0.5rem solid transparent;
  box-sizing: content-box;
  border-radius: 1rem;
}

.enter-sandbox-bg-bottom-right {
  position: absolute;
  width: 100vw;
  height: 60rem;
  background: url('@/assets/images/enter-sandbox-bg-bottom-right.png') right bottom -1px no-repeat;
}

.enter-sandbox-image {
  position: absolute;
  right: 2rem;
  height: 60rem;
  width: 60rem;
  background: url('@/assets/images/enter-sandbox-image.png') center center no-repeat;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100vw - 8rem);
  height: 55rem;
  border-radius: 16px;
  background: rgba(0, 11, 48, 0.8);
  box-shadow: 0px 0px 20px 0px rgba(0, 48, 135, 0.25);
  backdrop-filter: blur(18px);
  border: 0.5rem solid transparent;
  border-radius: 1rem;
  box-sizing: content-box;
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
