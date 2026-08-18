import { Metadata } from 'next';
import { metaObject } from '@/lib/site.config';
import { getLocale } from '@/lib/i18n/server';
import { getDictionary } from '@/lib/i18n/dictionaries';
import HomeClientPage from './client-page';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const t = getDictionary(locale);
    return metaObject(locale, t.meta.home.title, t.meta.home.description, "/");
}

export default function HomePage() {
    return <HomeClientPage />;
}
