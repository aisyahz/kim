/**
 * Takaful demo — Sarah Advisory.
 * Bright, friendly, professional and trustworthy. No unrealistic promises.
 */
import { waLink } from "../../src/shared/whatsapp";
const wa = (m: string) => waLink(m);
const CONSULT = wa("Hi Sarah, I'd like to book a free consultation. My main concern is ______.");

export const takafulHTML = /* html */ `
  <header class="tk-nav" data-nav>
    <a class="tk-nav__brand" href="#top">Sarah<span>Advisory</span></a>
    <nav class="tk-nav__links">
      <a href="#coverage">Coverage</a>
      <a href="#how">How it works</a>
      <a href="#about">About</a>
      <a href="#faq">FAQ</a>
    </nav>
    <a class="tk-btn tk-btn--sm" href="${CONSULT}" target="_blank" rel="noopener">Free consultation</a>
  </header>

  <main id="top">
    <section class="tk-hero">
      <div class="tk-hero__inner">
        <div class="tk-hero__copy">
          <span class="tk-chip" data-reveal>✦ Trusted takaful consultant · Malaysia</span>
          <h1 class="tk-hero__title" data-reveal data-reveal-delay="80">Protect what<br />matters most.</h1>
          <p class="tk-hero__sub" data-reveal data-reveal-delay="160">
            Friendly, jargon-free guidance to help you and your family plan for
            medical needs, income protection and the future — at your own pace.
          </p>
          <div class="tk-hero__actions" data-reveal data-reveal-delay="240">
            <a class="tk-btn tk-btn--wa" href="${CONSULT}" target="_blank" rel="noopener">
              <span class="tk-wa" aria-hidden="true"></span> Free consultation on WhatsApp
            </a>
            <a class="tk-hero__link" href="#coverage">See coverage →</a>
          </div>
          <ul class="tk-trust" data-reveal data-reveal-delay="320">
            <li><b>800+</b><span>Families guided</span></li>
            <li><b>10 yrs</b><span>Experience</span></li>
            <li><b>4.9★</b><span>Client rating</span></li>
          </ul>
        </div>
        <div class="tk-hero__art" aria-hidden="true">
          <div class="tk-shield"><span>✚</span></div>
          <div class="tk-float tk-float--1">Medical</div>
          <div class="tk-float tk-float--2">Family</div>
          <div class="tk-float tk-float--3">Savings</div>
        </div>
      </div>
    </section>

    <section class="tk-sec" id="coverage">
      <div class="tk-head" data-reveal>
        <span class="tk-eyebrow">Coverage solutions</span>
        <h2 class="tk-h2">Cover for every stage of life.</h2>
      </div>
      <div class="tk-cards">
        ${cover("🩺", "Medical", "Hospitalisation and treatment support so a health scare doesn't become a financial one.")}
        ${cover("👨‍👩‍👧", "Family protection", "Peace of mind that your loved ones are looked after, whatever happens.")}
        ${cover("💼", "Income protection", "Help replacing income if illness or injury keeps you from working.")}
        ${cover("🎓", "Education", "Plan ahead so your children's education stays on track.")}
      </div>
    </section>

    <section class="tk-sec tk-sec--tint" id="how">
      <div class="tk-head" data-reveal>
        <span class="tk-eyebrow">How it works</span>
        <h2 class="tk-h2">Simple, no pressure.</h2>
      </div>
      <div class="tk-steps">
        ${step("01", "Say hello", "Message me on WhatsApp and tell me what's on your mind.")}
        ${step("02", "Free chat", "We review your needs together — no obligation, no jargon.")}
        ${step("03", "Your plan", "I explain suitable options clearly so you can decide with confidence.")}
      </div>
    </section>

    <section class="tk-about" id="about">
      <div class="tk-about__card" data-reveal>
        <div class="tk-avatar" aria-hidden="true">S</div>
        <div>
          <span class="tk-eyebrow">About Sarah</span>
          <h2 class="tk-h2">Here to guide, not to pressure.</h2>
          <p>I've spent 10 years helping Malaysian families protect what matters.
            My promise is simple: honest advice, clear explanations, and options
            that genuinely fit your life and budget.</p>
          <p class="tk-note">Licensed takaful consultant · English &amp; Bahasa Malaysia</p>
        </div>
      </div>
    </section>

    <section class="tk-sec tk-sec--tint" id="reviews">
      <div class="tk-head" data-reveal>
        <span class="tk-eyebrow">Kind words</span>
        <h2 class="tk-h2">Trusted by families.</h2>
      </div>
      <div class="tk-quotes">
        ${quote("Sarah explained everything so clearly. No pressure at all — I finally understood what I was signing up for.", "Nurul, KL")}
        ${quote("She helped us pick a family plan that fit our budget. Genuinely caring and patient.", "Daniel &amp; Mei")}
        ${quote("Quick to respond on WhatsApp and always honest. Highly recommend.", "Farid, Selangor")}
      </div>
    </section>

    <section class="tk-sec" id="faq">
      <div class="tk-head" data-reveal>
        <span class="tk-eyebrow">Good to know</span>
        <h2 class="tk-h2">Frequently asked.</h2>
      </div>
      <div class="tk-faq" data-reveal>
        ${faq("Is the consultation really free?", "Yes. The first consultation is free and there's no obligation to sign up for anything.")}
        ${faq("Will I be pressured to buy?", "Never. My role is to explain your options clearly. The decision is always yours, in your own time.")}
        ${faq("Can you help in Bahasa Malaysia?", "Absolutely — we can chat in English or Bahasa Malaysia, whichever you're most comfortable with.")}
        ${faq("How do we start?", "Just message me on WhatsApp with what's on your mind and we'll arrange a time to chat.")}
      </div>
    </section>

    <section class="tk-cta" id="contact">
      <div class="tk-cta__inner" data-reveal>
        <h2 class="tk-h2">Let's talk about your peace of mind.</h2>
        <p>A free, friendly consultation — no pressure, no jargon.</p>
        <a class="tk-btn tk-btn--wa tk-btn--lg" href="${CONSULT}" target="_blank" rel="noopener">
          <span class="tk-wa" aria-hidden="true"></span> Free consultation — 013-6648159
        </a>
      </div>
    </section>
  </main>

  <footer class="tk-foot">
    <span>Sarah Advisory · Takaful &amp; Insurance Consultant · Malaysia</span>
    <span>© 2026</span>
  </footer>
`;

function cover(icon: string, title: string, desc: string) {
  return `<article class="tk-card" data-reveal><span class="tk-card__icon">${icon}</span><h3>${title}</h3><p>${desc}</p></article>`;
}
function step(n: string, t: string, d: string) {
  return `<div class="tk-step" data-reveal><span class="tk-step__n">${n}</span><h3>${t}</h3><p>${d}</p></div>`;
}
function quote(t: string, who: string) {
  return `<figure class="tk-quote" data-reveal><blockquote>“${t}”</blockquote><figcaption>${who}</figcaption></figure>`;
}
function faq(q: string, a: string) {
  return `<details class="tk-faq__item"><summary>${q}</summary><p>${a}</p></details>`;
}
