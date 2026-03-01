'use client'
import { Hero } from "@/components/home/hero";
import { Experience } from "@/components/home/experience";
import { Expertise } from "@/components/home/expertise";
import { Testimonials } from "@/components/home/testimonials";
import { Cta } from "@/components/home/cta";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Experience />
      <Expertise />
      <Testimonials />
      <Cta />
    </main>
  );
}