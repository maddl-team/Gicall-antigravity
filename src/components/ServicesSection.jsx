import { motion } from 'framer-motion';
import { FiMaximize, FiShield, FiSun } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 1,
        title: 'Finestre e Infissi',
        description: 'La luce è vita, ma l\'isolamento è comfort. I nostri infissi in PVC, Alluminio e Legno/Alluminio sono progettati per offrire le migliori prestazioni di trasmittanza termica sul mercato.',
        icon: <FiMaximize className="w-8 h-8" />,
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop',
        links: [
            { text: 'Scopri Finestre in PVC', url: '/finestre-pvc' },
            { text: 'Scopri Finestre in Alluminio', url: '/finestre-alluminio' },
            { text: 'Scopri Legno/Alluminio', url: '#' }
        ]
    },
    {
        id: 2,
        title: 'Porte Interne e Blindate',
        description: 'Sicurezza e stile devono viaggiare insieme. Le nostre porte blindate offrono i più alti standard di classe antieffrazione senza rinunciare all\'eleganza.',
        icon: <FiShield className="w-8 h-8" />,
        image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop',
        links: []
    },
    {
        id: 3,
        title: 'Outdoor, Zanzariere e Complementi',
        description: 'Vivi i tuoi spazi esterni e proteggi quelli interni. Grate, Persiane, Zanzariere, Tende da Sole e Pergole per trasformare il tuo giardino o terrazzo.',
        icon: <FiSun className="w-8 h-8" />,
        image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=800&auto=format&fit=crop',
        links: []
    }
];

const ServicesSection = () => {
    return (
        <section id="prodotti" className="section bg-slate-50">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        Le Nostre Soluzioni: <br /> Finestre, Porte e Sistemi di Sicurezza
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 max-w-3xl mx-auto"
                    >
                        Offriamo una gamma completa di prodotti per vestire la tua casa, coniugando l'innovazione tecnologica con l'estetica del design italiano.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10" />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur p-2 rounded-lg text-amber-500">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                                    {service.description}
                                </p>

                                {service.links.length > 0 ? (
                                    <div className="space-y-2 mt-auto">
                                        {service.links.map((link, i) => (
                                            link.url.startsWith('/') ? (
                                                <Link key={i} to={link.url} className="block text-sm font-semibold text-amber-600 hover:text-amber-700 hover:underline">
                                                    {link.text} →
                                                </Link>
                                            ) : (
                                                <a key={i} href={link.url} className="block text-sm font-semibold text-amber-600 hover:text-amber-700 hover:underline">
                                                    {link.text} →
                                                </a>
                                            )
                                        ))}
                                    </div>
                                ) : (
                                    <a href="#" className="inline-flex items-center text-sm font-semibold text-amber-600 hover:text-amber-700 mt-auto">
                                        Scopri di più <span className="ml-1">→</span>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
