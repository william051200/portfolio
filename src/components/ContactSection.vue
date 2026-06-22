<script setup lang="ts">
import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks.vue";
</script>

<template>
  <section id="contact" class="section section--alt">
    <div class="container contact">
      <h2 class="section__title">Get in Touch</h2>
      <p class="section__lead">
        Have a project in mind or just want to say hi? I'd love to hear from you.
      </p>

      <a :href="`mailto:${profile.email}`" class="btn btn--primary contact__email">
        {{ profile.email }}
      </a>

      <SocialLinks :links="profile.socials" class="contact__socials" />
    </div>
  </section>
</template>

<style scoped>
.section__lead{
  margin: 0 auto var(--space-4)
}

.contact {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact__email {
  font-size: 1.05rem;
}

.contact__socials {
  margin-top: var(--space-4);
  justify-content: center;
}
</style>
