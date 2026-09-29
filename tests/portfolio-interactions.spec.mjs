import assert from "node:assert/strict";
import test from "node:test";
import { capabilityTechnologies } from "../src/data/skills.ts";
import { exceedsDragThreshold } from "../src/composables/useDragScroll.ts";
import { wrapMarqueeOffset } from "../src/composables/marqueeMath.ts";

test("wraps marquee offsets in both directions", () => {
  assert.equal(wrapMarqueeOffset(125, 100), 25);
  assert.equal(wrapMarqueeOffset(-25, 100), 75);
  assert.equal(wrapMarqueeOffset(20, 0), 0);
});

test("starts project dragging only after the movement threshold", () => {
  assert.equal(exceedsDragThreshold(4), false);
  assert.equal(exceedsDragThreshold(5), true);
  assert.equal(exceedsDragThreshold(-8), true);
});

test("capabilities contains technologies rather than engineering practices", () => {
  const excluded = [
    "Software Architecture",
    "System Design",
    "REST API Design",
    "Design Patterns",
    "Production Support",
    "Incident Investigation",
    "AI Application Development",
    "AI Agents",
    "Prompt Engineering",
  ];

  for (const item of excluded) {
    assert.equal(capabilityTechnologies.includes(item), false);
  }

  assert.ok(capabilityTechnologies.includes("OpenCV"));
  assert.ok(capabilityTechnologies.includes("MQTT"));
});
