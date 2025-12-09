import ServicesPageContent from '@/components/ServicesPageContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
    title: "Servizi GICALL | Progettazione, Posa Certificata e Assistenza - Roma e Orvieto",
    description: "Un servizio chiavi in mano. Dalla progettazione tecnica alla posa in opera qualificata, fino all'assistenza post-vendita e gestione pratiche fiscali. Affidati ai professionisti GICALL.",
    keywords: "Installazione Infissi Roma, Posa in Opera Serramenti, Assistenza Infissi, Progettazione Infissi, Bonus Fiscali Infissi",
    path: "/servizi",
});

export default function ServicesPage() {
    return <ServicesPageContent />;
}
