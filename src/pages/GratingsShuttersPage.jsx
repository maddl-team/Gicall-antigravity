import { motion } from 'framer-motion';
import { FiShield, FiSun, FiMaximize, FiCheckCircle, FiLock, FiTool } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const GratingsShuttersPage = () => {
    return (
        <>
            <title>Grate e Persiane Blindate | Sicurezza e Design su Misura - GICALL</title>
            <meta name="description" content="Proteggi la tua casa senza rinunciare all'estetica. Grate di sicurezza snodate e persiane blindate in acciaio certificate Classe 3. Produzione e installazione a Roma e Orvieto." />
            <meta name="keywords" content="Grate di Sicurezza Roma, Persiane Blindate" />

            <Header />

            <main className="bg-white">
                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2670&auto=format&fit=crop"
                            alt="Grata di sicurezza luminosa"
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
                                Grate e Persiane di Sicurezza: <span className="text-amber-500">Protezione Totale, Senza Sentirsi in Prigione</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                                Dormi sonni tranquilli anche a finestre aperte. Sistemi antieffrazione certificati, progettati per integrarsi perfettamente con l'estetica della tua facciata.
                            </p>
                            <a
                                href="#contact"
                                className="inline-block bg-amber-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                            >
                                SCOPRI LE SOLUZIONI DI SICUREZZA
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* SEZIONE 1: IL BISOGNO DI SICUREZZA (Problem/Solution) */}
                <section className="py-20 bg-white">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                    La libertà di vivere la tua casa in serenità.
                                </h2>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    La sicurezza è un diritto, non un lusso. Specialmente per chi vive in villa, al piano terra o ai piani rialzati, il timore di intrusioni è reale. Ma installare una protezione non deve significare rovinare l'estetica della casa o rinunciare alla luce.
                                </p>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    In GICALL produciamo Inferriate e Persiane Blindate che combinano l'alta resistenza dell'acciaio con un design curato e moderno. Il risultato? Una barriera impenetrabile per i ladri, ma elegante per i tuoi occhi.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1974&auto=format&fit=crop"
                                    alt="Casa sicura e luminosa"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 2: LE GRATE DI SICUREZZA (Inferriate) */}
                <section className="py-20 bg-slate-50">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Grate Moderne: Robuste, Belle e... Snodate.
                            </h2>
                            <p className="text-lg text-slate-600">
                                Dimentica le vecchie sbarre fisse e arrugginite. Le nostre grate sono sistemi evoluti pensati per il comfort quotidiano.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="mb-6 text-amber-500 text-4xl"><FiMaximize /></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Sistemi Snodati (Apribili)</h3>
                                <p className="text-slate-600">
                                    La nostra specialità. Grazie a cerniere speciali brevettate, le nostre grate possono aprirsi non solo verso l'esterno, ma anche snodarsi sopra la persiana o aprirsi verso l'interno. Questo facilita l'apertura delle finestre e la pulizia dei vetri senza sporgersi.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="mb-6 text-amber-500 text-4xl"><FiTool /></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Design Personalizzato</h3>
                                <p className="text-slate-600">
                                    Disegni semplici lineari, "occhio bottato", rombi o decori forgiati. Scegli lo stile che si adatta alla tua facciata.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="mb-6 text-amber-500 text-4xl"><FiShield /></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Trattamento Anti-Ruggine</h3>
                                <p className="text-slate-600">
                                    L'acciaio è forte, ma teme l'ossidazione. Per questo tutte le nostre grate subiscono un trattamento di Zincatura a Caldo seguito da verniciatura a polveri epossidiche in forno a 200°C. Garantite contro la ruggine per anni.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 3: LE PERSIANE BLINDATE (Acciaio) */}
                <section className="py-20 bg-white">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2073&auto=format&fit=crop"
                                    alt="Persiane blindate"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="order-1 lg:order-2"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                    Sembrano Legno, sono Acciaio.
                                </h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Se devi sostituire le vecchie persiane in legno o alluminio e vuoi aumentare la sicurezza senza cambiare l'estetica del palazzo, la Persiana Blindata GICALL è la soluzione.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                        <span className="text-slate-600"><strong>Anima d'Acciaio:</strong> La struttura è realizzata con profili in acciaio zincato ad alta resistenza. Le lamelle sono rinforzate con tondini d'acciaio passanti anti-taglio.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                        <span className="text-slate-600"><strong>Estetica Fedele:</strong> Riproduciamo forme e colori delle persiane tradizionali. Nessuno noterà la differenza dall'esterno, ma la resistenza allo scasso sarà incomparabile.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FiCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                        <span className="text-slate-600"><strong>Serratura di Sicurezza:</strong> Cilindro europeo e chiusure a triplice espansione (alto, basso e centrale) rendono impossibile lo scardinamento.</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 4: IL "COMBINATO" (Top di Gamma) */}
                <section className="py-20 bg-slate-900 text-white">
                    <div className="container text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Il Sistema Combinato: Grata + Persiana in un unico telaio.
                        </h2>
                        <p className="text-lg text-slate-300 mb-10">
                            Stai ristrutturando e vuoi il massimo? Il Sistema Combinato GICALL integra nello stesso telaio sia la grata di sicurezza che la persiana blindata.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                                <h3 className="text-xl font-bold text-amber-500 mb-4">Vantaggio</h3>
                                <p className="text-slate-300">
                                    Un'unica installazione, meno opere murarie, massima pulizia estetica.
                                </p>
                            </div>
                            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                                <h3 className="text-xl font-bold text-amber-500 mb-4">Funzionalità</h3>
                                <p className="text-slate-300">
                                    Puoi tenere la persiana aperta per far entrare luce e la grata chiusa per stare sicuro, oppure chiudere tutto per la massima protezione (es. quando vai in vacanza).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 5: CERTIFICAZIONI E BONUS */}
                <section className="py-20 bg-white">
                    <div className="container text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Sicurezza Certificata Classe 3 e 4.
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Non fidarti delle parole, fidati delle certificazioni. I nostri sistemi di sicurezza passiva sono testati in laboratorio contro tentativi di effrazione statica e dinamica, ottenendo le certificazioni in <strong>Classe 3</strong> e <strong>Classe 4</strong>.
                        </p>
                        <div className="bg-amber-50 p-8 rounded-2xl">
                            <p className="text-lg text-slate-800">
                                Inoltre, l'installazione di grate e persiane blindate rientra nel <strong>Bonus Sicurezza 50%</strong>. Recuperi metà della spesa in 10 anni. Il nostro ufficio ti guiderà nella pratica.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 6: CTA FINALE */}
                <section className="py-20 bg-slate-50 text-center">
                    <div className="container max-w-3xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                            Metti in sicurezza la tua famiglia.
                        </h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Non aspettare che succeda qualcosa per decidere. La prevenzione è la miglior difesa. Vieni in fabbrica o in showroom per vedere i nostri modelli di grate snodate e toccare con mano la solidità delle verniciature.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-amber-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                        >
                            RICHIEDI SOPRALLUOGO E PREVENTIVO
                        </a>
                        <p className="mt-4 text-slate-500">
                            Operiamo a Roma, Viterbo, Terni e in tutto il Centro Italia.
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

export default GratingsShuttersPage;
