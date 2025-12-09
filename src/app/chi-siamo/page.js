import AboutPageContent from '@/components/AboutPageContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
    title: "Chi Siamo | GICALL - Fabbrica di Infissi e Serramenti Made in Italy",
    description: "Entra nella fabbrica GICALL. Da oltre 20 anni progettiamo e produciamo infissi a Roma e Orvieto. Scopri la qualità artigianale unita alla tecnologia industriale.",
    keywords: "Fabbrica Infissi Roma, Produzione Serramenti Made in Italy, Gicall Chi Siamo",
    path: "/chi-siamo",
});

export default function AboutPage() {
    return <AboutPageContent />;
}
