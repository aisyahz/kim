/**
 * ILLUSION 02 + 04 — Editorial depth & portal.
 *
 * Multiple perceived Z layers in one composition: background typography (far),
 * a project image (mid), foreground typography (near), and a phone that pops
 * OUT of the section (nearest). The section now has a real CSS `perspective`,
 * so instead of faking depth with scale alone we translate layers along Z and
 * parallax them at different rates. Some type genuinely passes behind the image
 * while other type stays in front — impossible flat-DOM depth.
 *
 * A gentle cursor parallax is layered on top on desktop so the scene breathes
 * even when the page isn't scrolling.
 */

import { gsap } from "../core/scroll";
import { motion } from "../core/motion";

export function mountEditorialDepth(root: HTMLElement): () => void {
  if (!motion.allowScrollFx) return () => {};

  const layer = (name: string) =>
    root.querySelector<HTMLElement>(`[data-depth-layer="${name}"]`);

  const back = layer("back");
  const mid = layer("mid");
  const front = layer("front");
  const pop = layer("pop");

  const cleanups: Array<() => void> = [];

  const ctx = gsap.context(() => {
    // Static Z placement establishes true depth order.
    gsap.set(back, { z: -420 });
    gsap.set(mid, { z: -60 });
    gsap.set(front, { z: 80 });
    gsap.set(pop, { z: 220 });

    const mk = (el: HTMLElement | null, y: number, scale = 1) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { yPercent: y },
        {
          yPercent: -y,
          scale,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    };
    // Far layer travels most (reads as distance); near layers travel less.
    mk(back, 26);
    mk(mid, 10);
    mk(front, -6);
    mk(pop, -20, 1.04);
  }, root);
  cleanups.push(() => ctx.revert());

  // Desktop cursor parallax: each layer offsets by an amount proportional to
  // its depth, so the composition has living volume at rest.
  if (motion.allowPointerFx) {
    const layers: Array<[HTMLElement | null, number]> = [
      [back, 26],
      [mid, 12],
      [front, -8],
      [pop, -18],
    ];
    const stop = motion.onFrame(({ pointer }) => {
      for (const [el, amt] of layers) {
        if (!el) continue;
        el.style.setProperty("--px", `${(pointer.x * amt).toFixed(1)}px`);
        el.style.setProperty("--py", `${(pointer.y * amt * 0.6).toFixed(1)}px`);
      }
    });
    cleanups.push(stop);
  }

  return () => cleanups.forEach((fn) => fn());
}
