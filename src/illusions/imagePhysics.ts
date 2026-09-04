/**
 * ILLUSION 06 — Image physics.
 *
 * Project imagery reacts to the cursor with a subtle perspective tilt and a
 * touch of inertia (the tilt eases toward the pointer, it doesn't snap). No
 * aggressive card flip — movement should feel physical and expensive.
 *
 * On touch this becomes a gentle scroll-linked parallax instead (handled by the
 * editorial/gallery scroll layers); here we simply no-op without a pointer.
 */

import { motion } from "../core/motion";

export function mountImagePhysics(root: HTMLElement): () => void {
  if (!motion.allowPointerFx) return () => {};

  const items = Array.from(
    root.querySelectorAll<HTMLElement>("[data-physics], [data-tilt]")
  );
  if (!items.length) return () => {};

  // Per-item eased rotation state.
  const state = items.map(() => ({ rx: 0, ry: 0, trx: 0, try_: 0 }));

  const onMove = (e: PointerEvent) => {
    items.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      // Only respond when the pointer is reasonably near the element.
      const nx = (e.clientX - cx) / (r.width * 1.5);
      const ny = (e.clientY - cy) / (r.height * 1.5);
      const near = Math.abs(nx) < 1.2 && Math.abs(ny) < 1.2;
      state[i].try_ = near ? nx * 8 : 0; // rotateY
      state[i].trx = near ? -ny * 8 : 0; // rotateX
    });
  };

  window.addEventListener("pointermove", onMove, { passive: true });

  items.forEach((el) => {
    el.style.transformStyle = "preserve-3d";
    el.style.willChange = "transform";
  });

  const stop = motion.onFrame(({ dt }) => {
    const ease = Math.min(dt * 6, 1);
    items.forEach((el, i) => {
      const s = state[i];
      s.rx += (s.trx - s.rx) * ease;
      s.ry += (s.try_ - s.ry) * ease;
      el.style.transform = `perspective(1000px) rotateX(${s.rx.toFixed(
        2
      )}deg) rotateY(${s.ry.toFixed(2)}deg)`;
    });
  });

  return () => {
    stop();
    window.removeEventListener("pointermove", onMove);
    items.forEach((el) => (el.style.transform = ""));
  };
}
