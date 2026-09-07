/** Business demo — NOVA Solutions. Modern corporate. */
import { waLink } from "../../src/shared/whatsapp";
const wa = (m: string) => waLink(m);
const QUOTE = wa("Hi, I'd like a quote for my business. We're in the ______ industry.");
const CHAT = wa("Hi NOVA, I'd like to discuss a project for my company.");

export const businessHTML = /* html */ `
  <header class="bz-nav" data-nav>
    <a class="bz-nav__brand" href="#top">NOVA<span>Solutions</span></a>
    <nav class="bz-nav__links">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#work">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
    <a class="bz-btn bz-btn--accent bz-btn--sm" href="${QUOTE}" target="_blank" rel="noopener">Get a quote</a>
  </header>

  <main id="top">
    <section class="bz-hero">
      <div class="bz-hero__inner">
        <span class="bz-eyebrow" data-reveal>Business consulting · Technology · Growth</span>
        <h1 class="bz-hero__title" data-reveal data-reveal-delay="80">Better solutions.<br /><em>Built for business.</em></h1>
        <p class="bz-hero__sub" data-reveal data-reveal-delay="160">
          We help Malaysian companies streamline operations, modernise systems
          and grow with confidence — from strategy to delivery.
        </p>
        <div class="bz-hero__actions" data-reveal data-reveal-delay="240">
          <a class="bz-btn bz-btn--accent" href="${QUOTE}" target="_blank" rel="noopener">Get a quote →</a>
          <a class="bz-btn bz-btn--ghost" href="${CHAT}" target="_blank" rel="noopener">WhatsApp us</a>
        </div>
      </div>
      <div class="bz-hero__grid" aria-hidden="true"></div>
    </section>

    <section class="bz-sec" id="about">
      <div class="bz-two">
        <div data-reveal>
          <span class="bz-eyebrow">Who we are</span>
          <h2 class="bz-h2">A partner that delivers, not just advises.</h2>
        </div>
        <div class="bz-two__body" data-reveal data-reveal-delay="100">
          <p>NOVA Solutions is a Kuala Lumpur consultancy helping SMEs and growing
            companies work smarter. We combine strategy, design and technology to
            solve real operational problems — and we stay until it works.</p>
          <p>Trusted by businesses across retail, services and manufacturing.</p>
        </div>
      </div>
    </section>

    <section class="bz-sec bz-sec--dark" id="services">
      <div class="bz-head" data-reveal>
        <span class="bz-eyebrow bz-eyebrow--light">What we do</span>
        <h2 class="bz-h2">Services.</h2>
      </div>
      <div class="bz-services">
        ${svc("01", "Strategy & consulting", "Clear roadmaps, process reviews and growth planning grounded in your numbers.")}
        ${svc("02", "Systems & automation", "Custom tools and integrations that remove manual work and reduce errors.")}
        ${svc("03", "Web & digital", "Websites and platforms that convert visitors into customers.")}
        ${svc("04", "Support & optimisation", "Ongoing improvements, monitoring and support so results compound.")}
      </div>
    </section>

    <section class="bz-numbers">
      ${num("120+", "Projects delivered")}
      ${num("98%", "Client retention")}
      ${num("12", "Industries served")}
      ${num("8 yrs", "In business")}
    </section>

    <section class="bz-sec" id="why">
      <div class="bz-head" data-reveal>
        <span class="bz-eyebrow">Why NOVA</span>
        <h2 class="bz-h2">Built around outcomes.</h2>
      </div>
      <div class="bz-why">
        ${why("Fixed, transparent scope", "You know what you're getting and what it costs before we start.")}
        ${why("Senior team, hands-on", "You work directly with the people doing the work — no handoffs.")}
        ${why("Measured results", "We define success in numbers and report against them.")}
      </div>
    </section>

    <section class="bz-sec bz-sec--tint" id="work">
      <div class="bz-head" data-reveal>
        <span class="bz-eyebrow">Selected projects</span>
        <h2 class="bz-h2">Recent work.</h2>
      </div>
      <div class="bz-work">
        ${proj("Retail chain", "Inventory system", "Cut stock errors by 60% across 8 outlets.")}
        ${proj("Services firm", "Client portal", "Automated onboarding, saving 15 hours weekly.")}
        ${proj("Manufacturer", "Company website", "Doubled qualified enquiries in 3 months.")}
      </div>
    </section>

    <section class="bz-sec" id="reviews">
      <div class="bz-quotes">
        ${bq("NOVA understood our business fast and delivered exactly what we needed. Professional throughout.", "Managing Director, Retail")}
        ${bq("The automation they built paid for itself within months. Genuinely value-driven.", "Operations Head, Services")}
      </div>
    </section>

    <section class="bz-cta" id="contact">
      <div class="bz-cta__inner" data-reveal>
        <h2 class="bz-h2">Ready to move your business forward?</h2>
        <p>Tell us your challenge — we'll send a clear, no-obligation quote.</p>
        <div class="bz-cta__actions">
          <a class="bz-btn bz-btn--accent bz-btn--lg" href="${QUOTE}" target="_blank" rel="noopener">Get a quote →</a>
          <a class="bz-btn bz-btn--ghost bz-btn--lg" href="${CHAT}" target="_blank" rel="noopener">WhatsApp us — 013-6648159</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="bz-foot">
    <span>NOVA Solutions · Kuala Lumpur</span>
    <span>© 2026</span>
  </footer>
`;

function svc(n: string, t: string, d: string) {
  return `<article class="bz-svc" data-reveal><span class="bz-svc__n">${n}</span><h3>${t}</h3><p>${d}</p></article>`;
}
function num(v: string, l: string) {
  return `<div class="bz-num" data-reveal><b>${v}</b><span>${l}</span></div>`;
}
function why(t: string, d: string) {
  return `<div class="bz-whyitem" data-reveal><h3>${t}</h3><p>${d}</p></div>`;
}
function proj(tag: string, t: string, d: string) {
  return `<article class="bz-proj" data-reveal><span class="bz-proj__tag">${tag}</span><h3>${t}</h3><p>${d}</p></article>`;
}
function bq(t: string, who: string) {
  return `<figure class="bz-quote" data-reveal><blockquote>“${t}”</blockquote><figcaption>${who}</figcaption></figure>`;
}
