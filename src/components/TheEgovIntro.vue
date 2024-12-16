<script setup lang="ts">
import BaseSection from '@/components/BaseSection.vue'
</script>

<template>
  <BaseSection left-top-image="want-to-learn-more-bg-top-left">
    <div class="egov-intro-wrapper">
      <div class="egov-intro-content">
        <h1>
          Ever wonder how to build <br />
          digital government <br />
          services?
        </h1>
        <p>
          Step into our Sandbox to explore how modern government solutions are created using
          reusable components, proven patterns, and scalable architecture.
        </p>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped>
.egov-intro-content {
  display: flex;
  align-items: center;
  max-width: 1200px;
  justify-content: space-between;
  gap: 4rem;
}

.egov-intro-content h1 {
  font-size: 3rem;
  white-space: nowrap;
  color: var(--gs-primary);
}

.egov-intro-content p {
  font-size: 1.5rem;
}
</style>
