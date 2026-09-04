/**
 * Analytics hook — intentionally a no-op stub with a stable surface.
 *
 * Demos and the main site call `track()` for meaningful events (demo viewed,
 * WhatsApp CTA clicked). Wire this to a real provider (Plausible, GA, etc.)
 * later in ONE place without touching call sites.
 */

export interface TrackPayload {
  [key: string]: string | number | boolean | undefined;
}

export function track(event: string, payload: TrackPayload = {}): void {
  // Respect Do Not Track.
  if (navigator.doNotTrack === "1") return;
  // Placeholder: forward to a provider here when configured.
  // e.g. window.plausible?.(event, { props: payload });
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug("[track]", event, payload);
  }
}

/** Convenience: attach WhatsApp-click tracking to a container's WA links. */
export function trackWhatsAppClicks(root: ParentNode, source: string): void {
  root.querySelectorAll<HTMLAnchorElement>('a[href*="wa.me"]').forEach((a) => {
    a.addEventListener("click", () => track("whatsapp_click", { source }));
  });
}
