export interface NavItem {
  /** Anchor id of the target section. */
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "companies", label: "Companies" },
  { id: "contact", label: "Contact" },
];
