import IronWorksPageContent from '@/components/IronWorksPageContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
    title: "Lavorazioni in Ferro e Cancelli | Artigianato e Design su Misura - GICALL",
    description: "Produzione artigianale di cancelli, recinzioni e scale in ferro. Design classico e moderno a taglio laser. Zincatura a caldo e verniciatura a forno per una durata eterna. Roma e Orvieto.",
    keywords: "Lavorazioni in ferro Roma, Cancelli in ferro moderni, Recinzioni metalliche, Fabbro Roma, Ringhiere su misura",
    path: "/lavorazioni-ferro",
});

export default function IronWorksPage() {
    return <IronWorksPageContent />;
}
