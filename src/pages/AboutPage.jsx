import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>Chi Siamo | GICALL - Serramenti a Roma e Orvieto</title>
                <meta name="description" content="Scopri la storia di GICALL. Da oltre 20 anni leader nella produzione e installazione di infissi in PVC e alluminio. Showroom a Roma e Orvieto." />
                <meta name="keywords" content="Chi Siamo Gicall, Storia Gicall, Serramenti Roma, Showroom Infissi, Team Gicall" />
            </Helmet>

            <Header />

            <main className="bg-white">
                {/* HERO SECTION */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                            alt="Team al lavoro in ufficio"
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
                                La Nostra Storia, <span className="text-amber-500">Il Tuo Futuro</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                                Da oltre vent'anni portiamo qualità, sicurezza e design nelle case degli italiani.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* SECTION 1: STORY */}
                <section className="py-20 bg-white">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                    Più di semplici venditori
                                </h2>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    GICALL nasce dalla passione per l'artigianato e l'innovazione. Non siamo solo rivenditori, siamo consulenti che ti guidano nella scelta migliore per la tua casa.
                                </p>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Crediamo che ogni casa sia unica e meriti attenzione ai dettagli. Per questo seguiamo ogni progetto personalmente, dal rilievo misure fino all'installazione e all'assistenza post-vendita.
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center p-6 bg-slate-50 rounded-xl">
                                        <div className="text-4xl font-bold text-amber-500 mb-2">20+</div>
                                        <div className="text-slate-700 font-medium">Anni di Esperienza</div>
                                    </div>
                                    <div className="text-center p-6 bg-slate-50 rounded-xl">
                                        <div className="text-4xl font-bold text-amber-500 mb-2">5000+</div>
                                        <div className="text-slate-700 font-medium">Clienti Soddisfatti</div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
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

                {/* SECTION 2: VALUES */}
                <section className="py-20 bg-slate-50">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                I Nostri Valori
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Qualità Certificata",
                                    desc: "Selezioniamo solo i migliori profili (Schüco, Aluplast) e vetri ad alte prestazioni.",
                                    icon: <FiAward className="text-4xl text-amber-500" />
                                },
                                {
                                    title: "Posa Qualificata",
                                    desc: "I nostri installatori sono formati e certificati per garantire la massima efficienza termoacustica.",
                                    icon: <FiCheckCircle className="text-4xl text-amber-500" />
                                },
                                {
                                    title: "Vicinanza al Cliente",
                                    desc: "Con due showroom strategici, siamo sempre pronti ad ascoltare le tue esigenze.",
                                    icon: <FiUsers className="text-4xl text-amber-500" />
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                                >
                                    <div className="mb-6">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 3: LOCATIONS */}
                <section className="py-20 bg-white">
                    <div className="container">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                            Dove Trovarci
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                                        <FiMapPin className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">Roma</h3>
                                        <p className="text-slate-500">Showroom & Uffici</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 mb-4">
                                    Via dei Castani, 123<br />
                                    00100 Roma (RM)
                                </p>
                                <p className="text-slate-600">
                                    <strong>Tel:</strong> 06 12345678<br />
                                    <strong>Email:</strong> info@gicall.it
                                </p>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                                        <FiMapPin className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">Orvieto</h3>
                                        <p className="text-slate-500">Showroom & Produzione</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 mb-4">
                                    Via della Zona Industriale, 45<br />
                                    05018 Orvieto (TR)
                                </p>
                                <p className="text-slate-600">
                                    <strong>Tel:</strong> 0763 123456<br />
                                    <strong>Email:</strong> orvieto@gicall.it
                                </p>
                            </div>
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
