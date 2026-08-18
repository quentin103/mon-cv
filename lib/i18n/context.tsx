"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import {
    defaultLocale,
    LOCALE_COOKIE,
    LOCALE_COOKIE_MAX_AGE,
    localeTags,
    type Locale,
} from "./config";
import { getDictionary, type Dictionary } from "./dictionaries";
import { getPortfolio } from "./content";
import type { PortfolioContent } from "./types";

type LanguageContextValue = {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    /** Textes d'interface (boutons, labels, messages). */
    t: Dictionary;
    /** Contenu éditorial du portfolio. */
    content: PortfolioContent;
    /** Étiquette BCP 47, pour `toLocaleDateString` & co. */
    localeTag: string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
    initialLocale,
    children,
}: {
    initialLocale: Locale;
    children: React.ReactNode;
}) {
    const [locale, setLocaleState] = useState<Locale>(initialLocale);

    const setLocale = useCallback((next: Locale) => {
        setLocaleState(next);
        // Le cookie est relu par le serveur au prochain rendu : plus de flash au rechargement.
        document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax`;
        document.documentElement.lang = next;
    }, []);

    const value = useMemo<LanguageContextValue>(
        () => ({
            locale,
            setLocale,
            t: getDictionary(locale),
            content: getPortfolio(locale),
            localeTag: localeTags[locale],
        }),
        [locale, setLocale]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

function useLanguageContext(): LanguageContextValue {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useLanguage doit être utilisé à l'intérieur de <LanguageProvider>.");
    }
    return ctx;
}

export function useLanguage() {
    return useLanguageContext();
}

/** Raccourci vers les textes d'interface. */
export function useTranslations(): Dictionary {
    return useLanguageContext().t;
}

/** Raccourci vers le contenu du portfolio dans la langue courante. */
export function usePortfolio(): PortfolioContent {
    return useLanguageContext().content;
}

export function useLocale(): Locale {
    return useLanguageContext().locale;
}

export { defaultLocale };
