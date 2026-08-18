import { Metadata } from 'next';
import { metaObject } from '@/lib/site.config';
import { getLocale } from '@/lib/i18n/server';
import { getDictionary } from '@/lib/i18n/dictionaries';
import AboutClientPage from './client-page';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const t = getDictionary(locale);
    return metaObject(locale, t.meta.about.title, t.meta.about.description, "/a-propos");
}

export default function AboutPage() {
    return <AboutClientPage />;
}
