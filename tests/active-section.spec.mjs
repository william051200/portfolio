import assert from "node:assert/strict";
import test from "node:test";
import { selectActiveSection } from "../src/composables/activeSection.ts";

const sections = [
  { id: "home", top: -500 },
  { id: "projects", top: -50 },
  { id: "experience", top: 500 },
  { id: "contact", top: 1200 },
];

test("selects the last section above the activation line", () => {
  assert.equal(selectActiveSection(sections, 180, false), "projects");
});

test("keeps the first section active before later sections cross the line", () => {
  const nearTop = sections.map((section, index) => ({
    ...section,
    top: index === 0 ? 0 : section.top + 700,
  }));

  assert.equal(selectActiveSection(nearTop, 180, false), "home");
});

test("selects the final section at the bottom of the page", () => {
  assert.equal(selectActiveSection(sections, 180, true), "contact");
});

test("supports reverse scrolling by using current geometry", () => {
  const reversePositions = [
    { id: "home", top: -900 },
    { id: "projects", top: 220 },
    { id: "experience", top: 900 },
  ];

  assert.equal(
    selectActiveSection(reversePositions, 180, false),
    "home"
  );
});

test("returns an empty id when no sections are available", () => {
  assert.equal(selectActiveSection([], 180, false), "");
});
