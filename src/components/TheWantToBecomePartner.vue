<script setup lang="ts">
import { mdiBookOpenBlankVariant } from '@mdi/js'
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo iste quaerat
              facere, tenetur magni! Quia nulla incidunt sit veritatis inventore recusandae,
              delectus odit consequatur optio, repellat doloremque. Id, corrupti.
            </p>
            <v-btn :prepend-icon="mdiBookOpenBlankVariant" color="gs-primary">Click me</v-btn>
          </div>
          <div class="partner-column">
            <h2>Add Demo of your Services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo iste quaerat
              facere, tenetur magni! Quia nulla incidunt sit veritatis inventore recusandae,
              delectus odit consequatur optio, repellat doloremque. Id, corrupti.
            </p>
            <v-btn :prepend-icon="mdiBookOpenBlankVariant" color="gs-primary">Click me</v-btn>
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
