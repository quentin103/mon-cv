'use client'

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
};

export function Expertise() {
    return (
        <div className="container max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 mb-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider mb-4">
                    <Icon icon="solar:cpu-bold-duotone" className="w-3.5 h-3.5" />
                    {portfolioData.expertise.sectionLabel}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">{portfolioData.expertise.title}</h2>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {portfolioData.expertise.items.map((expertiseItem) => (
                    <motion.div key={expertiseItem.id} variants={item} className="p-6 rounded-3xl bg-white/2 border border-white/5 hover:bg-white/5 transition-colors group">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Icon icon={expertiseItem.icon} className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-base font-bold text-white">{expertiseItem.title}</h3>
                        </div>
                        <p className="text-xs text-white mb-4 leading-relaxed">{expertiseItem.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {expertiseItem.skills.map((skill, kid) => (
                                <span key={kid} className="inline-flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded-md bg-white/5 border border-white/5 text-white hover:bg-white/10 transition-colors">
                                    <Icon icon={skill.icon} className="w-3.5 h-3.5" />
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
