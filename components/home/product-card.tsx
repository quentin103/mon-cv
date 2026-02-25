import { Plus, Minus } from "lucide-react";

interface ProductCardProps {
    name: string;
    source: string;
    price: string;
    cents: string;
    image: string;
    tag?: string;
    tagColor?: string;
    quantity?: number;
}

export function ProductCard({ name, source, price, cents, image, tag, tagColor, quantity = 0 }: ProductCardProps) {
    return (
        <div className="bg-card dark:bg-card p-4 rounded-2xl hover:shadow-lg transition duration-300 group">
            <div className="relative aspect-square mb-4 bg-white dark:bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center p-4">
                <img
                    alt={name}
                    className="object-contain h-full w-full group-hover:scale-110 transition duration-500"
                    src={image}
                />
                {tag && (
                    <div className="absolute top-2 left-2">
                        <span className={`${tagColor} text-[10px] font-bold px-2 py-1 rounded`}>
                            {tag}
                        </span>
                    </div>
                )}
            </div>

            <div className="space-y-1">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 truncate">{name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{source}</p>
                <div className="flex items-end gap-1 pt-1">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">
                        ${price}.<span className="text-sm align-top">{cents}</span>
                    </span>
                </div>
            </div>

            {quantity > 0 ? (
                <div className="flex items-center justify-between mt-4 bg-primary/20 rounded-lg p-1">
                    <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-200 shadow-sm hover:bg-red-50 hover:text-red-500 transition">
                        <Minus className="h-4 w-4" />
                    </button>
                    <span className="font-bold text-slate-800 dark:text-white text-sm">{quantity}</span>
                    <button className="w-8 h-8 flex items-center justify-center rounded-md bg-primary text-white shadow-sm hover:bg-green-600 transition">
                        <Plus className="h-4 w-4" />
                    </button>
                </div>
            ) : (
                <button className="w-full mt-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-slate-900 text-slate-600 dark:text-slate-300 rounded-lg transition-colors flex items-center justify-center gap-2 group-hover:shadow-md">
                    <Plus className="h-4 w-4" /> Ajouter
                </button>
            )}
        </div>
    );
}
