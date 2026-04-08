"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiShield, FiSun, FiGrid, FiTool, FiCheck, FiMaximize } from 'react-icons/fi';
import ContactSection from './ContactSection';

const MosquitoNetsPageContent = () => {
    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/gicall_zanzariere_slide.webp"
                        alt="Zanzariere moderne"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
                </div>

                <div className="container relative z-10 px-4 pt-32 pb-12 md:pt-20 md:pb-0 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Zanzariere su Misura: <span className="text-amber-500">Aria Pulita, Niente Insetti</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Goditi la brezza estiva senza il fastidio di zanzare, mosche e polline. Sistemi professionali robusti, facili da aprire e belli da vedere.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-amber-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                        >
                            SCOPRI I MODELLI DISPONIBILI
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* SEZIONE 1: LA QUALITÀ PROFESSIONALE (Problem/Solution) */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Dimentica le zanzariere "fai da te" che durano una stagione.
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Sei stanco di reti che si strappano al primo vento, molle che scattano come tagliole o telai che si incastrano? La zanzariera è un componente essenziale della casa, sottoposto a continuo stress (sole, pioggia, aperture frequenti).
                            </p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Da GICALL non trovi kit in scatola, ma sistemi professionali realizzati su misura al millimetro. Utilizziamo solo reti in fibra di vetro o materiali tecnici ad alta resistenza e profili in alluminio verniciato che si integrano perfettamente con i tuoi infissi esistenti.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/gicall_zanzariere_dettaglio.webp"
                                alt="Dettaglio zanzariera"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 2: SCEGLI IL TUO MODELLO (Tipologie) */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Una soluzione per ogni finestra.
                        </h2>
                        <p className="text-lg text-slate-600">
                            Non esiste la zanzariera "universale". In base al tipo di apertura (finestra alta, balcone di passaggio, porta d'ingresso) ti consiglieremo il modello più adatto:
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
                                <span className="bg-amber-100 text-amber-600 p-2 rounded-full text-sm">1</span> Zanzariera Plissettata (La Rivoluzione)
                            </h3>
                            <p className="text-slate-600 mb-4">Il modello più richiesto per porte-finestre e balconi.</p>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <FiCheck className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span><strong>Il vantaggio:</strong> La rete si impacchetta a fisarmonica ("plissé"). Non ha molle di ritorno violente (si ferma in qualsiasi punto tu la lasci) ed è sicura per bambini e anziani perché la guida a pavimento è bassissima (pochi millimetri).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FiCheck className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span><strong>Design:</strong> Moderna ed elegante.</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="bg-amber-100 text-amber-600 p-2 rounded-full text-sm">2</span> Zanzariera a Rullo / Molla (Il Classico)
                            </h3>
                            <p className="text-slate-600 mb-4">La soluzione ideale per le finestre classiche.</p>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <FiCheck className="text-amber-500 mt-1 flex-shrink-0" />
                                    <span><strong>Il vantaggio:</strong> La rete scompare dentro un piccolo cassonetto in alto quando non serve. Dotata di frizione per rallentare la risalita ed evitare colpi bruschi.</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="bg-amber-100 text-amber-600 p-2 rounded-full text-sm">3</span> Zanzariera a Scorrimento Laterale
                            </h3>
                            <p className="text-slate-600">
                                Robusta e funzionale, perfetta per coprire grandi aperture o verande. Pannelli che scorrono lateralmente, ideali per zone di frequente passaggio.
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
                                <span className="bg-amber-100 text-amber-600 p-2 rounded-full text-sm">4</span> Zanzariera Fissa o Magnetica
                            </h3>
                            <p className="text-slate-600">
                                Per finestre che non apri quasi mai (es. bagni, cantine, lucernari) o per applicazione su grate di sicurezza.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 3: NON SOLO INSETTI (Benefici) */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Reti speciali per esigenze speciali.
                        </h2>
                        <p className="text-lg text-slate-600">
                            Oltre alla classica rete grigia standard, offriamo soluzioni tecniche avanzate:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiShield className="text-2xl text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Rete "Pet Screen"</h3>
                            <p className="text-slate-600">Hai gatti o cani che grattano la porta? Questa rete rinforzata è indistruttibile e resiste alle unghie dei tuoi amici a 4 zampe.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiSun className="text-2xl text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Rete Antipolline</h3>
                            <p className="text-slate-600">Per chi soffre di allergie. La trama speciale blocca gran parte dei pollini prima che entrino in casa.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiMaximize className="text-2xl text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Rete ad Alta Trasparenza</h3>
                            <p className="text-slate-600">Per chi non vuole rinunciare alla vista del panorama. Quasi invisibile all'occhio umano.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 4: INSTALLAZIONE E ASSISTENZA */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Montaggio perfetto, zero pensieri.
                            </h2>
                            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                Una zanzariera montata male si blocca o lascia fessure dove passano gli insetti. I nostri tecnici rilevano le misure precise a casa tua e installano il prodotto finito, garantendo il perfetto scorrimento e la sigillatura dei bordi.
                            </p>
                            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                E se tra 10 anni la rete si rompe? Nessun problema. Forniamo servizio di assistenza e sostituzione telo su tutti i nostri prodotti. Non dovrai cambiare tutta la struttura, solo la rete!
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
                        >
                            <Image
                                src="/images/gicall_zanzariere_montaggio.webp"
                                alt="Installazione zanzariere"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 5: CTA FINALE */}
            <section className="py-20 bg-white text-center">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                        Preparati all'estate con GICALL.
                    </h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Non aspettare la prima invasione di zanzare. Ordina ora le tue zanzariere su misura e goditi la casa a finestre aperte.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-amber-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                    >
                        RICHIEDI UN PREVENTIVO ONLINE
                    </a>
                    <div className="mt-4">
                        <p className="text-slate-500">Visita gli showroom di Roma e Orvieto per vedere i campioni di rete.</p>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <div id="contact">
                <ContactSection />
            </div>
        </div>
    );
};

export default MosquitoNetsPageContent;
