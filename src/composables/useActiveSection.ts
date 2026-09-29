import { onBeforeUnmount, onMounted, ref } from "vue";
import { selectActiveSection } from "./activeSection";

export function useActiveSection(ids: string[]) {
  const activeId = ref(ids[0] ?? "");
  let sections: HTMLElement[] = [];
  let frameId = 0;
  let mounted = false;

  function updateActiveSection() {
    frameId = 0;
    if (sections.length === 0) return;

    const atBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;
    const navHeight = Number.parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--nav-height")
    ) || 0;
    const activationLine = navHeight + Math.min(window.innerHeight * 0.24, 180);

    activeId.value = selectActiveSection(
      sections.map((section) => ({
        id: section.id,
        top: section.getBoundingClientRect().top,
      })),
      activationLine,
      atBottom
    );
  }

  function scheduleUpdate() {
    if (!mounted || frameId) return;
    frameId = window.requestAnimationFrame(updateActiveSection);
  }

  function refreshSections() {
    sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    scheduleUpdate();
  }

  function syncFromHash() {
    const hashId = window.location.hash.slice(1);
    if (ids.includes(hashId)) activeId.value = hashId;
    scheduleUpdate();
  }

  onMounted(() => {
    mounted = true;
    refreshSections();
    syncFromHash();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", refreshSections);
    window.addEventListener("hashchange", syncFromHash);
    document.fonts?.ready.then(refreshSections);
  });

  onBeforeUnmount(() => {
    mounted = false;
    if (frameId) window.cancelAnimationFrame(frameId);
    window.removeEventListener("scroll", scheduleUpdate);
    window.removeEventListener("resize", refreshSections);
    window.removeEventListener("hashchange", syncFromHash);
  });

  return { activeId };
}
