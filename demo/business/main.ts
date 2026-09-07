/** Business demo — NOVA Solutions. Modern corporate, conversion focused. */
import "../../src/shared/demo-base.css";
import "./business.css";
import { businessHTML } from "./markup";
import { applySeo } from "../../src/shared/seo";
import { initReveal } from "../../src/shared/reveal";
import { mountDemoChrome } from "../../src/shared/demoChrome";
import { trackWhatsAppClicks } from "../../src/shared/analytics";

const app = document.getElementById("bz-app");
if (app) {
  app.innerHTML = businessHTML;
  applySeo({
    title: "Business Website Demo | KIM®",
    description:
      "NOVA Solutions — a modern, conversion-focused corporate SME website demo designed and built by KIM.",
  });
  initReveal(app);
  trackWhatsAppClicks(app, "demo_business");
  const nav = app.querySelector<HTMLElement>("[data-nav]");
  if (nav) {
    const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
  mountDemoChrome({ demo: "business", label: "business / SME", homeHref: "../../" });
}
