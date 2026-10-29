<script setup lang="ts">
import TheNav from "./components/layout/TheNav.vue";
import HeroSection from "./components/sections/HeroSection.vue";
import StrengthsSection from "./components/sections/StrengthsSection.vue";
import AboutSection from "./components/sections/AboutSection.vue";
import CapabilitiesSection from "./components/sections/CapabilitiesSection.vue";
import ProjectsSection from "./components/sections/ProjectsSection.vue";
import ExperienceSection from "./components/sections/ExperienceSection.vue";
import ContactSection from "./components/sections/ContactSection.vue";
import TheFooter from "./components/layout/TheFooter.vue";
</script>

<template>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <TheNav />
  <main id="main-content" tabindex="-1">
    <HeroSection />
    <StrengthsSection />
    <ProjectsSection />
    <ExperienceSection />
    <CapabilitiesSection />
    <AboutSection />
    <ContactSection />
  </main>
  <TheFooter />
</template>
