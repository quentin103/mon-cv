import { Metadata } from 'next';
import { metaObject } from '@/lib/site.config';
import AboutClientPage from './client-page';

export const metadata: Metadata = metaObject(
    "À Propos",
    "Découvrez qui je suis, ma passion pour le code, mon approche du design et de l'innovation tech.",
    "/a-propos"
);

export default function AboutPage() {
    return <AboutClientPage />;
}
