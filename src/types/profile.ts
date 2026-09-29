export interface SocialLink {
  label: string;
  url: string;
  /** Optional inline SVG path or emoji used as an icon. */
  icon?: string;
}

export interface Profile {
  name: string;
  /** Compact professional identity shown above the hero headline. */
  eyebrow: string;
  /** Outcome-led statement shown as the main hero headline. */
  headline: string;
  /** One- or two-sentence intro shown in the hero. */
  tagline: string;
  /** Longer bio paragraph(s) for the About section. */
  about: string[];
  location: string;
  email: string;
  socials: SocialLink[];
  /** Small headline stats shown in the About section. */
  highlights: { label: string; value: string }[];
}
