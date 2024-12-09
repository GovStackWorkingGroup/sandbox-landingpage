<template>
  <footer class="app-footer">
    <div class="top-row">
      <i class="logo-bmz"></i>
      <i class="logo-giz"></i>
      <i class="logo-dia"></i>
      <i class="logo-itu"></i>
      <i class="logo-roe"></i>
    </div>
    <div class="bottom-row">
      <p>Copyright © 2024</p>
      <div class="social-networks">
        <i class="logo-x"></i>
        <i class="logo-linkedin"></i>
      </div>
      <div class="legal-links">
        <a href="">Privacy Legal</a>
        <a href="">Code of Conduct</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.top-row,
.bottom-row {
  display: flex;
  justify-content: space-between;
}

.app-footer {
  width: 100vw;
  padding: 2rem 4rem;
  background: var(--gs-primary-dark);
  color: var(--gs-white);
}

.app-footer .bottom-row {
  font-size: 1.25rem;
  margin: 1rem;
}

.social-networks,
.legal-links {
  display: flex;
  gap: 1rem;
}
</style>
