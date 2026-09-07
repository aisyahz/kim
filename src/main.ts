/**
 * Kim — entry point.
 *
 * Mounts the static markup, boots the scroll + cursor cores, then mounts each
 * illusion module against its section. Every module returns a cleanup function;
 * we collect them so the whole experience can be torn down cleanly (HMR,
 * navigation, tests). No global side effects escape this file.
 */

import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/sections.css";

import { sectionsHTML } from "./sections";
import { initScroll, ScrollTrigger, scrollTo } from "./core/scroll";
import { initCursor } from "./core/cursor";
import { initReveal } from "./shared/reveal";

import { mountHeroDepth } from "./illusions/heroDepth";
import { mountHeroStage } from "./illusions/heroStage";
import { mountContinuity } from "./illusions/continuity";
import { mountEditorialDepth } from "./illusions/editorialDepth";
import { mountProjectZoom } from "./illusions/projectZoom";
import { mountPerspectiveServices } from "./illusions/perspectiveServices";
import { mountImagePhysics } from "./illusions/imagePhysics";
import { mountCtaResolve } from "./illusions/ctaResolve";

type Cleanup = () => void;

function bySelector(sel: string): HTMLElement {
  const el = document.querySelector<HTMLElement>(sel);
  if (!el) throw new Error(`Kim: expected element ${sel} to exist`);
  return el;
}

function boot(): Cleanup {
  const app = bySelector("#app");
  app.innerHTML = sectionsHTML;

  const cleanups: Cleanup[] = [];

  // Cores
  cleanups.push(initScroll());
  cleanups.push(initCursor());

  // In-page anchors routed through Lenis for a smooth, controlled scroll.
  const onAnchorClick = (e: Event) => {
    const link = (e.target as HTMLElement)?.closest<HTMLElement>(
      "[data-scroll-to], a[href^='#']"
    );
    if (!link) return;
    const sel =
      link.getAttribute("data-scroll-to") || link.getAttribute("href");
    if (!sel || sel === "#" || !sel.startsWith("#")) return;
    if (!document.querySelector(sel)) return;
    e.preventDefault();
    scrollTo(sel);
  };
  app.addEventListener("click", onAnchorClick);
  cleanups.push(() => app.removeEventListener("click", onAnchorClick));

  // Continuity object threads hero -> work; mount against the whole app root.
  cleanups.push(mountContinuity(app));

  // Illusions, each scoped to its section.
  const hero = document.querySelector<HTMLElement>('[data-illusion="hero"]');
  if (hero) {
    cleanups.push(mountHeroDepth(hero));
    cleanups.push(mountHeroStage(hero));
  }

  const depth = document.querySelector<HTMLElement>('[data-illusion="depth"]');
  if (depth) cleanups.push(mountEditorialDepth(depth));

  const zoom = document.querySelector<HTMLElement>('[data-illusion="zoom"]');
  if (zoom) cleanups.push(mountProjectZoom(zoom));

  const services = document.querySelector<HTMLElement>(
    '[data-illusion="perspective"]'
  );
  if (services) cleanups.push(mountPerspectiveServices(services));

  // Image physics spans the intro media + gallery.
  cleanups.push(mountImagePhysics(document.body));

  const cta = document.querySelector<HTMLElement>('[data-illusion="cta"]');
  if (cta) cleanups.push(mountCtaResolve(cta));

  // Lightweight scroll-reveal for the pricing section (dependency-free,
  // reduced-motion safe). Does nothing if there are no [data-reveal] elements.
  cleanups.push(initReveal(app));

  // After everything mounts, let ScrollTrigger recompute positions.
  requestAnimationFrame(() => ScrollTrigger.refresh());

  return () => {
    cleanups.forEach((fn) => fn());
    app.innerHTML = "";
  };
}

let teardown = boot();

// Clean HMR: dispose the previous mount before the next one.
if (import.meta.hot) {
  import.meta.hot.dispose(() => teardown());
  import.meta.hot.accept(() => {
    teardown();
    teardown = boot();
  });
}
