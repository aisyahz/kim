/**
 * Property agent demo — markup.
 *
 * Brand: Nadia Rahman, Property Consultant, Kuala Lumpur.
 * Art direction: luxury editorial, warm neutral, big photography, Fraunces
 * serif display + Jost sans. Intentionally unlike the KIM portfolio.
 *
 * All imagery uses data-src for lazy loading (see shared/lazyImages).
 */

import { waLink } from "../../src/shared/whatsapp";

const wa = (msg: string) => waLink(msg);

const IMG = {
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=70",
  montKiara:
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=68",
  bangsar:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=68",
  klcc: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=68",
  agent:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=70",
  condo:
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=66",
  landed:
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=66",
  commercial:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=66",
  penthouse:
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=66",
};

export const propertyHTML = /* html */ `
  <header class="pa-nav" data-pa-nav>
    <a class="pa-nav__brand" href="#top">
      Nadia Rahman<span>Property Consultant · KL</span>
    </a>
    <nav class="pa-nav__links">
      <a href="#properties">Properties</a>
      <a href="#areas">Areas</a>
      <a href="#about">About</a>
      <a href="#faq">FAQ</a>
    </nav>
    <a class="pa-btn pa-btn--sm" href="${wa(
      "Hi Nadia, I'd like to arrange a viewing."
    )}" target="_blank" rel="noopener">Arrange a viewing</a>
  </header>

  <main id="top">
    <!-- HERO -->
    <section class="pa-hero">
      <img class="pa-hero__bg" data-src="${IMG.hero}" alt="" />
      <div class="pa-hero__scrim"></div>
      <div class="pa-hero__inner">
        <p class="pa-eyebrow" data-reveal>Luxury residences · Kuala Lumpur</p>
        <h1 class="pa-hero__title" data-reveal data-reveal-delay="80">
          Finding the address<br /><em>that feels like home.</em>
        </h1>
        <p class="pa-hero__sub" data-reveal data-reveal-delay="160">
          I'm Nadia — a property consultant helping discerning buyers and
          investors secure exceptional homes across KL's most sought-after
          neighbourhoods.
        </p>
        <div class="pa-hero__actions" data-reveal data-reveal-delay="240">
          <a class="pa-btn pa-btn--gold" href="#properties">View properties</a>
          <a class="pa-btn pa-btn--ghost" href="${wa(
            "Hi Nadia, I'm looking for a property in KL."
          )}" target="_blank" rel="noopener">WhatsApp agent</a>
        </div>
        <dl class="pa-hero__stats" data-reveal data-reveal-delay="320">
          <div><dt>120+</dt><dd>Homes matched</dd></div>
          <div><dt>RM480M</dt><dd>In transactions</dd></div>
          <div><dt>9 yrs</dt><dd>KL market expertise</dd></div>
        </dl>
      </div>
    </section>

    <!-- FEATURED PROPERTIES -->
    <section class="pa-section" id="properties">
      <div class="pa-head">
        <p class="pa-eyebrow" data-reveal>Featured listings</p>
        <h2 class="pa-h2" data-reveal>A curated selection.</h2>
      </div>
      <div class="pa-grid">
        ${propertyCard({
          img: IMG.montKiara,
          area: "Mont Kiara",
          title: "Verdana Residences",
          price: "RM1,250,000",
          beds: "3",
          baths: "2",
          size: "1,540 sq ft",
        })}
        ${propertyCard({
          img: IMG.bangsar,
          area: "Bangsar",
          title: "Lorong Kurau Townhouse",
          price: "RM890,000",
          beds: "2",
          baths: "2",
          size: "1,180 sq ft",
        })}
        ${propertyCard({
          img: IMG.klcc,
          area: "KLCC",
          title: "The Binjai Penthouse",
          price: "RM2,100,000",
          beds: "4",
          baths: "4",
          size: "2,650 sq ft",
        })}
      </div>
    </section>

    <!-- PROPERTY CATEGORIES -->
    <section class="pa-section pa-section--tint" id="categories">
      <div class="pa-head">
        <p class="pa-eyebrow" data-reveal>What I handle</p>
        <h2 class="pa-h2" data-reveal>Property categories.</h2>
      </div>
      <div class="pa-cats">
        ${categoryCard(IMG.condo, "Condominiums", "High-rise living in prime enclaves")}
        ${categoryCard(IMG.landed, "Landed homes", "Terraces, semi-Ds and bungalows")}
        ${categoryCard(IMG.penthouse, "Penthouses", "Signature skyline residences")}
        ${categoryCard(IMG.commercial, "Commercial", "Retail, office and investment units")}
      </div>
    </section>

    <!-- AREAS COVERED -->
    <section class="pa-section" id="areas">
      <div class="pa-head">
        <p class="pa-eyebrow" data-reveal>Where I work</p>
        <h2 class="pa-h2" data-reveal>Areas covered.</h2>
      </div>
      <ul class="pa-areas" data-reveal>
        <li>Mont Kiara</li><li>Bangsar</li><li>KLCC</li><li>Damansara Heights</li>
        <li>Bukit Tunku</li><li>TTDI</li><li>Desa ParkCity</li><li>Sri Hartamas</li>
        <li>Ampang Hilir</li><li>KL Sentral</li>
      </ul>
    </section>

    <!-- ABOUT AGENT -->
    <section class="pa-about" id="about">
      <div class="pa-about__media" data-reveal>
        <img data-src="${IMG.agent}" alt="Nadia Rahman, property consultant" />
      </div>
      <div class="pa-about__body" data-reveal data-reveal-delay="120">
        <p class="pa-eyebrow">About Nadia</p>
        <h2 class="pa-h2">Nine years, one obsession: the right fit.</h2>
        <p>
          I began in KL's property market in 2017 and have since guided over 120
          families and investors to homes they love. My approach is unhurried and
          personal — I'd rather find you the right address than the fastest sale.
        </p>
        <p>
          Registered negotiator · Fluent in English, Bahasa Malaysia &amp;
          Mandarin.
        </p>
        <a class="pa-link" href="${wa(
          "Hi Nadia, I'd like to know more about working with you."
        )}" target="_blank" rel="noopener">Let's talk on WhatsApp →</a>
      </div>
    </section>

    <!-- WHY WORK WITH ME -->
    <section class="pa-section pa-section--tint" id="why">
      <div class="pa-head">
        <p class="pa-eyebrow" data-reveal>Why work with me</p>
        <h2 class="pa-h2" data-reveal>A calmer way to buy.</h2>
      </div>
      <div class="pa-why">
        ${whyItem("01", "Access first", "Off-market and pre-launch listings before they go public.")}
        ${whyItem("02", "Honest counsel", "Straight answers on price, potential and pitfalls.")}
        ${whyItem("03", "End to end", "From viewing to loan referral to keys — handled.")}
        ${whyItem("04", "Discretion", "Private viewings and confidential negotiations.")}
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="pa-section" id="testimonials">
      <div class="pa-head">
        <p class="pa-eyebrow" data-reveal>Kind words</p>
        <h2 class="pa-h2" data-reveal>Clients, in their words.</h2>
      </div>
      <div class="pa-quotes">
        ${quote(
          "Nadia found us a home in Bangsar that wasn't even listed yet. Patient, sharp, completely trustworthy.",
          "Aisyah &amp; Faizal",
          "Bought in Bangsar"
        )}
        ${quote(
          "As an overseas investor I needed someone I could rely on. Nadia handled everything remotely and flawlessly.",
          "Mr. Tan",
          "Investor, Singapore"
        )}
        ${quote(
          "She talked me out of the wrong unit and into the right one. That honesty earned a client for life.",
          "Priya M.",
          "Bought in Mont Kiara"
        )}
      </div>
    </section>

    <!-- FAQ -->
    <section class="pa-section pa-section--tint" id="faq">
      <div class="pa-head">
        <p class="pa-eyebrow" data-reveal>Good to know</p>
        <h2 class="pa-h2" data-reveal>Frequently asked.</h2>
      </div>
      <div class="pa-faq" data-reveal>
        ${faq(
          "Do you charge buyers a fee?",
          "For most residential transactions the agent's commission is paid by the seller, so my guidance costs you nothing. I'll always confirm this upfront for your specific case."
        )}
        ${faq(
          "Can you help with financing?",
          "Yes — I can refer you to trusted mortgage bankers who'll compare rates across banks. The final decision is always yours."
        )}
        ${faq(
          "Do you work with overseas buyers?",
          "Absolutely. I regularly assist Malaysian and foreign buyers abroad with virtual viewings and remote paperwork."
        )}
        ${faq(
          "How soon can we view a property?",
          "Often within 24–48 hours. Message me on WhatsApp and I'll arrange a private viewing at your convenience."
        )}
      </div>
    </section>

    <!-- CONTACT -->
    <section class="pa-contact" id="contact">
      <div class="pa-contact__inner">
        <h2 class="pa-h2" data-reveal>Let's find your address.</h2>
        <p data-reveal data-reveal-delay="100">
          Tell me what you're looking for and your budget — I'll send a
          shortlist within a day.
        </p>
        <a class="pa-btn pa-btn--gold pa-btn--lg" href="${wa(
          "Hi Nadia, here's what I'm looking for:"
        )}" target="_blank" rel="noopener" data-reveal data-reveal-delay="180">
          WhatsApp Nadia — 013-6648159
        </a>
      </div>
    </section>
  </main>

  <footer class="pa-foot">
    <span>Nadia Rahman · Property Consultant · Kuala Lumpur</span>
    <span>© 2026 · Registered Negotiator</span>
  </footer>
`;

interface Card {
  img: string;
  area: string;
  title: string;
  price: string;
  beds: string;
  baths: string;
  size: string;
}
function propertyCard(c: Card): string {
  return /* html */ `
  <article class="pa-card" data-reveal>
    <div class="pa-card__media">
      <img data-src="${c.img}" alt="${c.title}, ${c.area}" />
      <span class="pa-card__area">${c.area}</span>
    </div>
    <div class="pa-card__body">
      <h3 class="pa-card__title">${c.title}</h3>
      <p class="pa-card__price">${c.price}</p>
      <ul class="pa-card__specs">
        <li>${c.beds} beds</li><li>${c.baths} baths</li><li>${c.size}</li>
      </ul>
      <a class="pa-card__cta" href="${wa(
        `Hi Nadia, I'm interested in ${c.title} (${c.area}) at ${c.price}.`
      )}" target="_blank" rel="noopener">Enquire on WhatsApp →</a>
    </div>
  </article>`;
}

function categoryCard(img: string, title: string, desc: string): string {
  return /* html */ `
  <article class="pa-cat" data-reveal>
    <img data-src="${img}" alt="${title}" />
    <div class="pa-cat__overlay">
      <h3>${title}</h3>
      <p>${desc}</p>
    </div>
  </article>`;
}

function whyItem(n: string, title: string, desc: string): string {
  return /* html */ `
  <div class="pa-why__item" data-reveal>
    <span class="pa-why__n">${n}</span>
    <h3>${title}</h3>
    <p>${desc}</p>
  </div>`;
}

function quote(text: string, name: string, meta: string): string {
  return /* html */ `
  <figure class="pa-quote" data-reveal>
    <blockquote>“${text}”</blockquote>
    <figcaption><strong>${name}</strong><span>${meta}</span></figcaption>
  </figure>`;
}

function faq(q: string, a: string): string {
  return /* html */ `
  <details class="pa-faq__item">
    <summary>${q}</summary>
    <p>${a}</p>
  </details>`;
}
