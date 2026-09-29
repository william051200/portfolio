export interface SectionPosition {
  id: string;
  top: number;
}

export function selectActiveSection(
  sections: SectionPosition[],
  activationLine: number,
  atBottom: boolean
): string {
  if (sections.length === 0) return "";
  if (atBottom) return sections[sections.length - 1].id;

  let activeId = sections[0].id;

  for (const section of sections) {
    if (section.top > activationLine) break;
    activeId = section.id;
  }

  return activeId;
}
