"use client";
import { motion } from 'framer-motion';
import { FiClipboard, FiPenTool, FiBox, FiTool } from 'react-icons/fi';

const steps = [
    {
        icon: <FiClipboard className="w-8 h-8" />,
        title: 'Sopralluogo Tecnico',
        description: 'Rileviamo le misure e analizziamo il contesto.'
    },
    {
        icon: <FiPenTool className="w-8 h-8" />,
        title: 'Progettazione',
        description: 'Il nostro ufficio tecnico sviluppa la soluzione su misura.'
    },
    {
        icon: <FiBox className="w-8 h-8" />,
        title: 'Produzione',
        description: 'Realizziamo il prodotto nei nostri stabilimenti.'
    },
    {
        icon: <FiTool className="w-8 h-8" />,
        title: 'Installazione e Assistenza',
        description: 'Montaggio pulito, smaltimento del vecchio e assistenza post-vendita garantita.'
    }
];

const MethodSection = () => {
    return (
        <section id="metodo" className="section bg-slate-900 text-white">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase mb-2 block">
                                Il Metodo GICALL
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                Qualità Certificata e <br /> Posa in Opera
                            </h2>
                            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                                Una finestra eccellente non serve a nulla se non è installata correttamente.
                                Per questo, in GICALL, la posa in opera è sacra.
                            </p>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                Il nostro team di installatori qualificati opera seguendo rigorosi protocolli per garantire
                                che le prestazioni certificate in laboratorio (tenuta all'aria, all'acqua e al vento)
                                siano mantenute anche a casa tua.
                            </p>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
                                >
                                    <div className="text-amber-500 mb-4">{step.icon}</div>
                                    <h4 className="text-xl font-bold mb-2 text-white">{step.title}</h4>
                                    <p className="text-slate-300 text-sm">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MethodSection;
