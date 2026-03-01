import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface PublicationCardProps {
    title: string;
    description: string;
    sellerName: string;
    isVerified?: boolean;
    price: string;
    unit: string;
    distance: string;
    image: string;
    isPromo?: boolean;
    onClick?: () => void;
}

export function PublicationCard({
    title,
    description,
    sellerName,
    isVerified = false,
    price,
    unit,
    distance,
    image,
    isPromo = false,
    onClick
}: PublicationCardProps) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            onClick={onClick}
            className="flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 cursor-pointer"
        >
            {/* Image Section */}
            <div className="relative w-full sm:w-32 md:w-36 lg:w-40 shrink-0 aspect-video sm:aspect-square">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                {isPromo && (
                    <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm">
                        <span className="text-[9px] font-black text-[#0A5C36] uppercase tracking-wider">Promo</span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="flex-1 p-4 flex flex-col justify-between relative min-w-0">
                <button className="absolute top-4 right-4 text-stone-300 hover:text-red-500 transition-colors">
                    <Icon icon="solar:heart-linear" className="w-5 h-5" />
                </button>

                <div>
                    <h3 className="font-bold text-stone-800 text-base md:text-lg leading-tight pr-8 truncate">
                        {title}
                    </h3>
                    <p className="text-stone-500 text-xs mt-1 line-clamp-2 font-medium">
                        {description}
                    </p>
                </div>

                <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px]">
                            <Icon icon="solar:user-bold" className="w-3 h-3 text-stone-400" />
                        </div>
                        <span className="text-xs font-bold text-stone-700">{sellerName}</span>
                        {isVerified && (
                            <Icon icon="solar:verified-check-bold" className="w-3.5 h-3.5 text-[#0A5C36]" />
                        )}
                    </div>

                    <div className="flex items-end justify-between gap-3">
                        <div className="flex flex-col">
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg font-black text-[#0A5C36]">{price}</span>
                                <span className="text-[9px] font-bold text-stone-400 uppercase tracking-tight">{unit}</span>
                            </div>
                            <div className="flex items-center gap-1 text-stone-400">
                                <Icon icon="solar:link-bold-duotone" className="w-3.5 h-3.5 text-[#0A5C36]/60" />
                                <span className="text-[10px] font-bold text-stone-500 opacity-80">{distance}</span>
                            </div>
                        </div>

                        <button className="relative w-10 h-10 bg-[#0A5C36] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#0A5C36]/20 hover:scale-105 active:scale-95 transition-all duration-200">
                            <Icon icon="solar:arrow-right-up-linear" className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
