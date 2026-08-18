"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePortfolio } from "@/lib/i18n/context";
import { LanguageSwitcher } from "@/components/language-switcher";

export function FloatingNav() {
    const pathname = usePathname();
    const portfolioData = usePortfolio();

    return (
        <>
            <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-md z-50 flex items-center justify-between gap-1 px-2 py-2  rounded-full bg-[#0D1713]/10 border border-white/10 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between grow min-w-0">
                    {portfolioData.navigation.map((nav, idx) => {
                        const isActive = pathname === nav.href;
                        return (
                            <Link key={idx} href={nav.href} className={`flex items-center gap-1 transition-colors py-2.5 px-2 md:px-3 rounded-full  ${isActive ? 'text-emerald-400 bg-emerald-500/15 shadow-inner ' : 'text-stone-300 hover:text-stone-100'}`}>
                                <div className={`relative rounded-xl transition-all`}>
                                    <Icon icon={nav.icon} className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                                </div>
                                <span className="text-[11px] md:text-sm text-nowrap font-medium">{nav.name}</span>
                            </Link>
                        );
                    })}
                </div>
                <LanguageSwitcher />
            </div>
        </>
    );
}
