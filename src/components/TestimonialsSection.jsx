import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="section bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        Dicono di Noi: <br /> La Voce dei Nostri Clienti
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed"
                    >
                        La soddisfazione di chi ha scelto GICALL è il nostro biglietto da visita più importante.
                        Non siamo noi a dire che lavoriamo bene, sono le oltre <strong>75 recensioni a 5 stelle</strong> che abbiamo ricevuto
                        a confermare la qualità dei nostri prodotti e la professionalità del nostro staff.
                    </motion.p>
                </div>

                {/* Google Reviews Widget Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 text-center shadow-inner"
                >
                    <div className="flex flex-col items-center justify-center gap-4 mb-6">
                        <FcGoogle className="text-5xl" />
                        <div className="flex items-center gap-1 text-amber-500 text-2xl">
                            <FiStar className="fill-current" />
                            <FiStar className="fill-current" />
                            <FiStar className="fill-current" />
                            <FiStar className="fill-current" />
                            <FiStar className="fill-current" />
                            <p className="text-slate-900 font-bold text-xl">Eccellente 4.9/5 su Google</p>
                        </div>
                        <p className="text-slate-500 italic">
                            [Qui verrà caricato il widget dinamico delle recensioni Google]
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
