/**
 * Tiny lazy-image loader — no dependencies.
 *
 * Any <img data-src="..."> (optionally data-srcset) is loaded when it nears the
 * viewport via IntersectionObserver, then marked `is-loaded` for a fade-in.
 * Falls back to eager loading where IntersectionObserver is unavailable.
 *
 * Returns a disposer so callers can clean up.
 */

export function initLazyImages(root: ParentNode = document): () => void {
  const imgs = Array.from(
    root.querySelectorAll<HTMLImageElement>("img[data-src]")
  );
  if (!imgs.length) return () => {};

  const load = (img: HTMLImageElement) => {
    const src = img.getAttribute("data-src");
    const srcset = img.getAttribute("data-srcset");
    if (srcset) img.srcset = srcset;
    if (src) img.src = src;
    img.removeAttribute("data-src");
    img.removeAttribute("data-srcset");
    img.addEventListener("load", () => img.classList.add("is-loaded"), {
      once: true,
    });
    // If already cached/complete, mark immediately.
    if (img.complete) img.classList.add("is-loaded");
  };

  if (!("IntersectionObserver" in window)) {
    imgs.forEach(load);
    return () => {};
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          load(entry.target as HTMLImageElement);
          obs.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "200px 0px" }
  );

  imgs.forEach((img) => io.observe(img));
  return () => io.disconnect();
}
