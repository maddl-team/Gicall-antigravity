"use client";
import React, { useEffect } from 'react';
import ContactSection from './ContactSection';
import { motion } from 'framer-motion';
import { FaRuler, FaTools, FaHeadset, FaFileAlt, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const ServicesPageContent = () => {
    // Scroll to top handled by lenis/layout generally, but effect kept for component mount behavior if needed
    // Removed window.scrollTo as PageTransition usually handles this, or native navigation

    const services = [
        {
            icon: <FaRuler className="text-4xl text-amber-500" />,
            number: "1",
            title: "Progettazione e Consulenza",
            subtitle: "Tutto inizia da un Sopralluogo Reale",
            description: "Molti ti fanno il preventivo 'un tanto al chilo' per telefono. Noi no. Per garantirti il risultato, dobbiamo vedere la tua casa.",
            features: [
                {
                    title: "Rilievo Misure di Precisione",
                    description: "I nostri tecnici utilizzano strumenti laser per rilevare le misure al millimetro."
                },
                {
                    title: "Analisi del 'Foro Finestra'",
                    description: "Valutiamo lo stato dei controtelai, la presenza di ponti termici e l'esposizione al sole/vento per consigliarti il vetro e il profilo più adatto."
                },
                {
                    title: "Soluzioni su Misura",
                    description: "Hai archi, finestre fuori squadro o esigenze architettoniche complesse? Il nostro ufficio tecnico disegna la soluzione perfetta per te."
                }
            ]
        },
        {
            icon: <FaTools className="text-4xl text-amber-500" />,
            number: "2",
            title: "Posa in Opera Qualificata",
            subtitle: "Dove si fa la differenza",
            description: "Sai che il 70% delle prestazioni di una finestra dipende da come viene montata? Una finestra di classe A montata con la vecchia schiuma 'gialla' diventa una finestra di classe C.",
            features: [
                {
                    title: "Installatori Interni",
                    description: "Non ci affidiamo a squadre esterne improvvisate. I nostri posatori sono formati internamente e conoscono i nostri prodotti alla perfezione."
                },
                {
                    title: "Materiali di Posa Evoluti",
                    description: "Utilizziamo nastri autoespandenti, barriere vapore e sigillanti polimerici (MS Polimero) per garantire l'elasticità e la tenuta nel tempo (Sistema a 3 livelli)."
                },
                {
                    title: "Pulizia e Rispetto",
                    description: "Entriamo in casa tua in punta di piedi. Proteggiamo i pavimenti, lavoriamo con aspiratori per limitare la polvere e smaltiamo noi i vecchi infissi in discarica autorizzata."
                }
            ]
        },
        {
            icon: <FaHeadset className="text-4xl text-amber-500" />,
            number: "3",
            title: "Assistenza Post-Vendita",
            subtitle: "Non spariamo dopo l'installazione",
            description: "La paura più grande dei clienti? 'E se poi ho un problema e non rispondono?'. GICALL è un'azienda fisica, con una fabbrica e due showroom. Noi ci siamo sempre.",
            features: [
                {
                    title: "Garanzia Reale",
                    description: "Oltre alla garanzia di legge, offriamo la nostra garanzia diretta di produttori."
                },
                {
                    title: "Manutenzione Programmata",
                    description: "Offriamo servizi di regolazione ferramenta e controllo guarnizioni per mantenere i tuoi infissi performanti per 30 anni."
                },
                {
                    title: "Pronto Intervento",
                    description: "Hai rotto un vetro? Si è bloccata una tapparella? Il nostro team di assistenza risponde rapidamente."
                }
            ]
        },
        {
            icon: <FaFileAlt className="text-4xl text-amber-500" />,
            number: "4",
            title: "Gestione Pratiche Fiscali",
            subtitle: "Pensiamo noi alla burocrazia",
            description: "Sostituire gli infissi conviene grazie ai Bonus Statali (Ecobonus, Bonus Casa, Bonus Sicurezza), ma la burocrazia può spaventare.",
            features: [
                {
                    title: "Verifica dei requisiti",
                    description: "Verifica dei requisiti per l'accesso alle detrazioni."
                },
                {
                    title: "Preparazione documentazione",
                    description: "Preparazione della documentazione tecnica."
                },
                {
                    title: "Invio pratica ENEA",
                    description: "Invio della pratica ENEA (ove previsto o supporto all'invio). Tu goditi il risparmio, alle scartoffie pensiamo noi."
                }
            ]
        }
    ];

    return (
        <div className="font-sans text-slate-900 antialiased selection:bg-amber-100 selection:text-amber-900">
            <main>
                {/* Hero Section */}
                <section className="relative min-h-screen md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/gicall_servizi_slide.webp"
                            alt="Installazione professionale infissi"
                            fill
                            sizes="100vw"
                            className="object-cover opacity-40"
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
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                                Più che un Prodotto, <span className="text-amber-500">un Servizio Completo</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                                L'infisso perfetto è solo l'inizio. Ti accompagniamo in ogni fase del progetto: dalla consulenza tecnica all'installazione certificata, fino alla manutenzione nel tempo.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#contact" className="btn btn-primary text-lg px-8 py-4">
                                    Parla con un Tecnico
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Services Overview */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                Il Metodo GICALL in 4 Fasi
                            </h2>
                            <p className="text-lg text-slate-600">
                                Un approccio completo che garantisce qualità, sicurezza e tranquillità in ogni fase del tuo progetto.
                            </p>
                        </div>

                        <div className="space-y-24">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                        }`}
                                >
                                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-4 bg-amber-100 rounded-full">
                                                {service.icon}
                                            </div>
                                            <div className="text-6xl font-bold text-amber-500/20">
                                                {service.number}
                                            </div>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                                            {service.title}
                                        </h3>
                                        <p className="text-xl text-amber-600 font-semibold mb-6">
                                            {service.subtitle}
                                        </p>
                                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-6">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-4">
                                                    <div className="mt-1">
                                                        <FaCheckCircle className="text-amber-500 text-xl" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-lg font-bold text-slate-800 mb-1">
                                                            {feature.title}
                                                        </h4>
                                                        <p className="text-slate-600">{feature.description}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                            <Image
                                                src={
                                                    index === 0
                                                        ? "/images/gicall_servizi_1.webp"
                                                        : index === 1
                                                            ? "/images/gicall_servizi_2.webp"
                                                            : index === 2
                                                                ? "/images/gicall_servizi_3.webp"
                                                                : "/images/gicall_servizi_4.webp"
                                                }
                                                alt={service.title}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Our Service */}
                <section className="section bg-slate-50">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white p-12 rounded-2xl shadow-xl"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-4 bg-amber-100 rounded-full">
                                        <FaShieldAlt className="text-3xl text-amber-600" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                        Perché scegliere il servizio GICALL?
                                    </h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <FaCheckCircle className="text-amber-500 text-xl mt-1 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-slate-800 mb-1">Produttori Diretti</h4>
                                                <p className="text-slate-600">Controllo totale su produzione e installazione</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <FaCheckCircle className="text-amber-500 text-xl mt-1 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-slate-800 mb-1">Personale Qualificato</h4>
                                                <p className="text-slate-600">Tecnici formati e certificati internamente</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <FaCheckCircle className="text-amber-500 text-xl mt-1 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-slate-800 mb-1">Presenza Fisica</h4>
                                                <p className="text-slate-600">Showroom a Roma e Orvieto, sempre disponibili</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <FaCheckCircle className="text-amber-500 text-xl mt-1 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-slate-800 mb-1">Garanzia Estesa</h4>
                                                <p className="text-slate-600">Copertura completa su prodotto e installazione</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <FaCheckCircle className="text-amber-500 text-xl mt-1 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-slate-800 mb-1">Assistenza Continuativa</h4>
                                                <p className="text-slate-600">Supporto anche dopo anni dall'installazione</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <FaCheckCircle className="text-amber-500 text-xl mt-1 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-slate-800 mb-1">Gestione Bonus</h4>
                                                <p className="text-slate-600">Ti aiutiamo con tutta la burocrazia fiscale</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Final */}
                <section className="py-20 bg-slate-900 text-white">
                    <div className="container text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Mettici alla prova.
                        </h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Un servizio eccellente si vede dai dettagli. Prenota un sopralluogo tecnico gratuito e scopri il metodo GICALL.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-amber-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                        >
                            Prenota Sopralluogo Gratuito
                        </a>
                    </div>
                </section>

                {/* Contact Section */}
                <div id="contact">
                    <ContactSection />
                </div>
            </main>
        </div>
    );
};

export default ServicesPageContent;
