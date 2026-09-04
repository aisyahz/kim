/**
 * ILLUSION 01 — Hero depth.
 *
 * The KIM title reacts to cursor position with a restrained perspective tilt so
 * it feels like it sits on a physical surface rather than being flat HTML. The
 * effect is deliberately subtle (a few degrees) and pointer-driven only.
 *
 * On touch (no pointer) it swaps to a device-orientation tilt so mobile still
 * gets the physical-surface feel. On reduced-motion it does nothing; the layout
 * is already complete.
 */

import { motion } from "../core/motion";

export function mountHeroDepth(root: HTMLElement): () => void {
  const title = root.querySelector<HTMLElement>("[data-hero-title]");
  if (!title || motion.reducedMotion) return () => {};

  title.style.transformStyle = "preserve-3d";
  title.style.willChange = "transform";

  const apply = (nx: number, ny: number) => {
    // Restrained: a subtle drift + a hint of rotation. The headline is large,
    // so keep angles tiny to preserve legibility and avoid overflow.
    const rotY = nx * 2; // degrees
    const rotX = -ny * 1.4;
    const tx = nx * 6; // px drift
    const ty = ny * 4;
    title.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(${tx}px, ${ty}px, 0)`;
  };

  // Pointer path (desktop).
  if (motion.allowPointerFx) {
    const stop = motion.onFrame(({ pointer }) => apply(pointer.x, pointer.y));
    return () => {
      stop();
      title.style.transform = "";
    };
  }

  // Touch path: gentle device-orientation tilt.
  let target = { x: 0, y: 0 };
  const cur = { x: 0, y: 0 };
  const onOrient = (e: DeviceOrientationEvent) => {
    // gamma: left/right (-90..90), beta: front/back (-180..180)
    target.x = Math.max(-1, Math.min(1, (e.gamma ?? 0) / 30));
    target.y = Math.max(-1, Math.min(1, ((e.beta ?? 0) - 45) / 30));
  };
  window.addEventListener("deviceorientation", onOrient);
  const stop = motion.onFrame(({ dt }) => {
    const ease = Math.min(dt * 4, 1);
    cur.x += (target.x - cur.x) * ease;
    cur.y += (target.y - cur.y) * ease;
    apply(cur.x, cur.y);
  });

  return () => {
    stop();
    window.removeEventListener("deviceorientation", onOrient);
    title.style.transform = "";
  };
}
