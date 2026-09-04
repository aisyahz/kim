/**
 * KIM sales layer — shared chrome injected into every demo.
 *
 *  - A subtle fixed "DEMO BY KIM®" badge that returns to the main KIM
 *    portfolio when clicked.
 *  - A floating "Want a website like this? Chat with Kim →" button that opens
 *    WhatsApp (using the central config, never hardcoded).
 *
 * Styling lives in demo-base.css so the chrome looks identical across demos
 * while each demo keeps its own independent visual identity.
 */

import { waLink } from "./whatsapp";
import { track } from "./analytics";

export interface DemoChromeOptions {
  /** Demo id used in the prefilled WhatsApp message + analytics, e.g. "property". */
  demo: string;
  /** Friendly label for the industry, e.g. "property agent". */
  label: string;
  /** Path back to the main site. Relative so it works on any host/subpath. */
  homeHref?: string;
}

export function mountDemoChrome(opts: DemoChromeOptions): () => void {
  const { demo, label, homeHref = "/" } = opts;

  const message = `Hi KIM! I saw the ${label} demo and I'd like a website like this for my business.`;

  const badge = document.createElement("a");
  badge.className = "kim-badge";
  badge.href = homeHref;
  badge.setAttribute("aria-label", "Made by KIM — back to portfolio");
  badge.innerHTML = `<span class="kim-badge__dot" aria-hidden="true"></span> DEMO BY <strong>KIM®</strong>`;
  badge.addEventListener("click", () => track("demo_badge_click", { demo }));

  const cta = document.createElement("a");
  cta.className = "kim-cta";
  cta.href = waLink(message);
  cta.target = "_blank";
  cta.rel = "noopener";
  cta.innerHTML = `
    <span class="kim-cta__icon" aria-hidden="true"></span>
    <span class="kim-cta__text">
      <b>Want a website like this?</b>
      <span>Chat with Kim →</span>
    </span>`;
  cta.addEventListener("click", () =>
    track("whatsapp_click", { source: `demo_${demo}_cta` })
  );

  document.body.appendChild(badge);
  document.body.appendChild(cta);
  track("demo_view", { demo });

  return () => {
    badge.remove();
    cta.remove();
  };
}
