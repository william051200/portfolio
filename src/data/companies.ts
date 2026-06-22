import type { Company } from "../types";

export const companies: Company[] = [
  {
    name: "Centific Global Solutions",
    role: "Software Development Engineer",
    period: "Nov 2025 — Present",
    summary:
      "Develop, support, and triage issues for the Microsoft Azure CLI — feature development, bug fixes, and migrations — and build Copilot-powered automation and internal tooling to streamline development and support workflows.",
    logo: `${import.meta.env.BASE_URL}logos/centific.png`,
    url: "https://www.centific.com",
  },
  {
    name: "Jabil Sdn Bhd",
    role: "Programmer Analyst / IoT Developer",
    period: "May 2022 — Nov 2025",
    summary:
      "Built TypeScript front ends and Python back ends containerized with Docker, optimized application performance, and collaborated across teams to deploy solutions into production. Started as an IoT intern delivering an OCR proof-of-concept.",
    logo: `${import.meta.env.BASE_URL}logos/jabil.png`,
    url: "https://www.jabil.com",
  },
  {
    name: "Coblix",
    role: "Web Developer Intern",
    period: "Feb 2020 — May 2020",
    summary:
      "Built a React.js web app integrated with Firebase for Me Book Asia, engineered a SQL-to-NoSQL data migration, and contributed React Native mobile enhancements that improved user engagement.",
    url: "#",
  },
];
