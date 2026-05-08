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
      <div class="cross-border-payment-page-wrapper">
        <div class="cross-border-payment-page-content">
          <div class="status">
            <span class="demo-type">Integration Demo</span>
          </div>
          <h1>Cross-Border Payment</h1>
          <div class="gs-row">
            <div>
              <p>
                This demo shows the execution of a cross-border payment using <a href="https://payments.mifos.org/" target="_blank">Mifos Payment Hub EE</a> and Mastercard Cross Border Services, part of Mastercard’s global money movement solution suite (<a href="https://www.mastercard.com/global/en/business/payments/mastercard-move.html" target="_blank">Mastercard Move</a>). <br /><br />
                In this scenario, a civil servant of the Government of Zimbabwe is issuing a pension payment to a former government employee living in South Africa.<br /><br />
                In the system's backend, the service application fetches outstanding pension payments from the pension management system*. Once the user initiates a payment, the application sends a batch of credit instructions to the Payment Building Block (Mifos Payment Hub). Mifos is forwarding these instructions to the Financial Service Provider (Mastercard). Mastercard is processing the transaction through interacting with the Zimbabwean and South African bank. Upon positive response, the service application issues a SMS message informing about successful transaction to the recepient*. (First and last step with an * are mocked in the demo)  
              </p>
              <v-expansion-panels class="mt-4">
                <v-expansion-panel>
                  <v-expansion-panel-title
                    >Why are cross-border payments worth demonstrating?</v-expansion-panel-title
                  >
                  <v-expansion-panel-text>
                    Implementing cross-border payment infrastructure is challenging. It must navigate different countries’ regulations, currencies, banking systems, and compliance requirements like anti-money laundering checks, which makes transactions slow, costly, and complex. At the same time, they are essential for global trade, remittances, and international business, enabling money to move efficiently between economies and supporting economic growth worldwide.
                  </v-expansion-panel-text>
                </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-title
                    >How are transctions being processed?</v-expansion-panel-title
                  >
                  <v-expansion-panel-text>
                  In the system's backend, the service application fetches outstanding pension payments from the pension management system*. Once the user initiates a payment, the application sends a batch of beneficiary credit instructions to the Payment Building Block (Mifos Payment Hub EE). Mifos is looking up the correct account details for these beneficiaries (stored in the account mapper) and forwarding these instructions to the Financial Service Provider (Mastercard) through a connector. Mastercard Cross-Border Services then processes the transaction, performs AML and sanctions screening, manages FX conversion, and subsequently routes the payment to the receiving institution - the South African bank. Upon positive response, the service application issues a SMS message informing about successful transaction to the recipient*. (The first and last step marked with an * are mocked for demo purposes)</br></br>
                  The key value adds of this setup compared to existing cross-border payment solutions are: <b>Sovereignty enabling</b>: Open Source (Mifos Payment Hub EE) at the Government’s system side enabling long term payments infrastructure solution without proprietary lock-in. <b>Modularity</b>: Architecture allows Payment Building Block to process transactions of various different citizen services; <b>Speed</b>: Transactions via Mastercard can be facilitated in near real time; <b>End-to-end visibility</b>: Live transaction status; <b>Citizen-Centric</b>: Allowing individuals the flexibility to update payment methods and modalities as they need.
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
                <p>Integration example of Mifos and Mastercard</p>
              </div>
              <div class="demo-feature">
                <v-icon :icon="mdiCheck" color="gs-green"></v-icon>
                <p>Interoperable Digital Public Infrastructure</p>
              </div>
              <div class="demo-feature">
                <v-icon :icon="mdiCheck" color="gs-green"></v-icon>
                <p>Modular Architecture</p>
              </div>
            </div>

            <!-- featured building blocks -->
            <div class="gs-column">
              <h2 class="headline">Featured Building Blocks</h2>
              <BaseBuildingBlocks
                :features="[
                  { title: 'Payment', description: 'Software: Mifos Payment Hub' },
                  { title: 'Digital Registries', description: 'Software: Mock' },
                  { title: 'Messaging', description: 'Software: Mock' },
                ]"
              />
            </div>
          </div>
          <div class="gs-row">
            <!-- thow to access -->
            <div class="gs-column">
              <h2 class="headline">How to Access?</h2>
              <p>
                Access the Cross-border payment demo environment do not require credentials. All
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
              <v-btn
                :prepend-icon="mdiLaptop"
                color="gs-primary"
                class="mb-2"
                href="https://cross-border-pay.sandbox.govstack.global/"
                target="_blank"
                >User interface Demo</v-btn
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
                  href="https://govstack.gitbook.io/sandbox"
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
  background: url('@/assets/images/cross-border-pay-demo-image.png') left center no-repeat;
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
