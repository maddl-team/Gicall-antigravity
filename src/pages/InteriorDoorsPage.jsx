import { motion } from 'framer-motion';
import { FiCheck, FiMaximize, FiLayout, FiBox, FiUnlock } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const InteriorDoorsPage = () => {
    return (
        <>
            <title>Porte da Interno di Design | Laccate, Legno e Filo Muro - GICALL</title>
            <meta name="description" content="Arreda la tua casa con le porte interne GICALL. Ampia scelta tra porte laccate, laminate, in legno massello e soluzioni filo muro. Design Made in Italy a Roma e Orvieto." />
            <meta name="keywords" content="Porte da Interno Roma, Vendita Porte Interne" />

            <Header />

            <main className="bg-white">
                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop"
                            alt="Porta interna di design"
                            className="w-full h-full object-cover opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
                    </div>

                    <div className="container relative z-10 text-center px-4 pt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Porte da Interno: <span className="text-amber-500">Il Primo Mobile della Tua Casa</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                                Non servono solo a dividere gli spazi, ma a definirli. Scopri la nostra collezione di porte interne: dal classico legno al moderno filo muro, progettate per armonizzarsi col tuo stile.
                            </p>
                            <a
                                href="/assets/catalogo-porte.pdf" // Placeholder link
                                className="inline-block bg-amber-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                                onClick={(e) => e.preventDefault()} // Prevent default for now
                            >
                                SCARICA IL CATALOGO PORTE
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* SEZIONE 1: ARREDARE CON LE PORTE (Concept) */}
                <section className="py-20 bg-white">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                    Il dettaglio che fa la differenza.
                                </h2>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Spesso, durante una ristrutturazione, le porte interne vengono scelte per ultime. Niente di più sbagliato. La porta è l'elemento che vedi, tocchi e usi più spesso in assoluto. Una porta GICALL non è una semplice barriera: è un elemento d'arredo capace di trasformare un corridoio anonimo in una galleria di design o di dare calore a un living minimalista.
                                </p>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Che tu stia cercando l'invisibilità totale o una porta che catturi l'attenzione, abbiamo la soluzione che parla la tua lingua.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1974&auto=format&fit=crop"
                                    alt="Dettaglio porta interna"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 2: I MATERIALI E LE FINITURE */}
                <section className="py-20 bg-slate-50">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Quale superficie fa per te?
                            </h2>
                            <p className="text-lg text-slate-600">
                                La scelta del materiale definisce il carattere della stanza e il budget. Ecco le nostre linee principali:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Porte Laccate (L'Eleganza Moderna)</h3>
                                <p className="text-slate-600 mb-4">
                                    La scelta preferita per le case contemporanee. Superfici lisce, setose al tatto, disponibili in finitura <strong>Opaca (Soft Touch)</strong> o <strong>Lucida Brillante</strong>.
                                </p>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    <li><strong>Colori:</strong> Bianco, Avorio, Tortora, Grigio e tutta la scala RAL.</li>
                                    <li><strong>Vantaggio:</strong> Pulizia estetica assoluta e luminosità.</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Porte in Laminato (Resistenza e Stile)</h3>
                                <p className="text-slate-600 mb-4">
                                    La soluzione intelligente. Grazie alle nuove tecnologie, i nostri laminati riproducono fedelmente le venature del legno o l'effetto cemento ("Materico"), offrendo però una resistenza superiore.
                                </p>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    <li><strong>Vantaggio:</strong> Antigraffio, resistenti all'umidità, facili da pulire e con un ottimo rapporto qualità-prezzo. Ideali per famiglie con bambini o animali.</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Porte in Legno (Il Classico Intramontabile)</h3>
                                <p className="text-slate-600 mb-4">
                                    Per chi ama la tradizione. Porte in legno massello o impiallacciato, dove la venatura naturale è la protagonista.
                                </p>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    <li><strong>Vantaggio:</strong> Prestigio, calore e una durata eterna. Ogni porta è un pezzo unico grazie alle naturali imperfezioni del legno.</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Porte in Vetro</h3>
                                <p className="text-slate-600 mb-4">
                                    Per dividere senza oscurare. Porte a tutto vetro (trasparenti, satinate, decorate o fumé) per lasciar fluire la luce tra cucina e soggiorno.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 3: I SISTEMI DI APERTURA (Tecnica) */}
                <section className="py-20 bg-white">
                    <div className="container">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
                            Spazio e Funzionalità.
                        </h2>
                        <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
                            Non hai spazio per una classica apertura a battente? Nessun problema. In GICALL progettiamo l'apertura in base ai tuoi spazi:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "A Battente",
                                    desc: "La classica apertura, con cerniere a vista (Anuba) o a scomparsa per un look più pulito.",
                                    icon: <FiLayout className="text-3xl text-amber-500" />
                                },
                                {
                                    title: "Scorrevole Interno Muro (Scrigno)",
                                    desc: "L'anta sparisce dentro la parete. La soluzione salvaspazio per eccellenza.",
                                    icon: <FiMaximize className="text-3xl text-amber-500" />
                                },
                                {
                                    title: "Scorrevole Esterno Muro",
                                    desc: "L'anta scorre su un binario di design (acciaio o mantovana) appeso alla parete. Diventa un quadro in movimento.",
                                    icon: <FiLayout className="text-3xl text-amber-500" />
                                },
                                {
                                    title: "Libro / Pacchetto",
                                    desc: "Per chi ha poco spazio ma non può installare uno scrigno.",
                                    icon: <FiBox className="text-3xl text-amber-500" />
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-slate-50 p-6 rounded-xl text-center border border-slate-100"
                                >
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEZIONE 4: IL TREND "FILO MURO" (Rasomuro) */}
                <section className="py-20 bg-slate-900 text-white">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Porte Filo Muro: <span className="text-amber-500">L'Invisibilità è di moda.</span>
                                </h2>
                                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                    È la richiesta n.1 degli architetti oggi. La porta Filo Muro non ha cornici, non ha coprifili e le cerniere sono invisibili. L'anta è complanare alla parete.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <FiCheck className="text-amber-500 mt-1 flex-shrink-0" />
                                        <span className="text-slate-300">
                                            <strong>L'effetto:</strong> Puoi verniciarla dello stesso colore del muro per farla sparire completamente ("Effetto Camouflage") o rivestirla con carta da parati.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheck className="text-amber-500 mt-1 flex-shrink-0" />
                                        <span className="text-slate-300">
                                            <strong>Il Risultato:</strong> Minimalismo puro e continuità visiva.
                                        </span>
                                    </li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop"
                                    alt="Porta filo muro"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 5: MANIGLIE E ACCESSORI */}
                <section className="py-20 bg-white">
                    <div className="container text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Toccare con mano la qualità.
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Una bella porta con una maniglia scadente perde tutto il suo valore. Nei nostri showroom troverai una vasta selezione di maniglie di design (Cromo, Ottone, Nero Opaco, Satinato) e serrature magnetiche silenziose che rendono la chiusura della porta un gesto fluido e senza rumore.
                        </p>
                        <div className="flex justify-center gap-4 text-amber-500 text-4xl">
                            <FiUnlock />
                        </div>
                    </div>
                </section>

                {/* SEZIONE 6: CTA FINALE */}
                <section className="py-20 bg-slate-50 text-center">
                    <div className="container max-w-3xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                            Vieni a scegliere il tuo stile.
                        </h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Non scegliere le porte da un catalogo. Vieni a toccare le superfici laccate e a sentire la solidità del legno. Ti aspettiamo a Roma (Capena) e Orvieto con centinaia di modelli esposti.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-amber-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                        >
                            PRENOTA UNA VISITA IN SHOWROOM
                        </a>
                        <p className="mt-4 text-slate-500">
                            Stai ristrutturando? Porta la piantina, ti aiuteremo noi.
                        </p>
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

export default InteriorDoorsPage;
