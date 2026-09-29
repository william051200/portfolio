import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { wrapMarqueeOffset } from "./marqueeMath";

const SPEED_PX_PER_SECOND = 34;

export function useDraggableMarquee() {
  const viewport = ref<HTMLElement | null>(null);
  const track = ref<HTMLElement | null>(null);
  const sequence = ref<HTMLElement | null>(null);
  const isDragging = ref(false);
  const isPressed = ref(false);
  const isUserPaused = ref(false);
  const reducedMotion = ref(false);
  const isPaused = computed(
    () => reducedMotion.value || isUserPaused.value || isPressed.value
  );

  let offset = 0;
  let sequenceWidth = 0;
  let previousTime = 0;
  let animationFrame = 0;
  let activePointerId: number | null = null;
  let previousPointerX = 0;
  let resizeObserver: ResizeObserver | null = null;
  let motionQuery: MediaQueryList | null = null;

  function render() {
    if (!track.value) return;
    track.value.style.transform = `translate3d(${-offset}px, 0, 0)`;
  }

  function measure() {
    sequenceWidth = sequence.value?.getBoundingClientRect().width ?? 0;
    offset = wrapMarqueeOffset(offset, sequenceWidth);
    render();
  }

  function animate(time: number) {
    const elapsed = Math.min(time - previousTime, 50);
    previousTime = time;

    if (!isPaused.value && sequenceWidth > 0) {
      offset = wrapMarqueeOffset(
        offset + (SPEED_PX_PER_SECOND * elapsed) / 1000,
        sequenceWidth
      );
      render();
    }

    animationFrame = window.requestAnimationFrame(animate);
  }

  function onPointerDown(event: PointerEvent) {
    const element = viewport.value;
    if (
      !element ||
      !event.isPrimary ||
      event.button !== 0 ||
      activePointerId !== null
    ) {
      return;
    }

    activePointerId = event.pointerId;
    previousPointerX = event.clientX;
    isPressed.value = true;
    element.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: PointerEvent) {
    if (event.pointerId !== activePointerId) return;

    const movement = event.clientX - previousPointerX;
    previousPointerX = event.clientX;
    isDragging.value = true;
    offset = wrapMarqueeOffset(offset - movement, sequenceWidth);
    render();
    event.preventDefault();
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

  function onKeyDown(event: KeyboardEvent) {
    if (event.key !== " " && event.key !== "Enter") return;
    event.preventDefault();
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
    document.fonts?.ready.then(measure);
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
    track,
    sequence,
    isDragging,
    isPressed,
    isUserPaused,
    reducedMotion,
    onPointerDown,
    onPointerMove,
    finishPointer,
    onKeyDown,
  };
}
