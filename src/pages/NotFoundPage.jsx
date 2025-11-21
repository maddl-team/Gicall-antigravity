import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiAlertTriangle } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage = () => {
    return (
        <>
            <title>Pagina Non Trovata | GICALL</title>
            <meta name="robots" content="noindex, follow" />

            <Header />

            <main className="bg-slate-50 min-h-screen flex flex-col">
                <section className="flex-grow flex items-center justify-center py-20 px-4">
                    <div className="container max-w-2xl text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8 flex justify-center"
                        >
                            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center text-amber-500">
                                <FiAlertTriangle className="text-5xl" />
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-6xl md:text-8xl font-bold text-slate-900 mb-4"
                        >
                            404
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-2xl md:text-3xl font-bold text-slate-800 mb-6"
                        >
                            Pagina Non Trovata
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-slate-600 text-lg mb-10 leading-relaxed"
                        >
                            Ci dispiace, ma la pagina che stai cercando non esiste o è stata spostata.
                            <br className="hidden md:block" />
                            Verifica l'URL o torna alla home page per continuare a navigare.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-1"
                            >
                                <FiHome className="text-xl" />
                                Torna alla Home
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default NotFoundPage;
