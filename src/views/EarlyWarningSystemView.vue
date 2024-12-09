<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  mdiChevronLeft,
  mdiCheck,
  mdiInformationOutline,
  mdiLaptop,
  mdiCodeTags,
  mdiPencilRuler,
  mdiAccountVoice,
  mdiBookOpenBlankVariant,
} from '@mdi/js'

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
    <div class="early-warning-page-wrapper">
      <!-- <div class="early-warning-page-bg-center-right"></div> -->
      <!-- <div class="early-warning-page-blur"></div> -->
      <div class="early-warning-page-content">
        <h1>Early Warning System</h1>
        <div class="gs-row">
          <p>
            Here you can find demonstration of a full stack implementation of an early warning
            system prototype focusing on efficient communication between civil servants and
            communities. <br /><br />
            The demo of a early warning system focuses on efficient communication between civil
            servants and communities in a given region. The system enables civil servants to
            validate raw threat information and create broadcasts to inform communities about
            potential hazards, while collecting structured feedback from recipients.
          </p>
          <i class="demo-image" />
        </div>

        <div class="gs-row">
          <!-- this demo includes -->
          <div class="gs-column">
            <h2 class="headline">This Demo includes:</h2>
            <div class="demo-feature">
              <v-icon :icon="mdiCheck" color="gs-green"></v-icon>
              <p>Modular and scalable architecture</p>
            </div>
            <div class="demo-feature">
              <v-icon :icon="mdiCheck" color="gs-green"></v-icon>
              <p>Integration of Building Blocks Software</p>
            </div>
            <div class="demo-feature">
              <v-icon :icon="mdiCheck" color="gs-green"></v-icon>
              <p>Architectural Best Practices</p>
            </div>
            <div class="demo-feature">
              <v-icon :icon="mdiCheck" color="gs-green"></v-icon>
              <p>Backend Visualization</p>
            </div>
          </div>

          <!-- featured building blocks -->
          <div class="gs-column">
            <h2 class="headline">Featured Building Blocks:</h2>
            <div class="infobox">
              <v-icon :icon="mdiInformationOutline"></v-icon>
              <p>
                This technical demo includes log viewer where you can easily see building blocks in
                action.
              </p>
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
                Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH where these Data
                Protection Notice and Registration Information are valid.
              </p>
            </div>
            <div class="credentials gs-row">
              <div class="gs-column">
                <p class="headline">User Personas:</p>
                <p>Early Warning Analyst</p>
              </div>
              <div class="gs-column">
                <p class="headline">Persona Credentials</p>
                <p>ID: firstUser@test.com</p>
                <p>Password: asdf1234</p>
              </div>
            </div>
            <v-btn :prepend-icon="mdiLaptop" color="gs-primary">User interface Info</v-btn>
            <div class="infobox">
              <v-icon :icon="mdiInformationOutline"></v-icon>
              <p>
                This technical demo includes log viewer where you can easily see building blocks in
                action.
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

              <v-btn :prepend-icon="mdiBookOpenBlankVariant" color="gs-primary" variant="outlined"
                >Documentation</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.back-button {
  margin-left: 3rem;
}
.early-warning-page-wrapper {
  display: flex;
  justify-content: center;
  /* width: 100%; */
  padding: 4rem;
  margin: 2rem 4rem 2rem 4rem;
  box-shadow: 0px 0px 20px rgba(0, 48, 135, 0.25);
  backdrop-filter: blur(34.8px);
  background: rgba(255, 255, 255, 0.6);
  border: 0.5rem solid transparent;
  /* box-sizing: content-box; */
  border-radius: 1rem;
}

.early-warning-page-bg-center-right {
  position: absolute;
  width: 100vw;
  background: url('/public/access-demos-bg-top-right.png') right center no-repeat;
}

.early-warning-page-content {
  max-width: 1200px;
}

.early-warning-page-content h1 {
  font-size: 3rem;
  white-space: nowrap;
  color: var(--gs-primary);
}

/* row */

.gs-row {
  display: flex;
  margin: 2rem 0;
  /* justify-content: space-between; */
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
  background: url('@/assets/images/early-warning-demo-image.png') left center no-repeat;
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
  width: 396px;
  height: 126px;
  background: url('@/assets/images/early-warning-demo-building-blocks.png') left center no-repeat;
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
