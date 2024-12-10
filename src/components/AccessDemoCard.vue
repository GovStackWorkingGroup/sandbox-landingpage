<script setup lang="ts">
import { mdiCubeOutline, mdiChevronRight } from '@mdi/js'
import BaseBorderFrame from '@/components/BaseBorderFrame.vue'

const props = defineProps({
  usageTypes: {
    type: Array<string>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  features: {
    type: Array<string>,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <BaseBorderFrame>
    <div class="usage-types">
      <span v-for="(usageType, index) in props.usageTypes" :key="usageType + '_' + index">{{
        usageType
      }}</span>
    </div>

    <h2>{{ props.title }}</h2>

    <div class="features">
      <div class="feature" v-for="(feature, index) in props.features" :key="feature + '_' + index">
        <v-icon :icon="mdiCubeOutline" color="gs-primary"></v-icon>
        <span>{{ feature }}</span>
      </div>
    </div>

    <p class="description">{{ props.description }}</p>

    <v-btn
      :prepend-icon="mdiChevronRight"
      color="gs-primary"
      @click="$router.push({ name: props.route })"
      >Learn More</v-btn
    >
  </BaseBorderFrame>
</template>

<style scoped>
.usage-types {
  display: flex;
  gap: 1rem;
  color: var(--gs-primary);
  font-size: 0.9rem;
}

.features {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
  gap: 0.5rem;
  min-height: 6rem;
}

.feature {
  display: flex;
  align-items: center;
  padding: 0.1rem;
  background: var(--gs-surface-light);
  border: 1px solid var(--gs-gray-light);
  color: var(--gs-primary);
  border-radius: 0.5rem;
  white-space: nowrap;
  height: 2rem;
}

.feature p {
  padding-left: 0.5rem;
}

.description {
  margin-bottom: 2rem;
}

.v-btn:hover {
  background: var(--gs-green) !important;
  color: var(--gs-primary) !important;
}
</style>
