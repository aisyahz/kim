/**
 * SEO metadata helper for demos.
 *
 * Each demo passes a small config and this sets <title>, meta description and
 * Open Graph tags at runtime. Keeps per-demo HTML files minimal while giving
 * every demo its own crawlable/shareable metadata.
 */

export interface SeoConfig {
  title: string;
  description: string;
  /** Optional OG image URL; falls back to nothing if omitted. */
  ogImage?: string;
  /** Canonical/OG url; defaults to the current location. */
  url?: string;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function applySeo(cfg: SeoConfig): void {
  document.title = cfg.title;
  const url = cfg.url ?? window.location.href;

  upsertMeta("name", "description", cfg.description);
  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:title", cfg.title);
  upsertMeta("property", "og:description", cfg.description);
  upsertMeta("property", "og:url", url);
  if (cfg.ogImage) upsertMeta("property", "og:image", cfg.ogImage);

  upsertMeta("name", "twitter:card", cfg.ogImage ? "summary_large_image" : "summary");
  upsertMeta("name", "twitter:title", cfg.title);
  upsertMeta("name", "twitter:description", cfg.description);
}
