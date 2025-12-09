import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiHome, FiZap, FiSmartphone, FiHelpCircle, FiCheck } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const RollerShuttersPage = () => {
    return (
        <>
            <title>Avvolgibili e Cassonetti Coibentati | Isolamento e Domotica - GICALL</title>
            <meta name="description" content="Migliora l'isolamento della tua casa. Sostituzione tapparelle in PVC, alluminio e acciaio, motorizzazione e cassonetti coibentati senza opere murarie. Roma e Orvieto." />
            <meta name="keywords" content="Avvolgibili Roma, Cassonetti Coibentati, Tapparelle Elettriche" />

            <Header />

            <main className="bg-white">
                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/gicall_avvolgibili_slide.webp"
                            alt="Avvolgibili moderni"
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
                                Avvolgibili e Cassonetti: <span className="text-amber-500">Il Comfort che Protegge la Tua Casa</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                                Oscuranti moderni, motorizzati e termicamente isolati. Sostituisci le vecchie tapparelle pesanti e i cassonetti pieni di spifferi con le soluzioni evolute GICALL.
                            </p>
                            <a
                                href="#contact"
                                className="inline-block bg-amber-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                            >
                                RICHIEDI PREVENTIVO
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* SEZIONE 1: IL PROBLEMA "NASCOSTO" (Cassonetti Coibentati) */}
                <section className="py-20 bg-white">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                    Il Cassonetto: Il punto debole della tua casa.
                                </h2>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Hai cambiato le finestre ma senti ancora freddo o rumore? La colpa è quasi sempre del vecchio cassonetto dell'avvolgibile. Nella maggior parte delle case italiane, il vano sopra la finestra è un semplice buco nel muro non isolato, da cui entra l'aria esterna.
                                </p>
                                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-500 mb-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">La Soluzione GICALL</h3>
                                    <p className="text-slate-600">
                                        Noi non ci limitiamo a cambiare la tapparella. Interveniamo sul "sistema finestra" completo. Installiamo Cassonetti Coibentati o effettuiamo la coibentazione dell'esistente con materiali isolanti ad alta densità.
                                    </p>
                                </div>
                                <p className="text-lg text-slate-600">
                                    <strong>Risultato:</strong> Stop agli spifferi, miglioramento acustico drastico e design pulito e moderno. Spesso interveniamo senza opere murarie invasive, coprendo il vecchio cassonetto con nuove scocche di design.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="/images/gicall_avvolgibili_dettaglio.webp"
                                    alt="Cassonetto coibentato"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 2: SCEGLI LA TUA TAPPARELLA (Materiali) */}
                <section className="py-20 bg-slate-50">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                PVC, Alluminio o Acciaio?
                            </h2>
                            <p className="text-lg text-slate-600">
                                La scelta del materiale dell'avvolgibile determina peso, isolamento e sicurezza.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="bg-amber-100 text-amber-600 p-2 rounded-full text-sm">1</span> Avvolgibili in PVC (Leggeri e Isolanti)
                                </h3>
                                <p className="text-slate-600">
                                    La soluzione più diffusa ed economica. Il PVC è un materiale che non conduce calore, quindi offre un ottimo isolamento termico naturale.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="bg-amber-100 text-amber-600 p-2 rounded-full text-sm">2</span> Avvolgibili in Alluminio Coibentato (Resistenza)
                                </h3>
                                <p className="text-slate-600 mb-4">
                                    Leggeri ma robusti. Le stecche in alluminio sono riempite internamente con schiuma di poliuretano espanso.
                                </p>
                                <p className="text-slate-600">
                                    <strong>Vantaggio:</strong> Non si deformano col sole (al contrario del PVC economico), sono disponibili in tantissimi colori e offrono un buon isolamento termico/acustico.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="bg-amber-100 text-amber-600 p-2 rounded-full text-sm">3</span> Avvolgibili in Acciaio (Sicurezza)
                                </h3>
                                <p className="text-slate-600">
                                    Se abiti a un piano basso e vuoi una protezione extra, l'acciaio è la risposta. Molto più pesanti e resistenti ai tentativi di sollevamento o taglio. (Consigliata la motorizzazione per il peso).
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="bg-amber-100 text-amber-600 p-2 rounded-full text-sm">4</span> Avvolgibili Orientabili (Il Trend del momento)
                                </h3>
                                <p className="text-slate-600">
                                    Una via di mezzo tra una tapparella e una persiana. Le lamelle si possono orientare per far entrare luce e aria anche quando la tapparella è abbassata, garantendo privacy e ombra.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 3: MOTORIZZAZIONE E DOMOTICA */}
                <section className="py-20 bg-slate-900 text-white">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Basta faticare con la cinghia.
                                </h2>
                                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                    Nel 2024, alzare le tapparelle a mano è un ricordo del passato. Trasforma la tua casa con i nostri Motori per Avvolgibili (Somfy o marchi equivalenti).
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <FiZap className="text-amber-500 text-xl flex-shrink-0" />
                                        <span className="text-slate-300"><strong>Comodità:</strong> Un click su un pulsante a muro o sul telecomando e tutte le tapparelle si alzano.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <FiSmartphone className="text-amber-500 text-xl flex-shrink-0" />
                                        <span className="text-slate-300"><strong>Domotica Smart:</strong> Controlla le tapparelle dallo smartphone, anche quando non sei a casa. Simula la tua presenza aprendo e chiudendo a orari programmati.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <FiHome className="text-amber-500 text-xl flex-shrink-0" />
                                        <span className="text-slate-300"><strong>Centralizzazione:</strong> Chiudi tutta la casa con un solo gesto prima di uscire.</span>
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
                                    src="/images/gicall_avvolgibili_cinghia.webp"
                                    alt="Domotica tapparelle"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 4: SICUREZZA ATTIVA */}
                <section className="py-20 bg-white">
                    <div className="container text-center max-w-4xl mx-auto">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FiShield className="text-3xl text-amber-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Tapparelle che ti proteggono.
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Le nostre tapparelle motorizzate possono essere dotate di sistemi anti-sollevamento. Quando il motore è fermo, un blocco meccanico impedisce di alzare la tapparella dall'esterno. Un'ottima barriera aggiuntiva contro i ladri occasionali.
                        </p>
                    </div>
                </section>

                {/* SEZIONE 5: FAQ */}
                <section className="py-20 bg-slate-50">
                    <div className="container max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                            Domande Frequenti
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <FiHelpCircle className="text-amber-500" /> Posso motorizzare le mie vecchie tapparelle?
                                </h3>
                                <p className="text-slate-600 ml-8">
                                    Spesso sì, basta inserire il motore nel rullo esistente, purché la struttura sia in buone condizioni. I nostri tecnici verificheranno la fattibilità.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <FiHelpCircle className="text-amber-500" /> Devo rompere il muro per cambiare i cassonetti?
                                </h3>
                                <p className="text-slate-600 ml-8">
                                    Quasi mai. Utilizziamo cassonetti da ristrutturazione che si sovrappongono o sostituiscono i vecchi senza bisogno di muratori e imbianchini.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <FiHelpCircle className="text-amber-500" /> L'alluminio coibentato protegge dal caldo?
                                </h3>
                                <p className="text-slate-600 ml-8">
                                    Sì, grazie alla schiuma poliuretanica interna che funge da barriera termica.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 6: CTA FINALE */}
                <section className="py-20 bg-white text-center">
                    <div className="container max-w-3xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                            Completa la tua ristrutturazione.
                        </h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Non lasciare il lavoro a metà. Abbina alle tue nuove finestre GICALL il sistema oscurante perfetto.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-amber-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                        >
                            RICHIEDI PREVENTIVO AVVOLGIBILI
                        </a>
                        <div className="mt-4">
                            <a href="/assets/scheda-motori.pdf" className="text-slate-500 hover:text-amber-500 transition-colors underline" onClick={(e) => e.preventDefault()}>Scarica la scheda tecnica dei motori smart.</a>
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

export default RollerShuttersPage;
