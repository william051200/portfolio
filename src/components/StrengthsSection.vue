<script setup lang="ts">
import { strengths } from "../data/strengths";
</script>

<template>
  <section id="strengths" class="section section--alt">
    <div class="container">
      <p class="section__kicker">What I bring</p>
      <h2 class="section__title">Engineering strengths grounded in delivery</h2>
      <p class="section__lead">
        I combine hands-on implementation with the judgment needed to make
        software maintainable and dependable after launch.
      </p>

      <div class="strengths">
        <article
          v-for="(strength, index) in strengths"
          :key="strength.title"
          class="strengths__card"
        >
          <span class="strengths__number" aria-hidden="true">
            0{{ index + 1 }}
          </span>
          <h3>{{ strength.title }}</h3>
          <p>{{ strength.description }}</p>
          <ul>
            <li v-for="item in strength.evidence" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.strengths {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

.strengths__card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--space-4);
}

.strengths__number {
  display: block;
  color: var(--color-accent);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  margin-bottom: var(--space-4);
}

.strengths__card h3 {
  font-size: 1.25rem;
}

.strengths__card p {
  color: var(--color-text-muted);
}

.strengths__card ul {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  list-style: none;
  padding: 0;
  margin: var(--space-4) 0 0;
}

.strengths__card li {
  color: var(--color-text);
  background: var(--color-bg-soft);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 0.2rem 0.6rem;
  font-size: 0.78rem;
}

@media (max-width: 820px) {
  .strengths {
    grid-template-columns: 1fr;
  }
}
</style>
