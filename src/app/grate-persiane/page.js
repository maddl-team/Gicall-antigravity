import GratingsShuttersPageContent from '@/components/GratingsShuttersPageContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
    title: "Grate e Persiane Blindate | Sicurezza e Design su Misura - GICALL",
    description: "Proteggi la tua casa senza rinunciare all'estetica. Grate di sicurezza snodate e persiane blindate in acciaio certificate Classe 3. Produzione e installazione a Roma e Orvieto.",
    keywords: "Grate di Sicurezza Roma, Persiane Blindate",
    path: "/grate-persiane",
});

export default function GratingsShuttersPage() {
    return <GratingsShuttersPageContent />;
}
