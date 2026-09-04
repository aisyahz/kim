/**
 * Static markup for the page. Kept in one place so the illusion modules can
 * query the elements they enhance by data-attribute rather than owning layout.
 * Everything here is already a complete editorial layout with zero JS — motion
 * is layered on top.
 */

import { waLink } from "./shared/whatsapp";

/** Prefilled enquiry used across the KIM homepage CTAs. */
export const WHATSAPP_LINK = waLink(
  "Hi KIM! I'd like to claim the FREE website demo and secure a 2026 slot. Here's my business:"
);

export const sectionsHTML = /* html */ `
  <!-- Promo bar: free demo offer, tap-through to WhatsApp. -->
  <a
    class="promobar"
    href="${WHATSAPP_LINK}"
    target="_blank"
    rel="noopener"
    data-cursor="CLAIM"
  >
    <span class="promobar__marquee">
      <span>✦ FREE website demo — no upfront cost &nbsp;·&nbsp; Limited 2026 slots &nbsp;·&nbsp; Chat on WhatsApp to secure yours &nbsp;·&nbsp; Made in Malaysia 🇲🇾 &nbsp;·&nbsp;</span>
      <span aria-hidden="true">✦ FREE website demo — no upfront cost &nbsp;·&nbsp; Limited 2026 slots &nbsp;·&nbsp; Chat on WhatsApp to secure yours &nbsp;·&nbsp; Made in Malaysia 🇲🇾 &nbsp;·&nbsp;</span>
    </span>
  </a>

  <!-- Continuity object: a single floating "K / browser" mark that persists
       across the hero -> work boundary and hands off into the ATLAS object.
       Fixed so it can travel between sections without a blank gap. -->
  <div class="continuity" data-continuity aria-hidden="true">
    <div class="continuity__glass" data-continuity-glass>K</div>
  </div>

  <header class="site-nav wrap">
    <div class="site-nav__id">
      <a class="site-nav__brand" href="#top" data-cursor="TOP">KIM®</a>
      <span class="site-nav__role">Software Engineer<br />&amp; Web Developer</span>
    </div>
    <nav class="site-nav__links">
      <a href="#work" data-cursor="VIEW">Work</a>
      <a href="#services" data-cursor="VIEW">Services</a>
      <a href="#offer" data-cursor="FREE">About</a>
      <a href="#contact" data-cursor="SAY HI">Contact</a>
      <span class="site-nav__sep" aria-hidden="true"></span>
      <a class="btn btn--pill site-nav__cta" href="${WHATSAPP_LINK}" target="_blank" rel="noopener" data-cursor="CHAT">
        Let's Build <span aria-hidden="true">→</span>
      </a>
    </nav>
  </header>

  <main id="top">
    <!-- HERO — reference layout: left display type + right device cluster -->
    <section class="hero" data-illusion="hero">
      <div class="hero__canvas" data-hero-canvas aria-hidden="true"></div>

      <div class="hero__grid wrap">
        <!-- Left column: copy -->
        <div class="hero__copy">
          <p class="eyebrow hero__available" >
            <span class="hero__available-dot" aria-hidden="true"></span>
            Available for selected projects — 2026
          </p>

          <h1 class="display hero__title" data-hero-title>
            <span class="hero__line">Digital</span>
            <span class="hero__line">Experiences,</span>
            <span class="hero__line hero__line--italic">Engineered</span>
            <span class="hero__line hero__line--italic">Differently.</span>
          </h1>

          <p class="hero__sub">
            We design and build business websites, portfolios and custom web
            systems for Malaysian brands — with craft, depth and a little illusion.
          </p>

          <div class="hero__actions">
            <a class="btn btn--pill btn--dark" href="#work" data-scroll-to="#work" data-cursor="VIEW">
              View My Work <span aria-hidden="true">→</span>
            </a>
            <a class="hero__text-link" href="#offer" data-scroll-to="#offer" data-cursor="START">
              Start a Project
            </a>
          </div>
        </div>

        <!-- Right column: device / object cluster -->
        <div class="hero__stage" data-hero-stage aria-hidden="true">
          <!-- chrome / glass K behind the devices -->
          <div class="hero__glassk" data-hero-float="0.5">K</div>

          <!-- floating idea card -->
          <div class="hero__card" data-hero-float="1.4">
            <img
              class="hero__card-img"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=320&q=70&sat=-100"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div class="hero__card-text">
              <span>Ideas</span><span>Code</span><span>Design</span><span>Impact</span>
            </div>
            <em class="hero__card-k">(K)</em>
          </div>

          <!-- laptop with real website mockup -->
          <div class="hero__laptop" data-hero-float="0.9">
            <div class="hero__laptop-screen">
              <div class="mock">
                <div class="mock__bar">
                  <em>S.</em>
                  <span class="mock__nav">Home &nbsp; About &nbsp; Services &nbsp; Contact</span>
                  <span class="mock__menu">≡</span>
                </div>
                <div class="mock__body">
                  <div class="mock__copy">
                    <h3 class="display">Modern Solutions for Growing Brands</h3>
                    <p>We help businesses build digital experiences that drive real results.</p>
                    <span class="mock__cta">Get Started</span>
                    <span class="mock__link">Our Work →</span>
                  </div>
                  <img
                    class="mock__img"
                    src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=520&q=72&sat=-100"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div class="hero__laptop-base"></div>
          </div>

          <!-- phone with real mockup -->
          <div class="hero__phone" data-hero-float="1.8">
            <img
              class="hero__phone-img"
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=300&q=72&sat=-100"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div class="hero__phone-cap display">Small Ideas Big Results.</div>
          </div>

          <!-- rotating circular badge -->
          <div class="hero__badge" data-hero-badge>
            <svg viewBox="0 0 200 200">
              <defs>
                <path id="badgeCircle" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
              </defs>
              <text class="hero__badge-text">
                <textPath href="#badgeCircle" startOffset="0">
                  WEBSITES · SYSTEMS · ENGINEER · PEOPLE · WEBSITES · SYSTEMS · ENGINEER · PEOPLE ·
                </textPath>
              </text>
            </svg>
            <span class="hero__badge-core">✦</span>
          </div>

          <!-- handwritten note -->
          <p class="hero__note">Good websites create real opportunities.</p>

          <!-- location coordinates -->
          <p class="hero__coords">
            <strong>Kuala Lumpur,<br />Malaysia</strong>
            <span>3.1390° N<br />101.6869° E</span>
          </p>
        </div>
      </div>

      <!-- stats row -->
      <div class="hero__stats wrap">
        <div class="hero__stat"><b>01</b><span>UM Graduate<br />2021</span></div>
        <div class="hero__stat"><b>02</b><span>5 Years<br />Experience</span></div>
        <div class="hero__stat"><b>03</b><span>Software<br />Engineer</span></div>
        <div class="hero__stat"><b>04</b><span>Web Solutions<br />for Real Business</span></div>
        <a class="hero__scroll" href="#work" data-scroll-to="#work" data-cursor="SCROLL">
          Scroll to explore <span class="hero__scroll-arrow" aria-hidden="true">↓</span>
        </a>
      </div>
    </section>

    <!-- INTRO / EDITORIAL DEPTH — Illusion 04 -->
    <section class="intro" data-illusion="depth">
      <div class="wrap intro__grid">
        <span class="display intro__bg" data-depth-layer="back">BUILD</span>
        <div class="intro__media" data-depth-layer="mid">
          <div class="frame" data-tilt>
            <div class="frame__screen frame__screen--a">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=620&q=72&sat=-100" alt="" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
        <span class="display intro__fg" data-depth-layer="front">DIFFERENT</span>
        <div class="intro__device" data-depth-layer="pop">
          <div class="phone"><div class="phone__screen"></div></div>
        </div>
      </div>
    </section>

    <!-- SELECTED WORK / PROJECT ZOOM — Illusion 03 -->
    <section class="work" id="work" data-illusion="zoom">
      <div class="work__pin" data-zoom-pin>
        <p class="eyebrow work__label">01 / Selected work</p>

        <!-- Giant word sitting BEHIND the browser object (depth layer). -->
        <span class="display work__ghost" data-zoom-ghost aria-hidden="true">ATLAS</span>

        <div class="work__preview" data-zoom-target data-cursor="ENTER">
          <div class="browser" data-zoom-browser>
            <div class="browser__bar">
              <span></span><span></span><span></span>
              <em>kim.studio/atlas</em>
            </div>
            <div class="browser__view browser__view--atlas">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=74&sat=-100" alt="ATLAS business website" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>

        <!-- Word fragment that sits IN FRONT of the browser, clipped so it
             reads as passing through the object. -->
        <span class="display work__fore" data-zoom-fore aria-hidden="true">2026</span>

        <div class="work__meta" data-zoom-meta>
          <h2 class="display">ATLAS</h2>
          <p>Business website · Design + Development · Kuala Lumpur · 2026</p>
        </div>
      </div>
    </section>

    <!-- SERVICES / PERSPECTIVE PLANE — Illusion 05 -->
    <section class="services" id="services" data-illusion="perspective">
      <div class="wrap">
        <p class="eyebrow">What are we building?</p>
        <ul class="services__list" data-perspective-list>
          <li class="display" data-cursor="BUILD ↗" data-preview="1">
            <span class="services__name">Landing pages</span>
            <span class="services__demo services__demo--soon">Demo soon</span>
          </li>
          <li class="display" data-cursor="BUILD ↗" data-preview="2">
            <span class="services__name">Business websites</span>
            <span class="services__demo services__demo--soon">Demo soon</span>
          </li>
          <li class="display" data-cursor="BUILD ↗" data-preview="3">
            <span class="services__name">Portfolio websites</span>
            <span class="services__demo services__demo--soon">Demo soon</span>
          </li>
          <li class="display" data-cursor="BUILD ↗" data-preview="4">
            <span class="services__name">Agent websites</span>
            <span class="services__agents">
              <a class="services__demo" href="./demo/property/" data-cursor="LIVE">Property agent — View demo ↗</a>
              <span class="services__demo services__demo--soon">Takaful / insurance — soon</span>
            </span>
          </li>
          <li class="display" data-cursor="BUILD ↗" data-preview="5">
            <span class="services__name">Custom web systems</span>
            <span class="services__demo services__demo--soon">Demo soon</span>
          </li>
        </ul>
        <p class="services__note">
          Transparent pricing in Ringgit (RM). No hidden fees. Bahasa &amp; English, whatever suits you.
        </p>
      </div>
      <!-- Contextual visual that follows the cursor with inertia (desktop). -->
      <div class="services__preview" data-services-preview aria-hidden="true">
        <div class="services__preview-inner" data-services-preview-inner></div>
      </div>
    </section>

    <!-- IMAGE PHYSICS GALLERY — Illusion 06 -->
    <section class="gallery" data-illusion="physics">
      <div class="wrap gallery__grid">
        <figure class="gallery__item" data-physics data-cursor="VIEW">
          <div class="gallery__img gallery__img--1">
            <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=640&q=72&sat=-100" alt="Meridian portfolio website" loading="lazy" decoding="async" />
          </div>
          <figcaption>Meridian — Portfolio</figcaption>
        </figure>
        <figure class="gallery__item" data-physics data-cursor="VIEW">
          <div class="gallery__img gallery__img--2">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=640&q=72&sat=-100" alt="Nova web system dashboard" loading="lazy" decoding="async" />
          </div>
          <figcaption>Nova — Web system</figcaption>
        </figure>
        <figure class="gallery__item" data-physics data-cursor="VIEW">
          <div class="gallery__img gallery__img--3">
            <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=640&q=72&sat=-100" alt="Lumen landing page" loading="lazy" decoding="async" />
          </div>
          <figcaption>Lumen — Landing</figcaption>
        </figure>
      </div>
    </section>

    <!-- FREE DEMO OFFER — the ad, resolving into the WhatsApp action. -->
    <section class="offer" id="offer" data-illusion="offer">
      <div class="offer__songket" aria-hidden="true"></div>
      <div class="wrap offer__inner">
        <p class="eyebrow offer__eyebrow">Free demo · Terhad untuk 2026</p>
        <h2 class="display offer__title">
          See your website<br />before you pay a sen.
        </h2>
        <p class="offer__body">
          Tell us about your business on WhatsApp and we'll build a real,
          clickable demo of your new site — completely free. Like it? We finish
          it. Slots for 2026 are limited.
        </p>
        <ul class="offer__points">
          <li>✦ Free clickable demo, zero upfront</li>
          <li>✦ Built for Malaysian businesses</li>
          <li>✦ Reply within one working day</li>
        </ul>
        <a
          class="btn btn--wa btn--lg"
          href="${WHATSAPP_LINK}"
          target="_blank"
          rel="noopener"
          data-cursor="CHAT"
        >
          <span class="btn__wa-icon" aria-hidden="true"></span>
          Secure my free slot on WhatsApp
        </a>
        <p class="offer__wa-num">Or message us directly · 013-6648159</p>
      </div>
    </section>

    <!-- CTA — signature K resolves into KIM® -->
    <section class="cta" id="contact" data-illusion="cta">
      <div class="wrap cta__inner">
        <p class="eyebrow">Let's build yours · Kuala Lumpur, Malaysia 🇲🇾</p>
        <h2 class="display cta__title" data-cta-title>Start a project</h2>
        <div class="cta__actions">
          <a
            class="btn btn--wa btn--lg"
            href="${WHATSAPP_LINK}"
            target="_blank"
            rel="noopener"
            data-cursor="CHAT"
          >
            <span class="btn__wa-icon" aria-hidden="true"></span>
            Chat on WhatsApp — 013-6648159
          </a>
          <a class="cta__link" href="mailto:hello@kim.studio" data-cursor="SAY HI">
            hello@kim.studio
          </a>
        </div>
      </div>
    </section>
  </main>

  <!-- Floating WhatsApp button, always reachable on scroll. -->
  <a
    class="wa-fab"
    href="${WHATSAPP_LINK}"
    target="_blank"
    rel="noopener"
    aria-label="Chat with KIM on WhatsApp"
    data-cursor="CHAT"
  >
    <span class="wa-fab__icon" aria-hidden="true"></span>
    <span class="wa-fab__label">Free demo</span>
  </a>

  <footer class="site-foot wrap">
    <span>KIM® — engineered differently · Kuala Lumpur, Malaysia</span>
    <span>WhatsApp 013-6648159 · © 2026</span>
  </footer>
`;
