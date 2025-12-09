import SecurityDoorsPageContent from '@/components/SecurityDoorsPageContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
    title: "Porte Blindate su Misura | Sicurezza Classe 3 e 4 - GICALL",
    description: "Dormi sonni tranquilli con le porte blindate GICALL. Certificazione antieffrazione Classe 3 e 4, serrature europee e pannelli personalizzati. Scegli la sicurezza a Roma e Orvieto.",
    keywords: "Porte Blindate Roma, Portoncini di Ingresso Sicurezza",
    path: "/porte-blindate",
});

export default function SecurityDoorsPage() {
    return <SecurityDoorsPageContent />;
}
