interface CategoryCardProps {
    emoji: string;
    title: string;
    description: string;
    bgColor: string;
}

export function CategoryCard({ emoji, title, description, bgColor }: CategoryCardProps) {
    return (
        <a
            className="group bg-card dark:bg-slate-800 p-4 rounded-2xl shadow-sm hover:shadow-md transition border border-transparent hover:border-primary/20 flex flex-col items-center text-center gap-3"
            href="#"
        >
            <div className={`w-16 h-16 rounded-full ${bgColor} flex items-center justify-center group-hover:bg-primary/20 transition`}>
                <span className="text-3xl">{emoji}</span>
            </div>
            <div>
                <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100">{title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>
            </div>
        </a>
    );
}
