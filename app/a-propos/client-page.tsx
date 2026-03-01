"use client";

import { motion, Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import portfolioData from "@/data/portfolio.json";

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function AboutClientPage() {
    return (
        <main className="w-full min-h-screen bg-[#050505] text-white overflow-x-hidden pt-24 sm:pt-32 pb-20 relative flex justify-center">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 z-10">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-10  gap-6"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider mb-4">
                            <Icon icon="solar:user-bold-duotone" className="w-3.5 h-3.5" />
                            À propos de moi
                        </div>
                        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-2">Faisons plus ample <span className="text-emerald-400">connaissance.</span></h1>

                    </div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="w-full grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-16"
                >
                    {/* Small Profile Card (Left side) */}
                    <motion.div variants={item} className="col-span-12 lg:col-span-4 relative group overflow-hidden rounded-xl backdrop-blur-md shadow-2xl p-6 lg:p-8 flex flex-col items-center text-center">
                        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#050505] shadow-xl mb-6 z-10 shrink-0">
                            <Image
                                src={portfolioData.about.image}
                                alt="Quentin"
                                fill
                                className="object-cover object-top  transition-all duration-500 "
                            />
                        </div>
                        <div className="relative z-10 w-full">
                            <h2 className="text-2xl font-bold text-white mb-1">Quentin K.</h2>
                            <p className="text-emerald-400 font-mono text-sm mb-6">&lt;FullStack Developer /&gt;</p>
                        </div>
                    </motion.div>

                    {/* Simple Text Block (Right side) */}
                    <motion.div variants={item} className="col-span-12 lg:col-span-8 w-full h-full relative group rounded-xl p-px overflow-hidden">
                        <div className="relative z-10 h-full  backdrop-blur-xl rounded-xl p-4 md:p-8 ">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Qui je suis et ce que je fais</h3>
                            <div className="space-y-6 text-stone-300 leading-relaxed text-lg">
                                <p>
                                    {portfolioData.about.passion}
                                </p>
                                <p>
                                    Mon objectif est de créer des solutions numériques à la fois performantes et esthétiques. Que ce soit pour structurer une base de données robuste ou concevoir une interface utilisateur fluide, j'aborde chaque projet avec la même rigueur et curiosité.
                                </p>
                                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3">
                                    {portfolioData.timeline.interests.map((interest, idx) => (
                                        <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-stone-300 hover:bg-white/10 transition-colors">
                                            <Icon icon={interest.icon} className="w-4 h-4 text-emerald-400" />
                                            {interest.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </main>
    );
}
