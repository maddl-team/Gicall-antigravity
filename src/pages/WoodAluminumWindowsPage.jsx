import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight, FiShield, FiSun, FiMaximize } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const WoodAluminumWindowsPage = () => {
    return (
        <>
            <Helmet>
                <title>Finestre in Legno Alluminio | La Sintesi Perfetta tra Natura e Tecnologia - GICALL</title>
                <meta name="description" content="Il calore del legno all'interno, la resistenza dell'alluminio all'esterno. Infissi di pregio a manutenzione zero. Produzione su misura a Roma e Orvieto." />
                <meta name="keywords" content="Finestre Legno Alluminio Roma, Infissi Legno Alluminio, Serramenti misti, Infissi pregio Roma" />
            </Helmet>

            <Header />

            <main>
                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2670&auto=format&fit=crop"
                            alt="Finestre Legno Alluminio Gicall"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
                    </div>

                    <div className="container relative z-10 text-center px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold mb-6 border border-amber-500/30 backdrop-blur-sm">
                                LA PERFEZIONE ESISTE
                            </span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Finestre in <span className="text-amber-500">Legno Alluminio</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                                Il fascino intramontabile del legno naturale unito alla resistenza eterna dell'alluminio. La soluzione definitiva per chi non accetta compromessi tra estetica e durata.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="#contact"
                                    className="btn btn-primary text-lg px-8 py-4 shadow-lg shadow-amber-500/20"
                                >
                                    Richiedi Consulenza Esclusiva
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* SECTION 1: IL MEGLIO DEI DUE MONDI */}
                <section className="py-20 bg-white">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                    Due materiali, un unico capolavoro.
                                </h2>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Perché dover scegliere tra la bellezza del legno e la praticità dell'alluminio quando puoi averli entrambi? Le finestre in Legno/Alluminio GICALL rappresentano l'apice della tecnologia dei serramenti.
                                </p>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Il concetto è semplice ma rivoluzionario:
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                                            <FiMaximize className="text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-2">All'interno (Cuore in Legno)</h4>
                                            <p className="text-slate-600">
                                                La struttura portante è realizzata in legno lamellare pregiato. Regala ai tuoi ambienti quel calore, quel profumo e quell'eleganza che solo un materiale naturale può offrire. È un vero e proprio elemento d'arredo.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
                                            <FiShield className="text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-2">All'esterno (Scudo in Alluminio)</h4>
                                            <p className="text-slate-600">
                                                Un rivestimento in alluminio protegge il legno dagli agenti atmosferici (pioggia, sole, smog). Il risultato? Un infisso bello come un mobile di pregio, ma che non richiede mai manutenzione sulla facciata esterna.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-amber-500/10 rounded-3xl transform rotate-3"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop"
                                    alt="Dettaglio infisso Legno Alluminio"
                                    className="relative rounded-3xl shadow-2xl"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: I VANTAGGI COMPETITIVI */}
                <section className="py-20 bg-slate-50">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Perché passare al Legno/Alluminio?
                            </h2>
                            <p className="text-lg text-slate-600">
                                Questa tipologia di infisso è un investimento a lungo termine che valorizza l'intero immobile.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "Manutenzione Zero",
                                    desc: "Dimentica per sempre di dover scartavetrare o verniciare le finestre esterne. Il guscio in alluminio è eterno.",
                                    icon: <FiSun />
                                },
                                {
                                    title: "Isolamento Naturale",
                                    desc: "Il legno è, per natura, uno dei migliori isolanti termici e acustici esistenti. Unito alla tecnologia moderna, garantisce un comfort abitativo assoluto.",
                                    icon: <FiCheck />
                                },
                                {
                                    title: "Solidità Strutturale",
                                    desc: "L'unione dei due materiali crea un serramento robusto, indeformabile e sicuro contro i tentativi di effrazione.",
                                    icon: <FiShield />
                                },
                                {
                                    title: "Prestigio",
                                    desc: "Aumenta il valore percepito e commerciale della tua casa con finiture di lusso.",
                                    icon: <FiMaximize />
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                                >
                                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 text-2xl mb-6">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 3: PERSONALIZZAZIONE ARTIGIANALE */}
                <section className="py-20 bg-slate-900 text-white overflow-hidden">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                    Essenze e Finiture: Crea il tuo stile.
                                </h2>
                                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                    Essendo produttori, in GICALL possiamo personalizzare ogni dettaglio del tuo infisso in legno/alluminio. Non ti offriamo prodotti standard, ma pezzi unici.
                                </p>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-amber-500 mb-4">Scegli la tua Essenza (Il Legno)</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                                                <h4 className="font-bold text-white mb-1">Rovere</h4>
                                                <p className="text-sm text-slate-400">Nobile, duro, con venature decise.</p>
                                            </div>
                                            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                                                <h4 className="font-bold text-white mb-1">Frassino</h4>
                                                <p className="text-sm text-slate-400">Elegante e luminoso, perfetto per interni moderni.</p>
                                            </div>
                                            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                                                <h4 className="font-bold text-white mb-1">Pino</h4>
                                                <p className="text-sm text-slate-400">La scelta classica, calda e accogliente.</p>
                                            </div>
                                            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                                                <h4 className="font-bold text-white mb-1">Finiture</h4>
                                                <p className="text-sm text-slate-400">Spazzolato, decapato, laccato a poro aperto.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-amber-500 mb-4">Scegli il tuo Guscio (L'Alluminio)</h3>
                                        <p className="text-slate-300">
                                            L'esterno può essere verniciato in qualsiasi colore RAL o effetto legno, per rispettare i vincoli condominiali o architettonici senza rinunciare allo stile interno.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative h-[500px] rounded-2xl overflow-hidden"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1600&auto=format&fit=crop"
                                    alt="Interni in legno pregiato"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                                        <h4 className="text-xl font-bold text-white mb-2">Tecnica Costruttiva</h4>
                                        <p className="text-slate-200 text-sm">
                                            I nostri sistemi prevedono un accoppiamento tramite clip di fissaggio in nylon. Questo permette la naturale dilatazione dei due materiali ed evita la formazione di condensa.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: FAQ */}
                <section className="py-20 bg-white">
                    <div className="container max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                            Dubbi sul Legno/Alluminio?
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "Costano molto di più del PVC?",
                                    a: "Sì, è un prodotto di fascia Premium che richiede lavorazioni complesse e materiali nobili. Tuttavia, la durata eterna e l'assenza di manutenzione ammortizzano il costo nel tempo."
                                },
                                {
                                    q: "Posso usufruire dell'Ecobonus?",
                                    a: "Assolutamente sì. Le prestazioni termiche sono eccellenti e rientrano in tutti i parametri di legge per le detrazioni fiscali."
                                },
                                {
                                    q: "Il legno interno si rovina?",
                                    a: "No, perché è protetto dall'ambiente esterno. All'interno subisce solo l'usura di un normale mobile, quindi dura generazioni."
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

                {/* CTA Final */}
                <section className="py-20 bg-slate-50">
                    <div className="container text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            L'emozione del vero legno ti aspetta
                        </h2>
                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                            Le foto non rendono giustizia a questi prodotti. Devi toccare le venature e sentire la solidità della chiusura. Ti aspettiamo nei nostri showroom.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-amber-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                        >
                            Fissa un Appuntamento in Showroom
                        </a>
                    </div>
                </section>

                {/* Contact Section */}
                <div id="contact">
                    <ContactSection />
                </div>
            </main>

            <Footer />
        </>
    );
};

export default WoodAluminumWindowsPage;
