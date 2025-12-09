import RollerShuttersPageContent from '@/components/RollerShuttersPageContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
    title: "Avvolgibili e Cassonetti Coibentati | Isolamento e Domotica - GICALL",
    description: "Migliora l'isolamento della tua casa. Sostituzione tapparelle in PVC, alluminio e acciaio, motorizzazione e cassonetti coibentati senza opere murarie. Roma e Orvieto.",
    keywords: "Avvolgibili Roma, Cassonetti Coibentati, Tapparelle Elettriche",
    path: "/avvolgibili-cassonetti",
});

export default function RollerShuttersPage() {
    return <RollerShuttersPageContent />;
}
