const DRAG_THRESHOLD_PX = 5;

export function exceedsDragThreshold(distance: number): boolean {
  return Math.abs(distance) >= DRAG_THRESHOLD_PX;
}
