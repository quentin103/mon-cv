"use client";

import { useLanguage } from "@/lib/i18n/context";
import { locales, localeLabels } from "@/lib/i18n/config";

/**
 * Bascule EN/FR. Le choix est écrit dans un cookie relu côté serveur,
 * donc il survit au rechargement et aux navigations.
 */
export function LanguageSwitcher() {
    const { locale, setLocale, t } = useLanguage();

    return (
        <div
            role="group"
            aria-label={t.common.languageSwitch}
            className="flex items-center gap-0.5 p-0.5 rounded-full bg-white/5 border border-white/10 shrink-0"
        >
            {locales.map((code) => {
                const isActive = code === locale;
                return (
                    <button
                        key={code}
                        type="button"
                        onClick={() => setLocale(code)}
                        aria-pressed={isActive}
                        title={localeLabels[code].full}
                        className={`px-2 py-1 rounded-full text-[10px] md:text-xs font-semibold tracking-wide transition-colors ${
                            isActive
                                ? "bg-emerald-500/20 text-emerald-300"
                                : "text-stone-400 hover:text-stone-100"
                        }`}
                    >
                        {localeLabels[code].short}
                    </button>
                );
            })}
        </div>
    );
}
