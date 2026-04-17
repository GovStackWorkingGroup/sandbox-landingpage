<script setup lang="ts">
import {
  mdiChevronLeft,
  mdiCheck,
  mdiInformationOutline,
  mdiLaptop,
  mdiPencilRuler,
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
      <div class="construction-permit-page-wrapper">
        <div class="construction-permit-page-content">
          <div class="status">
            <span class="demo-type">Tech Demo</span>
          </div>
          <h1>Construction Permit</h1>
          <div class="gs-row">
            <div>
              <p>
                Here you can find demonstration of service and frontend design using an Online
                Construction Permit Use Case.
              </p>
              <v-expansion-panels class="mt-4">
                <v-expansion-panel>
                  <v-expansion-panel-title>What is a Construction Permit?</v-expansion-panel-title>
                  <v-expansion-panel-text>
                    The Construction Permit Service provides citizen and companies a streamlined
                    process for obtaining permits for construction, renovation, or demolition
                    projects from the national Government.
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
                  { title: 'GIS' },
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
              <div class="infobox gs-column">
                <h4>Data Privacy Note:</h4>
                <p>
                  By clicking on one of the access points you enter web applications operated by the
                  Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH where these
                  Data Protection Notice and Registration Information are valid.
                </p>
              </div>
              <div class="credentials gs-row">
                <div class="gs-column">
                  <p class="headline">User Personas</p>
                  <p>Citizen</p>
                </div>
              </div>
              <v-btn
                :prepend-icon="mdiLaptop"
                color="gs-primary"
                class="mb-2"
                href="https://ux-demo.sandbox.govstack.global/"
                target="_blank"
                >User interface Demo</v-btn
              >
              <v-btn
                :prepend-icon="mdiBookOpenBlankVariant"
                color="gs-primary"
                variant="outlined"
                href="https://govstack.gitbook.io/sandbox/follow-methodology/best-practice-example-design-of-the-sandbox-building-permit-use-case"
                target="_blank"
                class="mb-2"
                >Service Design</v-btn
              >
              <div class="infobox">
                <v-icon :icon="mdiInformationOutline"></v-icon>
                <p>
                  On desktop computer, you may shrink the browser window or use the the developer
                  tools of your browser to simulate a mobile device.
                </p>
              </div>
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
                <!-- designers -->
                <div class="benefit-item">
                  <div class="benefit-item-group">
                    <v-icon :icon="mdiPencilRuler"></v-icon>
                    <span>Designers</span>
                  </div>
                  <p class="benefit-item-description">Explore our service design methodology</p>
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
                  href="https://govstack.gitbook.io/sandbox/access-demos/construction-permit-use-case"
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

.construction-permit-page-content h1 {
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

.gs-column {
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* demo image */

.demo-image {
  width: 592px;
  height: 290px;
  background: url('@/assets/images/construction-permit-demo-image.png') left center no-repeat;
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
  background: url('@/assets/images/construction-permit-building-blocks.png') left center no-repeat;
}

/* benefit item */
h3 {
  margin-bottom: 0.5rem;
}

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
