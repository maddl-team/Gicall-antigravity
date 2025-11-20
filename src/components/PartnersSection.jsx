import { motion } from 'framer-motion';

const partners = [
    { name: 'Alias', url: 'https://www.gicall.it/wp-content/uploads/2023/07/gicall-loghi_0007_ALIAS_LOGOalta.jpg' },
    { name: 'Alupergo', url: 'https://www.gicall.it/wp-content/uploads/2023/07/gicall-loghi_0006_alupergo-ban.jpg' },
    { name: 'Cerbone', url: 'https://www.gicall.it/wp-content/uploads/2023/07/gicall-loghi_0005_cerbone-logo.jpg' },
    { name: 'Partner', url: 'https://www.gicall.it/wp-content/uploads/2023/07/gicall-loghi_0001_unnamed.jpg' },
    { name: 'Isomax', url: 'https://www.gicall.it/wp-content/uploads/2023/07/gicall-loghi_0004_ISOMAX.jpg' },
    { name: 'OIP', url: 'https://www.gicall.it/wp-content/uploads/2023/07/gicall-loghi_0002_OIP.jpg' },
    { name: 'Tecnotenda', url: 'https://www.gicall.it/wp-content/uploads/2023/07/gicall-loghi_0003_logo_tecnotenda.jpg' },
    { name: 'Zero5', url: 'https://www.gicall.it/wp-content/uploads/2023/07/gicall-loghi_0000_Zero5_logo.jpg' },
    { name: 'Wurth', url: 'https://www.gicall.it/wp-content/uploads/2023/07/wurth.jpg' }
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
