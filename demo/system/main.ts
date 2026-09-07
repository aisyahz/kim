/** Custom system demo — FLOWDESK. SaaS / product landing. */
import "../../src/shared/demo-base.css";
import "./system.css";
import { systemHTML } from "./markup";
import { applySeo } from "../../src/shared/seo";
import { initReveal } from "../../src/shared/reveal";
import { mountDemoChrome } from "../../src/shared/demoChrome";
import { trackWhatsAppClicks } from "../../src/shared/analytics";

const app = document.getElementById("sy-app");
if (app) {
  app.innerHTML = systemHTML;
  applySeo({
    title: "Custom Web System Demo | KIM®",
    description:
      "FLOWDESK — a custom SaaS / admin system landing page demo, showing KIM builds more than marketing sites.",
  });
  initReveal(app);
  trackWhatsAppClicks(app, "demo_system");
  const nav = app.querySelector<HTMLElement>("[data-nav]");
  if (nav) {
    const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
  mountDemoChrome({ demo: "system", label: "custom web system", homeHref: "../../" });
}
