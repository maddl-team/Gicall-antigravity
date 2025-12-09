import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiWind, FiUmbrella, FiZap, FiHome, FiMaximize } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const AwningsPage = () => {
    return (
        <>
            <title>Tende da Sole su Misura | Protezione Solare e Design - GICALL</title>
            <meta name="description" content="Tende da sole su misura per balconi, terrazzi e giardini. Tessuti certificati Tempotest Parà, strutture resistenti e motorizzazione. Installazione a Roma e Orvieto." />
            <meta name="keywords" content="Tende da Sole Roma, Tende a Bracci, Cappottine, Schermature Solari" />

            <Header />

            <main className="bg-white">
                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/gicall_tende-da-sole_slide.jpg"
                            alt="Tende da sole"
                            className="w-full h-full object-cover opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
                    </div>

                    <div className="container relative z-10 text-center px-4 pt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Tende da Sole: <span className="text-amber-500">Protezione e Design Made in Italy</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                                Crea la tua oasi d'ombra perfetta con le nostre schermature solari su misura, resistenti al vento e completamente automatizzate.
                            </p>
                            <a
                                href="#contact"
                                className="inline-block bg-amber-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                            >
                                PROGETTA IL TUO OUTDOOR
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* SEZIONE 1: TENDE DA SOLE (La Tradizione Evoluta) */}
                <section className="py-20 bg-white">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                    Tende da Sole su Misura.
                                </h2>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Il classico che non tramonta mai, ma con la tecnologia di oggi. Realizziamo tende da sole con tessuti certificati (es. Tempotest Parà) garantiti contro lo scolorimento.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-slate-600"><strong>Tende a Bracci Estensibili:</strong> Per coprire balconi e terrazzi senza ingombri a terra.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-slate-600"><strong>Tende a Caduta / Verticali:</strong> Ideali per chiudere porticati o logge, offrendo privacy e protezione dal vento.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-slate-600"><strong>Cappottine:</strong> L'eleganza classica per ville o negozi.</p>
                                    </li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="/images/gicall_tende-da-sole_dettaglio.webp"
                                    alt="Tenda da sole"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 2: DOMOTICA E SICUREZZA (Tecnica) */}
                <section className="py-20 bg-slate-900 text-white">
                    <div className="container text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Il vento non fa più paura.
                        </h2>
                        <p className="text-lg text-slate-300 mb-10">
                            Le nostre tende sono intelligenti. Grazie alla motorizzazione e ai sensori climatici, si autogestiscono per la massima sicurezza:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <FiWind className="text-amber-500" /> Anemometro (Sensore Vento)
                                </h3>
                                <p className="text-slate-300">
                                    Se il vento diventa pericoloso, la tenda si riavvolge automaticamente per evitare "l'effetto vela" e danni strutturali.
                                </p>
                            </div>
                            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <FiSun className="text-amber-500" /> Sensore Sole/Pioggia
                                </h3>
                                <p className="text-slate-300">
                                    La tenda si apre da sola quando esce il sole per proteggere i tuoi pavimenti e mobili interni dal calore.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 3: ECOBONUS 50% (Leva Fiscale) */}
                <section className="py-20 bg-amber-50">
                    <div className="container text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Risparmia con le Schermature Solari.
                        </h2>
                        <p className="text-lg text-slate-700 mb-8">
                            Installare una tenda da sole non è solo una questione estetica, ma di Efficienza Energetica. Ombreggiando le finestre, riduci il calore che entra in casa e quindi l'uso del condizionatore. Per questo motivo, i prodotti GICALL rientrano nell'Ecobonus (Detrazione Fiscale del 50%) per le schermature solari.
                        </p>
                    </div>
                </section>

                {/* SEZIONE 4: CTA FINALE */}
                <section className="py-20 bg-white text-center">
                    <div className="container max-w-3xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                            Vivi la tua estate al fresco.
                        </h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Non aspettare luglio per decidere. Vieni nei nostri showroom a vedere i tessuti e a provare il funzionamento delle nostre tende.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-amber-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                        >
                            RICHIEDI SOPRALLUOGO GRATUITO
                        </a>
                        <div className="mt-4">
                            <a href="/assets/catalogo-outdoor.pdf" className="text-slate-500 hover:text-amber-500 transition-colors underline" onClick={(e) => e.preventDefault()}>Scarica il catalogo Outdoor GICALL.</a>
                        </div>
                    </div>
                </section>

                {/* CONTACT SECTION */}
                <div id="contact">
                    <ContactSection />
                </div>
            </main>

            <Footer />
        </>
    );
};

export default AwningsPage;
