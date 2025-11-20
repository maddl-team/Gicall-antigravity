import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import USPSection from '../components/USPSection';
import ServicesSection from '../components/ServicesSection';
import MethodSection from '../components/MethodSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PartnersSection from '../components/PartnersSection';
import ShowroomsSection from '../components/ShowroomsSection';
import ContactSection from '../components/ContactSection';
import SocialFeedSection from '../components/SocialFeedSection';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <title>GICALL | Produzione Infissi e Serramenti - Eccellenza 5 Stelle a Roma e Orvieto</title>
            <meta
                name="description"
                content="Dal produttore a casa tua. Oltre 75 recensioni a 5 stelle confermano la qualità GICALL. Finestre PVC, alluminio, blindate e outdoor. Chiedi un preventivo fabbrica."
            />
            <meta name="keywords" content="Produzione infissi, Serramenti Roma, Serramenti Orvieto, Fabbrica infissi, Finestre PVC" />


            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <HeroSection />
                    <USPSection />
                    <ServicesSection />
                    <MethodSection />
                    <TestimonialsSection />
                    <PartnersSection />
                    <ShowroomsSection />
                    <ContactSection />
                    <SocialFeedSection />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default HomePage;
