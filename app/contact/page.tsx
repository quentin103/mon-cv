import { Metadata } from 'next';
import { metaObject } from '@/lib/site.config';
import ContactClientPage from './client-page';

export const metadata: Metadata = metaObject(
    "Contact",
    "N'hésitez pas à me contacter pour discuter de votre prochain projet, d'une opportunité professionnelle ou simplement échanger sur le développement.",
    "/contact"
);

export default function ContactPage() {
    return <ContactClientPage />;
}
