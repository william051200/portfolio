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
import IconPowerShell from "~icons/devicon/powershell";
import IconPowerApps from "./icons/PowerApps.vue";
import IconPowerAutomate from "./icons/PowerAutomate.vue";

/**
 * Maps a normalized skill name to its full-color brand logo component.
 * Most logos come from the Iconify `logos`/`devicon` sets; Power Apps and Power
 * Automate use local SVG components since no Iconify set provides their brand logo.
 * Skills without a logo (e.g. SQL, NoSQL) fall back to a generic glyph in the UI.
 */
const skillIcons: Record<string, Component> = {
  python: IconPython,
  typescript: IconTypeScript,
  javascript: IconJavaScript,
  powershell: IconPowerShell,
  html: IconHtml,
  css: IconCss,
  react: IconReact,
  "react native": IconReact,
  vue: IconVue,
  firebase: IconFirebase,
  docker: IconDocker,
  git: IconGit,
  linux: IconLinux,
  "raspberry pi": IconRaspberryPi,
  "aws s3": IconAwsS3,
  "microsoft azure cli": IconAzure,
  "microsoft power apps": IconPowerApps,
  "microsoft power automate": IconPowerAutomate,
  "github copilot": IconCopilot,
};

/** Resolve a skill's brand logo, or `null` when none is available. */
export function resolveSkillIcon(name: string): Component | null {
  return skillIcons[name.toLowerCase()] ?? null;
}
