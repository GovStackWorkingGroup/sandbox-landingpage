<script setup lang="ts">
import { mdiCubeOutline } from '@mdi/js'

export interface Feature {
  title: string
  description?: string
}

const props = defineProps({
  features: {
    type: Array<Feature>,
    required: true,
  },
})
</script>

<template>
  <div class="features">
    <div class="feature" v-for="(feature, index) in props.features" :key="feature + '_' + index">
      <div>
        <v-icon :icon="mdiCubeOutline" color="gs-primary"></v-icon>
        <span class="title">{{ feature.title }}</span>
      </div>
      <p v-if="feature.description" class="description">{{ feature.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.features {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
  gap: 0.5rem;
}

.feature {
  padding: 0.25rem;
  height: fit-content;
  background: var(--gs-surface-light);
  border: 1px solid var(--gs-gray-light);
  color: var(--gs-primary);
  border-radius: 0.5rem;
  white-space: nowrap;
}

.title {
  font-size: 0.9rem;
  margin-left: 0.25rem;
}

.description {
  margin-left: 1.75rem;
  color: var(--gs-black);
  font-size: 0.8rem;
}
</style>
