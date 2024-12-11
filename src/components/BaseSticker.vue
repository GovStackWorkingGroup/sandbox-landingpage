<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="sticker-wrapper">
    <h3>{{ props.title }}</h3>
    <p>{{ props.content }}</p>
  </div>
</template>

<style scoped>
.sticker-wrapper {
  width: 14rem;
  height: 14rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1rem solid var(--gs-purple-light);
  border-radius: 50%;
  background: var(--gs-purple-light);
  color: var(--gs-primary);
}
</style>
