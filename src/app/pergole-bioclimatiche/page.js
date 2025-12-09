import PergolasPageContent from '@/components/PergolasPageContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
    title: "Pergole Bioclimatiche e Arredo Giardino | Outdoor Living - GICALL",
    description: "Vivi i tuoi spazi esterni tutto l'anno. Pergole bioclimatiche e pergotende motorizzate. Protezione solare e design Made in Italy a Roma e Orvieto.",
    keywords: "Pergole Bioclimatiche, Pergotende, Outdoor Living Roma",
    path: "/pergole-bioclimatiche",
});

export default function PergolasPage() {
    return <PergolasPageContent />;
}
