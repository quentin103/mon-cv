import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { metaObject, siteConfig } from "@/lib/site.config";

export const metadata = metaObject(
    "Blog | " + siteConfig.author,
    "Mon espace d'écriture : tutoriels, études de cas et pensées sur le développement web, Next.js, et plus encore.",
    "/blog"
);

export default function BlogPage() {
    const posts = getBlogPosts();

    // Fallback if no posts
    if (posts.length === 0) {
        return (
            <main className="min-h-screen pt-24 pb-16 bg-[#050505] text-white">
                <div className="w-full max-w-7xl mx-auto px-4 md:px-6 pt-15 md:pt-20">
                    <div className="p-8 rounded-2xl border border-white/5 bg-white/5 text-center">
                        <Icon icon="solar:folder-open-bold-duotone" className="w-12 h-12 text-stone-500 mx-auto mb-3" />
                        <p className="text-stone-400">Aucun article n'a été publié pour le moment.</p>
                    </div>
                </div>
            </main>
        );
    }

    const featuredPost = posts[0];
    const sidePosts = posts.slice(1, 4);
    const bottomPosts = posts.slice(4);

    return (
        <main className="min-h-screen pt-20 pb-16 bg-[#050505] text-white font-sans">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 pt-15 md:pt-20 z-10 mb-8">

                {/* Header */}
                <div className="mb-10 md:mb-12 border-b border-white/10 pb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-medium mb-4">
                        <Icon icon="solar:pen-bold-duotone" className="w-4 h-4 text-emerald-400" />
                        <span>Digital Garden</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                        Articles & <span className="text-emerald-400">Ressources</span>
                    </h1>
                </div>

                {/* Top Section Layout: Typographic Focus */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12">

                    {/* Left: Featured Post */}
                    <div className="lg:col-span-7 flex flex-col">
                        <Link href={`/blog/${featuredPost.slug}`} className="group flex flex-col h-full justify-center p-8 md:p-12 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 flex flex-col flex-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-3 py-1 text-xs font-semibold text-emerald-950 bg-emerald-400 rounded-full">{featuredPost.category || 'À la une'}</span>
                                    <span className="text-stone-500 text-sm font-medium">{new Date(featuredPost.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                </div>

                                <h2 className="text-2xl md:text-4xl font-bold text-stone-100 group-hover:text-emerald-400 transition-colors mb-6 leading-[1.15]">
                                    {featuredPost.title}
                                </h2>

                                <p className="text-stone-400 text-lg md:text-xl line-clamp-4 font-light mb-8 leading-relaxed">
                                    {featuredPost.description}
                                </p>

                                <div className="mt-auto flex items-center gap-2 text-emerald-400 font-medium group-hover:gap-4 transition-all">
                                    <span className="text-sm">Lire l'article</span>
                                    <Icon icon="solar:arrow-right-linear" className="w-5 h-5" />
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Right: Side Posts List */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {sidePosts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col p-6 rounded-2xl bg-[#0d1713]/50 border border-white/5 hover:bg-white/5 transition-all duration-300 flex-1 justify-center">
                                <div className="flex items-center justify-between mb-3 text-xs text-stone-500 font-medium">
                                    <span className="text-emerald-500/80 uppercase tracking-wider">{post.category || 'Tech'}</span>
                                    <span>{post.readingTime} read</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-stone-200 group-hover:text-emerald-400 transition-colors mb-3 leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-stone-400 text-sm line-clamp-2 md:line-clamp-3 font-light leading-relaxed">
                                    {post.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom Section Layout: Minimalist Text Cards */}
                {bottomPosts.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                        {bottomPosts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col p-6 rounded-2xl bg-transparent border border-white/5 hover:bg-white/5 hover:border-emerald-500/20 transition-all duration-300">
                                <div className="mb-4">
                                    <span className="text-xs text-stone-500 font-medium">{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-stone-200 group-hover:text-emerald-400 transition-colors mb-3 leading-snug">
                                    {post.title}
                                </h3>
                                <div className="mt-auto pt-6 flex gap-2 flex-wrap">
                                    {post.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="px-2 py-1 text-[11px] font-medium text-stone-400 bg-white/5 group-hover:bg-emerald-500/10 group-hover:text-emerald-300 transition-colors rounded-md">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

            </div>
        </main>
    );
}
