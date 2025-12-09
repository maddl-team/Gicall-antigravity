import WoodAluminumWindowsPageContent from '@/components/WoodAluminumWindowsPageContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
    title: "Finestre in Legno Alluminio | La Sintesi Perfetta tra Natura e Tecnologia - GICALL",
    description: "Il calore del legno all'interno, la resistenza dell'alluminio all'esterno. Infissi di pregio a manutenzione zero. Produzione su misura a Roma e Orvieto.",
    keywords: "Finestre Legno Alluminio Roma, Infissi Legno Alluminio, Serramenti misti, Infissi pregio Roma",
    path: "/finestre-legno-alluminio",
});

export default function WoodAluminumWindowsPage() {
    return <WoodAluminumWindowsPageContent />;
}
