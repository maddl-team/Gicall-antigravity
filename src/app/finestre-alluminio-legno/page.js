import AluminumWoodWindowsPageContent from '@/components/AluminumWoodWindowsPageContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
    title: "Finestre Alluminio Legno Roma | Struttura Eterna, Cuore Caldo - GICALL",
    description: "La resistenza dell'alluminio a taglio termico unita al design del legno massello interno. Profili snelli, sicurezza e zero manutenzione. Scopri la collezione Gicall.",
    keywords: "Finestre Alluminio Legno Roma, Finestre Alluminio Legno, Infissi Alluminio Legno, Gicall Serramenti",
    path: "/finestre-alluminio-legno",
});

export default function AluminumWoodWindowsPage() {
    return <AluminumWoodWindowsPageContent />;
}
