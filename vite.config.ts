import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";

// `base` must match the GitHub repo name for GitHub Pages project sites.
// Change this if you deploy to a different repo name.
export default defineConfig({
  base: "/portfolio/",
  plugins: [vue(), Icons({ compiler: "vue3", autoInstall: false })],
});
