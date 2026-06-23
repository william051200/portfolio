import type { Profile } from "../types";

export const profile: Profile = {
  name: "William Ng",
  headline: "Software Development Engineer",
  tagline:
    "I build reliable developer tooling and full-stack applications — currently developing and supporting the Microsoft Azure CLI.",
  about: [
    "I'm a software engineer based in Penang who enjoys building dependable tooling and shipping full-stack products. I currently work on the Microsoft Azure CLI at Centific, handling feature development, bug fixes, migrations, and triaging customer-reported issues, while leveraging GitHub Copilot to build automation and internal tooling.",
    "Before that I spent three years at Jabil building TypeScript front ends and Python back ends, containerizing systems with Docker, and integrating hardware for IoT and smart-camera inspection solutions. I like turning ambiguous problems into clean, maintainable software — from CLI tools and REST APIs to React apps and Raspberry Pi deployments.",
  ],
  location: "Penang, Malaysia",
  email: "williamng0512@gmail.com",
  // avatar: "avatar.jpg",      // place an image in /public and set the filename
  resumeUrl: `${import.meta.env.BASE_URL}Resume.pdf`, // place resume.pdf in /public
  socials: [
    { label: "GitHub", url: "https://github.com/william051200", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/william1205/", icon: "linkedin" },
    { label: "Email", url: "mailto:williamng0512@gmail.com", icon: "mail" },
  ],
  highlights: [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Shipped", value: "6+" },
    { label: "Tech Stack", value: "20+" },
  ],
};
