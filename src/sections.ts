/**
 * Static markup for the page. Kept in one place so the illusion modules can
 * query the elements they enhance by data-attribute rather than owning layout.
 * Everything here is already a complete editorial layout with zero JS — motion
 * is layered on top.
 */

import { WA_LINKS } from "./shared/whatsapp";

/**
 * Primary homepage CTA now carries the unified campaign message so every
 * top-level "chat with Kim" action self-identifies as a portfolio-project lead.
 */
export const WHATSAPP_LINK = WA_LINKS.campaign;

export const sectionsHTML = /* html */ `
  <!-- Promo bar: portfolio-project campaign, tap-through to WhatsApp. -->
  <a
    class="promobar"
    href="${WHATSAPP_LINK}"
    target="_blank"
    rel="noopener"
    data-cursor="CLAIM"
  >
    <span class="promobar__marquee">
      <span>✦ Portfolio project &nbsp;·&nbsp; 3 selected Malaysian businesses &nbsp;·&nbsp; Website build at no design cost, in exchange for a testimonial &nbsp;·&nbsp; Chat on WhatsApp &nbsp;·&nbsp; Made in Malaysia 🇲🇾 &nbsp;·&nbsp;</span>
      <span aria-hidden="true">✦ Portfolio project &nbsp;·&nbsp; 3 selected Malaysian businesses &nbsp;·&nbsp; Website build at no design cost, in exchange for a testimonial &nbsp;·&nbsp; Chat on WhatsApp &nbsp;·&nbsp; Made in Malaysia 🇲🇾 &nbsp;·&nbsp;</span>
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
      <a href="#pricing" data-cursor="VIEW">Pricing</a>
      <a href="#offer" data-cursor="FREE">Project</a>
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
            <span class="hero__card-swatch"></span>
            <div class="hero__card-text">
              <span>Ideas</span><span>Code</span><span>Design</span><span>Impact</span>
            </div>
            <em class="hero__card-k">(K)</em>
          </div>

          <!-- laptop showing a simplified but believable premium site -->
          <div class="hero__laptop" data-hero-float="0.9">
            <div class="hero__laptop-screen">
              <div class="mock">
                <div class="mock__bar">
                  <em>Studio.</em>
                  <span class="mock__nav">Work · Studio · Contact</span>
                </div>
                <div class="mock__hero">
                  <div class="mock__overlay">
                    <h3 class="display">Modern brands,<br />built with care.</h3>
                    <span class="mock__cta">Start a project →</span>
                  </div>
                  <div class="mock__hero-art"><span></span><span></span></div>
                </div>
              </div>
            </div>
            <div class="hero__laptop-base"></div>
          </div>

          <!-- phone showing a coded app screen -->
          <div class="hero__phone" data-hero-float="1.8">
            <div class="hero__phone-screen">
              <span class="hero__phone-status"><i></i><i></i></span>
              <span class="hero__phone-tag">Studio</span>
              <p class="hero__phone-cap display">Small ideas,<br />big results.</p>
              <span class="hero__phone-btn">Get started</span>
            </div>
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
            <div class="frame__screen">
              <div class="site site--intro">
                <nav class="site__nav">
                  <span class="site__logo">Nova</span>
                  <span class="site__links"><i></i><i></i><i></i></span>
                  <span class="site__navcta">Contact</span>
                </nav>
                <div class="site__hero">
                  <div class="site__hero-copy">
                    <p class="site__eyebrow">Studio · 2026</p>
                    <h4 class="site__h1">Design that works harder.</h4>
                    <span class="site__btn">See our work</span>
                  </div>
                  <div class="site__hero-art"><span></span><span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span class="display intro__fg" data-depth-layer="front">DIFFERENT</span>
        <div class="intro__device" data-depth-layer="pop">
          <div class="phone">
            <div class="phone__screen">
              <span class="phone__bar"></span>
              <span class="phone__blk phone__blk--lg"></span>
              <span class="phone__blk"></span>
              <span class="phone__blk phone__blk--sm"></span>
            </div>
          </div>
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
              <!-- Coded mini-website (no images/DB) — a real structured layout
                   so it reads as an actual site, not a photo in a frame. -->
              <div class="site site--atlas">
                <nav class="site__nav">
                  <span class="site__logo">ATLAS</span>
                  <span class="site__links"><i></i><i></i><i></i></span>
                  <span class="site__navcta">Enquire</span>
                </nav>
                <div class="site__hero">
                  <div class="site__hero-copy">
                    <p class="site__eyebrow">Property developer · KL</p>
                    <h4 class="site__h1">Spaces that grow with you.</h4>
                    <p class="site__lead">Modern residential and commercial developments across Kuala Lumpur.</p>
                    <span class="site__btn">View developments</span>
                  </div>
                  <div class="site__hero-art"><span></span><span></span><span></span></div>
                </div>
                <div class="site__row">
                  <div class="site__card"></div>
                  <div class="site__card"></div>
                  <div class="site__card"></div>
                </div>
              </div>
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
            <span class="services__agents">
              <span class="services__price">From RM399</span>
              <a class="services__demo" href="./demo/fnb/" data-cursor="LIVE">View demo ↗</a>
            </span>
          </li>
          <li class="display" data-cursor="BUILD ↗" data-preview="2">
            <span class="services__name">Business websites</span>
            <span class="services__agents">
              <span class="services__price">From RM799</span>
              <a class="services__demo" href="./demo/business/" data-cursor="LIVE">View demo ↗</a>
            </span>
          </li>
          <li class="display" data-cursor="BUILD ↗" data-preview="3">
            <span class="services__name">Portfolio websites</span>
            <span class="services__agents">
              <span class="services__price">From RM399</span>
              <a class="services__demo" href="./demo/portfolio/" data-cursor="LIVE">View demo ↗</a>
            </span>
          </li>
          <li class="display" data-cursor="BUILD ↗" data-preview="4">
            <span class="services__name">Agent websites</span>
            <span class="services__agents">
              <span class="services__price">From RM799</span>
              <a class="services__demo" href="./demo/property/" data-cursor="LIVE">Property — demo ↗</a>
              <a class="services__demo" href="./demo/takaful/" data-cursor="LIVE">Takaful — demo ↗</a>
            </span>
          </li>
          <li class="display" data-cursor="BUILD ↗" data-preview="5">
            <span class="services__name">Custom web systems</span>
            <span class="services__agents">
              <span class="services__price services__price--quote">From RM1,499+ · custom quote</span>
              <a class="services__demo" href="./demo/system/" data-cursor="LIVE">View demo ↗</a>
            </span>
          </li>
        </ul>
        <p class="services__note">
          Full pricing below · Ringgit (RM) · Bahasa &amp; English, whatever suits you.
          <a href="#pricing" data-scroll-to="#pricing" data-cursor="VIEW">See packages ↓</a>
        </p>
      </div>
      <!-- Contextual visual that follows the cursor with inertia (desktop). -->
      <div class="services__preview" data-services-preview aria-hidden="true">
        <div class="services__preview-inner" data-services-preview-inner></div>
      </div>
    </section>

    <!-- PRICING — editorial, not SaaS cards -->
    <section class="pricing" id="pricing" data-illusion="pricing">
      <div class="wrap">
        <header class="pricing__head">
          <p class="eyebrow">Pricing</p>
          <h2 class="display pricing__title">
            Pricing built around<br />what you need.
          </h2>
        </header>

        <!-- Editorial package spread — each package is a wide row, price as a
             graphic element. RM799 emphasised by scale + space + a subtle tonal
             band, not a card/badge. -->
        <div class="pricing__spread">
          <!-- 01 STARTER -->
          <article class="pkg" data-reveal>
            <div class="pkg__lead">
              <span class="pkg__no">01</span>
              <h3 class="display pkg__name">Starter</h3>
              <p class="pkg__desc">For something simple,<br />focused and effective.</p>
            </div>
            <div class="pkg__price">
              <span class="pkg__from">From</span>
              <span class="display pkg__amount">RM399</span>
            </div>
            <div class="pkg__detail">
              <ul class="pkg__incl">
                <li>Landing page</li><li>Mobile responsive</li><li>WhatsApp</li>
                <li>Contact form</li><li>Google Maps</li><li>Basic SEO</li>
                <li>2 revisions</li>
              </ul>
              <a class="pkg__cta" href="${WA_LINKS.starter}" target="_blank" rel="noopener" data-cursor="CHAT">Start a project ↗</a>
            </div>
          </article>

          <!-- 02 BUSINESS — most requested (emphasis via scale + tonal band) -->
          <article class="pkg pkg--featured" data-reveal>
            <div class="pkg__lead">
              <span class="pkg__no">02</span>
              <h3 class="display pkg__name">Business</h3>
              <p class="pkg__desc">For businesses ready<br />to look established.</p>
              <span class="pkg__tag">Most requested</span>
            </div>
            <div class="pkg__price">
              <span class="pkg__from">From</span>
              <span class="display pkg__amount">RM799</span>
            </div>
            <div class="pkg__detail">
              <ul class="pkg__incl">
                <li>Up to 5 pages</li><li>Professional design</li><li>WhatsApp</li>
                <li>Gallery</li><li>FAQ</li><li>SEO</li><li>Training</li>
                <li>3 revisions</li>
              </ul>
              <a class="pkg__cta pkg__cta--wa" href="${WA_LINKS.business}" target="_blank" rel="noopener" data-cursor="CHAT">Start a project ↗</a>
            </div>
          </article>

          <!-- 03 PREMIUM -->
          <article class="pkg" data-reveal>
            <div class="pkg__lead">
              <span class="pkg__no">03</span>
              <h3 class="display pkg__name">Premium</h3>
              <p class="pkg__desc">For something<br />more ambitious.</p>
            </div>
            <div class="pkg__price">
              <span class="pkg__from">From</span>
              <span class="display pkg__amount">RM1,499+</span>
            </div>
            <div class="pkg__detail">
              <ul class="pkg__incl">
                <li>Custom design</li><li>Advanced integrations</li><li>Booking</li>
                <li>Payment</li><li>Membership</li><li>Admin</li><li>Performance</li>
              </ul>
              <a class="pkg__cta" href="${WA_LINKS.premium}" target="_blank" rel="noopener" data-cursor="CHAT">Discuss your project ↗</a>
            </div>
          </article>
        </div>

        <p class="pricing__disclaimer">
          Final pricing may vary depending on project scope, features and
          integrations.
        </p>

        <!-- Custom systems — a separate statement, not a package -->
        <aside class="pricing__custom" data-reveal>
          <h3 class="display pricing__custom-title">
            Need something<br />that doesn't fit<br />in a package?
          </h3>
          <div class="pricing__custom-side">
            <p>Custom systems are quoted around the problem — dashboards, booking
              engines, member portals, internal tools. We scope it together.</p>
            <a class="pricing__custom-cta" href="${WA_LINKS.premium}" target="_blank" rel="noopener" data-cursor="CHAT">Discuss a system ↗</a>
          </div>
        </aside>

        <!-- Add-ons — quiet studio rate sheet -->
        <div class="ratesheet" data-reveal>
          <p class="eyebrow ratesheet__head"><span>Add-ons</span><span>From</span></p>
          <ul class="ratesheet__list">
            <li><span>Payment gateway</span><span>RM200</span></li>
            <li><span>Booking system</span><span>RM250</span></li>
            <li><span>Multi-language</span><span>RM150</span></li>
            <li><span>Extra page</span><span>RM50 / page</span></li>
            <li><span>Blog module</span><span>RM150</span></li>
            <li><span>SEO setup</span><span>RM150</span></li>
            <li><span>Domain + hosting setup</span><span>RM80</span></li>
            <li><span>Maintenance</span><span>RM50 / month</span></li>
          </ul>
        </div>

        <!-- Redesign / Wedding / Consultation — lesser side-services -->
        <div class="sideservices">
          <div class="sideservice" data-reveal>
            <p class="eyebrow">Redesign</p>
            <p class="sideservice__price display">From RM299</p>
            <p class="sideservice__copy">Have a domain &amp; hosting but an old site? I'll modernise it without changing your domain.</p>
          </div>
          <div class="sideservice" data-reveal data-reveal-delay="80">
            <p class="eyebrow">Wedding / RSVP</p>
            <p class="sideservice__price display">From RM149</p>
            <p class="sideservice__copy">RSVP · photo gallery · countdown · Google Maps · guest wishes.</p>
          </div>
          <div class="sideservice" data-reveal data-reveal-delay="160">
            <p class="eyebrow">Consultation</p>
            <p class="sideservice__copy">Planning &amp; strategy · website audit · redesign advice · branding · SEO &amp; performance · ongoing support.</p>
            <a class="sideservice__link" href="${WA_LINKS.consult}" target="_blank" rel="noopener" data-cursor="CHAT">Ask on WhatsApp →</a>
          </div>
        </div>

        <!-- Pricing CTA -->
        <div class="pricing__cta-block" data-reveal>
          <h3 class="display pricing__cta-title">
            Not sure which one fits your business?
          </h3>
          <p class="pricing__cta-sub">Tell me what you need. I'll recommend the right option.</p>
          <div class="pricing__cta-actions">
            <a class="btn btn--wa btn--lg" href="${WA_LINKS.consult}" target="_blank" rel="noopener" data-cursor="CHAT">
              <span class="btn__wa-icon" aria-hidden="true"></span>
              Chat with Kim →
            </a>
            <a class="pricing__cta-link" href="./demo/property/" data-cursor="VIEW">
              View industry demos ↗
            </a>
          </div>
        </div>

        <!-- Campaign strip — real prices stay visible above; this is subordinate -->
        <aside class="pricing__campaign" data-reveal>
          <p class="eyebrow pricing__campaign-eyebrow">Portfolio project · 3 selected Malaysian businesses</p>
          <p class="pricing__campaign-copy">
            Normal website packages start from RM399. I'm currently selecting 3
            Malaysian businesses to build for as part of my portfolio expansion.
            Selected businesses receive the website build at no design or
            development cost, in exchange for permission to feature the project
            and an honest testimonial after completion.
            <span class="pricing__campaign-fine">Third-party costs — domain, hosting, paid plugins, external platform or API fees — are not included where applicable.</span>
          </p>
          <a class="pricing__campaign-link" href="#offer" data-scroll-to="#offer" data-cursor="FREE">
            View details →
          </a>
        </aside>
      </div>
    </section>

    <!-- SELECTED CONCEPTS — asymmetric editorial composition (Illusion 06) -->
    <section class="gallery" data-illusion="physics">
      <div class="wrap gallery__stage">
        <header class="gallery__head">
          <p class="eyebrow">02 / Selected concepts</p>
          <h2 class="display gallery__title">Explorations<br />in progress.</h2>
        </header>

        <!-- Oversized ghost word crossing behind the visuals -->
        <span class="display gallery__ghost" aria-hidden="true">STUDIO</span>

        <figure class="gallery__item gallery__item--a" data-physics data-cursor="VIEW" data-reveal>
          <span class="gallery__no">01</span>
          <div class="gallery__img">
            <div class="site site--folio">
              <nav class="site__nav">
                <span class="site__logo">Meridian</span>
                <span class="site__links"><i></i><i></i><i></i></span>
              </nav>
              <div class="site__folio-hero">
                <h4 class="site__display">Selected<br />Work.</h4>
                <span class="site__index">01 — 08</span>
              </div>
              <div class="site__folio-grid"><span></span><span></span><span></span><span></span></div>
            </div>
          </div>
          <figcaption>
            <span class="gallery__name">Meridian</span>
            <span class="gallery__cat">Portfolio · concept</span>
          </figcaption>
        </figure>

        <figure class="gallery__item gallery__item--b" data-physics data-cursor="VIEW" data-reveal data-reveal-delay="120">
          <span class="gallery__no">02</span>
          <div class="gallery__img">
            <div class="site site--dash">
              <aside class="site__side"><i></i><i></i><i></i><i></i></aside>
              <div class="site__dash-main">
                <div class="site__dash-top"><span class="site__dash-title">Dashboard</span><span class="site__dot"></span></div>
                <div class="site__stat"><b>RM48.2k</b><small>Revenue</small></div>
                <div class="site__chart"><span></span><span></span><span></span><span></span><span></span><span></span></div>
                <div class="site__rows"><em></em><em></em><em></em></div>
              </div>
            </div>
          </div>
          <figcaption>
            <span class="gallery__name">Nova</span>
            <span class="gallery__cat">Web system · concept</span>
          </figcaption>
        </figure>

        <figure class="gallery__item gallery__item--c" data-physics data-cursor="VIEW" data-reveal data-reveal-delay="200">
          <span class="gallery__no">03</span>
          <div class="gallery__img">
            <div class="site site--landing">
              <nav class="site__nav site__nav--center">
                <span class="site__logo">Lumen</span>
                <span class="site__navcta">Get the app</span>
              </nav>
              <div class="site__landing-hero">
                <span class="site__pill">New · 2026</span>
                <h4 class="site__display">Light up<br />your day.</h4>
                <p class="site__lead">A calmer way to plan, focus and finish.</p>
                <span class="site__btn site__btn--dark">Start free</span>
              </div>
            </div>
          </div>
          <figcaption>
            <span class="gallery__name">Lumen</span>
            <span class="gallery__cat">Landing · concept</span>
          </figcaption>
        </figure>

        <p class="gallery__note">Concept explorations — real client work replaces these as projects complete.</p>
      </div>
    </section>

    <!-- PORTFOLIO PROJECT CAMPAIGN — resolves into the WhatsApp action. -->
    <section class="offer" id="offer" data-illusion="offer">
      <div class="offer__songket" aria-hidden="true"></div>
      <div class="wrap offer__inner">
        <p class="eyebrow offer__eyebrow">Portfolio project · 3 selected Malaysian businesses</p>
        <h2 class="display offer__title">
          Be one of three<br />I build for free.
        </h2>
        <p class="offer__body">
          I'm selecting 3 Malaysian businesses to build for as part of my
          portfolio expansion. If chosen, you get the full website build at no
          design or development cost — in exchange for permission to feature the
          project and an honest testimonial once it's done. Normal packages start
          from RM399, so this is real value, not a giveaway.
        </p>
        <ul class="offer__points">
          <li>✦ Website build at no design/development cost</li>
          <li>✦ In exchange for a testimonial &amp; portfolio feature</li>
          <li>✦ Third-party costs (domain, hosting, paid services) not included</li>
        </ul>
        <a
          class="btn btn--wa btn--lg"
          href="${WA_LINKS.campaign}"
          target="_blank"
          rel="noopener"
          data-cursor="CHAT"
        >
          <span class="btn__wa-icon" aria-hidden="true"></span>
          Apply for the portfolio project
        </a>
        <p class="offer__wa-num">
          Not sure yet? See a free concept first —
          <a href="${WA_LINKS.concept}" target="_blank" rel="noopener">ask on WhatsApp · 013-6648159</a>
        </p>
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
    <span class="wa-fab__label">Chat with Kim</span>
  </a>

  <footer class="site-foot wrap">
    <span>KIM® — engineered differently · Kuala Lumpur, Malaysia</span>
    <span>WhatsApp 013-6648159 · © 2026</span>
  </footer>
`;
