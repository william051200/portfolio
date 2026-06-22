export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  /** Technologies/tags shown as small chips on the card. */
  tags: string[];
  links: ProjectLink[];
  /** Optional image (screenshot/logo) placed in /public. */
  image?: string;
  /** Highlight a flagship project with a featured style. */
  featured?: boolean;
}
