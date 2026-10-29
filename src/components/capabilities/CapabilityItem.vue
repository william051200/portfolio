<script setup lang="ts">
import { computed } from "vue";
import { resolveSkillIcon } from "./skillIcons";

const props = defineProps<{ name: string }>();
const icon = computed(() => resolveSkillIcon(props.name));
const initials = computed(() =>
  props.name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
);
</script>

<template>
  <li class="capabilities__item">
    <component
      :is="icon"
      v-if="icon"
      class="capabilities__icon"
      aria-hidden="true"
    />
    <span v-else class="capabilities__fallback" aria-hidden="true">
      {{ initials }}
    </span>
    <span class="capabilities__name">{{ name }}</span>
  </li>
</template>

<style scoped>
.capabilities__item {
  display: flex;
  flex: 0 0 88px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--space-2);
  color: var(--color-text);
  text-align: center;
}

.capabilities__icon,
.capabilities__fallback {
  width: 34px;
  height: 34px;
  transition: transform var(--transition);
}

.capabilities__fallback {
  display: grid;
  place-items: center;
  color: var(--color-text);
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--color-primary) 22%, var(--color-surface)),
    color-mix(in srgb, var(--color-accent) 18%, var(--color-surface))
  );
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.capabilities__item:hover .capabilities__icon,
.capabilities__item:hover .capabilities__fallback {
  transform: scale(1.1);
}

.capabilities__name {
  max-width: 88px;
  color: var(--color-text-muted);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.3;
  pointer-events: none;
}

@media (max-width: 580px) {
  .capabilities__item {
    flex-basis: 72px;
  }

  .capabilities__icon,
  .capabilities__fallback {
    width: 28px;
    height: 28px;
  }

  .capabilities__name {
    max-width: 72px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .capabilities__icon,
  .capabilities__fallback {
    transition: none;
  }
}
</style>
