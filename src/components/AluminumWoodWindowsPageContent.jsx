"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCheck, FiSun, FiShield, FiMaximize, FiArrowRight } from 'react-icons/fi';
import ContactSection from './ContactSection';

const AluminumWoodWindowsPageContent = () => {
    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/gicall_finestre_legno_alluminio_slide.webp"
                        alt="Finestra Alluminio Legno GICALL"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90 z-10"></div>
                </div>

                <div className="container relative z-10 px-4 pt-32 pb-12 md:pt-20 md:pb-0 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Finestre in Alluminio Legno: <br />
                            <span className="text-amber-500">Tecnologia robusta, Anima raffinata.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                            La solidità indeformabile di una struttura in alluminio a taglio termico, vestita all'interno con il legno più pregiato. La scelta moderna per chi cerca design minimale e prestazioni assolute.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="btn btn-primary text-lg px-8 py-4 shadow-lg shadow-amber-500/20"
                            >
                                RICHIEDI PREVENTIVO
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SEZIONE 1: IL PRODOTTO */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-amber-500 font-bold tracking-wider text-sm uppercase mb-2 block">
                                RIVOLUZIONE TECNOLOGICA
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Che cos'è una finestra in Alluminio-Legno?
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Spesso confuso con il suo opposto, l'infisso in Alluminio-Legno di GICALL inverte le regole del gioco. Non è una finestra in legno protetta, ma una struttura tecnologicamente avanzata in alluminio che ospita al suo interno un rivestimento in legno massello.
                            </p>

                            <div className="space-y-8 mt-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 flex-shrink-0">
                                        <FiShield className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">L'Esterno (Struttura Portante)</h4>
                                        <p className="text-slate-600">
                                            Il telaio è realizzato in alluminio a taglio termico. Garantisce stabilità statica, permette profili più sottili e minimali (più vetro, più luce) e resiste a qualsiasi intemperia senza invecchiare.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                                        <FiMaximize className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">L'Interno (Design)</h4>
                                        <p className="text-slate-600">
                                            Una cornice in legno pregiato riveste il lato stanza. Offre la bellezza, il calore al tatto e l'eleganza di un mobile di lusso, nascondendo alla vista il cuore metallico.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-slate-900/5 rounded-3xl transform -rotate-2 z-0"></div>
                            <Image
                                src="/images/gicall_finestre_legno-alluminio_materiali.jpg"
                                alt="Sezione finestra Alluminio Legno"
                                width={800}
                                height={600}
                                className="relative rounded-3xl shadow-2xl w-full h-auto z-10"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 2: I VANTAGGI */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Perché scegliere la struttura in Alluminio?
                        </h2>
                        <p className="text-lg text-slate-600">
                            Passare all'Alluminio-Legno significa fare una scelta di architettura moderna e funzionalità. Ecco perché i nostri clienti a Roma e Orvieto lo preferiscono:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 text-2xl mb-6">
                                <FiMaximize />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Profili più sottili (Design Minimal)</h3>
                            <p className="text-slate-600 leading-relaxed">
                                L'alluminio è più resistente del legno a parità di spessore. Questo ci permette di creare telai ridotti ("tutto vetro") che portano il 30% di luce in più in casa.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
                        >
                            <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-green-600 text-2xl mb-6">
                                <FiShield />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Indistruttibile e Indeformabile</h3>
                            <p className="text-slate-600 leading-relaxed">
                                L'alluminio non si imbarca, non teme l'umidità e sostiene vetri tripli molto pesanti senza cedimenti nel tempo. È la scelta ideale per grandi vetrate scorrevoli.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
                        >
                            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-600 text-2xl mb-6">
                                <FiSun />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Taglio Termico Evoluto</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Grazie all'inserimento di barrette in poliammide nel cuore dell'alluminio, interrompiamo il flusso di calore. Risultato? Isolamento termico eccellente, pari o superiore ai classici infissi, ma con una resistenza meccanica doppia.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
                        >
                            <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 text-2xl mb-6">
                                <FiCheck />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Libertà Estetica Totale</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Puoi avere un esterno grigio antracite ultra-moderno e un interno in rovere sbiancato caldo. Due stili, una sola finestra.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 3: PERSONALIZZAZIONE */}
            <section className="py-20 bg-slate-900 text-white overflow-hidden">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden"
                        >
                            <Image
                                src="/images/gicall_finestre_legno-alluminio_finiture.webp"
                                alt="Finiture Alluminio Legno"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                Il tuo infisso, disegnato su misura.
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                In GICALL non assembliamo semplicemente pezzi, creiamo soluzioni. La combinazione Alluminio-Legno offre il massimo grado di personalizzazione sul mercato.
                            </p>

                            <div className="space-y-6">
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                    <h3 className="text-xl font-bold text-amber-500 mb-2">Scegli il legno interno</h3>
                                    <p className="text-slate-300">
                                        Il rivestimento interno è disponibile in varie essenze come Frassino (venatura moderna), Rovere (prestigioso e duro) o Toulipier. Essendo una "cover" estetica, possiamo osare con finiture di design senza preoccuparci dell'esposizione agli agenti atmosferici.
                                    </p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                    <h3 className="text-xl font-bold text-amber-500 mb-2">Scegli l'alluminio esterno</h3>
                                    <p className="text-slate-300">
                                        Verniciature RAL opache, effetti sabbiati, ossidati o sublimati legno. L'esterno si integra perfettamente con la facciata del condominio o della villa.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 4: TECNICA */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-4xl mx-auto text-center">
                    <span className="text-slate-500 font-bold tracking-wider text-sm uppercase mb-4 block">
                        TRUST & AUTHORITY
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                        Come garantiamo l'isolamento?
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        Il timore comune sull'alluminio è che sia "freddo". Con i sistemi GICALL, questo è un ricordo del passato. Utilizziamo profili in alluminio a Taglio Termico di ultima generazione. Il guscio interno in legno è fissato alla struttura in alluminio tramite speciali blocchetti di connessione in nylon. Questo sistema permette la dilatazione indipendente dei due materiali (il metallo e il legno reagiscono diversamente al calore), eliminando tensioni strutturali e garantendo che l'infisso rimanga perfetto per decenni.
                    </p>
                </div>
            </section>

            {/* SEZIONE 5: FAQ */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                        Domande frequenti sugli infissi Alluminio Legno
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Qual è la differenza tra Legno-Alluminio e Alluminio-Legno?",
                                a: "La differenza sta nella struttura portante. Nel Legno-Alluminio la finestra è fatta di legno e ha solo una cover esterna in alluminio. Nell'Alluminio-Legno (il prodotto di questa pagina) la finestra è strutturalmente in alluminio e ha una cover interna in legno. Quest'ultima è ideale per chi cerca profili più snelli e design moderno."
                            },
                            {
                                q: "Si forma condensa sull'alluminio?",
                                a: "Assolutamente no. I nostri profili sono a 'taglio termico'. Una barretta isolante separa la faccia esterna da quella interna, impedendo lo shock termico che causa la condensa. Inoltre, il legno interno funge da ulteriore isolante naturale."
                            },
                            {
                                q: "Richiedono manutenzione?",
                                a: "La manutenzione è praticamente azzerata. L'alluminio esterno si pulisce con un panno umido. Il legno interno, non essendo esposto a sole e pioggia, non necessita di riverniciature periodiche, ma va trattato con la cura di un normale mobile da interno."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-lg font-bold">?</span>
                                    {faq.q}
                                </h3>
                                <p className="text-slate-600 pl-11 leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FINALE */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="container">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        La solidità del metallo, il lusso del legno.
                    </h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Non accontentarti di un infisso standard. Vieni a scoprire come la tecnologia dell'alluminio GICALL si sposa con l'artigianalità del legno. Visita i nostri showroom per toccare con mano la differenza di stabilità e design.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="btn btn-primary text-lg px-8 py-4"
                        >
                            PRENOTA UNA VISITA IN SHOWROOM
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-full border-2 border-white/20 hover:bg-white/10 transition-colors text-white font-bold"
                        >
                            Richiedi una consulenza tecnica gratuita
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <div id="contact">
                <ContactSection />
            </div>
        </div>
    );
};

export default AluminumWoodWindowsPageContent;
