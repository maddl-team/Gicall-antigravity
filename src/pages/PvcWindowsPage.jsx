import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiCheck, FiChevronDown, FiArrowRight } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const PvcWindowsPage = () => {
    return (
        <>
            <Helmet>
                <title>Finestre in PVC Roma e Orvieto | Produzione su Misura - GICALL</title>
                <meta
                    name="description"
                    content="Produzione diretta finestre in PVC ad alto isolamento termico. Prezzi di fabbrica, profili Classe A e posa certificata. Scopri le offerte a Roma e Orvieto."
                />
                <meta name="keywords" content="Finestre in PVC Roma, Produzione Infissi PVC, Serramenti PVC, Fabbrica Infissi Roma" />
            </Helmet>

            <Header />

            <main>
                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
                    <div className="absolute inset-0 z-0">
                        {/* Placeholder for Hero Image - specific for PVC windows */}
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90 z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=2574&auto=format&fit=crop"
                            alt="Finestra in PVC moderna"
                            className="w-full h-full object-cover opacity-50"
                        />
                    </div>

                    <div className="container relative z-20 px-4 pt-20 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                                Finestre in PVC su Misura: <span className="text-amber-500">Efficienza e Design</span> Direttamente dalla Fabbrica
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                                Il massimo dell'isolamento termico e acustico per la tua casa. Progettiamo e realizziamo i tuoi nuovi infissi nei nostri stabilimenti di Roma e Orvieto.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="#contatti"
                                    className="btn btn-primary text-lg px-8 py-4"
                                >
                                    RICHIEDI PREVENTIVO
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* SECTION 1: PERCHÉ IL PVC? */}
                <section className="py-20 bg-white">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                    Perché scegliere i serramenti in PVC GICALL?
                                </h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Il PVC (Polivinilcloruro) è oggi il materiale più richiesto per i serramenti moderni, e non a caso. È un materiale straordinariamente versatile che unisce durata nel tempo e costi contenuti. Ma non tutti i PVC sono uguali. In GICALL utilizziamo solo mescole vergini e profili di prima scelta per garantirti prestazioni superiori.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        { title: "Isolamento Termico Top", desc: "Abbatti i costi di riscaldamento e raffrescamento fino al 30%. Il PVC è un isolante naturale che elimina i ponti termici." },
                                        { title: "Zero Manutenzione", desc: "Dimentica vernici e solventi. I nostri infissi restano belli come il primo giorno con una semplice pulizia." },
                                        { title: "Durata Eterna", desc: "Resistenti a pioggia, vento, salsedine e raggi UV. Non si deformano e non ingialliscono." },
                                        { title: "Rapporto Qualità-Prezzo", desc: "Essendo produttori, ti offriamo prestazioni di alta gamma al prezzo di fabbrica." }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="mt-1 bg-amber-100 p-1 rounded-full text-amber-600 flex-shrink-0">
                                                <FiCheck size={16} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">{item.title}</h4>
                                                <p className="text-sm text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop"
                                    alt="Dettaglio finestra PVC"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                                    <p className="text-white font-medium">Profilo a 7 camere per il massimo isolamento</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: CARATTERISTICHE TECNICHE */}
                <section className="py-20 bg-slate-50">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                Tecnologia al servizio del Comfort
                            </h2>
                            <p className="text-slate-600">
                                I nostri infissi in PVC non sono semplici "finestre", sono sistemi tecnologici avanzati. Ecco cosa trovi dentro una finestra GICALL.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Profili Multicamera", desc: "Strutture a 5, 6 o 7 camere interne per massimizzare l'isolamento termico e acustico." },
                                { title: "Rinforzi in Acciaio", desc: "Ogni profilo è armato internamente con acciaio zincato per garantire stabilità strutturale e resistenza antieffrazione." },
                                { title: "Vetri Bassi Emissivi", desc: "Installiamo di serie vetrocamere con gas Argon e canalina calda (Warm Edge) per evitare la condensa." },
                                { title: "Ferramenta a Nastro", desc: "Sistemi di chiusura perimetrale per una sicurezza aumentata e una tenuta perfetta contro gli spifferi." },
                                { title: "Guarnizioni in EPDM", desc: "Memoria elastica per garantire ermeticità nel tempo, resistendo agli sbalzi termici." },
                                { title: "Microventilazione", desc: "Sistema di apertura controllata per il ricambio d'aria senza disperdere calore." }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                                >
                                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-6">
                                        <FiCheck size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                    <p className="text-slate-600">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 3: DESIGN E PERSONALIZZAZIONE */}
                <section className="py-20 bg-white overflow-hidden">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="order-2 lg:order-1"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop" alt="Finestra effetto legno" className="rounded-lg shadow-lg w-full h-64 object-cover" />
                                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2700&auto=format&fit=crop" alt="Finestra moderna scura" className="rounded-lg shadow-lg w-full h-64 object-cover mt-8" />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="order-1 lg:order-2"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                    Il PVC che sembra Legno (e non solo)
                                </h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Chi ha detto che il PVC deve essere per forza bianco? Grazie alle nostre tecnologie di pellicolatura, possiamo realizzare infissi che si adattano a qualsiasi stile architettonico, dal casale rustico in Umbria all'appartamento moderno a Roma Nord.
                                </p>

                                <div className="space-y-6">
                                    <div className="border-l-4 border-amber-500 pl-6">
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Effetto Legno Iper-Realistico</h4>
                                        <p className="text-slate-600">Venature al tatto che replicano rovere, noce, ciliegio. Tutto il calore del legno con la resistenza del PVC.</p>
                                    </div>
                                    <div className="border-l-4 border-slate-300 pl-6">
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Colori Solidi e Opachi</h4>
                                        <p className="text-slate-600">Grigio antracite, nero, avorio, per uno stile industrial e contemporaneo.</p>
                                    </div>
                                    <div className="border-l-4 border-slate-800 pl-6">
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Bicolore</h4>
                                        <p className="text-slate-600">Bianco dentro per illuminare l'arredo, colore fuori per rispettare i vincoli condominiali.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: RISPARMIO E BONUS */}
                <section className="py-20 bg-slate-50 text-slate-900">
                    <div className="container">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                Un investimento che si ripaga da solo
                            </h2>
                            <p className="text-xl mb-8 text-slate-600 leading-relaxed">
                                Sostituire i vecchi infissi con le nuove finestre in PVC GICALL è un investimento intelligente. Grazie all'elevata efficienza energetica, i nostri prodotti rientrano pienamente nei parametri per accedere agli <span className="font-bold bg-amber-100 text-amber-700 px-2 py-1 rounded">Incentivi Statali (Ecobonus / Bonus Casa)</span>.
                            </p>
                            <p className="mb-10 text-slate-600">
                                Il nostro ufficio amministrativo ti supporterà nella gestione delle pratiche per ottenere le detrazioni fiscali previste dalla legge. Risparmi subito sull'acquisto e risparmi ogni mese sulle bollette.
                            </p>
                            <a
                                href="#contatti"
                                className="inline-flex items-center gap-2 bg-amber-500 text-white hover:bg-amber-600 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg"
                            >
                                Richiedi Consulenza Fiscale Gratuita <FiArrowRight />
                            </a>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: FAQ */}
                <section className="py-20 bg-slate-50">
                    <div className="container max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                            Domande Frequenti sui nostri Infissi in PVC
                        </h2>

                        <div className="space-y-4">
                            {[
                                { q: "Quanto costano le finestre in PVC?", a: "Il costo varia in base alle misure, al tipo di vetro e alle finiture. Essendo produttori, saltiamo i ricarichi dei rivenditori offrendo prezzi di fabbrica. Contattaci per un preventivo preciso." },
                                { q: "Il PVC ingiallisce col tempo?", a: "Assolutamente no. Utilizziamo solo PVC di alta qualità con stabilizzanti anti-UV garantiti contro lo scolorimento per decenni." },
                                { q: "Fate anche la posa in opera?", a: "Certamente. I nostri posatori sono interni all'azienda e qualificati. La posa è fondamentale quanto la finestra stessa per garantire l'isolamento." },
                                { q: "Dove lavorate?", a: "I nostri showroom sono a Capena (Roma) e Orvieto, ma installiamo in tutto il Lazio, Umbria e centro Italia." }
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
                                >
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-3">
                                        <span className="text-amber-500 text-xl">Q.</span> {faq.q}
                                    </h3>
                                    <p className="text-slate-600 pl-8 border-l-2 border-slate-100">
                                        {faq.a}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 6: CTA FINALE */}
                <section className="py-20 bg-slate-900 text-white text-center">
                    <div className="container max-w-3xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Passa all'Efficienza GICALL
                        </h2>
                        <p className="text-xl text-slate-300 mb-10">
                            Non aspettare il prossimo inverno. Migliora oggi il comfort della tua casa con infissi garantiti e certificati.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="#contatti"
                                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-amber-500/30"
                            >
                                RICHIEDI PREVENTIVO FABBRICA
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-slate-500">Risposta garantita entro 48h.</p>
                    </div>
                </section>

                {/* CONTACT FORM SECTION */}
                <div id="contatti">
                    <ContactSection />
                </div>
            </main>

            <Footer />
        </>
    );
};

export default PvcWindowsPage;
