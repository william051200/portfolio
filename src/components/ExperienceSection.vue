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
  <section id="experience" class="section section--surface experience-section">
    <div class="container">
      <p class="section__kicker">Career Journey</p>
      <h2 class="section__title">Experience</h2>
      <p class="section__lead">
        Building, modernizing, and supporting software across production,
        manufacturing, and product environments.
      </p>

      <ol class="timeline">
        <li
          v-for="company in companies"
          :key="company.name"
          class="timeline__item"
        >
          <p class="timeline__period">{{ company.period }}</p>
          <div class="timeline__rail" aria-hidden="true">
            <span></span>
          </div>

          <article class="timeline__content">
            <header class="timeline__header">
              <div
                class="timeline__logo"
                :class="{ 'timeline__logo--image': company.logo }"
                aria-hidden="true"
              >
                <img v-if="company.logo" :src="company.logo" alt="" />
                <span v-else>{{ initials(company.name) }}</span>
              </div>

              <div>
                <div class="timeline__company-line">
                  <h3 class="timeline__company">
                    <a
                      v-if="company.url"
                      :href="company.url"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {{ company.name }}
                    </a>
                    <template v-else>{{ company.name }}</template>
                  </h3>
                  <span v-if="company.current" class="timeline__current">
                    Current
                  </span>
                </div>
                <p class="timeline__role">{{ company.role }}</p>
                <p class="timeline__period timeline__period--mobile">
                  {{ company.period }}
                </p>
              </div>
            </header>

            <p v-if="company.summary" class="timeline__summary">
              {{ company.summary }}
            </p>

            <ul v-if="company.highlights?.length" class="timeline__highlights">
              <li
                v-for="highlight in company.highlights.slice(0, 3)"
                :key="highlight"
              >
                {{ highlight }}
              </li>
            </ul>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  display: grid;
  max-width: 960px;
}

.timeline__item {
  display: grid;
  grid-template-columns: 150px 32px minmax(0, 1fr);
  gap: var(--space-3);
  align-items: flex-start;
  min-height: 180px;
}

.timeline__period {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  font-weight: 600;
  margin: var(--space-1) 0 0;
  text-align: right;
}

.timeline__period--mobile {
  display: none;
}

.timeline__rail {
  align-self: stretch;
  position: relative;
  display: flex;
  justify-content: center;
}

.timeline__rail::after {
  content: "";
  position: absolute;
  top: 18px;
  bottom: 0;
  width: 1px;
  background: var(--color-border);
}

.timeline__item:last-child .timeline__rail::after {
  display: none;
}

.timeline__rail span {
  position: relative;
  z-index: 1;
  width: 11px;
  height: 11px;
  margin-top: 7px;
  border: 3px solid var(--color-bg);
  border-radius: 50%;
  background: var(--color-primary);
  box-shadow: 0 0 0 1px var(--color-primary);
}

.timeline__content {
  padding: 0 0 var(--space-5);
  border-bottom: 1px solid var(--color-border);
}

.timeline__item:last-child .timeline__content {
  border-bottom: 0;
}

.timeline__header {
  display: flex;
  gap: var(--space-3);
  align-items: flex-start;
}

.timeline__logo {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  display: grid;
  place-items: center;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  overflow: hidden;
}

.timeline__logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.timeline__logo--image {
  background: #fff;
  border: 1px solid var(--color-border);
  padding: 6px;
}

.timeline__logo--image img {
  object-fit: contain;
}

.timeline__company-line {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.timeline__company {
  font-size: 1.15rem;
  margin: 0;
}

.timeline__current {
  display: inline-flex;
  padding: 0.12rem 0.5rem;
  color: var(--color-accent);
  border: 1px solid color-mix(in srgb, var(--color-accent) 45%, transparent);
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
}

.timeline__role {
  color: var(--color-text);
  font-weight: 600;
  margin: var(--space-1) 0 0;
}

.timeline__summary {
  color: var(--color-text-muted);
  max-width: 72ch;
  margin-top: var(--space-3);
}

.timeline__highlights {
  display: grid;
  gap: var(--space-2);
  margin: var(--space-3) 0 0;
  padding-left: 1.15rem;
  color: var(--color-text-muted);
}

.timeline__highlights li::marker {
  color: var(--color-accent);
}

@media (max-width: 720px) {
  .timeline__item {
    grid-template-columns: 20px minmax(0, 1fr);
    gap: var(--space-3);
    min-height: 0;
  }

  .timeline__item > .timeline__period {
    display: none;
  }

  .timeline__rail {
    grid-column: 1;
    grid-row: 1;
  }

  .timeline__content {
    grid-column: 2;
    grid-row: 1;
  }

  .timeline__period--mobile {
    display: block;
    text-align: left;
  }

  .timeline__rail span {
    margin-top: 18px;
  }
}
</style>
