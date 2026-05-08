<script setup lang="ts">
import { mdiChevronRight } from '@mdi/js'
import type { PropType } from 'vue'
import BaseBorderFrame from '@/components/BaseBorderFrame.vue'
import BaseBuildingBlocks from '@/components/BaseBuildingBlocks.vue'
import type { Feature } from './BaseBuildingBlocks.vue'

interface PartnerLogo {
  src: string;
  alt: string;
}

const props = defineProps({
  usageTypes: {
    type: Array as PropType<string[]>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  features: {
    type: Array as PropType<Feature[]>,
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
  partnerHeading: {
    type: String,
    required: false,
  },
  partnerLogos: {
    type: Array as PropType<PartnerLogo[]>,
    required: false,
  },
})
</script>

<template>
  <BaseBorderFrame :has-border-wrapper="true">
    <div class="usage-types">
      <span v-for="(usageType, index) in props.usageTypes" :key="usageType + '_' + index">{{
        usageType
      }}</span>
    </div>

    <h2>{{ props.title }}</h2>

    <BaseBuildingBlocks :features="props.features" />

    <p class="description">{{ props.description }}</p>

    <v-btn
      :prepend-icon="mdiChevronRight"
      color="gs-primary"
      @click="$router.push({ name: props.route })"
      >Access demo</v-btn
    >
    <div v-if="props.partnerLogos && props.partnerLogos.length" class="partner">
      <span class="partnerHeading">{{ props.partnerHeading ?? 'In cooperation with' }}</span>
      <div class="partnerLogos">
        <img
          v-for="logo in props.partnerLogos"
          :key="logo.alt"
          :src="logo.src"
          :alt="logo.alt"
          class="partnerLogo"
        />
      </div>
    </div>
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

.description {
  margin-bottom: 2rem;
}

.v-btn:hover {
  background: var(--gs-green) !important;
  color: var(--gs-primary) !important;
}
.partner {
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.partnerHeading {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #888;
}

.partnerLogos {
  display: flex;
  gap: 6px;
  align-items: center;
}

.partnerLogo {
  height: 40px;
  width: auto;
  object-fit: contain;
}
</style>
