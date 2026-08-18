'use client'

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { usePortfolio } from "@/lib/i18n/context";

export function TrustedBy() {
    const { trustedBy } = usePortfolio();

    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-8 md:mb-12 text-center"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider mb-2">
                    <Icon icon="solar:shield-check-bold-duotone" className="w-3.5 h-3.5" />
                    {trustedBy.sectionLabel}
                </div>
                <h2 className="text-xl md:text-3xl font-bold tracking-tight text-white/90">{trustedBy.title}</h2>
            </motion.div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden rounded-3xl bg-white/2 border border-white/5 py-8 md:py-12 backdrop-blur-sm">

                {/* Gradient Masks for smooth fading edges */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

                {/* Infinite Scroller */}
                <div className="flex w-fit animate-marquee">
                    {/* First set of items */}
                    <div className="flex items-center gap-8 md:gap-16 px-4 md:px-8">
                        {trustedBy.brands.map((brand, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-stone-500 hover:text-emerald-400 transition-colors duration-500 group cursor-default whitespace-nowrap">
                                <Icon icon={brand.icon} className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all" />
                                <span className="text-lg md:text-2xl font-bold font-mono tracking-tighter opacity-70 group-hover:opacity-100">{brand.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Duplicate set for infinite loop illusion */}
                    <div className="flex items-center gap-8 md:gap-16 px-4 md:px-8" aria-hidden="true">
                        {trustedBy.brands.map((brand, idx) => (
                            <div key={`dup-${idx}`} className="flex items-center gap-3 text-stone-500 hover:text-emerald-400 transition-colors duration-500 group cursor-default whitespace-nowrap">
                                <Icon icon={brand.icon} className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
                                <span className="text-lg md:text-2xl font-bold font-mono tracking-tighter opacity-70 group-hover:opacity-100">{brand.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Third set to ensure it's wide enough for ultra wide screens */}
                    <div className="flex items-center gap-8 md:gap-16 px-4 md:px-8" aria-hidden="true">
                        {trustedBy.brands.map((brand, idx) => (
                            <div key={`dup2-${idx}`} className="flex items-center gap-3 text-stone-500 hover:text-emerald-400 transition-colors duration-500 group cursor-default whitespace-nowrap">
                                <Icon icon={brand.icon} className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
                                <span className="text-lg md:text-2xl font-bold font-mono tracking-tighter opacity-70 group-hover:opacity-100">{brand.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
