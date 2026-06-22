import { onBeforeUnmount, onMounted, ref } from "vue";

/**
 * Tracks which section is currently in view so the nav can highlight it.
 * Uses IntersectionObserver against the given section ids, plus a
 * bottom-of-page check so the final (possibly short) section still highlights
 * when the user reaches the end of the document.
 */
export function useActiveSection(ids: string[]) {
  const activeId = ref(ids[0] ?? "");
  let observer: IntersectionObserver | null = null;

  // Source of truth for what is currently within the detection band. The
  // IntersectionObserver only emits transition events, so we keep this set in
  // sync and resolve the active id from it on every relevant event.
  const intersecting = new Set<string>();

  function updateActive() {
    const lastId = ids[ids.length - 1];
    if (!lastId) return;

    const atBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;
    if (atBottom) {
      // The short final section may never reach the centered band, so force it
      // while the page is scrolled to the very bottom.
      activeId.value = lastId;
      return;
    }

    // Pick the lowest section (latest in document order) currently in the band.
    // This re-selects the truly-visible section as soon as the bottom override
    // releases, so no section is skipped when scrolling back up.
    for (let i = ids.length - 1; i >= 0; i--) {
      if (intersecting.has(ids[i])) {
        activeId.value = ids[i];
        return;
      }
    }
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id);
          } else {
            intersecting.delete(entry.target.id);
          }
        }
        updateActive();
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    updateActive();
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
    window.removeEventListener("scroll", updateActive);
    window.removeEventListener("resize", updateActive);
  });

  return { activeId };
}
