<script setup lang="ts">
import TheEnterSandbox from '@/components/TheEnterSandbox.vue'
import TheUnderStanding from '@/components/TheUnderStanding.vue'
import TheEgovIntro from '@/components/TheEgovIntro.vue'
import TheBuildingBlocks from '@/components/TheBuildingBlocks.vue'
import TheAccessDemos from '@/components/TheAccessDemos.vue'
import TheWantToLearnMore from '@/components/TheWantToLearnMore.vue'
import TheWantToBecomePartner from '@/components/TheWantToBecomePartner.vue'
</script>

<template>
  <main>
    <TheEnterSandbox />
    <TheUnderStanding />
    <TheEgovIntro />
    <TheBuildingBlocks />
    <TheAccessDemos />
    <TheWantToLearnMore />
    <TheWantToBecomePartner />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
