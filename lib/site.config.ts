import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export const siteConfig = {
  title: "Quentinak",
  description: `Mon portfolio`,
  logo: "/images/kkyq.webp",
  mode: "light",
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://quentinak.com/'),
    title: title ? `${title} | Quentinak` : siteConfig.title,
    description,
    authors: [{ name: "Koffi Kouamelan Yannick Quentin" }],
    keywords: ["Quentinak", "Quentin", "Quentinak tech", "Quentinak portfolio", "Quentinak cv", "Quentinak site", "Quentinak web", "Quentinak app", "Quentinak site web", "Quentinak site cv", "Quentinak site portfolio"],
    openGraph: openGraph ?? {
      title: title ? `${title} - Quentinak` : siteConfig.title,
      description,
      url: process.env.NEXT_PUBLIC_BASE_URL || 'https://quentinak.com/',
      siteName: "Quentinak tech",
      images: [
        {
          url: "/images/og-image.webp",
          width: 1200,
          height: 630,
          alt: "Quentinak Portfolio",
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
  };
};
