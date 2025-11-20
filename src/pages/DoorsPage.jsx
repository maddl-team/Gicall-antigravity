import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiShield, FiLock, FiHome, FiCheck, FiArrowRight } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const DoorsPage = () => {
    return (
        <>
            <Helmet>
                <title>Porte Blindate e Interne Roma | Sicurezza e Design - GICALL</title>
                <meta name="description" content="Porte blindate di sicurezza Classe 3 e 4 e porte interne di design. Produzione e installazione a Roma e Orvieto. Scegli la sicurezza che arreda." />
                <meta name="keywords" content="Porte Blindate Roma, Porte Interne, Porte Sicurezza, Infissi Roma, Gicall" />
            </Helmet>

            <Header />

            <main className="bg-white">
                {/* HERO SECTION */}
                <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1517166365203-a950a51a815c?q=80&w=2000&auto=format&fit=crop"
                            alt="Porta blindata di design"
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
                                La Sicurezza che <span className="text-amber-500">Arreda</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                                Proteggi la tua casa con le nostre porte blindate certificate e definisci il tuo stile con le porte interne di design.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="#blindate"
                                    className="btn btn-primary text-lg px-8 py-4"
                                >
                                    Scopri le Blindate
                                </a>
                                <a
                                    href="#interne"
                                    className="btn bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-4"
                                >
                                    Vedi Porte Interne
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* SECTION 1: PORTE BLINDATE */}
                <section id="blindate" className="py-20 bg-white">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <FiShield className="text-4xl text-amber-500" />
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                        Porte Blindate
                                    </h2>
                                </div>
                                <h3 className="text-xl text-slate-600 mb-6 font-medium">
                                    La prima barriera contro le intrusioni, l'ultimo tocco di stile per il tuo ingresso.
                                </h3>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Le nostre porte blindate non sono semplici chiusure, ma sistemi di sicurezza avanzati. Progettate per resistere ai tentativi di effrazione più sofisticati, offrono al contempo un isolamento termico e acustico eccezionale.
                                </p>

                                <div className="space-y-6">
                                    <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-500">
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Classe 3 e Classe 4</h4>
                                        <p className="text-slate-600">
                                            Certifichiamo le nostre porte secondo le rigide normative europee.
                                            <br /><strong>Classe 3:</strong> Ideale per appartamenti condominiali.
                                            <br /><strong>Classe 4:</strong> Raccomandata per ville e case isolate.
                                        </p>
                                    </div>

                                    <ul className="space-y-3">
                                        {[
                                            "Serrature a cilindro europeo con defender antitrapano",
                                            "Rostri fissi lato cerniere (antiscardinamento)",
                                            "Coibentazione interna per comfort termico e acustico",
                                            "Pannelli di rivestimento personalizzabili (legno, alluminio, gres)"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700">
                                                <FiCheck className="text-amber-500 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2000&auto=format&fit=crop"
                                    alt="Dettaglio porta blindata moderna"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg">
                                    <p className="text-slate-800 font-semibold">
                                        "Sicurezza non significa rinunciare alla bellezza. I nostri pannelli si abbinano perfettamente alle tue porte interne."
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: PORTE INTERNE */}
                <section id="interne" className="py-20 bg-slate-50">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Porte Interne: Il Design che Unisce
                            </h2>
                            <p className="text-lg text-slate-600">
                                La porta interna è un vero e proprio elemento d'arredo. Divide gli spazi ma unisce lo stile della tua casa.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Laccate Moderne",
                                    desc: "Linee pulite, superfici lisce o pantografate. Il bianco e i colori pastello per dare luce e modernità agli ambienti.",
                                    img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=800&auto=format&fit=crop"
                                },
                                {
                                    title: "Legno Classico",
                                    desc: "Il calore delle essenze naturali. Rovere, Noce, Ciliegio per chi ama la tradizione e l'eleganza senza tempo.",
                                    img: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop"
                                },
                                {
                                    title: "Vetro e Alluminio",
                                    desc: "Trasparenze e minimalismo. Soluzioni scorrevoli o a battente per separare senza dividere visivamente gli spazi.",
                                    img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="h-64 overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Sistemi di Apertura</h3>
                                    <p className="text-slate-600 mb-6">
                                        Non solo la classica porta a battente. Risolviamo i tuoi problemi di spazio con soluzioni intelligenti.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2 text-slate-700 font-medium"><FiCheck className="text-amber-500" /> Scorrevoli a scomparsa</div>
                                        <div className="flex items-center gap-2 text-slate-700 font-medium"><FiCheck className="text-amber-500" /> Scorrevoli esterno muro</div>
                                        <div className="flex items-center gap-2 text-slate-700 font-medium"><FiCheck className="text-amber-500" /> Libro / Pacchetto</div>
                                        <div className="flex items-center gap-2 text-slate-700 font-medium"><FiCheck className="text-amber-500" /> Filomuro (Invisibili)</div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3">
                                    <div className="bg-amber-50 p-6 rounded-xl text-center">
                                        <FiHome className="text-4xl text-amber-500 mx-auto mb-4" />
                                        <h4 className="font-bold text-slate-900 mb-2">Posa Certificata</h4>
                                        <p className="text-sm text-slate-600">
                                            Anche la porta più bella, se montata male, non chiude. I nostri posatori sono falegnami esperti.
                                        </p>
                                    </div>
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
                                    q: "Posso detrarre la spesa per la porta blindata?",
                                    a: "Sì, la sostituzione della porta blindata rientra nel Bonus Sicurezza (detrazione 50%) senza necessità di pratiche edilizie complesse."
                                },
                                {
                                    q: "Le porte interne sono standard o su misura?",
                                    a: "Abbiamo entrambe le soluzioni. Misure standard per risparmiare, su misura per adattarsi a vani esistenti senza opere murarie."
                                },
                                {
                                    q: "Quanto tempo ci vuole per la consegna?",
                                    a: "Per le porte standard circa 3-4 settimane. Per prodotti su misura o laccati specifici, circa 6-8 settimane."
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
                            Chiudi fuori i problemi, apri allo stile.
                        </h2>
                        <p className="text-xl text-slate-300 mb-10">
                            Vieni a vedere e toccare con mano la solidità delle nostre porte nei nostri showroom.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-amber-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                        >
                            Richiedi Preventivo Porte
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

export default DoorsPage;
