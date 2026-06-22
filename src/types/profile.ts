export interface SocialLink {
  label: string;
  url: string;
  /** Optional inline SVG path or emoji used as an icon. */
  icon?: string;
}

export interface Profile {
  name: string;
  /** Short headline shown under the name in the hero, e.g. "Full-Stack Developer". */
  headline: string;
  /** One- or two-sentence intro shown in the hero. */
  tagline: string;
  /** Longer bio paragraph(s) for the About section. */
  about: string[];
  location: string;
  email: string;
  /** Optional path to an avatar image placed in /public. */
  avatar?: string;
  /** Optional link to a downloadable resume placed in /public. */
  resumeUrl?: string;
  socials: SocialLink[];
  /** Small headline stats shown in the About section. */
  highlights: { label: string; value: string }[];
}
