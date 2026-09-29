<script setup lang="ts">
import TheNav from "./components/TheNav.vue";
import HeroSection from "./components/HeroSection.vue";
import StrengthsSection from "./components/StrengthsSection.vue";
import AboutSection from "./components/AboutSection.vue";
import CapabilitiesSection from "./components/CapabilitiesSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import ContactSection from "./components/ContactSection.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <TheNav />
  <main>
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
