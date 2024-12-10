<script setup lang="ts">
import {
  mdiEyeOutline,
  mdiFileDocumentMultipleOutline,
  mdiLightbulbOutline,
  mdiCubeUnfolded,
  mdiCodeTags,
} from '@mdi/js'
import BaseSection from '@/components/BaseSection.vue'
import BaseBorderFrame from '@/components/BaseBorderFrame.vue'
</script>

<template>
  <BaseSection
    rightTopImage="understanding-bg-top-right"
    leftBottomImage="understanding-bg-bottom-left"
    blurColor="dark"
  >
    <div class="understanding-wrapper">
      <div class="understanding-content">
        <BaseBorderFrame>
          <h2>Understanding GovStack Sandbox</h2>
          <div class="columns">
            <div class="left">
              <h3>What you <span class="green">will</span> find here</h3>
              <div class="feature">
                <v-icon :icon="mdiEyeOutline" color="gs-green"></v-icon>
                <p>
                  Live e-service demos to see the GovStack’s architecture and methodology in action
                </p>
              </div>
              <div class="feature">
                <v-icon :icon="mdiFileDocumentMultipleOutline" color="gs-green"></v-icon>
                <p>Technical documentation of the e-service demos</p>
              </div>
              <div class="feature">
                <v-icon :icon="mdiLightbulbOutline" color="gs-green"></v-icon>
                <p>
                  Do-It-Yourself packages to learn and test specific aspects of GovStack (find more
                  on our documentation page)
                </p>
              </div>
            </div>
            <div class="right">
              <h3>What you <span class="orange">won't</span> find here</h3>
              <div class="feature">
                <v-icon :icon="mdiCubeUnfolded" color="gs-orange"></v-icon>
                <p>Technical building block specifications of GovStack (find them on GovSpecs)</p>
              </div>
              <div class="feature">
                <v-icon :icon="mdiCodeTags" color="gs-orange"></v-icon>
                <p>
                  Ready-made software solutions you can integrate into your government
                  infrastructure (find a list of possible solutions on GovMarket)
                </p>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="left">
              <div class="feature">
                <p>
                  GovStack Sandbox is a
                  <span class="green"> demonstration and learning tool</span> designed to showcase
                  and explore how digital government services can be built using modular, reusable
                  building blocks.
                </p>
              </div>
            </div>
            <div class="right">
              <div class="feature">
                <p>
                  GovStack Sandbox is not intended for
                  <span class="orange"> building, deploying live systems.</span> It is not a
                  production-ready system.
                </p>
              </div>
            </div>
          </div>
        </BaseBorderFrame>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped>
.understanding-content {
  color: var(--gs-surface-light);
}

h2 {
  font-size: 2rem;
}

.columns {
  display: flex;
}

.left {
  flex: 1;
  border-right: 1px solid var(--gs-white);
  padding-right: 1rem;
}

.right {
  flex: 1;
  padding-left: 1rem;
}

h3 {
  margin: 1rem 0;
  font-weight: 400;
}

.green {
  color: var(--gs-green);
}

.orange {
  color: var(--gs-orange);
}

.feature {
  display: flex;
  color: var(-gs-surface-light);
  margin-bottom: 1.5rem;
}

.feature p {
  padding-left: 0.5rem;
}
</style>
