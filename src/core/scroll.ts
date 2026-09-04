/**
 * Scroll core: Lenis smooth scroll driving GSAP ScrollTrigger.
 *
 * A single Lenis instance owns scrolling for the whole page and pumps its
 * position into GSAP's ticker so ScrollTrigger stays perfectly in sync. When
 * the user prefers reduced motion we skip Lenis entirely and let the browser
 * scroll natively — ScrollTrigger still works, just without the smoothing.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { motion } from "./motion";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

export function initScroll(): () => void {
  ScrollTrigger.clearMatchMedia();

  if (!motion.allowScrollFx) {
    // Native scroll + ScrollTrigger, no smoothing.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }

  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
  });

  lenis.on("scroll", ScrollTrigger.update);

  const tickerCb = (time: number) => {
    // GSAP ticker time is in seconds; Lenis expects milliseconds.
    lenis?.raf(time * 1000);
  };
  gsap.ticker.add(tickerCb);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tickerCb);
    lenis?.destroy();
    lenis = null;
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}

export function scrollTo(target: string | number | HTMLElement) {
  if (lenis) lenis.scrollTo(target as never);
  else if (typeof target !== "number") {
    (typeof target === "string"
      ? document.querySelector(target)
      : target
    )?.scrollIntoView({ behavior: "smooth" });
  }
}

export { gsap, ScrollTrigger };
