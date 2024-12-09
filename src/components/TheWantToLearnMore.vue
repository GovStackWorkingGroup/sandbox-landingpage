<script setup lang="ts">
import { mdiBookOpenBlankVariant } from '@mdi/js'
import BaseSection from '@/components/BaseSection.vue'
</script>

<template>
  <BaseSection left-top-image="want-to-learn-more-bg-top-left">
    <div class="want-to-learn-more-wrapper">
      <div class="want-to-learn-more-content">
        <div>
          <h1>Want to Learn More?</h1>
          <p>
            Access comprehensive documentation for developers, architects, and implementation teams.
          </p>
        </div>
        <v-btn :prepend-icon="mdiBookOpenBlankVariant" color="gs-primary"
          >Sandbox GitBook Documentation</v-btn
        >
      </div>
    </div>
  </BaseSection>
</template>

<style scoped>
.want-to-learn-more-content {
  display: flex;
  align-items: center;
  max-width: 1200px;
  justify-content: space-between;
}

.want-to-learn-more-content > * {
  flex: 1;
  margin: 0 3rem;
}

.want-to-learn-more-content h1 {
  font-size: 3rem;
  white-space: nowrap;
  color: var(--gs-primary);
}

.want-to-learn-more-content p {
  font-size: 1.5rem;
}
</style>
