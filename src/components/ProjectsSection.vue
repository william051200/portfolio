<script setup lang="ts">
import { useDragScroll } from "../composables/useDragScroll";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard.vue";

const {
  element: projectTrack,
  isDragging,
  onPointerDown,
  onPointerMove,
  finishPointer,
  onClickCapture,
} = useDragScroll();
</script>

<template>
  <section id="projects" class="section section--spotlight">
    <div class="container projects__container">
      <p class="section__kicker">Solutions I've Delivered</p>
      <h2 class="section__title">Projects</h2>
      <p class="section__lead">
        Applications, tools, and production systems I have designed, built, or
        contributed to.
      </p>

      <div
        ref="projectTrack"
        class="projects"
        :class="{ 'is-dragging': isDragging }"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="finishPointer"
        @pointercancel="finishPointer"
        @lostpointercapture="finishPointer"
        @click.capture="onClickCapture"
      >
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects__container {
  max-width: none;
  padding: 0 clamp(var(--space-4), 5vw, 70px);
}

.projects {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min(360px, calc(100vw - 3rem));
  align-items: stretch;
  gap: var(--space-4);
  overflow-x: auto;
  padding: 4px 4px var(--space-3);
  -webkit-overflow-scrolling: touch;
  cursor: grab;
  touch-action: pan-y;
}

.projects.is-dragging {
  cursor: grabbing;
  user-select: none;
}

.projects::-webkit-scrollbar {
  height: 8px;
}

.projects::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 999px;
}

.projects::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary);
}
</style>
