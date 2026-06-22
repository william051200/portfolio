<script setup lang="ts">
import TheNav from "./components/TheNav.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import CompaniesSection from "./components/CompaniesSection.vue";
import ContactSection from "./components/ContactSection.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <TheNav />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <CompaniesSection />
    <ContactSection />
  </main>
  <TheFooter />
</template>
