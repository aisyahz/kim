/**
 * ILLUSION 03 — Project zoom (signature viewport-entry).
 *
 * The featured project (ATLAS) reads as a small object floating in space, then
 * a single pinned scrub timeline carries it through a continuous journey:
 *
 *   1. small + pushed back in Z (a distant object)
 *   2. approaches the viewer (Z travels toward camera) and grows
 *   3. overshoots to fill / slightly exceed the viewport — you've "entered" it
 *   4. settles, then pulls back into an angled browser frame
 *   5. resolves into an editorial case-study composition (meta reveals,
 *      depth-typography parts around the object)
 *
 * The behind/in-front typography (ghost + fore) parallaxes against the object
 * so words pass through it. Pure CSS 3D + GSAP scrub — no WebGL.
 */

import { gsap } from "../core/scroll";
import { motion } from "../core/motion";

export function mountProjectZoom(root: HTMLElement): () => void {
  const pin = root.querySelector<HTMLElement>("[data-zoom-pin]");
  const target = root.querySelector<HTMLElement>("[data-zoom-target]");
  const browser = root.querySelector<HTMLElement>("[data-zoom-browser]");
  const meta = root.querySelector<HTMLElement>("[data-zoom-meta]");
  const ghost = root.querySelector<HTMLElement>("[data-zoom-ghost]");
  const fore = root.querySelector<HTMLElement>("[data-zoom-fore]");
  const label = root.querySelector<HTMLElement>(".work__label");
  if (!pin || !target || !browser || !meta) return () => {};

  // On touch / small screens the pinned scroll-zoom creates a long, empty
  // scrub that reads as dead space on a phone. Skip the pin entirely and show
  // the clean static composition the mobile CSS lays out. Also the fallback
  // when reduced motion is requested.
  const smallScreen =
    typeof window !== "undefined" && window.matchMedia("(max-width: 680px)").matches;
  if (!motion.allowScrollFx || motion.touch || smallScreen) {
    gsap.set(meta, { opacity: 1 });
    return () => {};
  }

  const ctx = gsap.context(() => {
    gsap.set(meta, { opacity: 0, y: 40 });
    gsap.set(browser, { borderRadius: 0, boxShadow: "none" });
    gsap.set(ghost, { opacity: 0, scale: 0.8, z: -400, yPercent: 6 });
    gsap.set(fore, { opacity: 0, z: 200, yPercent: 4 });

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "+=320%", // longer track = slower, more cinematic control
        scrub: 1,
        pin,
        anticipatePin: 1,
      },
    });

    // --- Phase 1 -> 2 -> 3: distant object approaches and fills the viewport
    tl.fromTo(
      target,
      { scale: 0.28, z: -600, yPercent: 8, rotateX: 6 },
      { scale: 1.06, z: 0, yPercent: 0, rotateX: 0, ease: "power1.in" },
      0
    )
      // background ghost word rises behind as the object nears
      .to(ghost, { opacity: 1, scale: 1, z: -260, yPercent: -4 }, 0)
      // foreground fragment drifts up in front, partially crossing the object
      .to(fore, { opacity: 1, z: 120, yPercent: -6 }, 0.1)
      // brief "inside the site" hold at full-bleed
      .to(target, { scale: 1.06, duration: 0.25 }, ">")

      // --- Phase 4: pull back into an angled browser frame
      .to(
        target,
        { scale: 0.66, z: -60, ease: "power2.inOut", duration: 0.6 },
        ">"
      )
      .to(
        browser,
        {
          rotateY: -10,
          rotateX: 4,
          borderRadius: 12,
          boxShadow: "0 50px 90px -40px rgba(20,18,16,0.45)",
          ease: "power2.out",
          duration: 0.6,
        },
        "<"
      )
      // typography parts around the resolved object (depth choreography)
      .to(ghost, { xPercent: -14, z: -320, ease: "power2.out", duration: 0.6 }, "<")
      .to(fore, { xPercent: 12, z: 160, ease: "power2.out", duration: 0.6 }, "<")

      // --- Phase 5: editorial case-study composition
      .to(meta, { opacity: 1, y: 0, ease: "power2.out", duration: 0.4 }, "<+0.15")
      .fromTo(
        label,
        { opacity: 0.5 },
        { opacity: 1, duration: 0.3 },
        "<"
      );
  }, root);

  return () => ctx.revert();
}
