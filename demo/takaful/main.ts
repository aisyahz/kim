/** Takaful demo — Sarah Advisory. Bright, friendly, trustworthy. */
import "../../src/shared/demo-base.css";
import "./takaful.css";
import { takafulHTML } from "./markup";
import { applySeo } from "../../src/shared/seo";
import { initReveal } from "../../src/shared/reveal";
import { mountDemoChrome } from "../../src/shared/demoChrome";
import { trackWhatsAppClicks } from "../../src/shared/analytics";

const app = document.getElementById("tk-app");
if (app) {
  app.innerHTML = takafulHTML;
  applySeo({
    title: "Takaful Agent Website Demo | KIM®",
    description:
      "Sarah Advisory — a friendly, trustworthy takaful & insurance consultant website demo designed and built by KIM.",
  });
  initReveal(app);
  trackWhatsAppClicks(app, "demo_takaful");
  const nav = app.querySelector<HTMLElement>("[data-nav]");
  if (nav) {
    const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
  mountDemoChrome({ demo: "takaful", label: "takaful / insurance agent", homeHref: "../../" });
}
