import HeroSection from '../components/HeroSection';
import USPSection from '../components/USPSection';
import ServicesSection from '../components/ServicesSection';
import MethodSection from '../components/MethodSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PartnersSection from '../components/PartnersSection';
import ShowroomsSection from '../components/ShowroomsSection';
import ContactSection from '../components/ContactSection';
import SocialFeedSection from '../components/SocialFeedSection';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'GICALL | Produzione Infissi e Serramenti - Eccellenza 5 Stelle a Roma e Orvieto',
  description: 'Dal produttore a casa tua. Oltre 75 recensioni a 5 stelle confermano la qualità GICALL. Finestre PVC, alluminio, blindate e outdoor. Chiedi un preventivo fabbrica.',
  keywords: 'Produzione infissi, Serramenti Roma, Serramenti Orvieto, Fabbrica infissi, Finestre PVC',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <USPSection />
      <ServicesSection />
      <MethodSection />
      <TestimonialsSection />
      <PartnersSection />
      <ShowroomsSection />
      <ContactSection />
      <SocialFeedSection />
    </>
  );
}
