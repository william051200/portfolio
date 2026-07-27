<script setup lang="ts">
// Raw colored-ASCII art (a <pre> of per-character coloured spans) used as the
// hero "avatar". Imported as a string and rendered once.
import asciiArt from "../assets/ascii-avatar.html?raw";
</script>

<template>
  <div class="ascii-avatar" role="img" aria-label="ASCII-art portrait of William Ng">
    <div class="ascii-avatar__inner" v-html="asciiArt" aria-hidden="true"></div>
  </div>
</template>

<style scoped>
.ascii-avatar {
  justify-self: center;
  width: clamp(200px, 20vw, 440px);
  border-radius: var(--radius);
  overflow: hidden;
  background: #000;
  box-shadow: var(--shadow);
  line-height: 0;
}

/* Container query context so the art scales to the panel width. */
.ascii-avatar__inner {
  container-type: inline-size;
  width: 100%;
}

.ascii-avatar__inner :deep(pre) {
  margin: 0;
  /* ~100 columns; 1.6cqw keeps the grid just inside the panel width. */
  font-size: 1.6cqw;
  line-height: 1;
  white-space: pre;
  background: #000 !important;
  text-align: center;
}
</style>
