import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Resume Builder",
    description:
      "A browser-based resume builder (Vue 3, Vite, TypeScript) that generates clean, print-ready resumes entirely client-side, with JSON import/export, a live preview, and a type-safe data model rendered into an ATS-friendly, print-optimized layout.",
    tags: ["Vue", "Vite", "TypeScript", "Client-Side"],
    links: [
      { label: "Source", url: "https://github.com/william051200/i-build-resume" },
    ],
    featured: true,
  },
  {
    title: "GitHerd",
    description:
      "A Windows CLI tool that syncs many Git repositories in parallel from a single command, with live per-repo progress bars, configurable JSON-driven workflows, and an auto-update mechanism via GitHub Releases.",
    tags: ["CLI", "Git", "Automation", "GitHub Releases"],
    links: [
      { label: "Source", url: "https://github.com/william051200/githerd" },
    ],
    featured: true,
  },
  {
    title: "ArtifactLens",
    description:
      "A Python desktop GUI to search Azure DevOps Artifacts feeds by package version via the Azure DevOps REST API, packaged as a dependency-free Windows executable with an in-place auto-update system.",
    tags: ["Python", "Azure DevOps", "REST API", "PyInstaller"],
    links: [
      { label: "Source", url: "https://github.com/william051200/ArtifactLens" },
    ],
    featured: true,
  },
  {
    title: "In-House Smart Camera Inspection System",
    description:
      "A full-fledged proof-of-concept inspection application with AI models for real-time quality checks, RESTful APIs, JWT-based IAM/SSO, and GPIO/MQTT channels for real-time hardware interaction.",
    tags: ["Python", "REST API", "JWT", "MQTT", "AI"],
    links: [],
  },
  {
    title: "OCR Docker Application",
    description:
      "A Python OCR prototype containerized with Docker and optimized for Raspberry Pi, performing real-time inspection via the Pi camera and USB capture card (OpenCV) with AWS S3 cloud storage.",
    tags: ["Python", "Docker", "OpenCV", "Raspberry Pi", "AWS S3"],
    links: [],
  },
  {
    title: "Single-Purpose Barcode Scanner System",
    description:
      "A full-stack barcode scanning application spanning UI, hardware integration, and Docker containerization, using a proprietary AI library and physical button controls for an efficient operator experience.",
    tags: ["Full-Stack", "Docker", "AI", "Hardware"],
    links: [],
  },
];
