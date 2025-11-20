import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiSun, FiUmbrella, FiWind, FiCheck } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const OutdoorPage = () => {
    return (
        <>
            <Helmet>
                <title>Pergotende e Tende da Sole Roma | Outdoor Living - GICALL</title>
                <meta name="description" content="Vivi i tuoi spazi esterni tutto l'anno. Pergotende, pergole bioclimatiche e tende da sole su misura. Progettazione e installazione a Roma e Orvieto." />
                <meta name="keywords" content="Pergotende Roma, Tende da Sole, Pergole Bioclimatiche, Outdoor Living, Gicall" />
            </Helmet>

            <Header />

            <main className="bg-white">
                {/* HERO SECTION */}
                <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1631641551473-fbe46919289d?q=80&w=2070&auto=format&fit=crop"
                            alt="Pergola bioclimatica moderna con arredo giardino"
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
                                Il Tuo Salotto <span className="text-amber-500">Sotto il Cielo</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                                Trasforma terrazzi e giardini in spazi da vivere tutto l'anno. Protezione dal sole, riparo dalla pioggia, design senza tempo.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="#soluzioni"
                                    className="btn btn-primary text-lg px-8 py-4"
                                >
                                    Esplora Outdoor
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* SECTION 1: INTRO */}
                <section className="py-20 bg-white">
                    <div className="container text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Outdoor Living
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            L'outdoor non è più solo "fuori", è un'estensione della tua casa. Che tu abbia un piccolo balcone o un grande giardino, le nostre soluzioni ti permettono di sfruttare ogni metro quadro, creando zone d'ombra fresche d'estate e spazi riparati d'inverno.
                        </p>
                    </div>
                </section>

                {/* SECTION 2: SOLUTIONS */}
                <section id="soluzioni" className="py-20 bg-slate-50">
                    <div className="container">
                        <div className="space-y-24">
                            {/* Solution 1: Pergole Bioclimatiche */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <FiSun className="text-4xl text-amber-500" />
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                                            Pergole Bioclimatiche
                                        </h3>
                                    </div>
                                    <p className="text-lg text-amber-600 font-medium mb-6">La tecnologia al servizio del comfort</p>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Il massimo dell'evoluzione outdoor. Le lame orientabili in alluminio permettono di regolare luce e aria in modo naturale.
                                        <br /><br />
                                        Quando piove, le lame si chiudono ermeticamente proteggendo l'arredo sottostante. L'acqua viene convogliata nei montanti, invisibile.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Regolazione climatica naturale</li>
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Illuminazione LED integrata (optional)</li>
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Chiusure laterali vetrate o zip screen</li>
                                    </ul>
                                </motion.div>
                                <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop"
                                        alt="Pergola bioclimatica"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Solution 2: Pergotende */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop"
                                        alt="Pergotenda retrattile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="order-1 lg:order-2"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <FiUmbrella className="text-4xl text-amber-500" />
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                                            Pergotende
                                        </h3>
                                    </div>
                                    <p className="text-lg text-amber-600 font-medium mb-6">Eleganza e praticità</p>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Strutture con copertura mobile a impacchettamento. Il telo in PVC oscurante, impermeabile e ignifugo scorre su guide, permettendoti di aprire o chiudere il tetto a piacimento.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Design leggero e raffinato</li>
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Telo tecnico ad alta resistenza</li>
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Motorizzazione di serie</li>
                                    </ul>
                                </motion.div>
                            </div>

                            {/* Solution 3: Tende da Sole */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <FiWind className="text-4xl text-amber-500" />
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                                            Tende da Sole
                                        </h3>
                                    </div>
                                    <p className="text-lg text-amber-600 font-medium mb-6">L'ombra dove serve</p>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Dalle classiche tende a bracci estensibili per balconi, alle cappottine, fino alle moderne tende a caduta verticale. Tessuti Tempotest Parà garantiti contro lo scolorimento.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Cassonetto di protezione per il tessuto</li>
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Sensori vento/sole automatici</li>
                                        <li className="flex items-center gap-3 text-slate-700"><FiCheck className="text-amber-500" /> Vasta gamma di tessuti e colori</li>
                                    </ul>
                                </motion.div>
                                <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=2664&auto=format&fit=crop"
                                        alt="Tenda da sole a bracci"
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
                            Vivi fuori, sentiti a casa.
                        </h2>
                        <p className="text-xl text-slate-300 mb-10">
                            Richiedi un sopralluogo gratuito per progettare il tuo spazio outdoor.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-amber-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                        >
                            Richiedi Preventivo Outdoor
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

export default OutdoorPage;
