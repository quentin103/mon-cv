import { LucideIcon } from "lucide-react";
import React from "react";

interface PromoCardProps {
    icon: LucideIcon;
    label: string;
    title: string | React.ReactNode;
    description: string;
    ctaText: string;
    bgColor?: string;
    gradientFrom: string;
    gradientTo: string;
    imageSrc: string;
    imageAlt: string;
    textColor?: string;
    isPink?: boolean;
}

export function PromoCard({
    icon: Icon,
    label,
    title,
    description,
    ctaText,
    gradientFrom,
    gradientTo,
    imageSrc,
    imageAlt,
    textColor = "text-white",
    isPink = false
}: PromoCardProps) {
    return (
        <div className={`relative overflow-hidden rounded-2xl ${isPink ? 'bg-pink-100 dark:bg-slate-700 border border-pink-200 dark:border-slate-600' : ''} p-6 h-80 group cursor-pointer`}>
            {!isPink && (
                <div className={`absolute inset-0 bg-linear-to-br ${gradientFrom} ${gradientTo}`}></div>
            )}
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div className={textColor}>
                    <div className="flex items-center gap-2 mb-2 opacity-80">
                        <Icon className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-1">{title}</h3>
                    <p className="text-sm opacity-90">{description}</p>
                </div>

                <img
                    alt={imageAlt}
                    className={`absolute ${isPink ? '-bottom-4 -right-4' : '-bottom-8 -right-8'} w-40 h-40 object-cover rounded-full border-4 border-white/20 shadow-xl group-hover:scale-110 transition duration-500`}
                    src={imageSrc}
                />

                <button className={`w-fit px-4 py-2 ${isPink ? 'bg-pink-500 hover:bg-pink-600 text-white' : 'bg-white/10 backdrop-blur-sm text-white'} rounded-lg text-sm font-medium hover:bg-white/20 transition`}>
                    {ctaText}
                </button>
            </div>
        </div>
    );
}
