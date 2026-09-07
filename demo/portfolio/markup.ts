/** Portfolio demo — fictional creative "Iman Yusof". Experimental art direction. */
import { waLink } from "../../src/shared/whatsapp";
const wa = (m: string) => waLink(m);
const HIRE = wa("Hi Iman, I'd like to work with you on a project.");

export const portfolioHTML = /* html */ `
  <header class="pf-nav">
    <a class="pf-nav__brand" href="#top">IMAN<span>*</span>YUSOF</a>
    <a class="pf-nav__cta" href="${HIRE}" target="_blank" rel="noopener">Available for work ↗</a>
  </header>

  <main id="top">
    <section class="pf-hero">
      <p class="pf-hero__role" data-reveal>Creative Director · Designer · Maker</p>
      <h1 class="pf-hero__title">
        <span data-reveal>Making</span>
        <span class="pf-i" data-reveal data-reveal-delay="80">brands</span>
        <span data-reveal data-reveal-delay="160">feel</span>
        <span class="pf-i" data-reveal data-reveal-delay="240">alive.</span>
      </h1>
      <div class="pf-hero__foot">
        <p data-reveal>Independent creative based in Kuala Lumpur, working with ambitious brands worldwide.</p>
        <span class="pf-hero__scroll" aria-hidden="true">↓ scroll</span>
      </div>
    </section>

    <section class="pf-marq" aria-hidden="true">
      <div class="pf-marq__row"><span>BRANDING — ART DIRECTION — DIGITAL — MOTION — IDENTITY — </span><span>BRANDING — ART DIRECTION — DIGITAL — MOTION — IDENTITY — </span></div>
    </section>

    <section class="pf-sec" id="about">
      <span class="pf-num">(01)</span>
      <h2 class="pf-h2" data-reveal>I design identities that people <em>remember</em> — not just logos, but the whole feeling of a brand.</h2>
    </section>

    <section class="pf-work" id="work">
      <div class="pf-work__head"><span class="pf-num">(02)</span><h3 data-reveal>Selected work</h3></div>
      ${work("Solstice", "Brand identity", "2025")}
      ${work("Kabel", "Web + motion", "2025")}
      ${work("Rumah", "Art direction", "2024")}
      ${work("Fold", "Identity system", "2024")}
    </section>

    <section class="pf-sec pf-sec--dark" id="experience">
      <span class="pf-num pf-num--light">(03)</span>
      <h3 class="pf-block-title" data-reveal>Experience</h3>
      <ul class="pf-exp">
        ${exp("Independent", "Creative Director", "2022 — now")}
        ${exp("Studio Aksara", "Senior Designer", "2019 — 2022")}
        ${exp("Brandwork KL", "Designer", "2017 — 2019")}
      </ul>
    </section>

    <section class="pf-sec" id="capabilities">
      <span class="pf-num">(04)</span>
      <h3 class="pf-block-title" data-reveal>Capabilities</h3>
      <div class="pf-caps">
        <span>Brand strategy</span><span>Visual identity</span><span>Art direction</span>
        <span>Web design</span><span>Motion</span><span>Typography</span><span>Packaging</span>
      </div>
    </section>

    <section class="pf-sec pf-sec--tint" id="reviews">
      <span class="pf-num">(05)</span>
      <blockquote class="pf-quote" data-reveal>“Iman doesn't just design — he gives a brand a personality. Working with him changed how our customers see us.”</blockquote>
      <p class="pf-quote__who">— Founder, Solstice</p>
    </section>

    <section class="pf-contact" id="contact">
      <span class="pf-num pf-num--light">(06)</span>
      <h2 class="pf-contact__title" data-reveal>Let's<br /><em>make</em><br />something.</h2>
      <a class="pf-contact__cta" href="${HIRE}" target="_blank" rel="noopener">Start on WhatsApp ↗</a>
      <p class="pf-contact__mail">013-6648159</p>
    </section>
  </main>

  <footer class="pf-foot">
    <span>Iman Yusof © 2026</span>
    <span>Kuala Lumpur</span>
  </footer>
`;

function work(name: string, tag: string, year: string) {
  return `<a class="pf-item" href="#" data-reveal><span class="pf-item__name">${name}</span><span class="pf-item__meta">${tag} · ${year}</span><span class="pf-item__arrow" aria-hidden="true">↗</span></a>`;
}
function exp(org: string, role: string, when: string) {
  return `<li class="pf-exp__row" data-reveal><b>${org}</b><span>${role}</span><em>${when}</em></li>`;
}
