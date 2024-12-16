<script setup lang="ts">
import {
  mdiChevronLeft,
  mdiCheck,
  mdiInformationOutline,
  mdiLaptop,
  mdiCodeTags,
  mdiAccountVoice,
  mdiBookOpenBlankVariant,
  mdiCog,
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
      <div class="cash-transfer-page-wrapper">
        <div class="cash-transfer-page-content">
          <div class="status">
            <span class="demo-type">Tech Demo</span>
          </div>
          <h1>Social Cash Transfer</h1>
          <div class="gs-row">
            <div>
              <p>
                Here you can find demonstration of a full stack implementation using a Unconditional
                Social Cash Transfer (USCT) use case. <br /><br />
                This demo covers only a small fraction of a Unconditional Social Cash Transfer
                (USCT) user flow for the purpose of using various Building Block APIs. For a more
                comprehensive visualization of the use case visit the GovStack USCT simulation.
              </p>
              <v-expansion-panels class="mt-4">
                <v-expansion-panel>
                  <v-expansion-panel-title
                    >What is a Unconditional Social Cash Transfer(USCT):</v-expansion-panel-title
                  >
                  <v-expansion-panel-text>
                    Unconditional Social Cash Transfer (USCT) programs help families meet their
                    basic needs for well-being and safety and serves as their path to
                    self-sufficiency. USCT are cash payments provided to financially disadvantaged
                    or vulnerable people or households without requiring anything in return (i.e.
                    without conditionality).
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <i class="demo-image" />
          </div>

          <div class="gs-row">
            <!-- this demo includes -->
            <div class="gs-column">
              <h2 class="headline">This Demo includes:</h2>
              <div class="demo-feature">
                <v-icon :icon="mdiCheck" color="gs-green"></v-icon>
                <p>GovStack Specification Compliant</p>
              </div>
              <div class="demo-feature">
                <v-icon :icon="mdiCheck" color="gs-green"></v-icon>
                <p>Interoperable Digital Public Infrastructure</p>
              </div>
              <div class="demo-feature">
                <v-icon :icon="mdiCheck" color="gs-green"></v-icon>
                <p>Architectural Best Practices</p>
              </div>
              <div class="demo-feature">
                <v-icon :icon="mdiCheck" color="gs-green"></v-icon>
                <p>Reusable and Open Source</p>
              </div>
            </div>

            <!-- featured building blocks -->
            <div class="gs-column">
              <h2 class="headline">Featured Building Blocks:</h2>
              <div class="infobox">
                <v-icon :icon="mdiInformationOutline"></v-icon>
                <p>
                  This technical demo includes log viewer where you can easily see building blocks
                  in action.
                </p>
              </div>
              <BaseBuildingBlocks
                :features="[
                  { title: 'Identity', description: 'Software: MOSIP' },
                  { title: 'Consent', description: 'Software: IGrant' },
                  { title: 'Payment', description: 'Software: Mifos Payment Hub' },
                  { title: 'Information Mediator', description: 'Software: X-Road' },
                  { title: 'Digital Registry', description: 'Software: OpenIMIS' },
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
                  <p class="headline">User Personas:</p>
                  <p>Enrollment Officer</p>
                  <br /><br />
                  <p class="border-t pt-2">Payment Officer</p>
                </div>
                <div class="gs-column">
                  <p class="headline">Persona Credentials</p>
                  <p>ID: 9038952310</p>
                  <p>Password: 111111</p>
                  <br />
                  <p class="border-t pt-2">ID: 2405176278</p>
                  <p>Password: 111111</p>
                </div>
              </div>
              <v-btn
                :prepend-icon="mdiLaptop"
                color="gs-primary"
                class="mb-2"
                href="https://usct.playground.sandbox-playground.com/driver-poc/login"
                target="_blank"
                >User interface Demo</v-btn
              >
              <v-btn
                :prepend-icon="mdiCog"
                color="gs-primary"
                variant="outlined"
                href="https://usct.playground.sandbox-playground.com/swagger-ui/index.html#/"
                target="_blank"
                class="mb-2"
                >API Testing Interface</v-btn
              >
              <div class="infobox">
                <v-icon :icon="mdiInformationOutline"></v-icon>
                <p>
                  This technical demo includes log viewer where you can easily see building blocks
                  in action.
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

                <v-btn
                  :prepend-icon="mdiBookOpenBlankVariant"
                  color="gs-primary"
                  variant="outlined"
                  href="https://govstack.gitbook.io/sandbox/access-demos/usct-use-case"
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

.cash-transfer-page-content h1 {
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
  background: url('@/assets/images/cash-transfer-demo-image.png') left center no-repeat;
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
  background: url('@/assets/images/cash-transfer-demo-building-blocks.png') left center no-repeat;
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
