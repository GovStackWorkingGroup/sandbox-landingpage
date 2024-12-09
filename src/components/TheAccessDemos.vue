<script setup lang="ts">
import BaseSection from '@/components/BaseSection.vue'
</script>

<template>
  <BaseSection
    rightTopImage="access-demos-bg-top-right"
    leftBottomImage="access-demos-bg-bottom-left"
  >
    <div class="access-demos-wrapper">
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
  </BaseSection>
</template>

<style scoped>
.access-demos-content {
  display: flex;
  flex-direction: column;
  width: 1250px;
}

.access-demos-content h1 {
  font-size: 3rem;
  white-space: nowrap;
  color: var(--gs-primary);
}

.access-demos-content-row {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 2rem 0;
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
