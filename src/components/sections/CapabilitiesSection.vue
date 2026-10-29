<script setup lang="ts">
import { useDraggableMarquee } from "../../composables/useDraggableMarquee";
import { capabilityTechnologies } from "../../data/skills";
import CapabilityItem from "../capabilities/CapabilityItem.vue";

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
          <CapabilityItem
            v-for="name in capabilityTechnologies"
            :key="name"
            :name="name"
          />
        </ul>

        <ul class="capabilities__sequence" aria-hidden="true">
          <CapabilityItem
            v-for="name in capabilityTechnologies"
            :key="name"
            :name="name"
          />
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

@media (max-width: 580px) {
  .capabilities__sequence {
    gap: var(--space-4);
  }
}
</style>
