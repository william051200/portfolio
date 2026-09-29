export interface HorizontalWheelInput {
  deltaX: number;
  deltaY: number;
  deltaMode: number;
  scrollLeft: number;
  scrollWidth: number;
  clientWidth: number;
}

export interface HorizontalWheelResult {
  shouldHandle: boolean;
  nextScrollLeft: number;
}

const LINE_HEIGHT_PX = 16;

export function resolveHorizontalWheel({
  deltaX,
  deltaY,
  deltaMode,
  scrollLeft,
  scrollWidth,
  clientWidth,
}: HorizontalWheelInput): HorizontalWheelResult {
  const maxScrollLeft = Math.max(0, scrollWidth - clientWidth);
  if (maxScrollLeft <= 1) {
    return { shouldHandle: false, nextScrollLeft: scrollLeft };
  }

  const dominantDelta =
    Math.abs(deltaY) >= Math.abs(deltaX) ? deltaY : deltaX;
  if (dominantDelta === 0) {
    return { shouldHandle: false, nextScrollLeft: scrollLeft };
  }

  const multiplier =
    deltaMode === 1 ? LINE_HEIGHT_PX : deltaMode === 2 ? clientWidth : 1;
  const delta = dominantDelta * multiplier;
  const atStart = scrollLeft <= 1;
  const atEnd = scrollLeft >= maxScrollLeft - 1;

  if ((delta < 0 && atStart) || (delta > 0 && atEnd)) {
    return { shouldHandle: false, nextScrollLeft: scrollLeft };
  }

  return {
    shouldHandle: true,
    nextScrollLeft: Math.max(0, Math.min(maxScrollLeft, scrollLeft + delta)),
  };
}
