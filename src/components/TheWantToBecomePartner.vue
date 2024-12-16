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
            <h2>Add your digital public good</h2>
            <p>
              You are providing a software solution compliant to a GovStack building block? Let’s
              deploy it on the sandbox and make it available to one of the upcoming services which
              will be developed with partner governments.
            </p>
            <v-btn
              :prepend-icon="mdiEmail"
              color="gs-primary"
              href="https://www.govstack.global/about/contact/"
              target="_blank"
              >Contact Us</v-btn
            >
          </div>
          <div class="partner-column">
            <h2>Add demo of your services</h2>
            <p>
              Have you built a government service with the building blocks of GovStack? Let's
              present the service together in our sandbox. The service must be built on at least 3
              separate building blocks.
            </p>
            <v-btn
              :prepend-icon="mdiEmail"
              color="gs-primary"
              href="https://www.govstack.global/about/contact/"
              target="_blank"
              >Contact Us</v-btn
            >
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
