<template>
  <!-- access demos -->
  <div class="access-demos-wrapper">
    <div class="access-demos-bg-top-right"></div>
    <div class="access-demos-blur"></div>
    <div class="access-demos-content">
      <h1>Access Demos</h1>
      <div class="access-demos-content-row">
        <section class="early-warning" @click="$router.push({ name: 'earlyWarning' })"></section>
        <section class="cash-transfer" @click="$router.push({ name: 'cashTransfer' })"></section>
      </div>
      <div class="access-demos-content-row">
        <section
          class="construction-permit"
          @click="$router.push({ name: 'constructionPermit' })"
        ></section>
        <section class="high-school" @click="$router.push({ name: 'highSchool' })"></section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.access-demos-wrapper {
  position: relative;
  height: 60rem;
  width: 100vw;
}

.access-demos-bg-top-right {
  position: absolute;
  width: 100vw;
  height: 60rem;
  background: url('@/assets/images/access-demos-bg-top-right.png') right top no-repeat;
}

.access-demos-blur {
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

.access-demos-content {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 60rem;
  padding: 4rem 8rem;
}

.access-demos-content h1 {
  font-size: 3rem;
  white-space: nowrap;
  color: var(--gs-primary);
}

.access-demos-content-row {
  display: flex;
  justify-content: space-between;
  height: 312px;
  margin: 2rem 0 4rem 0;
}

.early-warning {
  width: 602px;
  height: 312px;
  background: url('@/assets/images/access-demo-content-early-warning.png') center center no-repeat;
}

.early-warning:hover {
  background: url('@/assets/images/access-demo-content-early-warning-hover.png') center center
    no-repeat;
  cursor: pointer;
}

.cash-transfer {
  width: 602px;
  height: 312px;
  background: url('@/assets/images/access-demo-content-cash-transfer.png') center center no-repeat;
}

.cash-transfer:hover {
  background: url('@/assets/images/access-demo-content-cash-transfer-hover.png') center center
    no-repeat;
  cursor: pointer;
}

.construction-permit {
  width: 602px;
  height: 312px;
  background: url('@/assets/images/access-demo-content-construction-permit.png') center center
    no-repeat;
}

.construction-permit:hover {
  background: url('@/assets/images/access-demo-content-construction-permit-hover.png') center center
    no-repeat;
  cursor: pointer;
}

.high-school {
  width: 602px;
  height: 312px;
  background: url('@/assets/images/access-demo-content-high-school.png') center center no-repeat;
}

.high-school:hover {
  background: url('@/assets/images/access-demo-content-high-school-hover.png') center center
    no-repeat;
  cursor: pointer;
}
</style>
