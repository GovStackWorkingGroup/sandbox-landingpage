<script setup lang="ts">
import BaseSection from '@/components/BaseSection.vue'
import AccessDemoCard from '@/components/AccessDemoCard.vue'
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
          <AccessDemoCard
            :usageTypes="['Back-End', 'Front-End', 'UX/UI']"
            :title="'Early Warning System'"
            :features="['Information Mediator', 'Digital Registry', 'Messaging']"
            :description="'Demonstrating Govstack architecture and a-sync data exchange through early warning system use case.'"
            :route="'earlyWarning'"
          ></AccessDemoCard>
          <AccessDemoCard
            :usageTypes="['Back-End', 'Front-End']"
            :title="'Social Cash Transfer'"
            :features="[
              'Identity',
              'Payment',
              'Information Mediator',
              'Digital Registry',
              'Consent',
            ]"
            :description="'Demonstrating Govstack architecture  and all stack layers through a Unconditional Social Cash Transfer (USCT) use case.'"
            :route="'cashTransfer'"
          ></AccessDemoCard>
        </div>
        <div class="access-demos-content-row">
          <AccessDemoCard
            :usageTypes="['Service Design', 'UI/UX']"
            :title="'High-School Graduation Certificate '"
            :features="[
              'Identity',
              'Payment',
              'Information Mediator',
              'Digital Registry',
              'Consent',
            ]"
            :description="'Demonstrating service design, UX/UI BB usage and mobile first approach through construction permit use case.'"
            :route="'highSchool'"
          ></AccessDemoCard>
          <AccessDemoCard
            :usageTypes="['Front-End', 'Service Design', 'UI/UX']"
            :title="'Construction Permit'"
            :features="[
              'Identity',
              'Payment',
              'GIS',
              'Information Mediator',
              'Digital Registry',
              'Consent',
            ]"
            :description="'Demonstrating service design, UX/UI BB usage and mobile first approach through construction permit use case.'"
            :route="'constructionPermit'"
          ></AccessDemoCard>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped>
.access-demos-content {
  display: flex;
  flex-direction: column;
}

.access-demos-content h1 {
  font-size: 3rem;
  white-space: nowrap;
  color: var(--gs-primary);
}

.access-demos-content-row {
  display: flex;
  margin: 2rem 0;
  gap: 4rem;
}

.access-demos-content-row > * {
  flex: 1;
}

@media (width < 1400px) {
  .access-demos-content-row {
    flex-direction: column;
  }
}
</style>
