/** F&B demo — CRUMB. artisan bakery. Warm, playful. */
import "../../src/shared/demo-base.css";
import "./fnb.css";
import { fnbHTML } from "./markup";
import { applySeo } from "../../src/shared/seo";
import { initLazyImages } from "../../src/shared/lazyImages";
import { initReveal } from "../../src/shared/reveal";
import { mountDemoChrome } from "../../src/shared/demoChrome";
import { trackWhatsAppClicks } from "../../src/shared/analytics";

const app = document.getElementById("fb-app");
if (app) {
  app.innerHTML = fnbHTML;
  applySeo({
    title: "F&B / Bakery Website Demo | KIM®",
    description:
      "CRUMB. — a warm, playful artisan bakery website demo designed and built by KIM.",
  });
  initLazyImages(app);
  initReveal(app);
  trackWhatsAppClicks(app, "demo_fnb");
  const nav = app.querySelector<HTMLElement>("[data-nav]");
  if (nav) {
    const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
  mountDemoChrome({ demo: "fnb", label: "F&B / bakery", homeHref: "../../" });
}
