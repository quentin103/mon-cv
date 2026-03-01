'use client'
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (filters: any[]) => void;
    currentFilters: any[];
}

const FILTER_SECTIONS = [
    {
        title: "Type de vente",
        type: "type",
        options: [
            { id: 't-1', label: 'Vente en gros', icon: 'solar:shop-bold-duotone' },
            { id: 't-2', label: 'Vente au détail', icon: 'solar:bag-bold-duotone' },
            { id: 't-3', label: 'Production Bio', icon: 'solar:leaf-bold-duotone' },
        ]
    },
    {
        title: "Quantité disponible",
        type: "quantity",
        options: [
            { id: 'q-1', label: 'Moins de 10kg', icon: 'solar:box-linear' },
            { id: 'q-2', label: '10kg - 50kg', icon: 'solar:box-bold' },
            { id: 'q-3', label: 'Plus de 50kg', icon: 'solar:box-bold-duotone' },
        ]
    },
    {
        title: "Localisation",
        type: "location",
        options: [
            { id: 'l-1', label: 'Dakar', icon: 'solar:map-point-bold-duotone' },
            { id: 'l-2', label: 'Thiès', icon: 'solar:map-point-bold-duotone' },
            { id: 'l-3', label: 'Saint-Louis', icon: 'solar:map-point-bold-duotone' },
            { id: 'l-4', label: 'Casamance', icon: 'solar:map-point-bold-duotone' },
        ]
    }
];

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (filters: any[]) => void;
    currentFilters: any[];
    categories: { id: string, name: string, icon: string }[];
}

export function MarketFilterModal({ isOpen, onClose, onApply, currentFilters, categories }: FilterModalProps) {
    const filterOptions = [
        {
            title: "Catégories",
            type: "category",
            options: categories.filter(c => c.id !== 'all').map(c => ({
                id: `cat-${c.id}`,
                label: c.name,
                icon: c.icon,
                categoryId: c.id
            }))
        },
        ...FILTER_SECTIONS
    ];
    const [selectedFilters, setSelectedFilters] = useState<any[]>(currentFilters);

    useEffect(() => {
        setSelectedFilters(currentFilters);
    }, [currentFilters, isOpen]);

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

    const toggleFilter = (option: any, type: string) => {
        setSelectedFilters(prev => {
            const exists = prev.find(f => f.id === option.id);
            if (exists) {
                return prev.filter(f => f.id !== option.id);
            } else {
                return [...prev, { ...option, type }];
            }
        });
    };

    const handleApply = () => {
        onApply(selectedFilters);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-100 flex items-end sm:items-center justify-center p-0 sm:p-6">
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
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        className="relative w-full max-w-3xl bg-white rounded-t-[2.5rem] sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-black text-stone-900">Filtres</h2>
                                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mt-1">Affinez votre recherche</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-stone-400 hover:text-stone-600 transition-colors"
                            >
                                <Icon icon="solar:close-circle-bold" className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-6 no-scrollbar">
                            <div className="grid md:grid-cols-2 gap-4">
                                {filterOptions.map((section) => (
                                    <div key={section.title} className="space-y-3">
                                        <h3 className="text-[10px] font-black text-stone-400 uppercase tracking-widest flex items-center gap-2">
                                            <div className="w-1 h-3 bg-[#0A5C36] rounded-full" />
                                            {section.title}
                                        </h3>
                                        <div className={`grid ${section.type === 'category' ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}>
                                            {section.options.map((option) => {
                                                const isSelected = selectedFilters.some(f => f.id === option.id);
                                                return (
                                                    <button
                                                        key={option.id}
                                                        onClick={() => toggleFilter(option, section.type)}
                                                        className={`
                                                        flex items-center justify-between p-3 rounded-xl border transition-all duration-200
                                                        ${isSelected
                                                                ? 'bg-emerald-50 border-[#0A5C36] text-[#0A5C36]'
                                                                : 'bg-slate-50 border-transparent text-stone-600 hover:border-slate-200'
                                                            }
                                                    `}
                                                    >
                                                        <div className="flex items-center gap-2.5">
                                                            <Icon icon={option.icon} className={`w-4 h-4 ${isSelected ? 'text-[#0A5C36]' : 'text-stone-400'}`} />
                                                            <span className="font-bold text-xs">{option.label}</span>
                                                        </div>
                                                        {isSelected && (
                                                            <Icon icon="solar:check-circle-bold" className="w-4 h-4 text-[#0A5C36]" />
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t border-slate-100 bg-white flex items-center gap-3">
                            <Button
                                variant="ghost"
                                className="h-11 px-4 rounded-xl font-bold text-stone-400 hover:bg-slate-50 text-xs"
                                onClick={() => setSelectedFilters([])}
                            >
                                Réinitialiser
                            </Button>
                            <Button
                                className="flex-1 h-11 rounded-xl bg-[#0A5C36] hover:bg-[#084a2c] text-white font-bold text-xs shadow-lg shadow-emerald-900/10"
                                onClick={handleApply}
                            >
                                Valider ({selectedFilters.length})
                            </Button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
