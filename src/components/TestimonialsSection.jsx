"use client";
import { motion } from 'framer-motion';
import TrustIndexWidget from './TrustIndexWidget';

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

                {/* TrustIndex Widget */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full"
                >
                    <TrustIndexWidget />
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
