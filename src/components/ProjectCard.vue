<script setup lang="ts">
import type { Project } from "../types";

defineProps<{ project: Project }>();
</script>

<template>
  <article :class="['card', { 'card--featured': project.featured }]">
    <div v-if="project.image" class="card__media">
      <img :src="project.image" :alt="project.title" loading="lazy" />
    </div>

    <div class="card__body">
      <h3 class="card__title">
        {{ project.title }}
        <span v-if="project.featured" class="card__badge">Featured</span>
      </h3>
      <p class="card__desc">{{ project.description }}</p>

      <ul class="card__tags">
        <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
      </ul>

      <div class="card__links">
        <a
          v-for="link in project.links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.label }} →
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform var(--transition), border-color var(--transition),
    box-shadow var(--transition);
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
  box-shadow: var(--shadow);
}

.card--featured {
  border-color: color-mix(in srgb, var(--color-primary) 60%, var(--color-border));
}

.card__media {
  aspect-ratio: 16 / 9;
  background: var(--color-bg-soft);
}

.card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__body {
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card__title {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 1.2rem;
  margin-bottom: var(--space-2);
}

.card__badge {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  border-radius: 999px;
  padding: 0.1rem 0.5rem;
}

.card__desc {
  color: var(--color-text-muted);
  flex: 1;
}

.card__tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: 0;
  margin: 0 0 var(--space-3);
}

.card__tags li {
  font-size: 0.78rem;
  color: var(--color-text-muted);
  background: var(--color-bg-soft);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 0.15rem 0.55rem;
}

.card__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  font-weight: 600;
  font-size: 0.92rem;
}
</style>
