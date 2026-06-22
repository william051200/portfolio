<script setup lang="ts">
import { companies } from "../data/companies";

function initials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
</script>

<template>
  <section id="companies" class="section">
    <div class="container">
      <h2 class="section__title">Companies &amp; Partnerships</h2>
      <p class="section__lead">
        Organizations I've worked with and the roles I held.
      </p>

      <ul class="companies">
        <li v-for="company in companies" :key="company.name" class="companies__item">
          <div
            class="companies__logo"
            :class="{ 'companies__logo--image': company.logo }"
            aria-hidden="true"
          >
            <img v-if="company.logo" :src="company.logo" :alt="company.name" />
            <span v-else>{{ initials(company.name) }}</span>
          </div>

          <div class="companies__info">
            <h3 class="companies__name">
              <a
                v-if="company.url && company.url !== '#'"
                :href="company.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ company.name }}
              </a>
              <template v-else>{{ company.name }}</template>
            </h3>
            <p class="companies__role">
              {{ company.role }} <span>· {{ company.period }}</span>
            </p>
            <p v-if="company.summary" class="companies__summary">
              {{ company.summary }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.companies {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--space-3);
  max-height: 60vh;
  overflow-y: auto;
  padding-right: var(--space-2);
}

.companies::-webkit-scrollbar {
  width: 8px;
}

.companies::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 999px;
}

.companies::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary);
}

.companies__item {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--space-4);
  transition: border-color var(--transition);
}

.companies__item:hover {
  border-color: var(--color-primary);
}

.companies__logo {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-sm);
  display: grid;
  place-items: center;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  overflow: hidden;
}

.companies__logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Real brand logos sit on their own background, so show them in full on a
   neutral surface rather than cropping them inside the gradient tile. */
.companies__logo--image {
  background: #fff;
  border: 1px solid var(--color-border);
  padding: 6px;
}

.companies__logo--image img {
  object-fit: contain;
}

.companies__name {
  font-size: 1.15rem;
  margin-bottom: var(--space-1);
}

.companies__role {
  color: var(--color-text);
  font-weight: 600;
  margin-bottom: var(--space-2);
}

.companies__role span {
  color: var(--color-text-muted);
  font-weight: 400;
}

.companies__summary {
  color: var(--color-text-muted);
  margin: 0;
}

@media (max-width: 520px) {
  .companies__item {
    flex-direction: column;
  }
}
</style>
