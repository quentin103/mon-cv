"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

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

export default function BlogPage() {
    return (
        <main className="w-full min-h-screen text-white overflow-x-hidden pt-32 pb-24 relative">
            <div className="container max-w-7xl  mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider mb-4">
                            <Icon icon="solar:document-text-bold-duotone" className="w-3.5 h-3.5" />
                            Articles
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Blog & Réflexions</h1>
                    </div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {/* Article 1 - Featured */}
                    <motion.a href="#" variants={item} className="lg:col-span-2 group flex flex-col md:flex-row bg-[#0d1117] border border-white/5 hover:border-emerald-500/30 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                        <div className="h-64 md:h-auto md:w-1/2 relative overflow-hidden bg-white/5 border-b md:border-b-0 md:border-r border-white/5 shrink-0">
                            <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" alt="UI Design" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                        </div>
                        <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-[10px] font-mono text-emerald-400">Nouveau</span>
                                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">Tendance UI</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">Le retour du Glassmorphism revisité</h3>
                            <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                                Comment intégrer des effets de verre dépoli avec goût dans des interfaces sombres pour donner une sensation de profondeur et de prémium sans nuire à l'accessibilité. Une analyse approfondie des dernières tendances avec des exemples de mise en œuvre.
                            </p>
                            <div className="flex items-center text-xs font-semibold text-emerald-400 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 mt-auto w-fit">
                                Voir l'analyse complète <Icon icon="solar:arrow-right-linear" className="ml-1.5 w-4 h-4" />
                            </div>
                        </div>
                    </motion.a>

                    {/* Article 2 */}
                    <motion.a href="#" variants={item} className="group flex flex-col bg-[#0d1117] border border-white/5 hover:border-emerald-500/30 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                        <div className="h-48 relative overflow-hidden bg-white/5 border-b border-white/5 shrink-0">
                            <img src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&q=80&w=600" alt="UX Patterns" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-[10px] font-mono text-emerald-400">À la une</span>
                                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">UX Design</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Les micro-interactions qui font la différence</h3>
                            <p className="text-xs text-slate-400 leading-relaxed mb-6 flex-1">
                                Tour d'horizon des animations de transition qui convertissent un site web statique en une expérience fluide et satisfaisante.
                            </p>
                            <div className="flex items-center text-xs font-semibold text-emerald-400 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 mt-auto w-fit">
                                Découvrir <Icon icon="solar:arrow-right-linear" className="ml-1.5 w-4 h-4" />
                            </div>
                        </div>
                    </motion.a>

                    {/* Article 3 */}
                    <motion.a href="#" variants={item} className="group flex flex-col bg-[#0d1117] border border-white/5 hover:border-emerald-500/30 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                        <div className="h-48 relative overflow-hidden bg-white/5 border-b border-white/5 shrink-0">
                            <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600" alt="Accessibility" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-[10px] font-mono text-emerald-400">Dossier</span>
                                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">Accessibilité</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Design system & Contrastes</h3>
                            <p className="text-xs text-slate-400 leading-relaxed mb-6 flex-1">
                                Comment créer des palettes de couleurs inclusives sans sacrifier l'esthétique premium de vos interfaces avec le système HSL.
                            </p>
                            <div className="flex items-center text-xs font-semibold text-emerald-400 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 mt-auto w-fit">
                                Lire la suite <Icon icon="solar:arrow-right-linear" className="ml-1.5 w-4 h-4" />
                            </div>
                        </div>
                    </motion.a>

                    {/* Article 4 */}
                    <motion.a href="#" variants={item} className="group flex flex-col bg-[#0d1117] border border-white/5 hover:border-emerald-500/30 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                        <div className="h-48 relative overflow-hidden bg-white/5 border-b border-white/5 shrink-0">
                            <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=600" alt="Typography" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-[10px] font-mono text-emerald-400">Ressources</span>
                                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">Typographie</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Associer des polices modernes</h3>
                            <p className="text-xs text-slate-400 leading-relaxed mb-6 flex-1">
                                Mes 5 combinaisons typographiques (Google Fonts) préférées de l'année pour donner du caractère à n'importe quel landing page.
                            </p>
                            <div className="flex items-center text-xs font-semibold text-emerald-400 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 mt-auto w-fit">
                                S'inspirer <Icon icon="solar:arrow-right-linear" className="ml-1.5 w-4 h-4" />
                            </div>
                        </div>
                    </motion.a>
                </motion.div>
            </div>
        </main>
    );
}
