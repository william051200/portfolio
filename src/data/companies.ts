import type { Company } from "../types";

export const companies: Company[] = [
  {
    name: "Centific Global Solutions",
    current: true,
    role: "Software Development Engineer",
    period: "Nov 2025 — Present",
    summary:
      "Develop and support mature production software, resolve customer-reported issues, drive component migrations, and build AI-assisted automation that improves development and support workflows.",
    highlights: [
      "Feature development and bug fixing for a mature production CLI",
      "Dependency and platform migrations for maintainability and reliability",
      "Investigation and resolution of customer-reported issues",
      "Internal automation with retained code-review and testing ownership",
    ],
    logo: `${import.meta.env.BASE_URL}logos/centific.png`,
    url: "https://www.centific.com",
  },
  {
    name: "Jabil Sdn Bhd",
    role: "Programmer Analyst 1 / IoT Developer",
    period: "May 2022 — Nov 2025",
    summary:
      "Designed and delivered production applications for manufacturing workflows, including TypeScript and Python services, REST APIs, Docker deployments, and AI-enabled computer-vision systems integrated with cameras and edge hardware.",
    roles: [
      { title: "Programmer Analyst 1", period: "Jul 2022 — Nov 2025" },
      { title: "IoT Developer Intern", period: "May 2022 — Jul 2022" },
    ],
    highlights: [
      "Architecture and delivery across multiple production areas",
      "AI-enabled inspection, OCR, and hardware integration",
      "Performance improvement and production defect resolution",
      "Cross-functional delivery and post-deployment operator support",
    ],
    logo: `${import.meta.env.BASE_URL}logos/jabil.png`,
    url: "https://www.jabil.com",
  },
  {
    name: "Coblix",
    role: "Web Developer Intern",
    period: "Feb 2020 — May 2020",
    summary:
      "Built a React.js web app integrated with Firebase for Me Book Asia, engineered a SQL-to-NoSQL data migration, and contributed React Native mobile enhancements that improved user engagement.",
    highlights: [
      "React and Firebase web application delivery",
      "SQL-to-NoSQL data migration",
      "React Native interface enhancements",
    ],
  },
];
