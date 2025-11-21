import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiMapPin, FiCheckCircle, FiSettings, FiBox, FiTool } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const AboutPage = () => {
    return (
        <>
            <title>Chi Siamo | GICALL - Fabbrica di Infissi e Serramenti Made in Italy</title>
            <meta name="description" content="Entra nella fabbrica GICALL. Da oltre 20 anni progettiamo e produciamo infissi a Roma e Orvieto. Scopri la qualità artigianale unita alla tecnologia industriale." />
            <meta name="keywords" content="Fabbrica Infissi Roma, Produzione Serramenti Made in Italy, Gicall Chi Siamo" />

            <Header />

            <main className="bg-white">
                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                            alt="Interno fabbrica Gicall"
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
                                GICALL: <span className="text-amber-500">Produttori di Infissi</span> per Vocazione
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                                Dove la tecnologia industriale incontra la cura artigianale. Benvenuti nella nostra fabbrica.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* SEZIONE 1: LA NOSTRA STORIA & MISSION */}
                <section className="py-20 bg-white">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                    Non solo venditori, ma Costruttori.
                                </h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    La storia di GICALL nasce da una visione semplice ma ambiziosa: offrire al mercato italiano serramenti che uniscano l'estetica del design alla massima efficienza energetica, senza compromessi. Siamo nati tra Roma e l'Umbria, territori dove la bellezza e la storia impongono rispetto per l'architettura.
                                </p>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Oggi, con sedi operative a Capena (Roma) e Orvieto, siamo un punto di riferimento nel centro Italia e operiamo su tutto il territorio nazionale. Ma non abbiamo mai dimenticato le nostre origini: ogni finestra che esce dai nostri stabilimenti porta con sé la passione di chi l'ha costruita.
                                </p>
                                <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                                    La nostra Mission? Portare il comfort e la sicurezza del vero Made in Italy nelle case dei nostri clienti, saltando gli intermediari per garantire qualità assoluta al giusto prezzo.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                                    alt="Team Gicall"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 2: DENTRO LA FABBRICA (Il Core Business) */}
                <section className="py-20 bg-slate-50">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Il Cuore Pulsante di GICALL: La Produzione
                            </h2>
                            <p className="text-lg text-slate-600">
                                Dire "siamo produttori" è facile. Dimostrarlo è il nostro orgoglio. Il nostro stabilimento produttivo è il luogo dove la materia prima si trasforma in protezione per la tua casa.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Tecnologia e Precisione</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Investiamo costantemente in macchinari a controllo numerico di ultima generazione. Questo ci permette di:
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <FiCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                        <span>Garantire il taglio millimetrico dei profili in PVC e Alluminio.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <FiCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                        <span>Assicurare saldature perfette e angoli puliti (tecnologia senza sbavature).</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <FiCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                                        <span>Ridurre gli sprechi e ottimizzare i tempi di consegna.</span>
                                    </li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">L'Anima Artigianale</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    La macchina esegue, ma è l'uomo che controlla. Il nostro team di tecnici specializzati supervisiona ogni fase del processo. Dalla selezione delle barre alla rifinitura manuale, fino all'assemblaggio della ferramenta di sicurezza: l'occhio esperto dei nostri artigiani è il controllo qualità più severo che esista.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 3: IL NOSTRO PROCESSO PRODUTTIVO */}
                <section className="py-20 bg-white">
                    <div className="container">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                            Come nasce un infisso GICALL
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {[
                                {
                                    title: "Ricerca & Sviluppo",
                                    desc: "Selezioniamo solo i migliori profili (es. VEKA, Schüco, o i vostri partner specifici) e vetri performanti.",
                                    icon: <FiAward className="text-3xl text-amber-500" />
                                },
                                {
                                    title: "Progettazione CAD",
                                    desc: "L'ufficio tecnico disegna l'infisso sulle misure reali del cliente.",
                                    icon: <FiSettings className="text-3xl text-amber-500" />
                                },
                                {
                                    title: "Taglio e Assemblaggio",
                                    desc: "Produzione interna con macchinari 4.0.",
                                    icon: <FiTool className="text-3xl text-amber-500" />
                                },
                                {
                                    title: "Test e Collaudo",
                                    desc: "Verifica delle guarnizioni, della chiusura e della meccanica.",
                                    icon: <FiCheckCircle className="text-3xl text-amber-500" />
                                },
                                {
                                    title: "Imballaggio Sicuro",
                                    desc: "Pronti per raggiungere il cantiere senza graffi.",
                                    icon: <FiBox className="text-3xl text-amber-500" />
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow"
                                >
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEZIONE 4: CERTIFICAZIONI E GARANZIE (Trust) */}
                <section className="py-20 bg-slate-50">
                    <div className="container">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                                Qualità Certificata, Nero su Bianco
                            </h2>
                            <p className="text-lg text-slate-600 mb-10">
                                Nel mondo dell'edilizia, la fiducia si costruisce con i fatti. I serramenti GICALL non sono solo belli da vedere, sono costruiti per rispettare le più severe normative europee.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h3 className="font-bold text-slate-900 mb-2">Marcatura CE</h3>
                                    <p className="text-slate-600 text-sm">Tutti i nostri prodotti sono conformi alle direttive UE.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h3 className="font-bold text-slate-900 mb-2">Efficienza Energetica</h3>
                                    <p className="text-slate-600 text-sm">Profili certificati per l'accesso ai Bonus Fiscali (Ecobonus, Bonus Ristrutturazione).</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h3 className="font-bold text-slate-900 mb-2">Garanzia Prolungata</h3>
                                    <p className="text-slate-600 text-sm">Siamo così sicuri di ciò che costruiamo che offriamo garanzie estese sui nostri prodotti.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 5: I NOSTRI SHOWROOM */}
                <section className="py-20 bg-white">
                    <div className="container">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
                            Dai un volto alla nostra azienda: Vieni a trovarci
                        </h2>
                        <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
                            Se la fabbrica è il cuore, i nostri showroom sono il salotto dove accoglierti. Qui non troverai semplici venditori, ma consulenti tecnici pronti ad ascoltare le tue esigenze.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                                        <FiMapPin className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">Showroom Roma (Capena)</h3>
                                    </div>
                                </div>
                                <p className="text-slate-600 mb-4">
                                    Uno spazio espositivo dove toccare con mano le finiture, provare la solidità delle porte blindate e vedere la differenza tra un doppio e triplo vetro.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                                        <FiMapPin className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">Showroom Orvieto</h3>
                                    </div>
                                </div>
                                <p className="text-slate-600 mb-4">
                                    Il nostro punto di riferimento per l'Umbria e l'alto Lazio, dove la tradizione incontra l'innovazione.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEZIONE 6: CTA FINALE */}
                <section className="py-20 bg-slate-900 text-white text-center">
                    <div className="container max-w-3xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Vuoi vedere come lavoriamo?
                        </h2>
                        <p className="text-xl text-slate-300 mb-10">
                            La trasparenza è il nostro primo valore. Ti invitiamo nei nostri showroom per progettare insieme i tuoi nuovi infissi.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-amber-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                        >
                            PRENOTA UN APPUNTAMENTO IN SHOWROOM
                        </a>
                        <div className="mt-4">
                            <a href="#contact" className="text-slate-400 hover:text-white transition-colors underline">Oppure richiedi un preventivo online</a>
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

export default AboutPage;
