/**
 * CTA — signature resolve.
 *
 * The through-line of the site is a single glass "K" that appears at different
 * depths. At the final CTA it resolves into the full KIM® mark: the title
 * scales up and settles as you reach the section, closing the story rather than
 * adding one more unrelated effect.
 */

import { gsap } from "../core/scroll";
import { motion } from "../core/motion";

export function mountCtaResolve(root: HTMLElement): () => void {
  const title = root.querySelector<HTMLElement>("[data-cta-title]");
  if (!title) return () => {};
  if (!motion.allowScrollFx) return () => {};

  const ctx = gsap.context(() => {
    gsap.fromTo(
      title,
      { scale: 0.7, opacity: 0, filter: "blur(6px)" },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          end: "top 35%",
          scrub: 1,
        },
      }
    );
  }, root);

  return () => ctx.revert();
}
