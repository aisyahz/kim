/**
 * Property agent demo — entry point.
 *
 * Independent from the KIM homepage: no GSAP, no Lenis. Uses only the shared,
 * dependency-free helpers (SEO, lazy images, scroll reveal, demo chrome,
 * analytics). Keeps this demo's bundle small and self-contained.
 */

import "../../src/shared/demo-base.css";
import "./property.css";

import { propertyHTML } from "./markup";
import { applySeo } from "../../src/shared/seo";
import { initLazyImages } from "../../src/shared/lazyImages";
import { initReveal } from "../../src/shared/reveal";
import { mountDemoChrome } from "../../src/shared/demoChrome";
import { trackWhatsAppClicks } from "../../src/shared/analytics";

const app = document.getElementById("pa-app");
if (app) {
  app.innerHTML = propertyHTML;

  applySeo({
    title: "Property Agent Website Demo | KIM®",
    description:
      "Nadia Rahman — luxury property consultant in Kuala Lumpur. A demo of a premium property agent website designed and built by KIM.",
    ogImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70",
  });

  initLazyImages(app);
  initReveal(app);
  trackWhatsAppClicks(app, "demo_property");

  // Nav gains a solid background once the hero scrolls away.
  const nav = app.querySelector<HTMLElement>("[data-pa-nav]");
  if (nav) {
    const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // KIM sales layer: badge back to portfolio + floating WhatsApp CTA.
  // homeHref is relative from /demo/property/ back to the site root.
  mountDemoChrome({ demo: "property", label: "property agent", homeHref: "../../" });
}
