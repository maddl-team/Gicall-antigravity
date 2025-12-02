import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi';

const showrooms = [
    {
        city: 'Roma (Capena)',
        address: 'Via Traversa del Grillo, 00060 Capena RM',
        phone: '320 820 3824',
        hours: [
            'Lun - Ven: 09:00 - 13:00, 14:00 - 17:00',
            'Sabato: 09:00 - 13:00',
            'Domenica: Chiuso'
        ],
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.5!2d12.5386!3d42.1389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f5e5e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sVia%20Traversa%20del%20Grillo%2C%2000060%20Capena%20RM!5e0!3m2!1sit!2sit!4v1620000000000!5m2!1sit!2sit'
    },
    {
        city: 'Orvieto (Sferracavallo)',
        address: 'Via Tevere, 26, 05018 Sferracavallo TR',
        phone: '329 013 0130',
        hours: [
            'Lun, Mer - Ven: 09:00 - 13:00, 16:30 - 19:30',
            'Martedì: 09:00 - 13:00, 16:30 - 20:00',
            'Sabato: 09:00 - 13:00',
            'Domenica: Chiuso'
        ],
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.1!2d12.1000!3d42.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f5e5e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sVia%20Tevere%2C%2026%2C%2005018%20Sferracavallo%20TR!5e0!3m2!1sit!2sit!4v1620000000000!5m2!1sit!2sit'
    }
];

const ShowroomsSection = () => {
    return (
        <section id="showroom" className="section bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        I Nostri Showroom: <br /> Vieni a toccare con mano la qualità
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 max-w-3xl mx-auto text-lg"
                    >
                        Siamo presenti con i nostri showroom a Roma (zona Capena) e a Orvieto.
                        Sebbene le nostre radici siano nel Centro Italia, la qualità GICALL non ha confini: operiamo e installiamo in tutta Italia.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {showrooms.map((showroom, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Map Placeholder */}
                            <div className="h-64 w-full bg-slate-200 relative">
                                <iframe
                                    src={showroom.mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title={`Mappa ${showroom.city}`}
                                    className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <FiMapPin className="text-amber-500" /> Showroom {showroom.city}
                                </h3>

                                <div className="space-y-4 text-slate-600">
                                    <div className="flex items-start gap-3">
                                        <FiMapPin className="mt-1 flex-shrink-0" />
                                        <p>{showroom.address}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FiPhone className="flex-shrink-0" />
                                        <p className="font-semibold">{showroom.phone}</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FiClock className="mt-1 flex-shrink-0" />
                                        <div>
                                            {showroom.hours.map((hour, idx) => (
                                                <p key={idx} className={idx > 0 ? 'mt-1' : ''}>{hour}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <a href="#contatti" className="btn btn-outline w-full mt-8 text-center block">
                                    Prenota un Appuntamento
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShowroomsSection;
