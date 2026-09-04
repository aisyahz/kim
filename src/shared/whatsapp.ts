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
