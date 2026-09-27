import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const readSource = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

test("the portfolio does not publish or offer a resume download", () => {
  const profileData = readSource("../src/data/profile.ts");
  const profileTypes = readSource("../src/types/profile.ts");
  const hero = readSource("../src/components/HeroSection.vue");
  const resume = new URL("../public/Resume.pdf", import.meta.url);

  assert.equal(existsSync(resume), false, "public/Resume.pdf should not exist");
  assert.doesNotMatch(profileData, /resumeUrl/i);
  assert.doesNotMatch(profileTypes, /resumeUrl/i);
  assert.doesNotMatch(hero, /download\s+resume|resumeUrl/i);
});
