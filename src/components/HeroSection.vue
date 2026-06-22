<script setup lang="ts">
import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks.vue";

const initials = profile.name
  .split(" ")
  .map((p) => p[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();
</script>

<template>
  <section id="home" class="section hero">
    <div class="container hero__inner">
      <div class="hero__content">
        <p class="hero__eyebrow">Hi, I'm</p>
        <h1 class="hero__name">{{ profile.name }}</h1>
        <p class="hero__headline">{{ profile.headline }}</p>
        <p class="hero__tagline">{{ profile.tagline }}</p>

        <div class="hero__actions">
          <a href="#projects" class="btn btn--primary">View Projects</a>
          <a href="#contact" class="btn btn--ghost">Get in Touch</a>
          <a
            v-if="profile.resumeUrl"
            :href="profile.resumeUrl"
            class="btn btn--ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>

        <SocialLinks :links="profile.socials" class="hero__socials" />
      </div>

      <div class="hero__avatar" aria-hidden="true">
        <img v-if="profile.avatar" :src="profile.avatar" :alt="profile.name" />
        <span v-else>{{ initials }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: var(--space-6);
  padding-bottom: var(--space-6);
}

.hero__inner {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  align-items: center;
  gap: var(--space-5);
  min-height: calc(100vh - var(--nav-height) - var(--space-6));
}

.hero__eyebrow {
  color: var(--color-accent);
  font-weight: 600;
  margin-bottom: var(--space-1);
}

.hero__name {
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  margin-bottom: var(--space-2);
}

.hero__headline {
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  color: var(--color-text);
  font-weight: 600;
  margin-bottom: var(--space-3);
}

.hero__tagline {
  color: var(--color-text-muted);
  max-width: 52ch;
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin: var(--space-4) 0;
}

.hero__avatar {
  justify-self: center;
  width: clamp(180px, 26vw, 280px);
  aspect-ratio: 1;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  color: #fff;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  box-shadow: var(--shadow);
  overflow: hidden;
}

.hero__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 820px) {
  .hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
    gap: var(--space-5);
  }

  .hero__avatar {
    order: -1;
  }

  .hero__actions,
  .hero__socials {
    justify-content: center;
  }

  .hero__tagline {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
