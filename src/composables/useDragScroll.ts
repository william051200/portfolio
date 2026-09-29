import { onBeforeUnmount, onMounted, ref } from "vue";
import { exceedsDragThreshold } from "./dragScrollMath";
import { resolveHorizontalWheel } from "./horizontalWheel";

interface DragScrollOptions {
  wheelToHorizontal?: boolean;
}

export function useDragScroll(options: DragScrollOptions = {}) {
  const element = ref<HTMLElement | null>(null);
  const isDragging = ref(false);

  let activePointerId: number | null = null;
  let startX = 0;
  let startY = 0;
  let startScrollLeft = 0;
  let suppressClick = false;
  let wheelElement: HTMLElement | null = null;

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

  function onWheel(event: WheelEvent) {
    const target = element.value;
    if (!target) return;

    const result = resolveHorizontalWheel({
      deltaX: event.deltaX,
      deltaY: event.deltaY,
      deltaMode: event.deltaMode,
      scrollLeft: target.scrollLeft,
      scrollWidth: target.scrollWidth,
      clientWidth: target.clientWidth,
    });

    if (!result.shouldHandle) return;
    event.preventDefault();
    target.scrollLeft = result.nextScrollLeft;
  }

  onMounted(() => {
    if (!options.wheelToHorizontal || !element.value) return;
    wheelElement = element.value;
    wheelElement.addEventListener("wheel", onWheel, { passive: false });
  });

  onBeforeUnmount(() => {
    wheelElement?.removeEventListener("wheel", onWheel);
  });

  return {
    element,
    isDragging,
    onPointerDown,
    onPointerMove,
    finishPointer,
    onClickCapture,
  };
}
