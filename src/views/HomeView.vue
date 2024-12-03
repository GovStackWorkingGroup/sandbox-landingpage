<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { width } = useDisplay()
</script>

<template>
  <main>
    <div class="image-frame">
      <img v-if="width > 1400" src="@/assets/images/gs-demo-1200.png" />
      <img v-if="width < 1400" src="@/assets/images/gs-demo-900.png" />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - var(--gs-app-header-height));
}

.image-frame {
  overflow: hidden;
  overflow-y: scroll;
  padding: 0;
  width: 1200px;
  height: 50vh;
  background: var(--gs-primary);
  border: 0.5rem solid var(--gs-gray);
  box-sizing: content-box;
  border-radius: 1rem;
  scrollbar-width: none;
}

@media screen and (max-width: 1399px) {
  .image-frame {
    width: 900px;
  }
}
</style>
