/**
 * Contextual cursor.
 *
 * Not a giant circle. The native cursor stays visible; a small label element
 * follows it with inertia and only appears when hovering an element that
 * declares intent via `data-cursor="VIEW"` (or similar). Disabled on touch and
 * reduced-motion.
 */

import { motion } from "./motion";

export function initCursor(): () => void {
  if (!motion.allowPointerFx) return () => {};

  const el = document.createElement("div");
  el.className = "cursor";
  el.setAttribute("aria-hidden", "true");
  const label = document.createElement("span");
  label.className = "cursor__label";
  el.appendChild(label);
  document.body.appendChild(el);
  document.body.classList.add("has-cursor");

  let visible = false;

  const setLabel = (text: string | null) => {
    if (text) {
      label.textContent = text;
      if (!visible) {
        visible = true;
        el.classList.add("is-visible");
      }
    } else if (visible) {
      visible = false;
      el.classList.remove("is-visible");
    }
  };

  const onOver = (e: PointerEvent) => {
    const target = (e.target as HTMLElement)?.closest?.("[data-cursor]");
    setLabel(target ? target.getAttribute("data-cursor") : null);
  };

  const stop = motion.onFrame(({ pointerRaw }) => {
    const x = (pointerRaw.x * 0.5 + 0.5) * window.innerWidth;
    const y = (pointerRaw.y * 0.5 + 0.5) * window.innerHeight;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  });

  document.addEventListener("pointerover", onOver, { passive: true });

  return () => {
    stop();
    document.removeEventListener("pointerover", onOver);
    el.remove();
    document.body.classList.remove("has-cursor");
  };
}
