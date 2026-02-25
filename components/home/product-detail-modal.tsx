'use client'
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface ProductDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: {
        title: string;
        description: string;
        sellerName: string;
        isVerified?: boolean;
        price: string;
        unit: string;
        distance: string;
        image: string;
        isPromo?: boolean;
    } | null;
}

export function ProductDetailModal({ isOpen, onClose, product }: ProductDetailModalProps) {
    const [quantity, setQuantity] = useState(1);

    // Disable scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!product) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-900 shadow-sm hover:bg-white transition-colors"
                        >
                            <Icon icon="solar:close-circle-bold" className="w-5 h-5" />
                        </button>

                        {/* Left: Image Section */}
                        <div className="relative w-full md:w-[40%] h-48 md:h-auto bg-slate-100">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />
                            {product.isPromo && (
                                <div className="absolute top-4 left-4 bg-[#D1F349] px-3 py-1 rounded-full shadow-lg">
                                    <span className="text-[10px] font-black text-[#0A5C36] uppercase tracking-widest">Promotion</span>
                                </div>
                            )}
                            <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto no-scrollbar">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-lg border-2 border-white/50 overflow-hidden shrink-0 cursor-pointer hover:border-white transition-all">
                                        <img src={product.image} className="w-full h-full object-cover" alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Info Section */}
                        <div className="flex-1 p-6 md:p-8 overflow-y-auto no-scrollbar flex flex-col">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-2 py-0.5 bg-emerald-50 text-[#0A5C36] text-[9px] font-black uppercase tracking-wider rounded-full border border-emerald-100">
                                    Produit Frais
                                </span>
                                <div className="flex items-center gap-1 text-slate-400">
                                    <Icon icon="solar:star-bold" className="w-4 h-4 text-amber-400" />
                                    <span className="text-sm font-bold text-slate-600">4.8</span>
                                    <span className="text-xs font-medium">(24 avis)</span>
                                </div>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-2">
                                {product.title}
                            </h2>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-black text-[#0A5C36]">{product.price}</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">CFA / {product.unit}</span>
                                </div>
                                <div className="h-5 w-px bg-slate-100 mx-2" />
                                <div className="flex items-center gap-1.5 text-slate-500">
                                    <Icon icon="solar:map-point-bold-duotone" className="w-4 h-4 text-[#0A5C36]" />
                                    <span className="text-xs font-bold">{product.distance}</span>
                                </div>
                            </div>

                            <div className="space-y-6 flex-1">
                                <div>
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Vendeur</h4>
                                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#0A5C36] shadow-sm font-black text-base">
                                                {product.sellerName.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-1">
                                                    <span className="text-sm font-bold text-slate-900">{product.sellerName}</span>
                                                    {product.isVerified && (
                                                        <Icon icon="solar:verified-check-bold" className="w-3.5 h-3.5 text-[#0A5C36]" />
                                                    )}
                                                </div>
                                                <p className="text-[10px] text-slate-500 font-medium">Membre depuis 2 ans</p>
                                            </div>
                                        </div>
                                        <button className="text-[#0A5C36] font-bold text-xs hover:underline">Voir le profil</button>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Description</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                        {product.description} Cultivé selon des normes biologiques strictes.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Disponibilité</p>
                                        <p className="text-xs font-bold text-slate-900">En stock (450 {product.unit})</p>
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Origine</p>
                                        <p className="text-xs font-bold text-slate-900">Agriculture Locale</p>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                                <div className="flex items-center bg-slate-100 p-1 rounded-xl">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm hover:text-red-500 transition-colors"
                                    >
                                        <Icon icon="solar:minus-bold" className="w-3.5 h-3.5" />
                                    </button>
                                    <span className="w-10 text-center text-sm font-black text-slate-900">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm hover:text-emerald-500 transition-colors"
                                    >
                                        <Icon icon="solar:add-bold" className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                                <Button className="flex-1 h-12 rounded-xl bg-[#0A5C36] hover:bg-[#084a2c] text-white font-bold text-sm gap-2 shadow-lg shadow-emerald-900/20 transition-all active:scale-[0.98]">
                                    <Icon icon="solar:cart-large-2-bold" className="w-5 h-5" />
                                    Ajouter au panier
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
