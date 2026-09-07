/** Portfolio demo — experimental creative personal brand. */
import "../../src/shared/demo-base.css";
import "./portfolio.css";
import { portfolioHTML } from "./markup";
import { applySeo } from "../../src/shared/seo";
import { initReveal } from "../../src/shared/reveal";
import { mountDemoChrome } from "../../src/shared/demoChrome";
import { trackWhatsAppClicks } from "../../src/shared/analytics";

const app = document.getElementById("pf-app");
if (app) {
  app.innerHTML = portfolioHTML;
  applySeo({
    title: "Portfolio Website Demo | KIM®",
    description:
      "A bold, experimental personal portfolio website demo — showing KIM can art-direct personal branding sites.",
  });
  initReveal(app);
  trackWhatsAppClicks(app, "demo_portfolio");
  mountDemoChrome({ demo: "portfolio", label: "personal portfolio", homeHref: "../../" });
}
