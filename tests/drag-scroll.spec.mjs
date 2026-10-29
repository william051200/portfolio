import assert from "node:assert/strict";
import test from "node:test";
import { createRenderer } from "vue";
import { useDragScroll } from "../src/composables/useDragScroll.ts";

const renderer = createRenderer({
  createElement: () => ({}),
  createText: () => ({}),
  createComment: () => ({}),
  insert() {},
  remove() {},
  setText() {},
  setElementText() {},
  patchProp() {},
  parentNode: () => null,
  nextSibling: () => null,
});

function mountDragScroll(t) {
  const previousWindow = globalThis.window;
  globalThis.window = { setTimeout };
  t.after(() => {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  });

  const captures = new Set();
  const target = {
    scrollLeft: 100,
    setPointerCapture: (id) => captures.add(id),
    hasPointerCapture: (id) => captures.has(id),
    releasePointerCapture: (id) => captures.delete(id),
  };
  let controls;
  const app = renderer.createApp({
    setup() {
      controls = useDragScroll();
      controls.element.value = target;
      return () => null;
    },
  });
  app.mount({});
  t.after(() => app.unmount());

  return { controls, target, captures };
}

function pointer(overrides = {}) {
  return {
    pointerId: 1,
    isPrimary: true,
    button: 0,
    clientX: 100,
    clientY: 100,
    preventDefault() {},
    ...overrides,
  };
}

test("leaves ordinary project link clicks uncaptured and unsuppressed", (t) => {
  const { controls, target, captures } = mountDragScroll(t);
  controls.onPointerDown(pointer());
  assert.equal(captures.size, 0);
  controls.onPointerMove(pointer({ clientX: 102 }));
  controls.finishPointer(pointer());

  let suppressed = false;
  controls.onClickCapture({
    preventDefault: () => { suppressed = true; },
    stopPropagation() {},
  });

  assert.equal(captures.size, 0);
  assert.equal(target.scrollLeft, 100);
  assert.equal(suppressed, false);
});

test("captures horizontal dragging, scrolls the row, and suppresses its click", (t) => {
  const { controls, target, captures } = mountDragScroll(t);
  controls.onPointerDown(pointer());
  assert.equal(captures.size, 0);

  controls.onPointerMove(pointer({ clientX: 80 }));
  assert.equal(captures.has(1), true);
  assert.equal(target.scrollLeft, 120);
  assert.equal(controls.isDragging.value, true);

  controls.finishPointer(pointer());
  assert.equal(captures.size, 0);
  assert.equal(controls.isDragging.value, false);

  let prevented = false;
  let stopped = false;
  controls.onClickCapture({
    preventDefault: () => { prevented = true; },
    stopPropagation: () => { stopped = true; },
  });
  assert.equal(prevented, true);
  assert.equal(stopped, true);
});

test("leaves vertical movement and unrelated pointers alone", (t) => {
  const { controls, target, captures } = mountDragScroll(t);
  controls.onPointerDown(pointer());
  controls.onPointerMove(pointer({ pointerId: 2, clientX: 50 }));
  controls.onPointerMove(pointer({ clientX: 90, clientY: 130 }));

  assert.equal(captures.size, 0);
  assert.equal(target.scrollLeft, 100);
  assert.equal(controls.isDragging.value, false);
  controls.finishPointer(pointer());
});
