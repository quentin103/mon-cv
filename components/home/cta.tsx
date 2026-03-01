'use client'

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import portfolioData from "@/data/portfolio.json";

export function Cta() {
    const { cta } = portfolioData;

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 pt-12 pb-24 z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl md:rounded-full overflow-hidden bg-white/2 border border-white/5 backdrop-blur-md p-6 md:p-4 shadow-lg hover:border-emerald-500/20 transition-colors max-w-4xl mx-auto"
            >
                {/* Background glow for CTA */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-full bg-emerald-500/10 blur-[80px] pointer-events-none rounded-full"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:pl-6 md:pr-2">
                    <div className="flex items-center flex-col md:flex-row gap-4 text-center md:text-left">
                        <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                            <Icon icon="solar:rocket-bold-duotone" className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                            <h2 className="text-lg md:text-xl font-bold tracking-tight text-white mb-1">
                                {cta.title}
                            </h2>
                            <p className="text-stone-400 text-xs md:text-sm max-w-md mx-auto md:mx-0">
                                {cta.description}
                            </p>
                        </div>
                    </div>

                    <Link
                        href={cta.href}
                        className="relative group shrink-0 overflow-hidden rounded-full p-px w-full md:w-auto"
                    >
                        <span className="absolute inset-0 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
                        <div className="relative flex items-center justify-center gap-2 bg-[#050505] group-hover:bg-[#0a0a0a] border border-emerald-500/30 px-6 py-3 rounded-full transition-all duration-300 w-full">
                            <span className="text-white text-sm font-semibold group-hover:text-emerald-300 transition-colors">{cta.buttonText}</span>
                            <Icon icon="solar:arrow-right-line-duotone" className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-all" />
                        </div>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
