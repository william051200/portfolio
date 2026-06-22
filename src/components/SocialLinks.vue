<script setup lang="ts">
import type { SocialLink } from "../types";

defineProps<{ links: SocialLink[] }>();
</script>

<template>
  <ul class="socials">
    <li v-for="link in links" :key="link.label">
      <a
        :href="link.url"
        class="socials__link"
        :aria-label="link.label"
        target="_blank"
        rel="noopener noreferrer"
      >
        <!-- GitHub -->
        <svg v-if="link.icon === 'github'" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18v3.23c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z"
          />
        </svg>
        <!-- LinkedIn -->
        <svg v-else-if="link.icon === 'linkedin'" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9V9Z"
          />
        </svg>
        <!-- Mail -->
        <svg v-else viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 5.5L19.8 6H4.2ZM20 7.7l-7.42 5.23a1 1 0 0 1-1.16 0L4 7.7v10.8c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V7.7Z"
          />
        </svg>
        <span>{{ link.label }}</span>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.socials {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  padding: 0;
  margin: 0;
}

.socials__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.5rem 0.9rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color var(--transition), border-color var(--transition);
}

.socials__link:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.socials__link svg {
  width: 18px;
  height: 18px;
}
</style>
