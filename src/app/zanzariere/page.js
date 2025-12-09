import MosquitoNetsPageContent from '@/components/MosquitoNetsPageContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
    title: "Zanzariere su Misura | Scorrevoli, Plissettate e a Molla - GICALL",
    description: "Basta insetti in casa. Zanzariere resistenti e di design su misura per finestre e balconi. Modelli plissettati, a rullo e magnetici. Installazione a Roma e Orvieto.",
    keywords: "Zanzariere su misura Roma, Installazione Zanzariere",
    path: "/zanzariere",
});

export default function MosquitoNetsPage() {
    return <MosquitoNetsPageContent />;
}
