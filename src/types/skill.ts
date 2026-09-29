export interface SkillGroup {
  /** Category name, e.g. "Languages" or "Frameworks". */
  category: string;
  /** Capability-led context for the skills in this group. */
  summary: string;
  items: string[];
}
