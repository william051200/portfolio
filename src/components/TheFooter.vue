<script setup lang="ts">
import { profile } from "../data/profile";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p>© {{ year }} {{ profile.name }}</p>
      <a href="#home" class="footer__top" aria-label="Back to top">↑ Back to top</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  padding: var(--space-4) 0;
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.footer p {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.footer__top {
  font-size: 0.9rem;
  font-weight: 600;
}

@media (max-width: 520px) {
  .footer__inner {
    justify-content: center;
    text-align: center;
  }
}
</style>
