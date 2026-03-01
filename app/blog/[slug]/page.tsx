import { getPostBySlug, getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

// Next.js ISR/SSG configuration
export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug);

    if (!post) {
        return { title: 'Article introuvable' };
    }

    return {
        title: `${post.frontmatter.title} | Blog`,
        description: post.frontmatter.description,
        openGraph: {
            title: post.frontmatter.title,
            description: post.frontmatter.description,
            type: "article",
            publishedTime: post.frontmatter.date,
            tags: post.frontmatter.tags,
        },
    };
}

// Custom MDX Components for better styling
const mdxComponents = {
    h1: (props: any) => <h1 className="text-3xl md:text-5xl font-bold mt-10 mb-6 text-white" {...props} />,
    h2: (props: any) => <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-emerald-400" {...props} />,
    h3: (props: any) => <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-stone-200" {...props} />,
    p: (props: any) => <p className="text-stone-300 leading-relaxed mb-6 font-light" {...props} />,
    ul: (props: any) => <ul className="list-disc pl-6 mb-6 text-stone-300 space-y-2 font-light" {...props} />,
    ol: (props: any) => <ol className="list-decimal pl-6 mb-6 text-stone-300 space-y-2 font-light" {...props} />,
    li: (props: any) => <li className="text-stone-300" {...props} />,
    blockquote: (props: any) => (
        <blockquote className="border-l-4 border-emerald-500 pl-4 py-1 italic my-6 bg-white/5 rounded-r-lg text-stone-400" {...props} />
    ),
    code: (props: any) => <code className="bg-white/10 text-emerald-300 px-1.5 py-0.5 rounded-md font-mono text-sm" {...props} />,
    pre: (props: any) => (
        <pre className="p-4 rounded-xl mb-6 font-mono text-sm overflow-x-auto bg-[#0d1713] border border-white/10 custom-scrollbar text-stone-300" {...props} />
    ),
    a: (props: any) => <a className="text-emerald-400 hover:underline hover:text-emerald-300 transition-colors" target="_blank" rel="noopener noreferrer" {...props} />,
};

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-24 pb-16 bg-[#050505] text-white">
            <article className="w-full max-w-7xl mx-auto px-4 md:px-6 pt-15 md:pt-20 z-10 mb-8">

                {/* Back button */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-emerald-400 transition-colors mb-8 sm:mb-12 font-medium"
                >
                    <Icon icon="solar:arrow-left-linear" className="w-5 h-5" />
                    <span>Retour aux articles</span>
                </Link>

                {/* Header */}
                <header className="mb-12 border-b border-white/10 pb-12">
                    <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                        {post.frontmatter.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-stone-500 mb-6">
                        <span className="flex items-center gap-1.5">
                            <Icon icon="solar:calendar-bold-duotone" className="w-4 h-4 md:w-5 md:h-5 text-emerald-500/70" />
                            {new Date(post.frontmatter.date).toLocaleDateString('fr-FR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                        <span className="flex items-center gap-1.5">
                            <Icon icon="solar:clock-circle-bold-duotone" className="w-4 h-4 md:w-5 md:h-5 text-emerald-500/70" />
                            {post.frontmatter.readingTime}
                        </span>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                        {post.frontmatter.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-invert prose-emerald max-w-none">
                    <MDXRemote source={post.content} components={mdxComponents} />
                </div>
            </article>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    height: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </main>
    );
}
