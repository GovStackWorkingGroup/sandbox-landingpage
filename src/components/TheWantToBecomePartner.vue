<script setup lang="ts">
import { mdiEmail } from '@mdi/js'
import BaseSection from '@/components/BaseSection.vue'
</script>

<template>
  <BaseSection right-bottom-image="building-blocks-bg-bottom-right">
    <div class="want-to-become-partner-wrapper">
      <div class="want-to-become-partner-content">
        <h1>Want to become a partner?</h1>
        <div class="partner-row">
          <div class="partner-column">
            <h2>Add Your Digital Public Good</h2>
            <p>
              You are providing a software solution compliant to GovStack’s building block? Let’s
              deploy it on the sandbox and make it available to one of the upcoming services which
              will be developed with partner governments.
            </p>
            <v-btn :prepend-icon="mdiEmail" color="gs-primary">Contact Us</v-btn>
          </div>
          <div class="partner-column">
            <h2>Add Demo of your Services</h2>
            <p>
              Have you build a government service using GovStack’s building blocks? Let’s showcase
              the service together on our sandbox. The service needs to be build on at least 3
              separated Building Blocks.
            </p>
            <v-btn :prepend-icon="mdiEmail" color="gs-primary">Contact Us</v-btn>
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped>
.want-to-become-partner-content {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  justify-content: space-between;
}

.partner-row {
  display: flex;
  gap: 2rem;
}

.partner-column {
  display: flex;
  flex-direction: column;
}

.want-to-become-partner-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  white-space: nowrap;
  color: var(--gs-primary);
}

.want-to-become-partner-content h2 {
  font-size: 2rem;
  white-space: nowrap;
  color: var(--gs-primary);
}

.want-to-become-partner-content p {
  margin-bottom: 1rem;
}
</style>
