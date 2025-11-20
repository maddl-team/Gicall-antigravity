import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';
import { FaSun, FaExpandArrowsAlt, FaShieldAlt, FaPalette, FaLeaf, FaTools } from 'react-icons/fa';

const AluminumWindowsPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: <FaSun className="text-4xl text-amber-500" />,
            title: "Luminosità Senza Pari",
            description: "Profili minimali che lasciano fino al 30% di spazio in più al vetro e alla luce naturale."
        },
        {
            icon: <FaExpandArrowsAlt className="text-4xl text-amber-500" />,
            title: "Grandi Dimensioni",
            description: "Stabilità statica eccezionale per realizzare grandi vetrate panoramiche senza deformazioni."
        },
        {
            icon: <FaShieldAlt className="text-4xl text-amber-500" />,
            title: "Sicurezza e Resistenza",
            description: "Indestructibile, incombustibile e difficile da scardinare. Sicurezza passiva ai massimi livelli."
        },
        {
            icon: <FaLeaf className="text-4xl text-amber-500" />,
            title: "Taglio Termico",
            description: "Tecnologia avanzata con barretta in poliammide per prestazioni isolanti paragonabili al PVC."
        }
    ];

    return (
        <div className="font-sans text-slate-900 antialiased selection:bg-amber-100 selection:text-amber-900">
            <Helmet>
                <title>Finestre in Alluminio a Taglio Termico | Design e Isolamento - GICALL</title>
                <meta name="description" content="Infissi in alluminio a taglio termico di produzione propria. Profili minimali, grandi vetrate e massimo isolamento termico. Scopri le soluzioni GICALL a Roma e Orvieto." />
                <meta name="keywords" content="Finestre Alluminio Taglio Termico, Infissi Alluminio Roma, Serramenti Alluminio, Grandi Vetrate, Design Minimal" />
            </Helmet>

            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop"
                            alt="Finestra in alluminio moderna"
                            className="w-full h-full object-cover opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
                    </div>

                    <div className="container relative z-10 px-4 pt-20 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                                Finestre in Alluminio a Taglio Termico: <span className="text-amber-500">Design Puro</span> e Resistenza Eterna
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                                La scelta perfetta per chi ama lo stile moderno e le grandi superfici vetrate. Robustezza e isolamento termico si incontrano nella nostra produzione GICALL.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#contact" className="btn btn-primary text-lg px-8 py-4">
                                    Richiedi Preventivo
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Evolution Section */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                    Dimentica il vecchio alluminio. <br />
                                    <span className="text-amber-500">Benvenuto nel futuro.</span>
                                </h2>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Per anni l'alluminio è stato considerato un materiale "freddo", soggetto a condensa. Oggi, grazie alla tecnologia del <strong>Taglio Termico</strong>, tutto è cambiato.
                                </p>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    GICALL produce serramenti in alluminio di ultima generazione, dove la robustezza del metallo si unisce a un cuore isolante.
                                </p>
                                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-500">
                                    <h4 className="text-xl font-bold mb-2 text-slate-800">Cos'è il Taglio Termico?</h4>
                                    <p className="text-slate-600">
                                        All'interno del profilo in alluminio inseriamo una barretta in poliammide che interrompe la continuità termica tra l'esterno e l'interno. Questo "taglio" impedisce al freddo (o al caldo estivo) di passare, garantendo prestazioni energetiche paragonabili al PVC, ma con l'eleganza unica del metallo.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
                                    alt="Dettaglio profilo alluminio"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Advantages Grid */}
                <section className="section bg-slate-50">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                Perché scegliere i nostri infissi in Alluminio?
                            </h2>
                            <p className="text-lg text-slate-600">
                                Se cerchi una soluzione che duri per sempre e che valorizzi l'architettura della tua casa, l'alluminio è la risposta.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="mb-6">{feature.icon}</div>
                                    <h3 className="text-xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                                    <p className="text-slate-600">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Aesthetics & Customization */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
                                    alt="Personalizzazione alluminio"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="order-1 lg:order-2"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-amber-100 rounded-full">
                                        <FaPalette className="text-2xl text-amber-600" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                        Il colore che vuoi, <br />la forma che immagini.
                                    </h2>
                                </div>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Essendo produttori diretti, GICALL ti offre una libertà di personalizzazione assoluta. L'alluminio è il materiale che meglio si presta a giocare con i colori.
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-amber-500 shrink-0"></div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-1">Colori RAL</h4>
                                            <p className="text-slate-600">Scegli tra centinaia di tinte, dal bianco classico ai grigi moderni, fino ai colori più audaci.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-amber-500 shrink-0"></div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-1">Effetti Materici</h4>
                                            <p className="text-slate-600">Finiture ossidate, sabbiate o effetto legno super-realistico (sublimazione).</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-amber-500 shrink-0"></div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-1">Bicolore</h4>
                                            <p className="text-slate-600">Vuoi la facciata esterna scura e l'interno bianco? Con i nostri profili a taglio termico è possibile avere due colori diversi dentro e fuori.</p>
                                        </div>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Ideal Applications */}
                <section className="py-16 bg-slate-900 text-white">
                    <div className="container">
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="text-2xl md:text-3xl font-bold mb-8">Quando consigliamo l'Alluminio?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg">
                                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                    <span className="text-lg">Per ristrutturazioni moderne e contesti di design contemporaneo.</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg">
                                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                    <span className="text-lg">Per chi desidera manutenzione zero a vita.</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg">
                                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                    <span className="text-lg">Per abitazioni con grandi aperture o verande.</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg">
                                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                    <span className="text-lg">Per uffici e contesti commerciali che richiedono eleganza e sicurezza.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Installation Section */}
                <section className="section bg-slate-50">
                    <div className="container">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-amber-100 rounded-full">
                                        <FaTools className="text-2xl text-amber-600" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                        Una posa qualificata per prestazioni reali
                                    </h2>
                                </div>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Un infisso in alluminio a taglio termico funziona solo se posato correttamente. Se il controtelaio non è isolato, il beneficio si perde.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    I tecnici GICALL utilizzano sistemi di <strong>Posa Qualificata</strong>, impiegando nastri autoespandenti e barriere vapore per garantire che il "nodo primario" (muro-infisso) sia perfettamente sigillato, eliminando ponti termici e spifferi.
                                </p>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2532&auto=format&fit=crop"
                                    alt="Installazione professionale infissi"
                                    className="rounded-2xl shadow-xl w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Final */}
                <section className="py-20 bg-amber-500">
                    <div className="container text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Scegli l'eleganza dell'Alluminio GICALL
                        </h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                            Vieni a vedere la differenza nei nostri showroom. Tocca con mano la solidità dei profili e la fluidità delle aperture.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-white text-amber-600 font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-slate-100 transition-colors duration-300"
                        >
                            Prenota un Appuntamento
                        </a>
                    </div>
                </section>

                {/* Contact Section */}
                <div id="contact">
                    <ContactSection />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AluminumWindowsPage;
