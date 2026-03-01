'use client'
import { Hero } from "@/components/home/hero";
import { Experience } from "@/components/home/experience";
import { Expertise } from "@/components/home/expertise";
import { Cta } from "@/components/home/cta";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Experience />
      <Expertise />

      <Cta />
    </main>
  );
}