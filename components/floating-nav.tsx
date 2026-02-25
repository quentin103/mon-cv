"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function FloatingNav() {
    const pathname = usePathname();

    return (
        <>
            {/* --- Navigation Ordinateur (Pillule Flottante en haut) --- */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden sm:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 items-center gap-1.5 p-1.5 rounded-full bg-[#0D1713]/80 border border-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
                <Link href="/" className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${pathname === '/' ? 'text-white bg-white/10' : 'text-slate-400 hover:text-white hover:bg-white/10'}`}>
                    <Icon icon="solar:home-2-bold-duotone" className="w-5 h-5" />
                </Link>
                <Link href="/projets" className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${pathname === '/projets' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'text-slate-200 hover:text-white hover:bg-white/10'}`}>
                    Projets
                </Link>
                <Link href="/blog" className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${pathname === '/blog' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'text-slate-200 hover:text-white hover:bg-white/10'}`}>
                    Actualités
                </Link>
                <Link href="/contact" className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${pathname === '/contact' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'text-slate-200 hover:text-white hover:bg-white/10'}`}>
                    Contact
                </Link>
            </motion.div>

            {/* --- Navigation Mobile (Dock d'application en bas) --- */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="sm:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-sm z-50 flex items-center justify-between px-6 py-3 rounded-2xl bg-[#0D1713]/90 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            >
                <Link href="/" className={`flex flex-col items-center gap-1 transition-colors ${pathname === '/' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`}>
                    <div className={`relative p-2 rounded-xl transition-all ${pathname === '/' ? 'bg-emerald-500/15 shadow-inner' : 'bg-transparent'}`}>
                        <Icon icon="solar:home-2-bold-duotone" className="w-6 h-6 relative z-10" />
                    </div>
                    <span className="text-[10px] font-medium tracking-wide">Accueil</span>
                </Link>

                <Link href="/projets" className={`flex flex-col items-center gap-1 transition-colors ${pathname === '/projets' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`}>
                    <div className={`relative p-2 rounded-xl transition-all ${pathname === '/projets' ? 'bg-emerald-500/15 shadow-inner' : 'bg-transparent'}`}>
                        <Icon icon="solar:folder-bold-duotone" className="w-6 h-6 relative z-10" />
                    </div>
                    <span className="text-[10px] font-medium tracking-wide">Projets</span>
                </Link>

                <Link href="/blog" className={`flex flex-col items-center gap-1 transition-colors ${pathname === '/blog' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`}>
                    <div className={`relative p-2 rounded-xl transition-all ${pathname === '/blog' ? 'bg-emerald-500/15 shadow-inner' : 'bg-transparent'}`}>
                        <Icon icon="solar:stars-bold-duotone" className="w-6 h-6 relative z-10" />
                    </div>
                    <span className="text-[10px] font-medium tracking-wide">Actualités</span>
                </Link>

                <Link href="/contact" className={`flex flex-col items-center gap-1 transition-colors ${pathname === '/contact' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`}>
                    <div className={`relative p-2 rounded-xl transition-all ${pathname === '/contact' ? 'bg-emerald-500/15 shadow-inner' : 'bg-transparent'}`}>
                        <Icon icon="solar:letter-bold-duotone" className="w-6 h-6 relative z-10" />
                    </div>
                    <span className="text-[10px] font-medium tracking-wide">Contact</span>
                </Link>
            </motion.div>
        </>
    );
}
