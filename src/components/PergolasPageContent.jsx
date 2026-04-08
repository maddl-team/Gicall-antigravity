"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiWind, FiUmbrella, FiMaximize, FiSun } from 'react-icons/fi';
import PergoleContactSection from './PergoleContactSection';
import TestimonialsSection from './TestimonialsSection';

const PergolasPageContent = () => {
    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <section className="relative min-h-screen md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/gicall_pergole_bioclimatiche_slide.webp"
                        alt="Pergole bioclimatiche"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
                </div>

                <div className="container relative z-10 text-center px-4 pt-48 pb-32 md:pt-20 md:pb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Pergole & Arredo Giardino: <span className="text-amber-500">Trasforma il tuo Esterno in una Stanza in Più</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Soluzioni di design per giardini e terrazzi. Crea la tua oasi d'ombra perfetta con le nostre schermature solari su misura, resistenti al vento e completamente automatizzate.
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

            {/* SEZIONE 1: OUTDOOR LIVING (Lifestyle) */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Riconquista i tuoi spazi all'aperto.
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Hai un terrazzo che usi solo la sera perché di giorno scotta? O un giardino dove non puoi pranzare per il troppo sole? Le soluzioni Outdoor GICALL nascono per questo: permetterti di vivere l'esterno della tua casa in qualsiasi momento della giornata e con qualsiasi condizione meteo.
                            </p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Non vendiamo semplice "ombra". Vendiamo colazioni in terrazza, pranzi domenicali in giardino e relax a bordo piscina. Dalla classica tenda a bracci alla pergola bioclimatica hi-tech, portiamo lo stile e il comfort del tuo salotto fuori dalle mura domestiche.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/gicall_pergole_dettaglio.webp"
                                alt="Dettaglio pergola"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 2: PERGOLE BIOCLIMATICHE (Il Top di Gamma) */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Pergole Bioclimatiche: Il Clima Ideale, Sempre.
                        </h2>
                        <p className="text-lg text-slate-600">
                            È il prodotto architettonico più desiderato del momento. La Pergola Bioclimatica è una struttura in alluminio dotata di una copertura a lamelle orientabili.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                                <FiWind className="text-2xl text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Ventilazione Naturale</h3>
                            <p className="text-slate-600">
                                Con il telecomando puoi ruotare le lamelle. Aperte leggermente creano una ventilazione naturale (effetto camino) che mantiene l'ambiente fresco anche sotto il sole cocente.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                                <FiUmbrella className="text-2xl text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Protezione Totale</h3>
                            <p className="text-slate-600">
                                Chiuse diventano un tetto impermeabile che ti protegge dalla pioggia.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                                <FiMaximize className="text-2xl text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Optional di Lusso</h3>
                            <p className="text-slate-600">
                                Puoi chiuderle lateralmente con vetrate scorrevoli (per usarle anche d'inverno) o tende a caduta (zip), e integrarle con illuminazione LED per creare atmosfere magiche di sera.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 3: LE PERGOTENDE (Versatilità) */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/gicall_pergole_giardino.webp"
                                alt="Pergola in giardino"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Pergotende: Eleganza in Movimento.
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                La soluzione perfetta per chi vuole poter "scoprire" completamente il cielo. La Pergotenda è una struttura (in alluminio o legno) con una copertura in PVC impacchettabile. Premi un tasto e il telo si ritrae completamente, lasciando entrare tutta la luce. Quando è chiuso, il tessuto tecnico garantisce impermeabilità totale e resistenza ai raggi UV.
                            </p>
                            <p className="text-lg text-slate-600">
                                <strong>Ideale per:</strong> Verande, terrazzi condominiali e attività commerciali (Bar/Ristoranti) che vogliono sfruttare il dehors tutto l'anno.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 5: DOMOTICA E SICUREZZA (Tecnica) */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Il vento non fa più paura.
                    </h2>
                    <p className="text-lg text-slate-300 mb-10">
                        Le nostre tende e pergole sono intelligenti. Grazie alla motorizzazione e ai sensori climatici, si autogestiscono per la massima sicurezza:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <FiWind className="text-amber-500" /> Anemometro (Sensore Vento)
                            </h3>
                            <p className="text-slate-300">
                                Se il vento diventa pericoloso, la tenda si riavvolge o le lamelle della pergola si aprono automaticamente per evitare "l'effetto vela" e danni strutturali.
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

            {/* SEZIONE 6: ECOBONUS 50% (Leva Fiscale) */}
            <section className="py-20 bg-amber-50">
                <div className="container text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Risparmia con le Schermature Solari.
                    </h2>
                    <p className="text-lg text-slate-700 mb-8">
                        Installare una tenda da sole o una pergola non è solo una questione estetica, ma di Efficienza Energetica. Ombreggiando le finestre, riduci il calore che entra in casa e quindi l'uso del condizionatore. Per questo motivo, i prodotti GICALL rientrano nell'Ecobonus (Detrazione Fiscale del 50%) per le schermature solari.
                    </p>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <TestimonialsSection />

            {/* SEZIONE 7: CTA FINALE */}
            <section className="pt-0 pb-20 bg-white text-center">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                        Vivi la tua estate al fresco.
                    </h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Non aspettare luglio per decidere. Vieni nei nostri showroom a vedere i tessuti e a provare il funzionamento delle pergole bioclimatiche.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-amber-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                    >
                        RICHIEDI SOPRALLUOGO GRATUITO
                    </a>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <div id="contact">
                <PergoleContactSection />
            </div>
        </div>
    );
};

export default PergolasPageContent;
