import React from 'react';

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#050505] py-8">
            <div className="container max-w-7xl mx-auto px-6 text-center">
                <p className="text-white text-sm font-light">© {new Date().getFullYear()} - Construit avec passion en Next.js & Tailwind CSS.</p>
            </div>
        </footer>
    );
}
