"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Turnstile } from "@marsidev/react-turnstile";
import portfolioData from "@/data/portfolio.json";
import { sendContactEmail } from "./actions";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        const formData = new FormData(e.currentTarget);

        try {
            const result = await sendContactEmail(formData);
            if (result.success) {
                setStatus({ type: 'success', message: result.message || 'Votre message a bien été envoyé !' });
                formRef.current?.reset();
            } else {
                setStatus({ type: 'error', message: result.error || 'Erreur lors de l\'envoi.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Une erreur inattendue s\'est produite.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="w-full min-h-screen bg-[#050505] text-white overflow-x-hidden pt-15 sm:pt-20 relative flex justify-center">
            {/* Abstract Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0A5C36]/30 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0A5C36]/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 pt-15 md:pt-20 z-10 mb-20">
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">

                    {/* Left Column : Texts & Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider mb-4">
                                <Icon icon="solar:letter-bold-duotone" className="w-3.5 h-3.5" />
                                Contact
                            </div>
                            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                                Donnons vie à vos <span className="text-emerald-400">idées.</span>
                            </h1>
                            <p className="text-stone-400 text-sm md:text-base leading-relaxed">
                                Que ce soit pour une opportunité professionnelle, un projet de création d'application web, ou simplement pour échanger sur le développement... je suis à votre écoute !
                            </p>
                        </div>

                        <div className="space-y-4">
                            {portfolioData.hero.socialLinks.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-emerald-500/30 transition-all group"
                                >
                                    <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                        <Icon icon={social.icon} className="w-6 h-6" />
                                    </div>
                                    <div className="min-w-0 pr-2">
                                        <h3 className="text-white font-semibold text-sm">{social.name}</h3>
                                        <p className="text-stone-500 text-xs font-mono mt-0.5 group-hover:text-emerald-400/70 transition-colors truncate">
                                            {social.href.replace('mailto:', '').replace('https://', '').replace('www.', '')}
                                        </p>
                                    </div>
                                    <Icon icon="solar:arrow-right-up-linear" className="w-5 h-5 shrink-0 text-stone-600 ml-auto group-hover:text-emerald-400 transition-colors" />
                                </motion.a>
                            ))}

                            <div className="pt-2">
                                <div className="space-y-4 pt-4 border-t border-white/5">
                                    {/* Localisation */}
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/2 border border-white/5">
                                        <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <Icon icon="solar:map-point-bold-duotone" className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-sm">Localisation</h3>
                                            <p className="text-stone-500 text-xs font-mono mt-0.5">{portfolioData.contact.location}</p>
                                        </div>
                                    </div>

                                    {/* Contact Mobile */}
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-2xl bg-white/2 border border-white/5">
                                        <div className="flex items-center gap-4 flex-1">
                                            <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                                <Icon icon="solar:phone-calling-bold-duotone" className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-semibold text-sm">Contact</h3>
                                                <p className="text-stone-500 text-xs font-mono mt-0.5">{portfolioData.contact.phone}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 pl-18 sm:pl-0">
                                            <a href={portfolioData.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] flex items-center justify-center hover:bg-[#25D366]/20 transition-colors" title="WhatsApp">
                                                <Icon icon="mdi:whatsapp" className="w-5 h-5" />
                                            </a>
                                            <a href={portfolioData.contact.telegram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[#0088cc]/10 border border-[#0088cc]/20 text-[#0088cc] flex items-center justify-center hover:bg-[#0088cc]/20 transition-colors" title="Telegram">
                                                <Icon icon="mdi:telegram" className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Langues */}
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/2 border border-white/5">
                                        <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <Icon icon="solar:global-bold-duotone" className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-sm">Langues</h3>
                                            <p className="text-stone-500 text-xs font-mono mt-0.5 capitalize">{portfolioData.contact.languages}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column : Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-3 relative"
                    >
                        {/* Glowing effect behind form */}
                        <div className="absolute -inset-1 bg-linear-to-r from-emerald-500/20 to-emerald-500/0 rounded-[2.5rem] blur-xl opacity-50"></div>

                        <div className="relative p-6 md:p-8 rounded-[2rem] bg-[#0A0A0A]/80 border border-white/5 backdrop-blur-xl shadow-2xl">
                            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-stone-400 pl-1">Nom complet</label>
                                        <div className="relative">
                                            <Icon icon="solar:user-bold-duotone" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="John Doe"
                                                className="w-full bg-[#050505] border border-white/10 rounded-xl py-3 pl-12 pr-4  text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-mono"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-stone-400 pl-1">Adresse Email</label>
                                        <div className="relative">
                                            <Icon icon="solar:letter-bold-duotone" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="john@example.com"
                                                className="w-full bg-[#050505] border border-white/10 rounded-xl py-3 pl-12 pr-4  text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-mono"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-stone-400 pl-1">Sujet</label>
                                    <div className="relative">
                                        <Icon icon="solar:pen-bold-duotone" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                                        <input
                                            type="text"
                                            name="subject"
                                            required
                                            placeholder="Proposition de projet SaaS..."
                                            className="w-full bg-[#050505] border border-white/10 rounded-xl py-3 pl-12 pr-4  text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-mono"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-stone-400 pl-1">Message</label>
                                    <div className="relative">
                                        <Icon icon="solar:document-text-bold-duotone" className="absolute left-4 top-4 w-5 h-5 text-stone-500" />
                                        <textarea
                                            name="message"
                                            required
                                            placeholder="Détaillez votre idée ici..."
                                            rows={5}
                                            className="w-full bg-[#050505] border border-white/10 rounded-xl py-3 pl-12 pr-4  text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-mono resize-none"
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="w-full flex justify-center py-2">
                                    <Turnstile siteKey={process.env.TURNSTILE_SITE_KEY || "1x00000000000000000000AA"} options={{ theme: 'dark' }} />
                                </div>

                                {status.type && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`p-4 rounded-xl text-sm font-semibold flex items-center gap-2 ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
                                    >
                                        <Icon icon={status.type === 'success' ? "solar:check-circle-bold-duotone" : "solar:danger-triangle-bold-duotone"} className="w-5 h-5 shrink-0" />
                                        <span>{status.message}</span>
                                    </motion.div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full relative group overflow-hidden rounded-xl p-px disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span className="absolute inset-0 bg-linear-to-r from-emerald-500 to-teal-500 rounded-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
                                    <div className="relative flex items-center justify-center gap-2 bg-[#050505] group-hover:bg-[#0a0a0a] border border-emerald-500/30 px-6 py-4 rounded-xl transition-all duration-300">
                                        {isSubmitting ? (
                                            <Icon icon="solar:restart-bold-duotone" className="w-5 h-5 text-emerald-400 animate-spin" />
                                        ) : (
                                            <Icon icon="solar:plain-3-bold-duotone" className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        )}
                                        <span className="font-bold text-white text-sm">{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </main>
    );
}
