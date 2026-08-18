import type { Locale } from "./config";
import type { PortfolioContent } from "./types";
import en from "@/data/portfolio.en.json";
import fr from "@/data/portfolio.fr.json";

/**
 * Contenu du portfolio par langue. Le typage explicite en `PortfolioContent`
 * garantit que les deux fichiers JSON gardent la même structure.
 */
export const portfolioByLocale: Record<Locale, PortfolioContent> = {
    en: en as PortfolioContent,
    fr: fr as PortfolioContent,
};

export function getPortfolio(locale: Locale): PortfolioContent {
    return portfolioByLocale[locale];
}
