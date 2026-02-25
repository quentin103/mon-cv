"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { ArrowRight } from "lucide-react";

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

export default function ProjetsPage() {
    return (
        <main className="w-full min-h-screen text-white overflow-x-hidden pt-32 pb-24 relative">
            <div className="container max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider mb-4">
                            <Icon icon="solar:folder-bold-duotone" className="w-3.5 h-3.5" />
                            Portfolio
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Projets Récents</h1>
                    </div>
                    <a href="#" className="inline-flex w-fit items-center text-slate-400 hover:text-white font-semibold transition-colors">
                        Voir mon GitHub <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {/* Project 1 - Feature (Large, spans 2 columns) */}
                    <motion.div variants={item} className="lg:col-span-2 group flex flex-col md:flex-row bg-[#0d1117] border border-white/5 hover:border-emerald-500/30 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                        <div className="h-64 md:h-auto md:w-1/2 relative overflow-hidden bg-white/5 border-b md:border-b-0 md:border-r border-white/5">
                            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" alt="E-commerce" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 flex items-center gap-1.5 rounded-lg border border-white/10 text-[10px] font-mono text-emerald-400">
                                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                                Production
                            </div>
                        </div>
                        <div className="p-6 md:p-8 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">E-Commerce React</h3>
                                <span className="text-xs text-slate-500 font-mono mt-1">2023</span>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Portfolio</span>
                                <span className="text-[10px] text-slate-500">Projet B2C</span>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                                Plateforme avec panier, authentification sécurisée et paiement intégré. Architecture CMS headless offrant des performances de pointe.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8 items-start">
                                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-slate-300">Stripe API</span>
                                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-slate-300">Auth.js</span>
                                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-slate-300">Sanity CMS</span>
                            </div>
                            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                                <Icon icon="devicon:react" className="w-6 h-6 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                                <Icon icon="devicon:nextjs" className="w-6 h-6 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                                <Icon icon="devicon:tailwindcss" className="w-6 h-6 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                                <a href="#" className="ml-auto w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-emerald-500 hover:text-black text-slate-400 transition-all">
                                    <Icon icon="solar:arrow-right-up-linear" className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 2 - Regular */}
                    <motion.div variants={item} className="lg:col-span-1 group flex flex-col bg-[#0d1117] border border-white/5 hover:border-emerald-500/30 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                        <div className="h-48 relative overflow-hidden bg-white/5">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" alt="Dashboard" className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                            <div className="absolute inset-0 bg-[linear-gradient(to_top,#0d1117,transparent)]"></div>
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Dashboard Admin</h3>
                                <span className="text-[10px] text-slate-500 font-mono mt-1">2024</span>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Portfolio</span>
                                <span className="text-[10px] text-slate-500">Outil Analytics</span>
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1">
                                Interface de gestion avec websockets.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6 items-start">
                                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-medium text-slate-300">Socket.io</span>
                                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-medium text-slate-300">Pinia</span>
                            </div>
                            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                                <Icon icon="devicon:vuejs" className="w-5 h-5 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                                <Icon icon="devicon:typescript" className="w-5 h-5 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                                <a href="#" className="ml-auto flex items-center gap-1 text-xs text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Voir <Icon icon="solar:arrow-right-up-linear" className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 3 - Regular */}
                    <motion.div variants={item} className="lg:col-span-1 group flex flex-col bg-[#0d1117] border border-white/5 hover:border-emerald-500/30 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                        <div className="h-48 relative overflow-hidden bg-white/5">
                            <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600" alt="SaaS" className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                            <div className="absolute inset-0 bg-[linear-gradient(to_top,#0d1117,transparent)]"></div>
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 flex items-center gap-1.5 rounded-lg border border-white/10 text-[10px] font-mono text-slate-300">
                                <Icon icon="solar:lock-keyhole-minimalistic-bold-duotone" className="w-3 h-3 text-slate-400" />
                                Privé
                            </div>
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">SaaS Freelance</h3>
                                <span className="text-[10px] text-slate-500 font-mono mt-1">2024</span>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Portfolio</span>
                                <span className="text-[10px] text-slate-500">Architecture B2B</span>
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1">
                                Outil de facturation et architecture multi-tenancy.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6 items-start">
                                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-medium text-slate-300">Multi-tenant</span>
                                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-medium text-slate-300">Redis</span>
                            </div>
                            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                                <Icon icon="devicon:nodejs" className="w-5 h-5 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                                <Icon icon="devicon:postgresql" className="w-5 h-5 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                                <a href="#" className="ml-auto flex items-center gap-1 text-xs text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Voir <Icon icon="solar:arrow-right-up-linear" className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 4 - Feature (Large, spans 2 columns on desktop) */}
                    <motion.div variants={item} className="lg:col-span-2 group flex flex-col md:flex-row-reverse bg-[#0d1117] border border-white/5 hover:border-emerald-500/30 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                        <div className="h-64 md:h-auto md:w-1/2 relative overflow-hidden bg-white/5 border-b md:border-b-0 md:border-l border-white/5">
                            <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" alt="IA Agent" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                            <div className="absolute top-4 left-4 bg-emerald-500/20 backdrop-blur-md px-2 py-1 flex items-center gap-1.5 rounded-lg border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                                <Icon icon="solar:magic-stick-3-bold-duotone" className="w-3 h-3" />
                                Nouveau
                            </div>
                        </div>
                        <div className="p-6 md:p-8 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">Plateforme IA</h3>
                                <span className="text-xs text-slate-500 font-mono mt-1">2025</span>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                                Intégration poussée de LLMs pour générer des workflows automatisés. Chat temps réel et UI générative.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8 items-start">
                                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-slate-300">OpenAI</span>
                                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-slate-300">Vercel AI</span>
                                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-slate-300">Vector DB</span>
                            </div>
                            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                                <Icon icon="devicon:typescript" className="w-6 h-6 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                                <Icon icon="devicon:react" className="w-6 h-6 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                                <a href="#" className="ml-auto w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-emerald-500 hover:text-black text-slate-400 transition-all">
                                    <Icon icon="solar:arrow-right-up-linear" className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}
