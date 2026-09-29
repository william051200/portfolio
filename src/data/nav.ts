export interface NavItem {
  /** Anchor id of the target section. */
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "strengths", label: "Strengths" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Capabilities" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
