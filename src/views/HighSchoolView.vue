<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  mdiChevronLeft,
  mdiCheck,
  mdiInformationOutline,
  mdiLaptop,
  mdiCodeTags,
  mdiAccountVoice,
  mdiBookOpenBlankVariant,
} from '@mdi/js'
import BaseSection from '@/components/BaseSection.vue'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

const router = useRouter()

const goBack = () => {
  router.push({ name: 'home' })
}
</script>

<template>
  <div>
    <v-btn
      class="back-button"
      :prepend-icon="mdiChevronLeft"
      variant="text"
      color="gs-primary"
      @click="goBack"
      >Back</v-btn
    >
    <BaseSection>
      <div class="high-school-page-wrapper">
        <div class="high-school-page-content">
          <div class="status">
            <i class="icon-status-cube-active"></i>
            <span class="status-text">ACTIVE</span>
            <span class="diamond">⬧</span>
            <span class="demo-type">Tech Demo</span>
          </div>
          <h1>High-School Graduation Certificate</h1>
          <div class="gs-row">
            <p>
              Here you can find demonstration of service and frontend design using an Online
              High-School Graduation Certificate Use Case.
            </p>
            <i class="demo-image" />
          </div>

          <div class="gs-row">
            <!-- this demo includes -->
            <div class="gs-column">
              <h2 class="headline">This Demo includes:</h2>
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
              <h2 class="headline">Featured Building Blocks:</h2>
              <div class="infobox">
                <v-icon :icon="mdiInformationOutline"></v-icon>
                <p>This demo presents Building Blocks at a conceptual level only.</p>
              </div>
              <i class="featured-building-blocks"></i>
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
                  <p class="headline">User Personas:</p>
                  <p>Citizen</p>
                </div>
              </div>
              <v-btn :prepend-icon="mdiLaptop" color="gs-primary" class="mb-2"
                >User interface Demo</v-btn
              >
              <v-btn :prepend-icon="mdiBookOpenBlankVariant" color="gs-primary" variant="outlined"
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

                <v-btn :prepend-icon="mdiBookOpenBlankVariant" color="gs-primary" variant="outlined"
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
  color: var(--gs-primary);
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
  margin: 1rem 0;
}

.demo-feature p {
  padding: 0 0.25rem;
}

/* infobox */
.infobox {
  display: flex;
  background: var(--gs-surface-light);
  margin: 1rem 0;
  padding: 1rem;
}

.infobox p {
  padding-left: 0.25rem;
}

.infobox h4 {
  font-weight: bold;
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
  color: var(--gs-primary);
}
</style>
