import { Metadata } from 'next';
import { metaObject } from '@/lib/site.config';
import ActivitesClientPage from './client-page';

export const metadata: Metadata = metaObject(
    "Activités",
    "Expériences professionnelles, Formations et Projets de Quentin, Développeur Full-Stack.",
    "/activites"
);

export default function ActivitesPage() {
    return <ActivitesClientPage />;
}
