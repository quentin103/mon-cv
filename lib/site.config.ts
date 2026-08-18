import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export const siteConfig = {
  title: "Quentin| Portfolio",
  logo: "/images/kkyq.webp",
  mode: "dark",
  author: "Koffi Kouamelan Yannick Quentin",
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://quentinak.com"
};

/** Locale OpenGraph (`language_TERRITORY`) associée à chaque langue du site. */
const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
};

export const metaObject = (
  locale: Locale = defaultLocale,
  title?: string,
  description?: string,
  path?: string,
  openGraph?: OpenGraph
): Metadata => {
  const t = getDictionary(locale);
  const metaTitle = title ? `${title}` : siteConfig.title;
  const metaDescription = description || t.meta.siteDescription;
  const url = path ? `${siteConfig.url}${path}` : siteConfig.url;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: metaTitle,
      template: `%s`,
    },
    description: metaDescription,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    keywords: t.meta.keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: openGraph ?? {
      title: metaTitle,
      description: metaDescription,
      url: url,
      siteName: siteConfig.title,
      locale: openGraphLocales[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
  };
};
