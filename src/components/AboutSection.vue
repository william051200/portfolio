<script setup lang="ts">
import { profile } from "../data/profile";
</script>

<template>
  <section id="about" class="section section--alt">
    <div class="container">
      <h2 class="section__title">About Me</h2>
      <div class="about">
        <div class="about__text">
          <p v-for="(para, i) in profile.about" :key="i">{{ para }}</p>
          <p class="about__meta">📍 {{ profile.location }}</p>
        </div>

        <ul class="about__stats">
          <li v-for="stat in profile.highlights" :key="stat.label">
            <span class="about__stat-value">{{ stat.value }}</span>
            <span class="about__stat-label">{{ stat.label }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: var(--space-5);
  align-items: start;
  margin-top: var(--space-4);
}

.about__text p {
  color: var(--color-text-muted);
  font-size: 1.05rem;
}

.about__meta {
  color: var(--color-text);
  font-weight: 500;
}

.about__stats {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--space-3);
}

.about__stats li {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
}

.about__stat-value {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--color-primary);
}

.about__stat-label {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

@media (max-width: 820px) {
  .about {
    grid-template-columns: 1fr;
  }

  .about__stats {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 520px) {
  .about__stats {
    grid-template-columns: 1fr;
  }
}
</style>
