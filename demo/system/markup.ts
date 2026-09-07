/** Custom system demo — FLOWDESK. SaaS/admin product landing, coded dashboard. */
import { waLink } from "../../src/shared/whatsapp";
const wa = (m: string) => waLink(m);
const BUILD = wa("Hi Kim, I'd like to build a custom system. Here's the problem I'm solving: ______");

export const systemHTML = /* html */ `
  <header class="sy-nav" data-nav>
    <a class="sy-nav__brand" href="#top"><span class="sy-logo" aria-hidden="true"></span> FlowDesk</a>
    <nav class="sy-nav__links">
      <a href="#features">Features</a>
      <a href="#workflow">Workflow</a>
      <a href="#uses">Use cases</a>
    </nav>
    <a class="sy-btn sy-btn--accent sy-btn--sm" href="${BUILD}" target="_blank" rel="noopener">Build a system</a>
  </header>

  <main id="top">
    <section class="sy-hero">
      <div class="sy-hero__copy">
        <span class="sy-chip" data-reveal>Custom internal systems</span>
        <h1 class="sy-hero__title" data-reveal data-reveal-delay="80">Your workflow.<br /><em>One system.</em></h1>
        <p class="sy-hero__sub" data-reveal data-reveal-delay="160">
          FlowDesk is an example of a custom platform — dashboards, automation and
          team tools built around how your business actually works.
        </p>
        <div class="sy-hero__actions" data-reveal data-reveal-delay="240">
          <a class="sy-btn sy-btn--accent" href="${BUILD}" target="_blank" rel="noopener">Build a custom system →</a>
          <a class="sy-hero__link" href="#preview">See the product ↓</a>
        </div>
      </div>

      <!-- Coded product preview (no images/DB) -->
      <div class="sy-preview" id="preview" data-reveal data-reveal-delay="200" aria-hidden="true">
        <div class="sy-app">
          <aside class="sy-app__side">
            <span class="sy-app__logo"></span>
            <i class="is-active"></i><i></i><i></i><i></i><i></i>
          </aside>
          <div class="sy-app__main">
            <div class="sy-app__top"><span class="sy-app__title">Overview</span><span class="sy-app__pill">Live</span></div>
            <div class="sy-app__stats">
              <div class="sy-stat"><small>Revenue</small><b>RM 128.4k</b><em class="up">▲ 12%</em></div>
              <div class="sy-stat"><small>Orders</small><b>1,942</b><em class="up">▲ 8%</em></div>
              <div class="sy-stat"><small>Pending</small><b>37</b><em class="down">▼ 3%</em></div>
            </div>
            <div class="sy-app__chart"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
            <div class="sy-app__table"><em></em><em></em><em></em><em></em></div>
          </div>
        </div>
        <div class="sy-phone" aria-hidden="true">
          <span class="sy-phone__bar"></span>
          <div class="sy-phone__stat"><small>Today</small><b>RM 4.2k</b></div>
          <span class="sy-phone__line"></span><span class="sy-phone__line short"></span>
        </div>
      </div>
    </section>

    <section class="sy-sec" id="features">
      <div class="sy-head" data-reveal>
        <span class="sy-eyebrow">Features</span>
        <h2 class="sy-h2">Everything in one place.</h2>
      </div>
      <div class="sy-features">
        ${feat("Dashboards", "Real-time metrics that matter, visualised clearly for fast decisions.")}
        ${feat("Admin interface", "Manage records, roles and content without touching a spreadsheet.")}
        ${feat("Analytics", "Track performance, spot trends and export reports on demand.")}
        ${feat("User management", "Roles, permissions and audit trails built in from day one.")}
        ${feat("Automated workflows", "Trigger actions, reminders and approvals — no manual chasing.")}
        ${feat("Mobile responsive", "Full access on any device, so your team works anywhere.")}
      </div>
    </section>

    <section class="sy-sec sy-sec--dark" id="workflow">
      <div class="sy-head" data-reveal>
        <span class="sy-eyebrow sy-eyebrow--light">How it flows</span>
        <h2 class="sy-h2">From messy to automated.</h2>
      </div>
      <div class="sy-flow">
        ${flow("01", "Capture", "Data comes in from forms, orders or your team — one source of truth.")}
        ${flow("02", "Process", "Rules and automations handle the repetitive steps instantly.")}
        ${flow("03", "Act", "Your team sees exactly what needs attention, and acts.")}
        ${flow("04", "Report", "Live dashboards keep everyone aligned without status meetings.")}
      </div>
    </section>

    <section class="sy-sec" id="uses">
      <div class="sy-head" data-reveal>
        <span class="sy-eyebrow">Use cases</span>
        <h2 class="sy-h2">Built for real operations.</h2>
      </div>
      <div class="sy-uses">
        ${use("Order & inventory", "Track stock, orders and fulfilment across outlets.")}
        ${use("Bookings & scheduling", "Appointments, resources and reminders, automated.")}
        ${use("Member portals", "Logins, tiers and self-service for your customers.")}
        ${use("Internal tools", "Custom admin panels tailored to your process.")}
      </div>
    </section>

    <section class="sy-sec sy-sec--tint" id="tech">
      <div class="sy-head" data-reveal>
        <span class="sy-eyebrow">Technology</span>
        <h2 class="sy-h2">Modern, secure, yours.</h2>
      </div>
      <div class="sy-tech">
        <span>TypeScript</span><span>Node</span><span>React</span><span>PostgreSQL</span>
        <span>Cloud hosting</span><span>Role-based access</span><span>API integrations</span><span>Automated backups</span>
      </div>
      <p class="sy-tech__note" data-reveal>Every system is scoped and quoted around your specific requirements.</p>
    </section>

    <section class="sy-cta" id="contact">
      <div class="sy-cta__inner" data-reveal>
        <h2 class="sy-h2">Have a process that needs a system?</h2>
        <p>Tell me the problem — I'll propose how to solve it, and quote it around the scope.</p>
        <a class="sy-btn sy-btn--accent sy-btn--lg" href="${BUILD}" target="_blank" rel="noopener">Build a custom system → 013-6648159</a>
      </div>
    </section>
  </main>

  <footer class="sy-foot">
    <span>FlowDesk — a custom system concept by KIM®</span>
    <span>© 2026</span>
  </footer>
`;

function feat(t: string, d: string) {
  return `<article class="sy-feat" data-reveal><h3>${t}</h3><p>${d}</p></article>`;
}
function flow(n: string, t: string, d: string) {
  return `<div class="sy-flowitem" data-reveal><span class="sy-flow__n">${n}</span><h3>${t}</h3><p>${d}</p></div>`;
}
function use(t: string, d: string) {
  return `<article class="sy-use" data-reveal><h3>${t}</h3><p>${d}</p></article>`;
}
