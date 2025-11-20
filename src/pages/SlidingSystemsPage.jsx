import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiMaximize, FiSun, FiLayout, FiCheck } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const SlidingSystemsPage = () => {
    return (
        <>
            <Helmet>
                <title>Sistemi Scorrevoli e Grandi Vetrate Roma | GICALL</title>
                <meta name="description" content="Sistemi scorrevoli in alluminio e PVC per grandi vetrate. Alzanti scorrevoli e scorrevoli minimali per inondare di luce la tua casa. Showroom a Roma e Orvieto." />
                <meta name="keywords" content="Sistemi Scorrevoli Roma, Grandi Vetrate, Alzante Scorrevole, Infissi Scorrevoli, Gicall" />
            </Helmet>

            <Header />

            <main className="bg-white">
                {/* HERO SECTION */}
                <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                            alt="Ampia vetrata scorrevole sul giardino"
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
                                Abbatti i Confini tra <span className="text-amber-500">Dentro e Fuori</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                                Sistemi scorrevoli panoramici che trasformano la tua casa. Più luce, più spazio, zero ingombri.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="#sistemi"
                                    className="btn btn-primary text-lg px-8 py-4"
                                >
                                    Scopri le Soluzioni
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* SECTION 1: BENEFITS */}
                <section className="py-20 bg-white">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                    La Luce come Protagonista
                                </h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Le moderne architetture richiedono aperture sempre più grandi. I nostri sistemi scorrevoli sono progettati per supportare vetrate di grandi dimensioni mantenendo una manovrabilità fluida e leggera, quasi eterea.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-500">
                                        <FiMaximize className="text-3xl text-amber-500 mb-3" />
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Spazio Amplificato</h3>
                                        <p className="text-slate-600 text-sm">
                                            Elimina l'ingombro delle ante a battente e guadagna spazio arredabile prezioso.
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-amber-500">
                                        <FiSun className="text-3xl text-amber-500 mb-3" />
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Luce Naturale</h3>
                                        <p className="text-slate-600 text-sm">
                                            Profili ridotti al minimo per massimizzare la superficie vetrata e l'ingresso della luce.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop"
                                    alt="Living room con vetrata scorrevole"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: SYSTEMS */}
                <section id="sistemi" className="py-20 bg-slate-50">
                    <div className="container">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">
                            Tecnologie di Apertura
                        </h2>

                        <div className="space-y-24">
                            {/* System 1: Alzante Scorrevole */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
                                        alt="Alzante scorrevole moderno"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="order-1 lg:order-2"
                                >
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                        Alzante Scorrevole
                                    </h3>
                                    <p className="text-lg text-amber-600 font-medium mb-6">Il re delle grandi aperture</p>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Il sistema più prestigioso. Ruotando il maniglione, l'anta si solleva leggermente e scorre su binari con una fluidità sorprendente, anche per vetrate di 300kg o più. Quando chiusa, guarnizioni speciali garantiscono una tenuta ermetica.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Soglia a pavimento ribassata (quasi zero)</li>
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Ideale per aperture fino a 6 metri e oltre</li>
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Disponibile in PVC, Alluminio e Legno-Alluminio</li>
                                    </ul>
                                </motion.div>
                            </div>

                            {/* System 2: Scorrevole Parallelo / In Linea */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                        Scorrevole Parallelo e in Linea
                                    </h3>
                                    <p className="text-lg text-amber-600 font-medium mb-6">Versatilità e performance</p>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Soluzioni intelligenti per chi cerca la praticità dello scorrevole con prestazioni termiche elevate.
                                        <br /><br />
                                        <strong>Parallelo:</strong> Un'anta che ribalta come una finestra normale, ma scorre lateralmente. Perfetto per chi vuole la massima tenuta.
                                        <br />
                                        <strong>In Linea:</strong> Il classico scorrevole, rivisitato con profili moderni e minimali.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Ottimo rapporto qualità/prezzo</li>
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Perfetta tenuta aria/acqua</li>
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Ideale per porte-finestre di medie dimensioni</li>
                                    </ul>
                                </motion.div>
                                <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1556912173-3db996e7c31c?q=80&w=2072&auto=format&fit=crop"
                                        alt="Scorrevole parallelo"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA FINAL */}
                <section className="py-20 bg-slate-900 text-white text-center">
                    <div className="container max-w-3xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Progetta la tua vista sul mondo.
                        </h2>
                        <p className="text-xl text-slate-300 mb-10">
                            Vieni a provare la leggerezza dei nostri scorrevoli in showroom.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-amber-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                        >
                            Richiedi Preventivo Scorrevoli
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

export default SlidingSystemsPage;
