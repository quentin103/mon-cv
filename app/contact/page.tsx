"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function ContactPage() {
    return (
        <main className="w-full min-h-screen text-white overflow-x-hidden pt-32 pb-24 relative">
            <div className="container max-w-2xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider mb-6">
                        <Icon icon="solar:letter-bold-duotone" className="w-3.5 h-3.5" />
                        Contact
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Travaillons ensemble</h1>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                        Vous avez un projet en tête ou vous souhaitez simplement échanger ? Laissez-moi un message et je vous répondrai dans les plus brefs délais.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-[#0d1117] p-8 md:p-10 rounded-3xl border border-white/5 shadow-[0_0_30px_rgba(16,185,129,0.05)]"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium text-slate-300">Nom complet</label>
                            <input type="text" id="name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" placeholder="John Doe" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-slate-300">Adresse email</label>
                            <input type="email" id="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" placeholder="john@example.com" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mb-8">
                        <label htmlFor="message" className="text-sm font-medium text-slate-300">Votre message</label>
                        <textarea id="message" rows={5} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none" placeholder="Parlez-moi de votre projet..."></textarea>
                    </div>
                    <button type="button" className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-xl px-6 py-4 transition-all">
                        Envoyer le message <Icon icon="solar:plain-bold-duotone" className="w-5 h-5" />
                    </button>
                </motion.form>
            </div>
        </main>
    );
}
