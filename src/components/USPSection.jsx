"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiSettings, FiZap } from 'react-icons/fi';

const features = [
    {
        icon: <FiCheckCircle className="w-12 h-12 text-amber-500" />,
        title: 'Zero Intermediari',
        description: 'Rapporto diretto fabbrica-cliente per un prezzo competitivo e un controllo qualità assoluto.'
    },
    {
        icon: <FiSettings className="w-12 h-12 text-amber-500" />,
        title: 'Personalizzazione Totale',
        description: 'Realizziamo soluzioni su misura per qualsiasi esigenza architettonica.'
    },
    {
        icon: <FiZap className="w-12 h-12 text-amber-500" />,
        title: 'Efficienza Energetica',
        description: 'Prodotti certificati per garantirti il massimo isolamento termico e acustico, abbattendo i costi in bolletta.'
    }
];

const USPSection = () => {
    return (
        <section id="usp" className="section bg-white">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Text Content */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-amber-600 font-semibold tracking-wider text-sm uppercase mb-2 block">
                            Perché scegliere GICALL
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Dal Progetto alla Posa, <br /> Senza Intermediari
                        </h2>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            Quando si tratta di proteggere e valorizzare la tua casa, la qualità non ammette compromessi.
                            <strong> GICALL non è un semplice rivenditore: siamo produttori diretti</strong> di infissi e serramenti.
                        </p>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Questo significa che ogni finestra, ogni porta e ogni sistema oscurante nasce nei nostri stabilimenti,
                            curato nei minimi dettagli dai nostri artigiani e tecnici specializzati.
                            Scegliere GICALL significa affidarsi a un partner unico che ti segue a 360 gradi.
                        </p>

                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                                        <p className="text-slate-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        className="flex-1 relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/gicall_about_homepage.webp"
                                alt="Produzione infissi in fabbrica"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-8">
                                <p className="text-white text-xl font-medium">
                                    "Qualità artigianale e tecnologia industriale, direttamente a casa tua."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default USPSection;
