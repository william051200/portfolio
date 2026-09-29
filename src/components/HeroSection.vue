<script setup lang="ts">
import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks.vue";
</script>

<template>
  <section id="home" class="section hero">
    <div class="container hero__inner">
      <div class="hero__content">
        <p class="hero__eyebrow">{{ profile.eyebrow }}</p>
        <h1 class="hero__name">{{ profile.name }}</h1>
        <p class="hero__headline">{{ profile.headline }}</p>
        <p class="hero__tagline">{{ profile.tagline }}</p>

        <div class="hero__actions">
          <a href="#projects" class="btn btn--primary">View Projects</a>
          <a href="#experience" class="btn btn--ghost">See My Experience</a>
        </div>

        <SocialLinks :links="profile.socials" class="hero__socials" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding-top: clamp(4.5rem, 10vw, 8rem);
  padding-bottom: clamp(4.5rem, 10vw, 8rem);
}

.hero::after {
  content: "";
  position: absolute;
  width: min(42vw, 520px);
  aspect-ratio: 1;
  right: -12%;
  top: 5%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    color-mix(in srgb, var(--color-primary) 22%, transparent),
    transparent 68%
  );
  pointer-events: none;
}

.hero__inner {
  min-height: calc(82vh - var(--nav-height));
  display: flex;
  align-items: center;
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 850px;
}

.hero__eyebrow {
  color: var(--color-accent);
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-bottom: var(--space-3);
}

.hero__name {
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: var(--color-text-muted);
  margin-bottom: var(--space-3);
}

.hero__headline {
  font-size: clamp(2.2rem, 7vw, 5rem);
  line-height: 1.02;
  color: var(--color-text);
  font-weight: 800;
  letter-spacing: -0.04em;
  max-width: 16ch;
  margin-bottom: var(--space-4);
}

.hero__tagline {
  color: var(--color-text-muted);
  max-width: 70ch;
  font-size: clamp(1rem, 2vw, 1.2rem);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin: var(--space-4) 0;
}

@media (max-width: 820px) {
  .hero__inner {
    min-height: auto;
  }
}
</style>
