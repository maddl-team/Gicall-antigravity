import ContactsPageContent from '@/components/ContactsPageContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
    title: "Contatti GICALL | Showroom Roma e Orvieto - Preventivi e Assistenza",
    description: "Parla con i tecnici GICALL. Visita i nostri showroom a Capena (Roma) e Orvieto. Richiedi un preventivo gratuito o assistenza tecnica. Chiama ora.",
    keywords: "Contatti GICALL, Showroom Infissi Roma, Showroom Infissi Orvieto, Preventivi Infissi, Assistenza Infissi",
    path: "/contatti",
});

export default function ContactsPage() {
    return <ContactsPageContent />;
}
