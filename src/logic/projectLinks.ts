import type { ProjectLink } from "../types/project.ts";

export function orderProjectLinks(links: readonly ProjectLink[]): ProjectLink[] {
  const priority = (link: ProjectLink) =>
    link.label.toLowerCase().includes("demo") ? 0 : 1;

  return [...links].sort((left, right) => priority(left) - priority(right));
}
