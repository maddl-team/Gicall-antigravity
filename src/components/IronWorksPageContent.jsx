"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiShield, FiGrid, FiLayout, FiLayers, FiZap } from 'react-icons/fi';
import ContactSection from './ContactSection';

const IronWorksPageContent = () => {
    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <section className="relative min-h-screen md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/gicall_lavorazioni_ferro_slide.webp"
                        alt="Lavorazioni in ferro"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
                </div>

                <div className="container relative z-10 px-4 pt-48 pb-32 md:pt-20 md:pb-0 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Lavorazioni in Ferro: <span className="text-amber-500">L'Arte della Sicurezza su Misura</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Solide, eterne e disegnate per la tua casa. Dalla tradizione del fabbro alla precisione industriale: realizziamo cancelli, recinzioni e strutture in ferro che sfidano il tempo.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-amber-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                        >
                            RICHIEDI UN PREVENTIVO
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* SEZIONE 1: ARTIGIANATO EVOLUTO */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Il Ferro secondo GICALL: Cuore Artigiano, Precisione Industriale.
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Il ferro è il materiale della sicurezza per eccellenza. Ma lavorarlo richiede maestria. In GICALL non ci limitiamo ad assemblare pezzi: noi forgiamo la protezione della tua casa.
                            </p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Uniamo l'esperienza della tradizionale bottega del fabbro con le più moderne tecnologie di taglio laser e progettazione CAD. Questo ci permette di realizzare strutture che non sono solo barriere fisiche, ma veri e propri elementi di design che valorizzano l'ingresso e i confini della tua proprietà.
                            </p>
                            <p className="text-lg text-slate-600 font-medium">
                                Essendo produttori diretti, ogni pezzo è unico, realizzato al millimetro per i tuoi spazi, senza i vincoli delle misure standard.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/gicall_lavorazioni_ferro_dettaglio.webp"
                                alt="Dettaglio lavorazione ferro"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 2: I NOSTRI PRODOTTI */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Cosa possiamo realizzare per te?
                        </h2>
                        <p className="text-lg text-slate-600">
                            Dalla delimitazione perimetrale alle scale interne, il ferro prende la forma delle tue esigenze.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                                <FiShield className="text-2xl text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Cancelli Carrabili e Pedonali</h3>
                            <p className="text-slate-600">
                                La prima impressione della tua casa. Realizziamo cancelli a battente o scorrevoli, predisposti per l'automazione. Strutture massicce per la massima sicurezza o disegni leggeri per l'eleganza.
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
                                <FiGrid className="text-2xl text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Recinzioni e Ringhiere</h3>
                            <p className="text-slate-600">
                                Delimita il tuo giardino o metti in sicurezza balconi e terrazzi con moduli personalizzati che rispettano l'estetica della facciata.
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
                                <FiLayout className="text-2xl text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Scale in Ferro</h3>
                            <p className="text-slate-600">
                                Scale da interni o esterni, elicoidali o a giorno. Il ferro diventa arredo, spesso abbinato a gradini in legno o vetro per un look industrial-chic.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                                <FiLayers className="text-2xl text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Tettoie e Pensiline</h3>
                            <p className="text-slate-600">
                                Strutture portanti per coprire ingressi o posti auto, pronte per essere tamponate con vetro o policarbonato.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 3: IL NEMICO DEL FERRO (Ruggine e Durata) */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Belli per sempre: Il trattamento Anti-Corrosione.
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                Il ferro grezzo teme un solo nemico: la ruggine. Molti prodotti economici si ossidano dopo pochi inverni, richiedendo costose manutenzioni. GICALL garantisce la durata eterna dei suoi manufatti grazie a un ciclo produttivo rigoroso:
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center flex-shrink-0 mt-1">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Zincatura a Caldo</h3>
                                        <p className="text-slate-400">Immersione del manufatto in un bagno di zinco fuso. Questo crea una barriera chimica impenetrabile che protegge l'acciaio anche negli angoli più nascosti.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center flex-shrink-0 mt-1">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Verniciatura a Polveri Epossidiche</h3>
                                        <p className="text-slate-400">Non una semplice "pitturata". Le polveri colorate vengono cotte in forno ad alta temperatura, aderendo perfettamente alla superficie zincata.</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-8 p-4 bg-slate-800 rounded-lg border border-slate-700">
                                <p className="text-amber-500 font-semibold">Risultato: Resistenza totale a pioggia, sole, salsedine e urti. Nessuna manutenzione richiesta per decenni.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
                        >
                            <Image
                                src="/images/gicall_lavorazione-ferro_operaio.webp"
                                alt="Operaio al lavoro sul ferro"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 4: STILE E DESIGN */}
            <section className="py-20 bg-white">
                <div className="container text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Classico o Moderno? Scegli il tuo stile.
                    </h2>
                    <p className="text-lg text-slate-600 mb-12">
                        Il ferro è versatile. Nel nostro stabilimento possiamo dare vita a qualsiasi disegno:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Stile Classico (Ferro Battuto)</h3>
                            <p className="text-slate-600">
                                Riccioli, lance, borchie e decori floreali per ville d'epoca o contesti rustici (specie nelle zone di Orvieto e campagna romana).
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Stile Moderno (Taglio Laser)</h3>
                            <p className="text-slate-600">
                                Pannelli ciechi o traforati con disegni geometrici, lamiere stirate e linee essenziali per le nuove costruzioni contemporanee.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Privacy</h3>
                            <p className="text-slate-600">
                                Soluzioni che permettono il passaggio dell'aria ma impediscono la vista dall'esterno.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 5: AUTOMAZIONE E COMFORT */}
            <section className="py-20 bg-amber-50">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                            <FiZap className="text-2xl text-amber-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Tecnologia in movimento.
                        </h2>
                        <p className="text-lg text-slate-700 mb-8">
                            Un cancello GICALL nasce già pronto per il futuro. Tutte le nostre strutture sono progettate con le predisposizioni meccaniche per l'installazione di motori e automatismi (scorrevoli o a braccio).
                        </p>
                        <p className="text-lg text-slate-700">
                            Collaboriamo con i migliori marchi di automazione per consegnarti, se lo desideri, un prodotto <strong>"chiavi in mano"</strong>: installato, collegato e collaudato.
                        </p>
                    </div>
                </div>
            </section>

            {/* SEZIONE 6: CTA FINALE */}
            <section className="py-20 bg-white text-center">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                        Dai carattere alla tua casa.
                    </h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Non accontentarti di un cancello standard. Crea un ingresso che parli di te. Vieni a visitare la nostra officina a Capena (Roma) per vedere come lavoriamo il ferro e toccare con mano la differenza tra un prodotto commerciale e uno artigianale.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-amber-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                    >
                        RICHIEDI SOPRALLUOGO GRATUITO
                    </a>
                    <p className="mt-4 text-slate-500">
                        Operiamo a Roma, Viterbo, Terni e tutto il Centro Italia.
                    </p>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <div id="contact">
                <ContactSection />
            </div>
        </div>
    );
};

export default IronWorksPageContent;
