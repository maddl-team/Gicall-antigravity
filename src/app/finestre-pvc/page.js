import PvcWindowsPageContent from '@/components/PvcWindowsPageContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
    title: "Finestre in PVC Roma e Orvieto | Produzione su Misura - GICALL",
    description: "Produzione diretta finestre in PVC ad alto isolamento termico. Prezzi di fabbrica, profili Classe A e posa certificata. Scopri le offerte a Roma e Orvieto.",
    keywords: "Finestre in PVC Roma, Produzione Infissi PVC, Serramenti PVC, Fabbrica Infissi Roma",
    path: "/finestre-pvc",
});

export default function PvcWindowsPage() {
    return <PvcWindowsPageContent />;
}
