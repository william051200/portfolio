import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Azure CLI",
    description:
      "Contributions to Microsoft's official open-source Azure CLI through feature development, bug fixes, migrations, and investigation of customer-reported production issues.",
    tags: ["Python", "Azure", "CLI", "Open Source"],
    links: [
      { label: "Source", url: "https://github.com/Azure/azure-cli" },
    ],
  },
  {
    title: "Background Remover",
    description:
      "A privacy-focused browser app that removes image backgrounds entirely client-side, combining AI segmentation with a fast color-key workflow for logos and transparent-PNG export.",
    focus: "Accessible AI Application Development",
    highlights: [
      "Runs image processing locally in the browser",
      "Combines AI segmentation with a fast color-key mode",
      "Delivers an interactive workflow without uploading source images",
    ],
    tags: ["Vue", "Vite", "TypeScript", "AI", "Client-Side"],
    featured: true,
    links: [
      { label: "Source", url: "https://github.com/william051200/background-remover" },
      { label: "Live Demo", url: "https://william051200.github.io/background-remover/" },
    ],
  },
  {
    title: "Resume Builder",
    description:
      "A type-safe, browser-based product that turns reusable resume data into ATS-friendly, print-ready documents without sending personal information to a server.",
    focus: "Type-Safe Product Development",
    highlights: [
      "Designed a reusable resume model with JSON import and export",
      "Built a live preview and print-optimized rendering workflow",
      "Kept the complete document-generation flow client-side",
    ],
    tags: ["Vue", "Vite", "TypeScript", "Client-Side"],
    featured: true,
    links: [
      { label: "Source", url: "https://github.com/william051200/i-build-resume" },
      { label: "Live Demo", url: "https://william051200.github.io/i-build-resume/" },
    ],
  },
  {
    title: "ASCII Art",
    description:
      "A Flask + Pillow web app that converts any image into ASCII art entirely in-memory, with a live preview, plain or colored output, character-set presets, and fine-grained image controls.",
    tags: ["Python", "Flask", "Pillow", "Vercel", "Web App"],
    links: [
      { label: "Source", url: "https://github.com/william051200/ascii-art" },
      { label: "Live Demo", url: "https://iloveasciiart.vercel.app/" },
    ],
  },
  {
    title: "GitHerd",
    description:
      "A Windows CLI that turns repetitive multi-repository maintenance into a configurable parallel workflow with clear progress and safer updates.",
    focus: "Developer Productivity & Automation",
    highlights: [
      "Coordinates fetch, fast-forward merge, push, and pull workflows",
      "Runs repository operations in parallel with per-repository progress",
      "Supports safe in-place updates with backups and optional GUI configuration",
    ],
    tags: ["CLI", "Git", "Automation", "GitHub Releases"],
    featured: true,
    links: [
      { label: "Source", url: "https://github.com/william051200/githerd" },
    ],
  },
  {
    title: "ArtifactLens",
    description:
      "A Python desktop tool that simplifies package-version discovery across artifact feeds and is distributed as a dependency-free Windows application.",
    focus: "Practical Developer Tooling",
    highlights: [
      "Searches package versions through the Azure DevOps REST API",
      "Packages the application as a standalone Windows executable",
      "Includes automatic updates to simplify adoption and maintenance",
    ],
    tags: ["Python", "Azure DevOps", "REST API", "PyInstaller"],
    featured: true,
    links: [
      { label: "Source", url: "https://github.com/william051200/ArtifactLens" },
    ],
  },
  {
    title: "In-House Smart Camera Inspection System",
    description:
      "An AI-enabled smart-camera application for flexible, real-time production quality inspection, evolved from an initial prototype into a full proof of concept.",
    focus: "End-to-End Applied AI Delivery",
    highlights: [
      "Designed the UI and backend around computer-vision workflows",
      "Connected secure application services with cameras and edge hardware",
      "Integrated REST APIs, JWT-based access, GPIO, and MQTT interactions",
    ],
    tags: ["Python", "REST API", "JWT", "MQTT", "AI"],
    featured: true,
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
