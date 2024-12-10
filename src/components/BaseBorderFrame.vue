<template>
  <div class="border-frame">
    <slot></slot>
  </div>
</template>

<style scoped>
.border-frame {
  min-width: 4rem;
  min-height: 4rem;
  background:
    linear-gradient(to right, var(--gs-green) 4px, transparent 4px) 0 0,
    linear-gradient(to left, var(--gs-orange) 4px, transparent 4px) 100% 100%,
    linear-gradient(to bottom, var(--gs-green) 4px, transparent 4px) 0 0,
    linear-gradient(to top, var(--gs-orange) 4px, transparent 4px) 100% 100%;
  background-repeat: no-repeat;
  background-size: 50% 50%;
  padding: 2rem;
}
</style>
