<script setup lang="ts">
import { skills } from "../data/skills";
import { resolveSkillIcon } from "./skillIcons";
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section__title">Skills</h2>
      <p class="section__lead">
        Technologies and tools I work with.
      </p>

      <div class="skills">
        <div v-for="group in skills" :key="group.category" class="skills__group">
          <h3 class="skills__category">{{ group.category }}</h3>
          <ul class="skills__list">
            <li v-for="item in group.items" :key="item" class="skills__badge">
              <component
                :is="resolveSkillIcon(item)"
                v-if="resolveSkillIcon(item)"
                class="skills__icon"
                aria-hidden="true"
              />
              <svg
                v-else
                class="skills__icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 3c-4.42 0-8 1.34-8 3v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6c0-1.66-3.58-3-8-3Zm6 15c0 .39-2.13 1.5-6 1.5S6 18.39 6 18v-2.27c1.45.79 3.66 1.27 6 1.27s4.55-.48 6-1.27V18Zm0-4.5c0 .39-2.13 1.5-6 1.5s-6-1.11-6-1.5v-2.27c1.45.79 3.66 1.27 6 1.27s4.55-.48 6-1.27v2.27ZM12 9c-3.87 0-6-1.11-6-1.5S8.13 6 12 6s6 1.11 6 1.5S15.87 9 12 9Z"
                />
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-4);
}

.skills__group {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--space-4);
}

.skills__category {
  font-size: 1.1rem;
  margin-bottom: var(--space-3);
  color: var(--color-text);
}

.skills__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.skills__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-bg-soft);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 0.35rem 0.85rem;
  font-size: 0.88rem;
  color: var(--color-text);
  transition: border-color var(--transition), color var(--transition);
}

.skills__icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.skills__badge:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}
</style>
