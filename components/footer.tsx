'use client'

import React from 'react';
import { useTranslations } from '@/lib/i18n/context';

export function Footer() {
    const t = useTranslations();

    return (
        <footer className="border-t border-white/10 bg-[#050505] py-8">
            <div className="container max-w-7xl mx-auto px-6 text-center">
                <p className="text-white text-sm font-light">© {new Date().getFullYear()} - {t.common.footer}</p>
            </div>
        </footer>
    );
}
