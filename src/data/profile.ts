import type { Profile } from "../types";

export const profile: Profile = {
  name: "William Ng",
  eyebrow: "Software Development Engineer · Production Systems · Applied AI",
  headline: "I build reliable software for complex operational workflows.",
  tagline:
    "I design, deliver, and support full-stack applications, developer tools, automation, and AI-enabled computer-vision systems, from architecture and implementation to deployment and incident resolution.",
  about: [
    "I'm a software engineer based in Penang with 5+ years of experience designing, building, modernizing, and supporting production software. In my current role, I develop features, investigate customer-reported issues, drive migrations, and build automation that makes engineering and support work more reliable, including contributions to Microsoft Azure CLI.",
    "Previously at Jabil, I designed and delivered TypeScript and Python applications for manufacturing workflows, including Dockerized services, REST APIs, OCR, computer vision, cameras, and edge hardware. I enjoy turning ambiguous operational problems into maintainable systems and use AI-assisted tools to accelerate that work without giving up engineering judgment, testing, or ownership.",
  ],
  location: "Penang, Malaysia",
  email: "williamng0512@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/william051200", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/william1205/", icon: "linkedin" },
    { label: "Email", url: "mailto:williamng0512@gmail.com", icon: "mail" },
  ],
  highlights: [
    { label: "Years Building Software", value: "5+" },
    { label: "Production Environments", value: "Apps + Edge" },
    { label: "Delivery Ownership", value: "End to End" },
  ],
};
