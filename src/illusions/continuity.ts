/**
 * SCENE CONTINUITY.
 *
 * A single fixed "K" object threads the experience together so sections feel
 * like one continuous space rather than discrete panels. Its lifecycle, driven
 * by scroll position:
 *
 *   Hero:         appears small, drifting with a subtle cursor spring.
 *   Hero -> Work: travels down + toward the viewer, growing, as if it's the
 *                 same object the ATLAS browser will become — then fades out
 *                 right as the ATLAS object takes over (the hand-off), so there
 *                 is never a blank gap between the two scenes.
 *   Later:        stays hidden; the story has resolved into the work.
 *
 * Pure fixed-position transforms + a ScrollTrigger scrub + the shared pointer
 * spring. No WebGL.
 */

import { gsap, ScrollTrigger } from "../core/scroll";
import { motion } from "../core/motion";

export function mountContinuity(root: HTMLElement): () => void {
  const obj = root.querySelector<HTMLElement>("[data-continuity]");
  const hero = root.querySelector<HTMLElement>('[data-illusion="hero"]');
  const work = root.querySelector<HTMLElement>('[data-illusion="zoom"]');
  if (!obj || !hero || !work || !motion.allowScrollFx) return () => {};

  const cleanups: Array<() => void> = [];

  // Base spring offset (cursor parallax) applied on top of the scroll transform.
  const spring = { x: 0, y: 0, tx: 0, ty: 0 };
  // Scroll-driven transform values, written by ScrollTrigger, read each frame.
  const scroll = { x: 0, y: -6, scale: 0.9, rot: -8, opacity: 0 };

  const ctx = gsap.context(() => {
    // Fade in shortly after load while in the hero.
    gsap.to(scroll, {
      opacity: 0.9,
      duration: 1.2,
      ease: "power2.out",
      delay: 0.3,
    });

    // Hero -> Work hand-off. The object travels and grows, then fades as the
    // real ATLAS object arrives at the top of the work pin.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        endTrigger: work,
        end: "top center",
        scrub: 1,
      },
    });
    tl.to(scroll, { y: 4, scale: 1.15, rot: 4, ease: "none" }, 0)
      // hand-off: fade out over the last third so it dissolves into ATLAS
      .to(scroll, { opacity: 0, ease: "power2.in" }, 0.66);
  }, root);
  cleanups.push(() => ctx.revert());

  const stop = motion.onFrame(({ pointer, dt }) => {
    // Cursor spring (subtle; disabled on touch where pointer is centred/0).
    spring.tx = motion.allowPointerFx ? pointer.x * 26 : 0;
    spring.ty = motion.allowPointerFx ? pointer.y * 18 : 0;
    const ease = Math.min(dt * 3, 1);
    spring.x += (spring.tx - spring.x) * ease;
    spring.y += (spring.ty - spring.y) * ease;

    const x = spring.x;
    const y = scroll.y * (window.innerHeight / 100) * 3 + spring.y;
    obj.style.opacity = scroll.opacity.toFixed(3);
    obj.style.transform = `translate3d(calc(-50% + ${x.toFixed(
      1
    )}px), calc(-50% + ${y.toFixed(1)}px), 0) scale(${scroll.scale.toFixed(
      3
    )}) rotate(${scroll.rot.toFixed(2)}deg)`;
  });
  cleanups.push(stop);

  requestAnimationFrame(() => ScrollTrigger.refresh());

  return () => cleanups.forEach((fn) => fn());
}
