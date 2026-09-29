import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const SPEED_PX_PER_SECOND = 28;
const DRAG_THRESHOLD_PX = 4;

export function useDraggableMarquee() {
  const viewport = ref<HTMLElement | null>(null);
  const sequence = ref<HTMLElement | null>(null);
  const isDragging = ref(false);
  const isPressed = ref(false);
  const isUserPaused = ref(false);
  const reducedMotion = ref(false);
  const isPaused = computed(
    () => reducedMotion.value || isUserPaused.value || isPressed.value
  );

  let animationFrame = 0;
  let previousTime = 0;
  let sequenceWidth = 0;
  let activePointerId: number | null = null;
  let previousPointerX = 0;
  let dragDistance = 0;
  let resizeObserver: ResizeObserver | null = null;
  let motionQuery: MediaQueryList | null = null;

  function normalizedOffset(value: number): number {
    if (sequenceWidth <= 0) return 0;
    return ((value % sequenceWidth) + sequenceWidth) % sequenceWidth;
  }

  function normalizePosition() {
    const element = viewport.value;
    if (!element || sequenceWidth <= 0) return;
    element.scrollLeft = normalizedOffset(element.scrollLeft);
  }

  function measure() {
    sequenceWidth = sequence.value?.offsetWidth ?? 0;
    normalizePosition();
  }

  function animate(time: number) {
    const element = viewport.value;
    const elapsed = Math.min(time - previousTime, 50);
    previousTime = time;

    if (element && sequenceWidth > 0) {
      if (!isPaused.value) {
        element.scrollLeft += (SPEED_PX_PER_SECOND * elapsed) / 1000;
      }
      normalizePosition();
    }

    animationFrame = window.requestAnimationFrame(animate);
  }

  function onPointerDown(event: PointerEvent) {
    const element = viewport.value;
    if (!element || activePointerId !== null || !event.isPrimary) return;

    activePointerId = event.pointerId;
    previousPointerX = event.clientX;
    dragDistance = 0;
    isPressed.value = true;
    element.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: PointerEvent) {
    const element = viewport.value;
    if (!element || event.pointerId !== activePointerId) return;

    const movement = event.clientX - previousPointerX;
    previousPointerX = event.clientX;
    dragDistance += Math.abs(movement);

    if (dragDistance >= DRAG_THRESHOLD_PX) {
      isDragging.value = true;
    }

    element.scrollLeft = normalizedOffset(element.scrollLeft - movement);
  }

  function finishPointer(event: PointerEvent) {
    const element = viewport.value;
    if (!element || event.pointerId !== activePointerId) return;

    const pointerId = activePointerId;
    activePointerId = null;

    if (element.hasPointerCapture(pointerId)) {
      element.releasePointerCapture(pointerId);
    }

    isPressed.value = false;
    isDragging.value = false;
    previousTime = performance.now();
  }

  function toggleUserPause() {
    isUserPaused.value = !isUserPaused.value;
    previousTime = performance.now();
  }

  function updateMotionPreference(event?: MediaQueryListEvent) {
    reducedMotion.value = event?.matches ?? motionQuery?.matches ?? false;
    previousTime = performance.now();
  }

  onMounted(() => {
    motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);

    resizeObserver = new ResizeObserver(measure);
    if (sequence.value) resizeObserver.observe(sequence.value);
    measure();

    previousTime = performance.now();
    animationFrame = window.requestAnimationFrame(animate);
  });

  onBeforeUnmount(() => {
    window.cancelAnimationFrame(animationFrame);
    resizeObserver?.disconnect();
    motionQuery?.removeEventListener("change", updateMotionPreference);
  });

  return {
    viewport,
    sequence,
    isDragging,
    isPressed,
    isUserPaused,
    reducedMotion,
    onPointerDown,
    onPointerMove,
    finishPointer,
    toggleUserPause,
  };
}
