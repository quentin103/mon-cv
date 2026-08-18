export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Nom du cookie qui mémorise la langue choisie par le visiteur. */
export const LOCALE_COOKIE = "locale";

/** Durée de vie du cookie de langue : 1 an. */
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export const localeLabels: Record<Locale, { short: string; full: string }> = {
    en: { short: "EN", full: "English" },
    fr: { short: "FR", full: "Français" },
};

/** Étiquette BCP 47 utilisée pour le formatage des dates. */
export const localeTags: Record<Locale, string> = {
    en: "en-US",
    fr: "fr-FR",
};

export function isLocale(value: unknown): value is Locale {
    return typeof value === "string" && (locales as readonly string[]).includes(value);
}
