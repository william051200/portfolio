import { ref } from "vue";

const DRAG_THRESHOLD_PX = 5;

export function exceedsDragThreshold(distance: number): boolean {
  return Math.abs(distance) >= DRAG_THRESHOLD_PX;
}

export function useDragScroll() {
  const element = ref<HTMLElement | null>(null);
  const isDragging = ref(false);

  let activePointerId: number | null = null;
  let startX = 0;
  let startY = 0;
  let startScrollLeft = 0;
  let suppressClick = false;

  function onPointerDown(event: PointerEvent) {
    const target = element.value;
    if (!target || !event.isPrimary || event.button !== 0) return;

    activePointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    startScrollLeft = target.scrollLeft;
    suppressClick = false;
    target.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: PointerEvent) {
    const target = element.value;
    if (!target || event.pointerId !== activePointerId) return;

    const distance = event.clientX - startX;
    const verticalDistance = event.clientY - startY;
    if (!isDragging.value) {
      if (!exceedsDragThreshold(distance)) return;
      if (Math.abs(distance) <= Math.abs(verticalDistance)) return;
    }

    isDragging.value = true;
    suppressClick = true;
    target.scrollLeft = startScrollLeft - distance;
    event.preventDefault();
  }

  function finishPointer(event: PointerEvent) {
    const target = element.value;
    if (!target || event.pointerId !== activePointerId) return;

    const pointerId = activePointerId;
    activePointerId = null;

    if (target.hasPointerCapture(pointerId)) {
      target.releasePointerCapture(pointerId);
    }

    isDragging.value = false;
    window.setTimeout(() => {
      suppressClick = false;
    }, 0);
  }

  function onClickCapture(event: MouseEvent) {
    if (!suppressClick) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClick = false;
  }

  return {
    element,
    isDragging,
    onPointerDown,
    onPointerMove,
    finishPointer,
    onClickCapture,
  };
}
