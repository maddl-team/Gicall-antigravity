import AluminumWindowsPageContent from '@/components/AluminumWindowsPageContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
    title: "Finestre in Alluminio a Taglio Termico | Design e Isolamento - GICALL",
    description: "Infissi in alluminio a taglio termico di produzione propria. Profili minimali, grandi vetrate e massimo isolamento termico. Scopri le soluzioni GICALL a Roma e Orvieto.",
    keywords: "Finestre Alluminio Taglio Termico, Infissi Alluminio Roma, Serramenti Alluminio, Grandi Vetrate, Design Minimal",
    path: "/finestre-alluminio",
});

export default function AluminumWindowsPage() {
    return <AluminumWindowsPageContent />;
}
