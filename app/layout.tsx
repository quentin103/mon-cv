import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { metaObject } from "@/lib/site.config";
import { FloatingNav } from "@/components/floating-nav";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { LanguageProvider } from "@/lib/i18n/context";
import { getLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/dictionaries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);
  return metaObject(locale, t.meta.root.title, t.meta.root.description);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} bg-[#050505] antialiased relative`}
      >
        <LanguageProvider initialLocale={locale}>
          <FloatingNav />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
