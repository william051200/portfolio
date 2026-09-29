export function wrapMarqueeOffset(value: number, sequenceWidth: number): number {
  if (sequenceWidth <= 0) return 0;
  return ((value % sequenceWidth) + sequenceWidth) % sequenceWidth;
}
