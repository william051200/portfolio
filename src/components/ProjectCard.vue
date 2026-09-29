<script setup lang="ts">
import { computed } from "vue";
import type { Project } from "../types";

const props = defineProps<{ project: Project }>();
const orderedLinks = computed(() =>
  [...props.project.links].sort((left, right) => {
    const priority = (label: string) =>
      label.toLowerCase().includes("demo") ? 0 : 1;
    return priority(left.label) - priority(right.label);
  })
);
</script>

<template>
  <article class="card">
    <div v-if="project.image" class="card__media">
      <img :src="project.image" :alt="project.title" loading="lazy" />
    </div>

    <div class="card__body">
      <h3 class="card__title">
        {{ project.title }}
      </h3>
      <p class="card__desc">{{ project.description }}</p>

      <div class="card__links">
        <a
          v-for="link in orderedLinks"
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
  height: 100%;
}

.card:hover,
.card:focus-within {
  transform: translateY(-4px);
  border-color: var(--color-primary);
  box-shadow: var(--shadow);
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
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) minmax(1.5rem, auto);
  flex: 1;
}

.card__title {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 1.2rem;
  margin-bottom: var(--space-2);
}

.card__desc {
  color: var(--color-text-muted);
  flex: 1;
}

.card__links {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: var(--space-3);
  min-height: 1.5rem;
  font-weight: 600;
  font-size: 0.92rem;
}

@media (hover: none) {
  .card:hover {
    transform: none;
    border-color: var(--color-border);
    box-shadow: none;
  }
}
</style>
