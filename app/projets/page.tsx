"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import portfolioData from "@/data/portfolio.json";



export default function ProjetsPage() {
    const { projects } = portfolioData;

    return (
        <main className="w-full min-h-screen bg-[#050505] text-white overflow-x-hidden pt-15 sm:pt-20 relative flex justify-center">
            {/* Abstract Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0A5C36]/30 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0A5C36]/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 pt-15 md:pt-20 z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10  gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider mb-4">
                            <Icon icon="solar:folder-bold-duotone" className="w-3.5 h-3.5" />
                            {projects.sectionLabel}
                        </div>
                        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-2">{projects.title}</h1>
                        <p className="text-white max-w-xl mt-4 text-sm md:text-base">
                            Une sélection de mes travaux récents. Parcourez la liste pour découvrir les interfaces, architectures techniques et fonctionnalités que j'ai pu développer.
                        </p>
                    </div>
                </div>

                {/* Simple Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {projects.items.map((project, idx) => (
                        <div
                            className="group relative flex flex-col bg-[#0a0a0a]/80 border border-white/5 hover:border-emerald-500/30 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] backdrop-blur-sm"
                        >

                            {/* Card Content */}
                            <div className="p-4 md:p-5 flex flex-col flex-1">

                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-base md:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="mb-2">
                                    {project.categories && (
                                        <div className="flex flex-wrap items-center gap-2">
                                            {project.categories.map((cat, i) => (
                                                <span key={i} className={`text-xs ${cat.active ? 'text-emerald-400 font-medium bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20' : 'text-stone-500'}`}>
                                                    {cat.name}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="max-w-fit flex items-center gap-2 mb-2">
                                    {project.badge && (
                                        <div className={` ${project.badge.style === 'pulse' ? 'bg-black/80 text-white border-white/10' : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'} backdrop-blur-md px-3 py-1.5 flex items-center gap-2 rounded-md border text-xs font-mono shadow-lg`}>
                                            {project.badge.style === 'pulse' && <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>}
                                            {project.badge.label}
                                        </div>
                                    )}
                                    <span className="font-mono text-xs text-white bg-white/5 px-2 py-1 rounded-md border border-white/10">{project.year}</span>
                                </div>



                                <p className="text-white text-xs md:text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] sm:text-xs font-medium text-stone-300 group-hover:bg-white/10 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer: Icons & Link */}
                                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                                    <div className="flex items-center gap-3">
                                        {project.techIcons.map((icon, i) => (
                                            <Icon key={i} icon={icon} className="w-6 h-6 text-stone-400 grayscale group-hover:grayscale-0 group-hover:text-white transition-all duration-300" />
                                        ))}
                                    </div>
                                    <a href={project.link} className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-stone-400 group-hover:bg-emerald-500 group-hover:text-black group-hover:border-emerald-500 transition-all hover:scale-110">
                                        <Icon icon="solar:arrow-right-up-linear" className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
