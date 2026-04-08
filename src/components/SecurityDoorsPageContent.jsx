"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiShield, FiLock, FiSmartphone, FiCheck, FiHome, FiTool } from 'react-icons/fi';
import ContactSection from './ContactSection';

const SecurityDoorsPageContent = () => {
    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <section className="relative min-h-screen md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/gicall_porte_blindate_slide.webp"
                        alt="Porta blindata di sicurezza"
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
                            Porte Blindate GICALL: <span className="text-amber-500">La Tua Prima Linea di Difesa</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Proteggi ciò che ami con i nostri sistemi di sicurezza passiva. Portoncini blindati certificati Classe 3 e 4, che uniscono la forza dell'acciaio all'eleganza del design italiano.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-amber-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                        >
                            CONFIGURA LA TUA SICUREZZA
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* SEZIONE 1: CLASSI DI SICUREZZA (Educazione & Trust) */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Che livello di protezione cerchi?
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Non tutte le porte blindate sono uguali. La resistenza ai tentativi di scasso si misura in "Classi Antieffrazione". In GICALL produciamo e installiamo solo prodotti certificati per garantirti protezione reale.
                            </p>
                            <div className="space-y-6">
                                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-500">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Classe 3 (Lo Standard di Sicurezza)</h3>
                                    <p className="text-slate-600">
                                        La scelta ideale per appartamenti in condominio. Resiste a tentativi di scasso con cacciaviti, piedi di porco e carichi statici elevati. È la porta che installiamo nel 90% delle abitazioni residenziali.
                                    </p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-500">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Classe 4 (Alta Protezione)</h3>
                                    <p className="text-slate-600">
                                        Consigliata per ville isolate, case indipendenti o beni di lusso. Resiste ad attacchi violenti ed esperti con trapani, seghe e strumenti elettrici. Una vera cassaforte a forma di porta.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/gicall_porte-blindate_dettaglio.webp"
                                alt="Dettaglio porta blindata"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 2: IL CUORE D'ACCIAIO (Tecnica) */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Cosa rende impenetrabile una porta GICALL?
                        </h2>
                        <p className="text-lg text-slate-600">
                            La bellezza esteriore nasconde una bestia d'acciaio. Ecco come costruiamo la tua sicurezza:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Scocca Zincata",
                                desc: "Doppia lamiera in acciaio con rinforzi verticali (omega) che rendono l'anta indeformabile.",
                                icon: <FiShield className="text-3xl text-amber-500" />
                            },
                            {
                                title: "Cilindro Europeo di Alta Sicurezza",
                                desc: "Dimentica le vecchie chiavi a doppia mappa. Usiamo solo cilindri moderni con tessera di proprietà (chiavi non duplicabili senza autorizzazione).",
                                icon: <FiLock className="text-3xl text-amber-500" />
                            },
                            {
                                title: "Defender Anti-Trapano",
                                desc: "Una borchia in acciaio al manganese che protegge il cilindro dai tentativi di perforazione.",
                                icon: <FiShield className="text-3xl text-amber-500" />
                            },
                            {
                                title: "Rostri Fissi",
                                desc: "Anche se tagliassero le cerniere, la porta non si aprirebbe grazie ai rostri d'acciaio che si incastrano nel telaio lato cerniera.",
                                icon: <FiLock className="text-3xl text-amber-500" />
                            },
                            {
                                title: "Deviatori Mobili",
                                desc: "Punti di chiusura multipli (alto, basso e centrale) che bloccano la porta su tre lati.",
                                icon: <FiLock className="text-3xl text-amber-500" />
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEZIONE 3: DESIGN E PANNELLI (Personalizzazione) */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Sicura come un bunker, bella come un mobile.
                        </h2>
                        <p className="text-lg text-slate-600 mb-10">
                            Spesso si pensa che la sicurezza sia brutta. Con GICALL, la tua porta blindata diventa un elemento di arredo. Grazie al sistema a <strong>doppio pannello</strong>, puoi vestire la porta in due modi diversi:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div className="bg-slate-50 p-8 rounded-2xl">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Lato Esterno</h3>
                                <p className="text-slate-600">
                                    Rispetta l'estetica del condominio o della facciata (legno classico, pantografato, alluminio resistente alle intemperie).
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Lato Interno</h3>
                                <p className="text-slate-600">
                                    Si abbina perfettamente al tuo arredamento e alle tue porte interne (bianco moderno, tortora, essenze legno, laccato).
                                </p>
                            </div>
                        </div>
                        <p className="mt-8 text-slate-600 italic">
                            Nessuno saprà quanto è blindata la tua porta finché non proverà a forzarla.
                        </p>
                    </div>
                </div>
            </section>

            {/* SEZIONE 4: TECNOLOGIA SMART (Innovazione) */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                La chiave è nel tuo dito <span className="text-amber-500">(o nel tuo smartphone).</span>
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                Vuoi entrare nel futuro? Richiedi le nostre <strong>Serrature Elettroniche Motorizzate</strong>.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <FiSmartphone className="text-amber-500 text-xl flex-shrink-0" />
                                    <span className="text-slate-300"><strong>Apertura con App:</strong> Apri la porta col telefono (utile per B&B o per far entrare la donna delle pulizie).</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FiLock className="text-amber-500 text-xl flex-shrink-0" />
                                    <span className="text-slate-300"><strong>Tastierino Numerico:</strong> Entra digitando il codice.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FiCheck className="text-amber-500 text-xl flex-shrink-0" />
                                    <span className="text-slate-300"><strong>Lettore Impronta Digitale:</strong> La tua chiave sei tu. Niente più mazzi di chiavi pesanti in tasca.</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
                        >
                            <Image
                                src="/images/gicall_porte-blindate_elettronico.webp"
                                alt="Smart lock"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 5: NON SOLO SICUREZZA (Isolamento) */}
            <section className="py-20 bg-white">
                <div className="container text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Silenzio e Calore: Il comfort che non ti aspetti.
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Una porta blindata GICALL non blocca solo i ladri, blocca anche il freddo e i rumori del pianerottolo. Grazie alle guarnizioni perimetrali, alla lama paraspifferi inferiore e ai materiali coibentanti interni, le nostre porte offrono:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-slate-50 rounded-xl">
                            <h3 className="font-bold text-slate-900 mb-2">Isolamento Acustico</h3>
                            <p className="text-slate-600">Fino a 45dB (non sentirai più l'ascensore o i vicini che passano).</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-xl">
                            <h3 className="font-bold text-slate-900 mb-2">Isolamento Termico</h3>
                            <p className="text-slate-600">Niente più spifferi dall'ingresso, per un risparmio in bolletta immediato.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEZIONE 6: BONUS SICUREZZA 50% (Leva Fiscale) */}
            <section className="py-20 bg-amber-50">
                <div className="container text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        La sicurezza ti costa la metà.
                    </h2>
                    <p className="text-lg text-slate-700 mb-8">
                        L'installazione di una porta blindata rientra nel <strong>Bonus Sicurezza</strong>. Questo significa che puoi recuperare il 50% della spesa in 10 anni tramite detrazione fiscale. Il nostro staff si occuperà di fornirti tutta la documentazione necessaria per accedere all'agevolazione.
                    </p>
                </div>
            </section>

            {/* SEZIONE 7: CTA FINALE */}
            <section className="py-20 bg-white text-center">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                        Chiudi la porta alla paura.
                    </h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Vieni a provare la solidità dei nostri portoncini. Ti aspettiamo a Roma (Capena) e Orvieto per configurare la tua blindata su misura.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-amber-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                    >
                        RICHIEDI UN PREVENTIVO GRATUITO
                    </a>
                    <div className="mt-4">
                        <a href="/assets/catalogo-pannelli.pdf" className="text-slate-500 hover:text-amber-500 transition-colors underline" onClick={(e) => e.preventDefault()}>Scarica il catalogo pannelli e finiture.</a>
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

export default SecurityDoorsPageContent;
