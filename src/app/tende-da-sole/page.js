import AwningsPageContent from '@/components/AwningsPageContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
    title: "Tende da Sole su Misura | Protezione Solare e Design - GICALL",
    description: "Tende da sole su misura per balconi, terrazzi e giardini. Tessuti certificati Tempotest Parà, strutture resistenti e motorizzazione. Installazione a Roma e Orvieto.",
    keywords: "Tende da Sole Roma, Tende a Bracci, Cappottine, Schermature Solari",
    path: "/tende-da-sole",
});

export default function AwningsPage() {
    return <AwningsPageContent />;
}
