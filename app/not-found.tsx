"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="relative w-full min-h-[80vh] flex items-center justify-center pt-15 sm:pt-25 overflow-hidden bg-[#050505] text-stone-200">
            {/* Abstract Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0A5C36]/30 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0A5C36]/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-2xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs md:text-sm font-medium backdrop-blur-sm">
                        <Icon icon="solar:danger-triangle-bold-duotone" className="w-4 h-4 text-emerald-400" />
                        <span>Erreur 404</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-400 leading-[1.1]">
                        <span className="text-emerald-400">404</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Page introuvable !
                    </h2>

                    <p className="text-base md:text-lg text-stone-400 max-w-lg leading-relaxed font-light mx-auto">
                        Oups ! Il semble que la page que vous recherchez n&apos;existe pas ou a été déplacée.
                        Mais ne vous inquiétez pas, vous pouvez retourner à l&apos;accueil pour découvrir mes projets.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
