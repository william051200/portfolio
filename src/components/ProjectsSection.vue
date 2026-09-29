<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard.vue";

const track = ref<HTMLElement | null>(null);
const displayProjects = computed(() => [
  ...projects.filter((project) => project.featured),
  ...projects.filter((project) => !project.featured),
]);

let targetLeft = 0;
let rafId = 0;

function stopAnimation() {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = 0;
}

function animate() {
  const el = track.value;
  if (!el) {
    rafId = 0;
    return;
  }

  const diff = targetLeft - el.scrollLeft;
  if (Math.abs(diff) <= 1) {
    el.scrollLeft = targetLeft;
    rafId = 0;
    return;
  }

  el.scrollLeft += diff * 0.18;
  rafId = requestAnimationFrame(animate);
}

function onWheel(event: WheelEvent) {
  const el = track.value;
  if (!el) return;

  const delta =
    Math.abs(event.deltaY) >= Math.abs(event.deltaX)
      ? event.deltaY
      : event.deltaX;
  if (delta === 0) return;

  const maxLeft = el.scrollWidth - el.clientWidth;
  const atStart = el.scrollLeft <= 0;
  const atEnd = el.scrollLeft >= maxLeft - 1;

  if ((delta < 0 && atStart) || (delta > 0 && atEnd)) {
    stopAnimation();
    return;
  }

  event.preventDefault();
  if (!rafId) targetLeft = el.scrollLeft;
  targetLeft = Math.max(0, Math.min(maxLeft, targetLeft + delta));
  if (!rafId) rafId = requestAnimationFrame(animate);
}

function onPointerDown() {
  stopAnimation();
}

onMounted(() => {
  track.value?.addEventListener("wheel", onWheel, { passive: false });
  track.value?.addEventListener("pointerdown", onPointerDown);
});

onBeforeUnmount(() => {
  track.value?.removeEventListener("wheel", onWheel);
  track.value?.removeEventListener("pointerdown", onPointerDown);
  stopAnimation();
});
</script>

<template>
  <section id="projects" class="section section--alt">
    <div class="container projects__container">
      <h2 class="section__title">Projects</h2>
      <p class="section__lead">
        A selection of things I have built and worked on before.
      </p>

      <div ref="track" class="projects">
        <ProjectCard
          v-for="project in displayProjects"
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
  display: flex;
  flex-wrap: nowrap;
  gap: var(--space-4);
  overflow-x: auto;
  padding: 4px 4px var(--space-3);
  -webkit-overflow-scrolling: touch;
}

.projects > * {
  flex: 0 0 min(360px, calc(100vw - 3rem));
  max-width: 500px;
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
