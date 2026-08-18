import { cookies } from "next/headers";
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "./config";
import { getDictionary } from "./dictionaries";
import { getPortfolio } from "./content";

/**
 * Langue retenue côté serveur, lue depuis le cookie posé par le sélecteur de langue.
 * Retombe sur `defaultLocale` (anglais) pour un premier visiteur ou un crawler.
 */
export async function getLocale(): Promise<Locale> {
    const store = await cookies();
    const value = store.get(LOCALE_COOKIE)?.value;
    return isLocale(value) ? value : defaultLocale;
}

/** Dictionnaire d'interface correspondant à la langue courante. */
export async function getServerDictionary() {
    return getDictionary(await getLocale());
}

/** Contenu du portfolio correspondant à la langue courante. */
export async function getServerPortfolio() {
    return getPortfolio(await getLocale());
}
