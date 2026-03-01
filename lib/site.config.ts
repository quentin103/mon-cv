import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export const siteConfig = {
  title: "Quentin| Portfolio",
  description: "Développeur Full-Stack & UI/UX basé à Abidjan. Découvrez mon expertise en conception d'interfaces modernes (React/Next.js) et mon parcours.",
  logo: "/images/kkyq.webp",
  mode: "dark",
  author: "Koffi Kouamelan Yannick Quentin",
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://quentinak.com"
};

export const metaObject = (
  title?: string,
  description?: string,
  path?: string,
  openGraph?: OpenGraph
): Metadata => {
  const metaTitle = title ? `${title}` : siteConfig.title;
  const metaDescription = description || siteConfig.description;
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
    keywords: [
      "Quentin",
      "koffi yannick",
      "koffi quentin",
      "quentin koffi",
      "kouamelan",
      "kouamelan yannick",
      "kouamelan quentin",
      "yannick kouamelan",
      "yannick quentin",
      "quentin kouamelan",
      "Quentinak",
      "Koffi Kouamelan Yannick Quentin",
      "Développeur Full-Stack",
      "Développeur Frontend",
      "Développeur UI/UX",
      "Développeur mobile",
      "Développeur web",
      "React",
      "Next.js",
      "Portfolio",
      "Abidjan",
      "Côte d'Ivoire",
      "Création Frontend"
    ],
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
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
  };
};
