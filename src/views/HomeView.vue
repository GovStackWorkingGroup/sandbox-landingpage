<script setup lang="ts">
import { onMounted, ref } from 'vue'

const egovPage = ref()
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

  observer.observe(egovPage.value)
  observer.observe(egovPageMask.value)
})
</script>

<template>
  <main>
    <!-- hero -->
    <div class="hero-wrapper">
      <div class="enter-sandbox-bg"></div>
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
      <div class="understanding-text-frame"></div>
      <div class="understanding-text">
        <h1>Understanding GovStack Sandbox</h1>
      </div>
    </div>

    <!-- egov -->
    <div class="egov-wrapper">
      <div class="egov-page" ref="egovPage"></div>
      <div class="egov-page-mask" ref="egovPageMask"></div>
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

.hero-wrapper {
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

.enter-sandbox-bg {
  position: absolute;
  width: 100vw;
  height: 60rem;
  background: url('@/assets/images/bg-hero.png') right bottom -1px no-repeat;
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

.understanding-text {
  position: absolute;
  top: 30%;
  left: 10%;
  color: var(--gs-white);
}

/**
egov
*/

.egov-wrapper {
  position: relative;
  height: 60rem;
  width: 100vw;
}

.egov-page {
  position: absolute;
  padding: 0;
  width: 1200px;
  left: 50%;
  transform: translateX(-50%);
  height: 2200px;
  background: url('@/assets/images/gs-demo-1200.png') center top no-repeat;
  border: 1px solid var(--gs-gray);
}

.egov-page-mask {
  position: absolute;
  left: 50%;
  top: 1600px;
  width: 1200px;
  height: 580px;
  background: url('@/assets/images/gs-demo-1200.png') center bottom no-repeat;
  border: 0.5rem solid var(--gs-gray);
  box-sizing: content-box;
  border-radius: 1rem;
  transform: translateX(-50%) scale(0.5);
  transition: transform 0.5s ease-out;
}

.egov-page-mask.change {
  transform: translateX(-50%) scale(1.1);
}

@media screen and (max-width: 1399px) {
  .egov-page {
    width: 900px;
    background: url('@/assets/images/gs-demo-900.png') center top no-repeat;
  }
  .egov-page-mask {
    width: 900px;
    background: url('@/assets/images/gs-demo-900.png') center bottom no-repeat;
  }
}
</style>
