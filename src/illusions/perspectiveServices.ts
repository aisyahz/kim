/**
 * ILLUSION 05 — Perspective services (interactive).
 *
 * The large editorial service list keeps its identity but gains spatial life:
 *
 *  - Base: the whole plane tilts into perspective as it enters (unchanged idea).
 *  - Active state: whichever item is nearest the viewport's active band is
 *    brought subtly toward the viewer (translateZ + scale + full opacity) while
 *    its neighbours are pushed back and dimmed — a focus rack in Z.
 *  - Desktop hover: a contextual preview follows the cursor with inertia and
 *    swaps its visual per service.
 *
 * CSS `preserve-3d` + a scrubbed plane tilt + a per-frame active-index solver.
 * No WebGL.
 */

import { gsap } from "../core/scroll";
import { motion } from "../core/motion";

export function mountPerspectiveServices(root: HTMLElement): () => void {
  const list = root.querySelector<HTMLElement>("[data-perspective-list]");
  if (!list || !motion.allowScrollFx) return () => {};

  const items = Array.from(list.children) as HTMLElement[];
  const preview = root.querySelector<HTMLElement>("[data-services-preview]");
  const previewInner = root.querySelector<HTMLElement>(
    "[data-services-preview-inner]"
  );

  const cleanups: Array<() => void> = [];

  const ctx = gsap.context(() => {
    list.style.transformStyle = "preserve-3d";
    list.style.perspective = "1200px";
    items.forEach((el) => {
      el.style.transformStyle = "preserve-3d";
    });

    // Base plane tilt as the section enters.
    gsap.fromTo(
      list,
      { rotateX: 0 },
      {
        rotateX: 26,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          end: "center center",
          scrub: 1,
        },
      }
    );
  }, root);
  cleanups.push(() => ctx.revert());

  // --- Active-item focus rack, solved per frame from the item's screen
  // position relative to the viewport centre. This reads as "the service you're
  // looking at leans toward you; the others recede."
  const state = items.map(() => ({ z: 0, s: 1, o: 0.55, tz: 0, ts: 1, to: 0.55 }));
  let activeIndex = -1;

  const stopFrame = motion.onFrame(({ dt }) => {
    const vh = window.innerHeight;
    const band = vh * 0.5;
    let best = Infinity;
    let bestI = -1;

    items.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2;
      const dist = Math.abs(center - band);
      const norm = Math.min(dist / (vh * 0.45), 1); // 0 at band, 1 far
      if (dist < best && center > 0 && center < vh) {
        best = dist;
        bestI = i;
      }
      // Target depth: near band -> forward + bright; far -> pushed back + dim.
      state[i].tz = (1 - norm) * 120 - norm * 60;
      state[i].ts = 1 + (1 - norm) * 0.06;
      state[i].to = 0.4 + (1 - norm) * 0.6;
    });

    if (bestI !== activeIndex) {
      items.forEach((el, i) => el.classList.toggle("is-active", i === bestI));
      activeIndex = bestI;
    }

    const ease = Math.min(dt * 5, 1);
    items.forEach((el, i) => {
      const s = state[i];
      s.z += (s.tz - s.z) * ease;
      s.s += (s.ts - s.s) * ease;
      s.o += (s.to - s.o) * ease;
      el.style.transform = `translateZ(${s.z.toFixed(1)}px) scale(${s.s.toFixed(
        3
      )})`;
      el.style.opacity = s.o.toFixed(3);
    });
  });
  cleanups.push(stopFrame);

  // --- Cursor-following preview with inertia (desktop only).
  if (motion.allowPointerFx && preview && previewInner) {
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const tgt = { x: pos.x, y: pos.y };
    let visible = false;

    const onEnter = (e: Event) => {
      const li = e.target as HTMLElement;
      const key = li.getAttribute("data-preview");
      if (!key) return;
      previewInner.setAttribute("data-preview", key);
      if (!visible) {
        visible = true;
        preview.classList.add("is-visible");
      }
    };
    const onLeaveList = () => {
      visible = false;
      preview.classList.remove("is-visible");
    };
    const onMove = (e: PointerEvent) => {
      tgt.x = e.clientX;
      tgt.y = e.clientY;
    };

    items.forEach((li) => li.addEventListener("pointerenter", onEnter));
    list.addEventListener("pointerleave", onLeaveList);
    window.addEventListener("pointermove", onMove, { passive: true });

    const stopPreview = motion.onFrame(({ dt }) => {
      // Spring-ish inertia: the preview lags the cursor, then eases in.
      const ease = 1 - Math.pow(0.0015, dt);
      pos.x += (tgt.x - pos.x) * ease;
      pos.y += (tgt.y - pos.y) * ease;
      // Subtle skew from cursor velocity would go here; kept still + expensive.
      preview.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
    });

    cleanups.push(() => {
      stopPreview();
      items.forEach((li) => li.removeEventListener("pointerenter", onEnter));
      list.removeEventListener("pointerleave", onLeaveList);
      window.removeEventListener("pointermove", onMove);
    });
  }

  return () => {
    cleanups.forEach((fn) => fn());
    items.forEach((el) => {
      el.style.transform = "";
      el.style.opacity = "";
      el.classList.remove("is-active");
    });
  };
}
