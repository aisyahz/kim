/**
 * HERO STAGE — floating device cluster physics.
 *
 * The laptop, phone, card and glass K each carry a `data-hero-float` depth
 * factor. They drift toward the cursor with spring inertia (deeper factor =
 * more travel), giving the composition living volume without aggressive tilt.
 * A gentle idle bob keeps it alive when the pointer is still.
 *
 * Reuses the shared pointer state from the motion core. On touch/reduced-motion
 * the cluster simply sits in its designed position.
 */

import { motion } from "../core/motion";

interface FloatEl {
  el: HTMLElement;
  depth: number;
  x: number;
  y: number;
}

export function mountHeroStage(root: HTMLElement): () => void {
  const stage = root.querySelector<HTMLElement>("[data-hero-stage]");
  if (!stage || !motion.allowPointerFx) return () => {};

  const floats: FloatEl[] = Array.from(
    stage.querySelectorAll<HTMLElement>("[data-hero-float]")
  ).map((el) => ({
    el,
    depth: parseFloat(el.getAttribute("data-hero-float") || "1"),
    x: 0,
    y: 0,
  }));
  if (!floats.length) return () => {};

  floats.forEach((f) => (f.el.style.willChange = "transform"));

  const stop = motion.onFrame(({ pointer, dt, time }) => {
    const ease = Math.min(dt * 3, 1);
    const bob = Math.sin(time / 1400) * 3;
    for (const f of floats) {
      const tx = pointer.x * f.depth * 16;
      const ty = pointer.y * f.depth * 12 + bob * f.depth * 0.4;
      f.x += (tx - f.x) * ease;
      f.y += (ty - f.y) * ease;
      // translate composes with any CSS transform (rotate on glass K etc.).
      f.el.style.translate = `${f.x.toFixed(1)}px ${f.y.toFixed(1)}px`;
    }
  });

  return () => {
    stop();
    floats.forEach((f) => (f.el.style.translate = ""));
  };
}
