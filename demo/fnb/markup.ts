/** F&B demo — CRUMB. artisan bakery. Warm, appetising, playful. */
import { waLink } from "../../src/shared/whatsapp";
const wa = (m: string) => waLink(m);
const ORDER = wa("Hi CRUMB, I'd like to place an order! Here's what I'd like: ______");

const IMG = {
  hero: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=70",
  sourdough: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=700&q=68",
  croissant: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=68",
  cinnamon: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=700&q=68",
  story: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&w=900&q=70",
  g1: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=600&q=66",
  g2: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=600&q=66",
  g3: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=600&q=66",
};

export const fnbHTML = /* html */ `
  <header class="fb-nav" data-nav>
    <a class="fb-nav__brand" href="#top">CRUMB<span>.</span></a>
    <nav class="fb-nav__links">
      <a href="#menu">Menu</a>
      <a href="#story">Our story</a>
      <a href="#visit">Visit</a>
    </nav>
    <a class="fb-btn fb-btn--sm" href="${ORDER}" target="_blank" rel="noopener">Order now</a>
  </header>

  <main id="top">
    <section class="fb-hero">
      <img class="fb-hero__bg" data-src="${IMG.hero}" alt="" />
      <div class="fb-hero__scrim"></div>
      <div class="fb-hero__inner">
        <span class="fb-tag" data-reveal>Artisan bakery · Kuala Lumpur</span>
        <h1 class="fb-hero__title" data-reveal data-reveal-delay="80">Baked this morning.<br />Gone by tonight.</h1>
        <p class="fb-hero__sub" data-reveal data-reveal-delay="160">Small-batch sourdough, pastries &amp; treats made fresh daily with real butter and a lot of love.</p>
        <a class="fb-btn fb-btn--lg" href="${ORDER}" target="_blank" rel="noopener" data-reveal data-reveal-delay="240">
          <span class="fb-wa" aria-hidden="true"></span> Order on WhatsApp
        </a>
      </div>
    </section>

    <section class="fb-sec" id="best">
      <div class="fb-head" data-reveal>
        <span class="fb-eyebrow">Fresh favourites</span>
        <h2 class="fb-h2">Today's bestsellers.</h2>
      </div>
      <div class="fb-best">
        ${product(IMG.sourdough, "Country Sourdough", "RM18", "24-hour ferment, crackly crust")}
        ${product(IMG.croissant, "Butter Croissant", "RM7", "Laminated with French butter")}
        ${product(IMG.cinnamon, "Cinnamon Roll", "RM9", "Gooey, cardamom-spiced")}
      </div>
    </section>

    <section class="fb-sec fb-sec--tint" id="menu">
      <div class="fb-head" data-reveal>
        <span class="fb-eyebrow">The counter</span>
        <h2 class="fb-h2">More to love.</h2>
      </div>
      <ul class="fb-menu" data-reveal>
        ${row("Focaccia (rosemary &amp; sea salt)", "RM14")}
        ${row("Pain au chocolat", "RM8")}
        ${row("Banana walnut loaf", "RM22")}
        ${row("Kouign-amann", "RM10")}
        ${row("Brownie (sea salt)", "RM8")}
        ${row("Cookies (box of 6)", "RM24")}
      </ul>
    </section>

    <section class="fb-story" id="story">
      <div class="fb-story__media" data-reveal><img data-src="${IMG.story}" alt="Inside the CRUMB bakery" /></div>
      <div class="fb-story__body" data-reveal data-reveal-delay="120">
        <span class="fb-eyebrow">Our story</span>
        <h2 class="fb-h2">A tiny bakery with a big heart.</h2>
        <p>CRUMB started in a home kitchen in 2023 with one sourdough starter named "Doughlores." Today we bake fresh every morning in our little KL shop — same starter, same obsession with getting it just right.</p>
        <p>Everything's made in small batches. When it's gone, it's gone.</p>
      </div>
    </section>

    <section class="fb-gallery" aria-hidden="false">
      <img class="fb-gallery__img" data-src="${IMG.g1}" alt="Fresh bread" />
      <img class="fb-gallery__img" data-src="${IMG.g2}" alt="Pastries" />
      <img class="fb-gallery__img" data-src="${IMG.g3}" alt="Bakery counter" />
    </section>

    <section class="fb-sec" id="reviews">
      <div class="fb-head" data-reveal>
        <span class="fb-eyebrow">Happy tummies</span>
        <h2 class="fb-h2">What people say.</h2>
      </div>
      <div class="fb-quotes">
        ${quote("Best sourdough in KL, hands down. I set an alarm to order before it sells out.", "Aisyah")}
        ${quote("The cinnamon rolls are dangerous. Warm, gooey, perfect.", "Marcus")}
        ${quote("Feels like a bakery from a small European town. Love this place.", "Hui Ling")}
      </div>
    </section>

    <section class="fb-visit" id="visit">
      <div class="fb-visit__card" data-reveal>
        <div>
          <span class="fb-eyebrow">Visit us</span>
          <h2 class="fb-h2">Come say hi.</h2>
          <p class="fb-visit__addr">12, Jalan Telawi 3, Bangsar<br />Kuala Lumpur</p>
        </div>
        <div class="fb-hours">
          <span class="fb-eyebrow">Opening hours</span>
          <ul>
            <li><span>Tue — Fri</span><span>8am — 6pm</span></li>
            <li><span>Sat — Sun</span><span>8am — 4pm</span></li>
            <li><span>Monday</span><span>Closed</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="fb-cta" id="order">
      <div class="fb-cta__inner" data-reveal>
        <h2 class="fb-h2">Reserve before it sells out.</h2>
        <p>Order for pickup or ask about delivery — straight on WhatsApp.</p>
        <a class="fb-btn fb-btn--lg" href="${ORDER}" target="_blank" rel="noopener">
          <span class="fb-wa" aria-hidden="true"></span> Order on WhatsApp — 013-6648159
        </a>
      </div>
    </section>
  </main>

  <footer class="fb-foot">
    <span>CRUMB. · Artisan Bakery · Bangsar, KL</span>
    <span>© 2026</span>
  </footer>
`;

function product(img: string, name: string, price: string, desc: string) {
  return `<article class="fb-prod" data-reveal><div class="fb-prod__img"><img data-src="${img}" alt="${name}" /></div><div class="fb-prod__row"><h3>${name}</h3><span class="fb-prod__price">${price}</span></div><p>${desc}</p></article>`;
}
function row(name: string, price: string) {
  return `<li><span>${name}</span><span class="fb-menu__price">${price}</span></li>`;
}
function quote(t: string, who: string) {
  return `<figure class="fb-quote" data-reveal><blockquote>“${t}”</blockquote><figcaption>— ${who}</figcaption></figure>`;
}
