/**
 * Scroll reveal — dependency-free.
 *
 * Elements marked [data-reveal] fade/slide in once when they enter the
 * viewport. Uses IntersectionObserver; respects reduced-motion (the CSS in
 * demo-base.css already shows everything when reduced-motion is set, so this
 * simply adds `is-in` for the animated case).
 *
 * Optional [data-reveal-delay="120"] adds a per-element stagger in ms.
 */

export function initReveal(root: ParentNode = document): () => void {
  const els = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
  if (!els.length) return () => {};

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-in"));
    return () => {};
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        const delay = Number(el.getAttribute("data-reveal-delay") || 0);
        if (delay) el.style.transitionDelay = `${delay}ms`;
        el.classList.add("is-in");
        obs.unobserve(el);
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );

  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}
