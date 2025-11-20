
import { motion } from 'framer-motion';
import { FiShield, FiWind, FiMaximize, FiCheck, FiSun } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const MosquitoNetsPage = () => {
    return (
        <>
            <title>Zanzariere su Misura Roma | Scorrevoli, Plissé e Fisse - GICALL</title>
            <meta name="description" content="Zanzariere su misura di alta qualità. Proteggi la tua casa da insetti e pollini con le nostre soluzioni innovative. Produzione e installazione a Roma e Orvieto." />
            <meta name="keywords" content="Zanzariere Roma, Zanzariere su misura, Zanzariere Plissé, Zanzariere Scorrevoli, Gicall" />

            <Header />

            <main className="bg-white">
                {/* HERO SECTION */}
                <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
                            alt="Finestra con zanzariera in estate"
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
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Goditi l'Estate, <span className="text-amber-500">Senza Ospiti Indesiderati</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                                Le nostre zanzariere su misura sono invisibili, resistenti e facili da usare. Lascia entrare l'aria fresca, tieni fuori tutto il resto.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="#modelli"
                                    className="btn btn-primary text-lg px-8 py-4"
                                >
                                    Scopri i Modelli
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* SECTION 1: BENEFITS */}
                <section className="py-20 bg-white">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Più di una semplice rete
                            </h2>
                            <p className="text-lg text-slate-600">
                                Le zanzariere moderne GICALL migliorano la qualità della vita in casa, offrendo protezione e comfort senza compromettere l'estetica.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Protezione Totale",
                                    desc: "Barriera invalicabile per zanzare, mosche, cimici e altri insetti, anche i più piccoli.",
                                    icon: <FiShield className="text-4xl text-amber-500" />
                                },
                                {
                                    title: "Ventilazione Naturale",
                                    desc: "Permettono il ricambio d'aria costante, rinfrescando la casa in modo naturale senza dover accendere il condizionatore.",
                                    icon: <FiWind className="text-4xl text-amber-500" />
                                },
                                {
                                    title: "Luce e Visibilità",
                                    desc: "Le nostre reti ad alta trasparenza sono quasi invisibili all'occhio umano, garantendo luminosità e vista verso l'esterno.",
                                    icon: <FiSun className="text-4xl text-amber-500" />
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow"
                                >
                                    <div className="mb-6">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 2: MODELS */}
                <section id="modelli" className="py-20 bg-slate-50">
                    <div className="container">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                            Una soluzione per ogni apertura
                        </h2>

                        <div className="space-y-20">
                            {/* Model 1: Verticale */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                        Avvolgente Verticale (a Molla)
                                    </h3>
                                    <p className="text-lg text-amber-600 font-medium mb-6">La classica per le finestre</p>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Il sistema più diffuso ed economico per le finestre standard. La rete si avvolge in un cassonetto superiore quando non serve, scomparendo alla vista.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Frizione di risalita (rallentatore) per sicurezza</li>
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Cassonetto ridotto per minimo ingombro</li>
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Guide laterali con spazzolino antivento</li>
                                    </ul>
                                </motion.div>
                                <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=2574&auto=format&fit=crop"
                                        alt="Zanzariera verticale"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Model 2: Laterale / Plissé */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
                                        alt="Zanzariera laterale plissé"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="order-1 lg:order-2"
                                >
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                        Laterale e Plissé
                                    </h3>
                                    <p className="text-lg text-amber-600 font-medium mb-6">Ideale per porte-finestre e balconi</p>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Dimentica di doverti chinare per aprire o chiudere. I nostri sistemi laterali si fermano in qualsiasi posizione e non hanno barriere a pavimento (guida bassa o assente), perfetti per passaggi frequenti.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Rete plissettata di design (molto resistente)</li>
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Guida a pavimento di pochi millimetri (inciampo zero)</li>
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Disponibile anche per grandi aperture</li>
                                    </ul>
                                </motion.div>
                            </div>

                            {/* Model 3: Fissa / Pannelli */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                        Pannelli Fissi e Scorrevoli
                                    </h3>
                                    <p className="text-lg text-amber-600 font-medium mb-6">Per finestre particolari o verande</p>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Soluzioni robuste per finestre che non necessitano di apertura frequente o per grandi verande scorrevoli.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Telaio magnetico per facile rimozione (pulizia)</li>
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Reti speciali (Pet Screen antigraffio per animali)</li>
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Forme irregolari (archi, trapezi)</li>
                                    </ul>
                                </motion.div>
                                <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=800&auto=format&fit=crop"
                                        alt="Zanzariera fissa"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="py-20 bg-white">
                    <div className="container max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                            Domande Frequenti
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "Come si puliscono le zanzariere?",
                                    a: "Basta aspirare regolarmente la polvere con una spazzola morbida. Per una pulizia più profonda, si può usare una spugna con acqua tiepida e sapone neutro."
                                },
                                {
                                    q: "Le reti si rompono facilmente?",
                                    a: "Utilizziamo reti in fibra di vetro rivestita in PVC, molto resistenti. Per chi ha gatti o cani, consigliamo la rete 'Pet Screen', praticamente indistruttibile."
                                },
                                {
                                    q: "Posso installarle su finestre vecchie?",
                                    a: "Sì, le nostre zanzariere sono tutte realizzate su misura e possono essere installate su qualsiasi tipo di infisso esistente, anche con poco spazio a disposizione."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm">?</span>
                                        {faq.q}
                                    </h3>
                                    <p className="text-slate-600 pl-9">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA FINAL */}
                <section className="py-20 bg-slate-900 text-white text-center">
                    <div className="container max-w-3xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Proteggi la tua casa oggi stesso.
                        </h2>
                        <p className="text-xl text-slate-300 mb-10">
                            Non aspettare l'arrivo delle zanzare. Ordina ora per avere la tua casa protetta prima dell'estate.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-amber-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                        >
                            Richiedi Preventivo Zanzariere
                        </a>
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

export default MosquitoNetsPage;
