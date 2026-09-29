<script setup lang="ts">
import { computed } from "vue";
import { useDraggableMarquee } from "../composables/useDraggableMarquee";
import { capabilityTechnologies } from "../data/skills";
import { resolveSkillIcon } from "./skillIcons";

const capabilityItems = computed(() =>
  capabilityTechnologies.map((name) => ({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
  }))
);

const {
  viewport,
  track,
  sequence,
  isDragging,
  isPressed,
  isUserPaused,
  reducedMotion,
  onPointerDown,
  onPointerMove,
  finishPointer,
  onKeyDown,
} = useDraggableMarquee();

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
</script>

<template>
  <section
    id="capabilities"
    class="section section--canvas capabilities-section"
  >
    <div class="container">
      <p class="section__kicker">Technical Capabilities</p>
      <h2 class="section__title">Technologies I Build With</h2>
      <p class="section__lead">
        A practical toolkit for application development, automation, production
        support, and AI-enabled systems.
      </p>

      <p id="capabilities-instructions" class="visually-hidden">
        Drag horizontally to explore technologies. Press Space or Enter to
        pause or resume automatic movement.
      </p>
    </div>

    <div
      ref="viewport"
      class="capabilities__viewport"
      :class="{
        'is-pressed': isPressed,
        'is-dragging': isDragging,
      }"
      role="group"
      :aria-label="
        reducedMotion || isUserPaused
          ? 'Technology capabilities. Automatic movement paused.'
          : 'Technology capabilities. Automatic movement running.'
      "
      aria-describedby="capabilities-instructions"
      tabindex="0"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="finishPointer"
      @pointercancel="finishPointer"
      @lostpointercapture="finishPointer"
      @keydown="onKeyDown"
    >
      <div ref="track" class="capabilities__track">
        <ul ref="sequence" class="capabilities__sequence">
          <li
            v-for="item in capabilityItems"
            :key="item.id"
            class="capabilities__item"
          >
            <component
              :is="resolveSkillIcon(item.name)"
              v-if="resolveSkillIcon(item.name)"
              class="capabilities__icon"
              aria-hidden="true"
            />
            <span v-else class="capabilities__fallback" aria-hidden="true">
              {{ initials(item.name) }}
            </span>
            <span class="capabilities__name">{{ item.name }}</span>
          </li>
        </ul>

        <ul class="capabilities__sequence" aria-hidden="true">
          <li
            v-for="item in capabilityItems"
            :key="`duplicate-${item.id}`"
            class="capabilities__item"
          >
            <component
              :is="resolveSkillIcon(item.name)"
              v-if="resolveSkillIcon(item.name)"
              class="capabilities__icon"
            />
            <span v-else class="capabilities__fallback">
              {{ initials(item.name) }}
            </span>
            <span class="capabilities__name">{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.capabilities-section {
  overflow: hidden;
}

.capabilities__viewport {
  width: 100%;
  overflow: hidden;
  cursor: grab;
  user-select: none;
  touch-action: pan-y;
  mask-image: linear-gradient(
    to right,
    transparent,
    #000 7%,
    #000 93%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    #000 7%,
    #000 93%,
    transparent
  );
}

.capabilities__viewport.is-pressed,
.capabilities__viewport.is-dragging {
  cursor: grabbing;
}

.capabilities__track {
  display: flex;
  width: max-content;
  will-change: transform;
}

.capabilities__sequence {
  display: flex;
  flex-shrink: 0;
  gap: clamp(2rem, 5vw, 4.5rem);
  width: max-content;
  margin: 0;
  padding: var(--space-3) clamp(1rem, 2.5vw, 2.25rem);
  list-style: none;
}

.capabilities__item {
  display: flex;
  flex: 0 0 112px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--space-2);
  color: var(--color-text);
  text-align: center;
}

.capabilities__icon,
.capabilities__fallback {
  width: 46px;
  height: 46px;
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
  border-radius: 12px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.capabilities__item:hover .capabilities__icon,
.capabilities__item:hover .capabilities__fallback {
  transform: scale(1.1);
}

.capabilities__name {
  max-width: 112px;
  color: var(--color-text-muted);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.3;
  pointer-events: none;
}

@media (max-width: 580px) {
  .capabilities__sequence {
    gap: var(--space-4);
  }

  .capabilities__item {
    flex-basis: 96px;
  }

  .capabilities__icon,
  .capabilities__fallback {
    width: 38px;
    height: 38px;
  }

  .capabilities__name {
    max-width: 96px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .capabilities__icon,
  .capabilities__fallback {
    transition: none;
  }
}
</style>
