<script setup lang="ts">
import { profile } from "../data/profile";
</script>

<template>
  <section id="about" class="section section--canvas about-section">
    <div class="container">
      <h2 class="section__title">About Me</h2>
      <div class="about">
        <div class="about__text">
          <p v-for="(para, i) in profile.about" :key="i">{{ para }}</p>
          <p class="about__meta">
            <span aria-hidden="true">📍</span>
            <span>{{ profile.location }}</span>
          </p>
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
.about-section {
  --section-glow: color-mix(in srgb, var(--color-accent) 13%, transparent);
}

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
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-text);
  font-weight: 500;
}

.about__stats {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  border-top: 1px solid var(--color-border);
}

.about__stats li {
  padding: var(--space-3) 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-border);
}

.about__stat-value {
  font-size: clamp(1.3rem, 3vw, 1.8rem);
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
    border-top: 1px solid var(--color-border);
  }

  .about__stats li {
    padding: var(--space-3);
    border-right: 1px solid var(--color-border);
  }

  .about__stats li:last-child {
    border-right: 0;
  }
}

@media (max-width: 520px) {
  .about__stats {
    grid-template-columns: 1fr;
  }

  .about__stats li {
    padding: var(--space-3) 0;
    border-right: 0;
  }
}
</style>
