import type { Component } from "vue";

import IconPython from "~icons/logos/python";
import IconTypeScript from "~icons/logos/typescript-icon";
import IconJavaScript from "~icons/logos/javascript";
import IconHtml from "~icons/logos/html-5";
import IconCss from "~icons/logos/css-3";
import IconReact from "~icons/logos/react";
import IconVue from "~icons/logos/vue";
import IconFirebase from "~icons/logos/firebase";
import IconDocker from "~icons/logos/docker-icon";
import IconGit from "~icons/logos/git-icon";
import IconLinux from "~icons/logos/linux-tux";
import IconRaspberryPi from "~icons/logos/raspberry-pi";
import IconAwsS3 from "~icons/logos/aws-s3";
import IconAzure from "~icons/logos/microsoft-azure";
import IconCopilot from "~icons/logos/github-copilot";
import IconOpenCv from "~icons/logos/opencv";
import IconAzureDevOps from "~icons/devicon/azuredevops";
import IconPowerShell from "~icons/devicon/powershell";
import IconDatabase from "~icons/mdi/database";
import IconDatabaseOutline from "~icons/mdi/database-outline";
import IconOcr from "~icons/mdi/ocr";
import IconPackage from "~icons/mdi/package-variant-closed";
import IconMqtt from "~icons/simple-icons/mqtt";
import IconPowerApps from "./icons/PowerApps.vue";
import IconPowerAutomate from "./icons/PowerAutomate.vue";

/**
 * Maps a normalized technology name to a brand or semantic icon component.
 * Power Apps and Power Automate use local SVG components because the installed
 * Iconify collections do not provide their brand logos.
 */
const skillIcons: Record<string, Component> = {
  python: IconPython,
  typescript: IconTypeScript,
  javascript: IconJavaScript,
  powershell: IconPowerShell,
  sql: IconDatabase,
  nosql: IconDatabaseOutline,
  html: IconHtml,
  css: IconCss,
  react: IconReact,
  "react native": IconReact,
  vue: IconVue,
  firebase: IconFirebase,
  docker: IconDocker,
  git: IconGit,
  linux: IconLinux,
  pyinstaller: IconPackage,
  "raspberry pi": IconRaspberryPi,
  "aws s3": IconAwsS3,
  "microsoft azure cli": IconAzure,
  "azure devops rest api": IconAzureDevOps,
  "microsoft azure": IconAzure,
  "microsoft power apps": IconPowerApps,
  "microsoft power automate": IconPowerAutomate,
  "github copilot": IconCopilot,
  ocr: IconOcr,
  opencv: IconOpenCv,
  mqtt: IconMqtt,
};

/** Resolve a technology icon, or `null` when none is available. */
export function resolveSkillIcon(name: string): Component | null {
  return skillIcons[name.toLowerCase()] ?? null;
}
