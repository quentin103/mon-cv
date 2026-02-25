import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export const siteConfig = {
  title: "Wild tech",
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
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
    title: title ? `${title} | Wild tech` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - Wild tech` : siteConfig.title,
      description,
      url: "#",
      siteName: "Wild tech",
      // images: {
      //   url: "/images/trouvtout-og.webp",
      //   width: 1200,
      //   height: 630,
      // },
      locale: "fr_FR",
      type: "website",
    },
  };
};
