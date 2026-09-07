/**
 * Central WhatsApp configuration — the single source of truth for the number.
 *
 * Both the main KIM site and every demo import from here so the contact number
 * is never hardcoded in more than one place. Change it here and it updates
 * everywhere.
 */

/** MY country code 60, leading 0 dropped: 013-6648159 -> 60136648159. */
export const WHATSAPP_NUMBER = "60136648159";

/** Human-readable form for display in UI. */
export const WHATSAPP_DISPLAY = "013-6648159";

/** Build a click-to-chat link with an optional prefilled message. */
export function waLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Prefilled WhatsApp messages — single source of truth so every CTA sends a
 * self-identifying message. This lets Kim instantly tell which package/campaign
 * a lead came from without any analytics.
 */
export const WA_MESSAGES = {
  general:
    "Hi Kim! I'd like to talk about building a website for my business.",
  campaign:
    "Hi Kim, I'm interested in the 3-business portfolio project. My business is ______.",
  starter:
    "Hi Kim, I'm interested in the RM399 Starter Website. My business/project is ______.",
  business:
    "Hi Kim, I'm interested in the RM799 Business Website package. My business is ______.",
  premium:
    "Hi Kim, I'm interested in a custom/premium website. I'd like to discuss my requirements.",
  consult:
    "Hi Kim, I'm not sure which option fits my business. Can you help me decide?",
  concept:
    "Hi Kim, I'd like to see a free concept for my business first. My business is ______.",
} as const;

/** Convenience links for the above, ready to drop into href. */
export const WA_LINKS = {
  general: waLink(WA_MESSAGES.general),
  campaign: waLink(WA_MESSAGES.campaign),
  starter: waLink(WA_MESSAGES.starter),
  business: waLink(WA_MESSAGES.business),
  premium: waLink(WA_MESSAGES.premium),
  consult: waLink(WA_MESSAGES.consult),
  concept: waLink(WA_MESSAGES.concept),
} as const;
