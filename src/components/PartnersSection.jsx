import { motion } from 'framer-motion';

const partners = [
    { name: 'Alias', url: '/partners/alias.jpg' },
    { name: 'Alupergo', url: '/partners/alupergo.jpg' },
    { name: 'Cerbone', url: '/partners/cerbone.jpg' },
    { name: 'Partner', url: '/partners/partner.jpg' },
    { name: 'Isomax', url: '/partners/isomax.jpg' },
    { name: 'OIP', url: '/partners/oip.jpg' },
    { name: 'Tecnotenda', url: '/partners/tecnotenda.jpg' },
    { name: 'Zero5', url: '/partners/zero5.jpg' },
    { name: 'Wurth', url: '/partners/wurth.jpg' }
];

const PartnersSection = () => {
    return (
        <section className="py-12 bg-slate-50 border-y border-slate-200 overflow-hidden">
            <div className="container mb-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                    Partner d'Eccellenza per Risultati Garantiti
                </h2>
                <p className="text-slate-600 max-w-3xl mx-auto">
                    Collaboriamo solo con i brand leader mondiali nella tecnologia dei serramenti per garantirti durata e prestazioni.
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
                    {/* First set of logos */}
                    {partners.map((partner, index) => (
                        <div key={index} className="flex-shrink-0 bg-white p-4 rounded-xl shadow-sm border border-slate-100 mx-4">
                            <img
                                src={partner.url}
                                alt={partner.name}
                                className="h-16 md:h-24 w-auto object-contain"
                            />
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {partners.map((partner, index) => (
                        <div key={`dup-${index}`} className="flex-shrink-0 bg-white p-4 rounded-xl shadow-sm border border-slate-100 mx-4">
                            <img
                                src={partner.url}
                                alt={partner.name}
                                className="h-16 md:h-24 w-auto object-contain"
                            />
                        </div>
                    ))}
                    {/* Triplicate set for safety on wide screens */}
                    {partners.map((partner, index) => (
                        <div key={`trip-${index}`} className="flex-shrink-0 bg-white p-4 rounded-xl shadow-sm border border-slate-100 mx-4">
                            <img
                                src={partner.url}
                                alt={partner.name}
                                className="h-16 md:h-24 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
