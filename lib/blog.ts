import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content', 'blog');

export type BlogPostFrontMatter = {
    title: string;
    date: string;
    description: string;
    tags: string[];
    slug: string;
    readingTime: string;
    image?: string;
    category?: string;
};

export type BlogPost = {
    frontmatter: BlogPostFrontMatter;
    content: string;
};

export function getBlogPosts(): BlogPostFrontMatter[] {
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(contentDirectory);

    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx?$/, '');
            const fullPath = path.join(contentDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title || 'Untitled',
                date: data.date || "2026-01-01",
                description: data.description || '',
                tags: data.tags || [],
                readingTime: data.readingTime || '5 min',
                image: data.image || `https://picsum.photos/seed/${slug}/800/600`,
                category: data.category || 'Tech',
            };
        });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getPostBySlug(slug: string): BlogPost | null {
    try {
        let fullPath = path.join(contentDirectory, `${slug}.mdx`);

        if (!fs.existsSync(fullPath)) {
            fullPath = path.join(contentDirectory, `${slug}.md`);
        }

        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            frontmatter: {
                slug,
                title: data.title || 'Untitled',
                date: data.date || "2026-01-01",
                description: data.description || '',
                tags: data.tags || [],
                readingTime: data.readingTime || '5 min',
                image: data.image || `https://picsum.photos/seed/${slug}/800/600`,
                category: data.category || 'Tech',
            },
            content,
        };
    } catch (error) {
        return null;
    }
}
