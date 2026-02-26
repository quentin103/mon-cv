"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { ArrowRight } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

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

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
};

export default function ProjetsPage() {
    const { projects } = portfolioData;

    return (
        <main className="w-full min-h-screen bg-[#050505] text-white overflow-x-hidden pt-32 pb-24 relative flex justify-center">
            {/* Abstract Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0A5C36]/30 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0A5C36]/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <div className="container max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 w-full">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider mb-4">
                            <Icon icon="solar:folder-bold-duotone" className="w-3.5 h-3.5" />
                            {projects.sectionLabel}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-2">{projects.title}</h1>
                        <p className="text-slate-400 max-w-lg mt-4 text-sm md:text-base">
                            Une sélection de mes travaux récents. Parcourez la liste pour découvrir les interfaces, architectures techniques et fonctionnalités que j'ai pu développer.
                        </p>
                    </div>
                    <a href={projects.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-medium transition-all group backdrop-blur-md">
                        Voir mon GitHub <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Simple Grid Layout */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                    {projects.items.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            variants={item}
                            className="group relative flex flex-col bg-[#0a0a0a]/80 border border-white/5 hover:border-emerald-500/30 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] backdrop-blur-sm"
                        >
                            {/* Image Header */}
                            <div className="relative h-60 w-full overflow-hidden bg-white/5 border-b border-white/5 block">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                                {project.badge && (
                                    <div className={`absolute top-4 right-4 ${project.badge.style === 'pulse' ? 'bg-black/80 text-white border-white/10' : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'} backdrop-blur-md px-3 py-1.5 flex items-center gap-2 rounded-xl border text-xs font-mono shadow-lg`}>
                                        {project.badge.style === 'pulse' && <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>}
                                        {project.badge.icon && <Icon icon={project.badge.icon} className="w-3.5 h-3.5" />}
                                        {project.badge.label}
                                    </div>
                                )}
                            </div>

                            {/* Card Content */}
                            <div className="p-6 md:p-8 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="font-mono text-xs text-slate-500 bg-white/5 px-2 py-1 rounded-md border border-white/10">{project.year}</span>
                                </div>

                                {project.categories && (
                                    <div className="flex flex-wrap items-center gap-2 mb-4">
                                        {project.categories.map((cat, i) => (
                                            <span key={i} className={`text-xs ${cat.active ? 'text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20' : 'text-slate-500'}`}>
                                                {cat.name}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] sm:text-xs font-medium text-slate-300 group-hover:bg-white/10 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer: Icons & Link */}
                                <div className="flex items-center justify-between pt-5 border-t border-white/10">
                                    <div className="flex items-center gap-3">
                                        {project.techIcons.map((icon, i) => (
                                            <Icon key={i} icon={icon} className="w-6 h-6 text-slate-400 grayscale group-hover:grayscale-0 group-hover:text-white transition-all duration-300" />
                                        ))}
                                    </div>
                                    <a href={project.link} className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-slate-400 group-hover:bg-emerald-500 group-hover:text-black group-hover:border-emerald-500 transition-all hover:scale-110">
                                        <Icon icon="solar:arrow-right-up-linear" className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </main>
    );
}
