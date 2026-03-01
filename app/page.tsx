import { Metadata } from 'next';
import { metaObject } from '@/lib/site.config';
import HomeClientPage from './client-page';

export const metadata: Metadata = metaObject(
    "Quentin | Portfolio",
    "Bienvenue sur mon portfolio de développeur. Découvrez mes expertises, mes projets et ma passion de l'UI/UX.",
    "/"
);

export default function HomePage() {
    return <HomeClientPage />;
}
