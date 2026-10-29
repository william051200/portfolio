import assert from "node:assert/strict";
import test from "node:test";
import { capabilityTechnologies } from "../src/data/skills.ts";
import { exceedsDragThreshold } from "../src/logic/dragScrollMath.ts";
import { resolveHorizontalWheel } from "../src/logic/horizontalWheel.ts";
import { wrapMarqueeOffset } from "../src/logic/marqueeMath.ts";
import { orderProjectLinks } from "../src/logic/projectLinks.ts";

test("puts demo links first without changing link order within each group", () => {
  const links = [
    { label: "Source", url: "https://example.com/source" },
    { label: "Live DEMO", url: "https://example.com/demo" },
    { label: "Documentation", url: "https://example.com/docs" },
    { label: "Demo video", url: "https://example.com/video" },
  ];

  assert.deepEqual(orderProjectLinks(links), [
    links[1],
    links[3],
    links[0],
    links[2],
  ]);
});

test("ordering project links does not mutate the source", () => {
  const links = Object.freeze([
    Object.freeze({ label: "Source", url: "https://example.com/source" }),
    Object.freeze({ label: "Demo", url: "https://example.com/demo" }),
  ]);

  const ordered = orderProjectLinks(links);

  assert.equal(links[0].label, "Source");
  assert.equal(ordered[0], links[1]);
  assert.notEqual(ordered, links);
  assert.deepEqual(orderProjectLinks([]), []);
});

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

test("converts wheel input to horizontal movement within the project row", () => {
  const result = resolveHorizontalWheel({
    deltaX: 0,
    deltaY: 100,
    deltaMode: 0,
    scrollLeft: 200,
    scrollWidth: 1200,
    clientWidth: 600,
  });

  assert.deepEqual(result, {
    shouldHandle: true,
    nextScrollLeft: 300,
  });
});

test("lets page scrolling continue at project row boundaries", () => {
  const atStart = resolveHorizontalWheel({
    deltaX: 0,
    deltaY: -100,
    deltaMode: 0,
    scrollLeft: 0,
    scrollWidth: 1200,
    clientWidth: 600,
  });
  const atEnd = resolveHorizontalWheel({
    deltaX: 0,
    deltaY: 100,
    deltaMode: 0,
    scrollLeft: 600,
    scrollWidth: 1200,
    clientWidth: 600,
  });

  assert.equal(atStart.shouldHandle, false);
  assert.equal(atEnd.shouldHandle, false);
});

test("supports horizontal, line, and page wheel deltas", () => {
  const horizontal = resolveHorizontalWheel({
    deltaX: 40,
    deltaY: 5,
    deltaMode: 0,
    scrollLeft: 100,
    scrollWidth: 1200,
    clientWidth: 600,
  });
  const lineMode = resolveHorizontalWheel({
    deltaX: 0,
    deltaY: 2,
    deltaMode: 1,
    scrollLeft: 100,
    scrollWidth: 1200,
    clientWidth: 600,
  });
  const pageMode = resolveHorizontalWheel({
    deltaX: 0,
    deltaY: 1,
    deltaMode: 2,
    scrollLeft: 100,
    scrollWidth: 1800,
    clientWidth: 600,
  });

  assert.equal(horizontal.nextScrollLeft, 140);
  assert.equal(lineMode.nextScrollLeft, 132);
  assert.equal(pageMode.nextScrollLeft, 700);
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
