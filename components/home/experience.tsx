'use client'

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { usePortfolio, useTranslations } from "@/lib/i18n/context";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
};

// Anneau de progression : rayon et circonférence servent au tracé SVG et au calcul
// du strokeDashoffset. Le remplissage est volontairement statique — animer l'anneau
// via des variants force son état initial (anneau vide) en style inline, et l'anneau
// reste bloqué à 0 % dès que l'animation ne démarre pas. La carte, elle, garde son
// animation d'entrée via itemVariants.
const RING_RADIUS = 42;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const ringOffset = (level: number) => RING_CIRCUMFERENCE * (1 - level / 100);

export function Experience() {
    const portfolioData = usePortfolio();
    const t = useTranslations();

    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-20 relative z-10">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-10 md:mb-16 text-center md:text-left"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider mb-2">
                    <Icon icon="solar:diploma-bold-duotone" className="w-3.5 h-3.5" />
                    {portfolioData.timeline.sectionLabel}
                </div>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-2">{portfolioData.timeline.title}</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                {/* Experiences Timeline (Takes up 2 columns on lg) */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="lg:col-span-2 relative"
                >
                    {/* Vertical Line */}
                    <div className="absolute left-[11px] md:left-[19px] top-6 bottom-0 w-px bg-linear-to-b from-emerald-500/50 via-emerald-500/10 to-transparent"></div>

                    <div className="space-y-8 md:space-y-12">
                        {portfolioData.timeline.experiences.map((exp, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="relative pl-8 md:pl-16">
                                {/* Timeline Node */}
                                <div className="absolute left-[4px] md:left-[12px] top-[24px] md:top-[28px] w-[14px] h-[14px] rounded-full bg-[#050505] border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.4)] z-10">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                                </div>

                                {/* Content Card */}
                                <div className="p-5 md:p-6 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 transition-colors group">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2 md:gap-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{exp.title}</h3>
                                            <div className="flex flex-wrap items-center gap-2 text-sm text-stone-400 mt-1">
                                                <span className="font-medium text-stone-300">{exp.company}</span>
                                                <span className="w-1 h-1 rounded-full bg-stone-600"></span>
                                                <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono border border-white/5">
                                                    {exp.contract}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400/80 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20 w-fit">
                                            <Icon icon="solar:calendar-bold-duotone" className="w-3.5 h-3.5" />
                                            {exp.period}
                                        </div>
                                    </div>
                                    <ul className="space-y-2 mt-4">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-stone-300 leading-relaxed">
                                                <Icon icon="solar:alt-arrow-right-line-duotone" className="w-5 h-5 text-emerald-500/50 shrink-0 mt-0.5" />
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Education & Interests (Takes up 1 column on lg) */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-8"
                >
                    {/* Education */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                <Icon icon="solar:diploma-bold-duotone" className="w-5 h-5 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{t.common.education}</h3>
                        </div>
                        <div className="space-y-4">
                            {portfolioData.timeline.education.map((edu, idx) => (
                                <motion.div key={idx} variants={itemVariants} className="p-5 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 transition-colors">
                                    <h4 className="font-bold text-white text-sm mb-1">{edu.degree}</h4>
                                    <p className="text-xs text-stone-400 font-medium mb-3">{edu.school}</p>
                                    <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-stone-300 bg-white/5 px-2 py-1 rounded-md border border-white/10">
                                        <Icon icon="solar:calendar-bold-duotone" className="w-3 h-3" />
                                        {edu.period}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                <Icon icon="solar:global-bold-duotone" className="w-5 h-5 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{t.common.languages}</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {portfolioData.timeline.languages.map((language, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="p-5 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-emerald-500/30 transition-colors flex flex-col items-center gap-3"
                                >
                                    <div
                                        className="relative w-20 h-20"
                                        role="img"
                                        aria-label={`${language.name} : ${language.level}%`}
                                    >
                                        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r={RING_RADIUS}
                                                fill="none"
                                                strokeWidth="8"
                                                className="stroke-white/10"
                                            />
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r={RING_RADIUS}
                                                fill="none"
                                                strokeWidth="8"
                                                strokeLinecap="round"
                                                className="stroke-emerald-400 drop-shadow-[0_0_6px_rgba(16,185,129,0.5)]"
                                                strokeDasharray={RING_CIRCUMFERENCE}
                                                strokeDashoffset={ringOffset(language.level)}
                                            />
                                        </svg>
                                        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold font-mono text-white">
                                            {language.level}%
                                        </span>
                                    </div>
                                    <span className="text-sm font-medium text-stone-200">{language.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Interests */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                <Icon icon="solar:star-bold-duotone" className="w-5 h-5 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{t.common.interests}</h3>
                        </div>
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                            {portfolioData.timeline.interests.map((interest, idx) => (
                                <span key={idx} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/2 border border-white/5 text-sm font-medium text-stone-200 hover:bg-white/5 hover:border-emerald-500/30 transition-all cursor-default">
                                    <Icon icon={interest.icon} className="w-4 h-4 text-emerald-400" />
                                    {interest.name}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
