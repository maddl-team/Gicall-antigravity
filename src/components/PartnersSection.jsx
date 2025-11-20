import { motion } from 'framer-motion';

const partners = [
    'Veka', 'Schüco', 'Saint-Gobain', 'Deceuninck', 'Somfy', 'Hoppe', 'Maico', 'Agc'
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
                        <span key={index} className="text-3xl font-bold text-slate-300 uppercase tracking-widest hover:text-slate-400 transition-colors cursor-default">
                            {partner}
                        </span>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {partners.map((partner, index) => (
                        <span key={`dup-${index}`} className="text-3xl font-bold text-slate-300 uppercase tracking-widest hover:text-slate-400 transition-colors cursor-default">
                            {partner}
                        </span>
                    ))}
                    {/* Triplicate set for safety on wide screens */}
                    {partners.map((partner, index) => (
                        <span key={`trip-${index}`} className="text-3xl font-bold text-slate-300 uppercase tracking-widest hover:text-slate-400 transition-colors cursor-default">
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
