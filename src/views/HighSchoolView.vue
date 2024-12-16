<script setup lang="ts">
import {
  mdiChevronLeft,
  mdiCheck,
  mdiInformationOutline,
  mdiCodeTags,
  mdiAccountVoice,
  mdiBookOpenBlankVariant,
} from '@mdi/js'
import BaseSection from '@/components/BaseSection.vue'
import BaseBuildingBlocks from '@/components/BaseBuildingBlocks.vue'
import { useUI } from '@/composables/useUI'

const { navigate } = useUI()
</script>

<template>
  <div>
    <v-btn
      class="back-button"
      :prepend-icon="mdiChevronLeft"
      variant="text"
      color="gs-primary"
      @click="navigate('access-demos-wrapper')"
      >Back</v-btn
    >
    <BaseSection>
      <div class="high-school-page-wrapper">
        <div class="high-school-page-content">
          <div class="status">
            <span class="demo-type">Tech Demo</span>
          </div>
          <h1>High-School Graduation Certificate</h1>
          <div class="gs-row">
            <div>
              <p>
                Here you can find demonstration of service and frontend design using an Online
                High-School Graduation Certificate Use Case.
              </p>
              <v-expansion-panels class="mt-4">
                <v-expansion-panel>
                  <v-expansion-panel-title
                    >What is a High School Graduation Certificate?</v-expansion-panel-title
                  >
                  <v-expansion-panel-text>
                    A high school certificate service allows graduates to access their high school
                    certificates digitally. It eliminates the need for physical copies of
                    certificates and provides a convenient and efficient way for graduates to access
                    and share their educational qualifications digitally.
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <i class="demo-image" />
          </div>

          <div class="gs-row">
            <!-- this demo includes -->
            <div class="gs-column">
              <h2 class="headline">This Demo includes</h2>
              <div class="demo-feature">
                <v-icon :icon="mdiCheck" color="gs-green"></v-icon>
                <p>GovStack Playbook Best Practice</p>
              </div>
              <div class="demo-feature">
                <v-icon :icon="mdiCheck" color="gs-green"></v-icon>
                <p>Service Patterns of UX/UI Building Block</p>
              </div>
              <div class="demo-feature">
                <v-icon :icon="mdiCheck" color="gs-green"></v-icon>
                <p>Mobile-First Approach</p>
              </div>
            </div>

            <!-- featured building blocks -->
            <div class="gs-column">
              <h2 class="headline">Featured Building Blocks</h2>
              <div class="infobox">
                <v-icon :icon="mdiInformationOutline"></v-icon>
                <p>This demo presents Building Blocks at a conceptual level only.</p>
              </div>
              <BaseBuildingBlocks
                :features="[
                  { title: 'Identity' },
                  { title: 'Payment' },
                  { title: 'Information Mediator' },
                  { title: 'Digital Registry' },
                  { title: 'Consent' },
                ]"
              />
            </div>
          </div>
          <div class="gs-row">
            <!-- thow to access -->
            <div class="gs-column">
              <h2 class="headline">How to Access?</h2>
              <p>
                Access the Early Warning System demo environment using your credentials below. All
                demo actions are for testing purposes only.
              </p>
              <div class="credentials gs-row">
                <div class="gs-column">
                  <p class="headline">User Personas</p>
                  <p>Citizen</p>
                </div>
              </div>
              <v-btn
                color="gs-primary"
                class="mb-2"
                href="https://www.figma.com/proto/jFX6BF69qweiVNACG9YALZ/High-School-Certificate?page-id=430%3A56394&type=design&node-id=430-56395&viewport=693%2C532%2C0.14&t=ySW9vegVTfkY5fk6-1&scaling=scale-down&starting-point-node-id=430%3A56395&show-proto-sidebar=1&mode=design"
                target="_blank"
                ><v-icon class="icon-figma"></v-icon>Figma Prototype</v-btn
              >
              <v-btn
                color="gs-primary"
                variant="outlined"
                href="https://www.figma.com/file/3u9LlBH11yi7nkYYAv8xFO/Somalia-Use-Case-_-High-School-Certificate?type=design&node-id=1-5&mode=design&t=MB0SzDZs93XdIfUJ-0"
                target="_blank"
                class="mb-2"
                ><v-icon class="icon-figma-primary"></v-icon>Service Blueprint</v-btn
              >
            </div>

            <!-- all resources -->
            <div class="gs-column">
              <h2 class="headline">All Resources</h2>
              <p>
                Complete technical documentation, specifications, and code check our GitBook
                Documentation.
              </p>
              <div class="infobox gs-column">
                <h3 class="headline">Who can benefit?</h3>
                <!-- software developers -->
                <div class="benefit-item">
                  <div class="benefit-item-group">
                    <v-icon :icon="mdiCodeTags"></v-icon>
                    <span>Software Developers</span>
                  </div>
                  <p class="benefit-item-description">Access technical resources & repositories</p>
                </div>

                <!-- decision makers -->
                <div class="benefit-item">
                  <div class="benefit-item-group">
                    <v-icon :icon="mdiAccountVoice"></v-icon>
                    <span>Policy Decision Makers</span>
                  </div>
                  <p class="benefit-item-description">
                    Explore Implementation guides & specifications
                  </p>
                </div>

                <v-btn
                  :prepend-icon="mdiBookOpenBlankVariant"
                  color="gs-primary"
                  variant="outlined"
                  href="https://govstack.gitbook.io/sandbox/access-demos/high-school-certificate-methodology-demo"
                  target="_blank"
                  >Documentation</v-btn
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  </div>
</template>

<style scoped>
.back-button {
  margin-left: 3rem;
  font-weight: 600;
}

/* status */

.status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-text {
  text-transform: uppercase;
  font-weight: 600;
  color: var(--gs-green);
}

.diamond {
  color: var(--gs-purple);
}

.demo-type {
  text-transform: uppercase;
  font-weight: 600;
  color: var(--gs-purple);
}

.high-school-page-content h1 {
  font-size: 3rem;
  white-space: nowrap;
  color: var(--gs-blue);
}

/* row */

.gs-row {
  display: flex;
  margin: 2rem 0;
}

.gs-row > * {
  flex: 1;
  max-width: 50%;
  margin: 0.25rem;
}

.gs-row > *:first-child {
  margin-right: 4rem;
}

/* column */

.gs-column {
  display: flex;
  flex-direction: column;
}

/* demo image */

.demo-image {
  width: 592px;
  height: 290px;
  background: url('@/assets/images/high-school-demo-image.png') left center no-repeat;
}

/* demo feature */
.demo-feature {
  display: flex;
  margin: 0.5rem 0;
}

.demo-feature p {
  padding: 0 0.25rem;
}

/* infobox */
.infobox {
  display: flex;
  background: var(--gs-surface-light);
  margin: 0.5rem 0;
  padding: 1rem;
}

.infobox p {
  padding-left: 0.25rem;
  font-size: 0.8rem;
}

.infobox h4 {
  font-weight: 400;
  font-size: 0.9rem;
  padding-left: 0.25rem;
}

.featured-building-blocks {
  height: 126px;
  background: url('@/assets/images/high-school-building-blocks.png') left center no-repeat;
}

/* benefit item */
.benefit-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.benefit-item-group {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.benefit-item-group span {
  margin-left: 0.5rem;
}

.benefit-item-description {
  opacity: 0.8;
}

/* utils */

.headline {
  color: var(--gs-blue);
}
</style>
