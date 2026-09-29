<script setup lang="ts">
import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks.vue";
</script>

<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <div class="contact">
        <h2 class="section__title">Get in Touch</h2>
        <p class="section__lead">
          Looking for an engineer who can own production software, developer
          automation, or AI-enabled applications from design through production
          support? Let's talk.
        </p>

        <a
          :href="`mailto:${profile.email}`"
          class="btn btn--primary contact__email"
          :aria-label="`Email ${profile.name} at ${profile.email}`"
        >
          Email me
        </a>

        <SocialLinks :links="profile.socials" class="contact__socials" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section__lead {
  margin: 0 auto var(--space-4);
}

.contact {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding: clamp(var(--space-5), 7vw, var(--space-6));
  background:
    radial-gradient(
      circle at 15% 20%,
      color-mix(in srgb, var(--color-primary) 24%, transparent),
      transparent 38%
    ),
    radial-gradient(
      circle at 85% 80%,
      color-mix(in srgb, var(--color-accent) 18%, transparent),
      transparent 36%
    ),
    color-mix(in srgb, var(--color-surface) 88%, var(--color-bg));
  border: 1px solid var(--color-border);
  border-radius: calc(var(--radius) * 1.5);
  box-shadow: var(--shadow);
}

.contact__email {
  font-size: 1.05rem;
}

.contact__socials {
  margin-top: var(--space-4);
  justify-content: center;
}
</style>
