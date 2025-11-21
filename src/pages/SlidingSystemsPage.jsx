import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';
import { FaSun, FaExpandArrowsAlt, FaShieldAlt, FaCog, FaLeaf, FaUniversalAccess } from 'react-icons/fa';

const SlidingSystemsPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const systemTypes = [
        {
            icon: <FaExpandArrowsAlt className="text-4xl text-amber-500" />,
            title: "Alzante Scorrevole",
            subtitle: "Il Re delle Vetrate",
            description: "Ruotando la maniglia, l'anta si 'alza' leggermente staccandosi dalle guarnizioni e scorre su un binario con una leggerezza incredibile. Anche un bambino può aprire una vetrata da 300 kg.",
            features: ["Soglia a pavimento quasi invisibile", "Estetica pulita", "Massima luminosità", "Fino a 6 metri e oltre"]
        },
        {
            icon: <FaCog className="text-4xl text-amber-500" />,
            title: "Scorrevole Parallelo",
            subtitle: "Traslante",
            description: "L'anta 'salta' fuori dal telaio e scorre parallelamente alla parte fissa. Quando è chiusa, sigilla perfettamente su tutto il perimetro.",
            features: ["Isolamento acustico assoluto", "Isolamento termico massimo", "Il più ermetico", "Perfetto per dimensioni medie"]
        },
        {
            icon: <FaSun className="text-4xl text-amber-500" />,
            title: "Scorrevole in Linea",
            subtitle: "Slim",
            description: "Il classico sistema scorrevole, rivisitato in chiave moderna con profili sottili.",
            features: ["Minimo ingombro", "Design minimale", "Ideale per verande", "Spazio ridotto"]
        }
    ];

    const materials = [
        {
            title: "Scorrevoli in Alluminio",
            description: "Per vetrate enormi e profili sottilissimi (Design Minimal).",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
        },
        {
            title: "Scorrevoli in PVC",
            description: "Il miglior rapporto isolamento/prezzo.",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Scorrevoli Legno/Alluminio",
            description: "Per chi cerca l'eleganza assoluta.",
            image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <div className="font-sans text-slate-900 antialiased selection:bg-amber-100 selection:text-amber-900">

            <title>Sistemi Scorrevoli e Grandi Vetrate | Alzanti e Paralleli - GICALL</title>
            <meta name="description" content="Trasforma le tue pareti in luce. Sistemi scorrevoli alzanti e paralleli in PVC e Alluminio. Soglie ribassate, massimo isolamento e design panoramico." />
            <meta name="keywords" content="Alzanti Scorrevoli Roma, Vetrate Scorrevoli, Sistemi Scorrevoli, Grandi Vetrate, Scorrevoli Paralleli, Open Space" />


            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2670&auto=format&fit=crop"
                            alt="Vetrata panoramica scorrevole"
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
                                Sistemi Scorrevoli: <span className="text-amber-500">Abbatti i Muri</span>, Fai Entrare la Luce
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                                Soluzioni panoramiche per connettere i tuoi interni con il mondo esterno. Tecnologia avanzata per vetrate di grandi dimensioni facili da aprire e perfettamente isolanti.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#contact" className="btn btn-primary text-lg px-8 py-4">
                                    Scopri le Soluzioni
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Open Space Concept */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                    Più di una finestra, <br />
                                    <span className="text-amber-500">uno stile di vita.</span>
                                </h2>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Le moderne tendenze dell'architettura parlano chiaro: <strong>luce, spazio e continuità</strong>. I sistemi scorrevoli GICALL sono progettati per chi non si accontenta di guardare fuori, ma vuole vivere l'esterno restando comodamente in casa.
                                </p>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Sostituire una vecchia porta-finestra o un muro cieco con uno scorrevole panoramico cambia radicalmente la percezione della casa: gli ambienti sembrano più grandi, la luce inonda le stanze e il giardino diventa un prolungamento del salotto.
                                </p>
                                <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
                                    <h4 className="text-xl font-bold mb-2 text-slate-800">Il Concetto di "Open Space"</h4>
                                    <p className="text-slate-600">
                                        Trasforma la tua casa in uno spazio aperto dove interno ed esterno si fondono perfettamente, creando un ambiente luminoso e arioso che valorizza ogni momento della giornata.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop"
                                    alt="Open space con vetrata scorrevole"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* System Types */}
                <section className="section bg-slate-50">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                Quale scorrevole scegliere?
                            </h2>
                            <p className="text-lg text-slate-600">
                                Non tutti gli scorrevoli sono uguali. In base allo spazio e alle esigenze, GICALL progetta tre sistemi principali:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {systemTypes.map((system, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="mb-6">{system.icon}</div>
                                    <h3 className="text-2xl font-bold mb-2 text-slate-900">{system.title}</h3>
                                    <p className="text-amber-600 font-semibold mb-4">{system.subtitle}</p>
                                    <p className="text-slate-600 mb-6 leading-relaxed">{system.description}</p>
                                    <div className="space-y-2">
                                        <p className="text-sm font-bold text-slate-800 mb-3">Vantaggi:</p>
                                        {system.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-amber-500 shrink-0"></div>
                                                <p className="text-sm text-slate-600">{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Materials Section */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                PVC, Alluminio o Legno?
                            </h2>
                            <p className="text-lg text-slate-600">
                                La nostra forza di produttori è poter realizzare il tuo scorrevole nel materiale che preferisci, mantenendo sempre alti standard di isolamento.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {materials.map((material, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="relative h-80 overflow-hidden">
                                        <img
                                            src={material.image}
                                            alt={material.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-2xl font-bold mb-2 text-white">{material.title}</h3>
                                        <p className="text-slate-200">{material.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Lowered Threshold Section */}
                <section className="section bg-slate-50">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                                className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
                                    alt="Soglia ribassata"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                                className="order-1 lg:order-2"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-amber-100 rounded-full">
                                        <FaUniversalAccess className="text-2xl text-amber-600" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                        Comfort senza barriere.
                                    </h2>
                                </div>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Uno dei dettagli più apprezzati dei nostri Alzanti Scorrevoli è la <strong>soglia ribassata</strong> (o a filo pavimento). Il binario inferiore viene incassato nel pavimento, lasciando un passaggio praticamente piatto.
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-amber-500 shrink-0"></div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-1">Design</h4>
                                            <p className="text-slate-600">Continuità visiva totale tra pavimento interno ed esterno.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-amber-500 shrink-0"></div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-1">Accessibilità</h4>
                                            <p className="text-slate-600">Nessun ostacolo per passeggini, sedie a rotelle o semplicemente per non inciampare.</p>
                                        </div>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Insulation & Security */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-amber-100 rounded-full">
                                        <FaShieldAlt className="text-2xl text-amber-600" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                        Vetri grandi, <br />Bollette piccole.
                                    </h2>
                                </div>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Spesso si teme che una grande vetrata significhi "freddo d'inverno e caldo d'estate". Con GICALL è il contrario.
                                </p>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Utilizziamo <strong>vetrocamere speciali</strong> (Basso Emissivi e Selettivi) che riflettono il calore interno d'inverno e respingono i raggi solari d'estate.
                                </p>
                                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-500">
                                    <h4 className="text-xl font-bold mb-2 text-slate-800">Sicurezza Garantita</h4>
                                    <p className="text-slate-600">
                                        Tutti i nostri scorrevoli sono dotati di <strong>vetri stratificati di sicurezza</strong> (anti-infortunio e anti-effrazione) per proteggere la tua famiglia.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2787&auto=format&fit=crop"
                                    alt="Isolamento termico"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Final */}
                <section className="py-20 bg-slate-900 text-white">
                    <div className="container text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Vieni a provare la leggerezza.
                        </h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Descrivere la fluidità di un nostro Alzante Scorrevole è difficile. Devi provarlo. Vieni nei nostri showroom di Roma o Orvieto e prova ad aprire con un dito una vetrata da due metri.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="inline-block bg-amber-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                            >
                                Prenota la Tua Prova in Showroom
                            </a>
                            <a
                                href="#contact"
                                className="inline-block bg-transparent border-2 border-white text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-colors duration-300"
                            >
                                Richiedi Preventivo Rapido
                            </a>
                        </div>
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

export default SlidingSystemsPage;
