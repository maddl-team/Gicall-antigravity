import InteriorDoorsPageContent from '@/components/InteriorDoorsPageContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
    title: "Porte da Interno di Design | Laccate, Legno e Filo Muro - GICALL",
    description: "Arreda la tua casa con le porte interne GICALL. Ampia scelta tra porte laccate, laminate, in legno massello e soluzioni filo muro. Design Made in Italy a Roma e Orvieto.",
    keywords: "Porte da Interno Roma, Vendita Porte Interne",
    path: "/porte-interne",
});

export default function InteriorDoorsPage() {
    return <InteriorDoorsPageContent />;
}
