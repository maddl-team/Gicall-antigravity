import SlidingSystemsPageContent from '@/components/SlidingSystemsPageContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
    title: "Sistemi Scorrevoli e Grandi Vetrate | Alzanti e Paralleli - GICALL",
    description: "Trasforma le tue pareti in luce. Sistemi scorrevoli alzanti e paralleli in PVC e Alluminio. Soglie ribassate, massimo isolamento e design panoramico.",
    keywords: "Alzanti Scorrevoli Roma, Vetrate Scorrevoli, Sistemi Scorrevoli, Grandi Vetrate, Scorrevoli Paralleli, Open Space",
    path: "/sistemi-scorrevoli",
});

export default function SlidingSystemsPage() {
    return <SlidingSystemsPageContent />;
}
