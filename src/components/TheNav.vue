<script setup lang="ts">
import { ref } from "vue";
import { navItems } from "../data/nav";
import { profile } from "../data/profile";
import { useActiveSection } from "../composables/useActiveSection";

const { activeId } = useActiveSection(navItems.map((n) => n.id));
const menuOpen = ref(false);

function close() {
  menuOpen.value = false;
}
</script>

<template>
  <header class="nav">
    <div class="container nav__inner">
      <a href="#home" class="nav__brand" @click="close">{{ profile.name }}</a>

      <button
        class="nav__toggle"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation menu"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>

      <nav :class="['nav__links', { 'nav__links--open': menuOpen }]">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          :class="{ 'is-active': activeId === item.id }"
          @click="close"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  height: var(--nav-height);
  background-color: color-mix(in srgb, var(--color-bg) 85%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
}

.nav__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__brand {
  font-weight: 800;
  font-size: 1.2rem;
  color: var(--color-text);
}

.nav__links {
  display: flex;
  gap: var(--space-4);
}

.nav__links a {
  color: var(--color-text-muted);
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
}

.nav__links a:hover,
.nav__links a.is-active {
  color: var(--color-text);
}

.nav__links a.is-active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6px;
  height: 2px;
  background: var(--color-primary);
  border-radius: 2px;
}

.nav__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}

.nav__toggle span {
  width: 24px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
}

@media (max-width: 720px) {
  .nav__toggle {
    display: flex;
  }

  .nav__links {
    position: absolute;
    top: var(--nav-height);
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: var(--color-bg-soft);
    border-bottom: 1px solid var(--color-border);
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition);
  }

  .nav__links--open {
    max-height: 320px;
  }

  .nav__links a {
    padding: var(--space-3) var(--space-4);
    border-top: 1px solid var(--color-border);
  }

  .nav__links a.is-active::after {
    display: none;
  }
}
</style>
