import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
                    alt="Modern bright living room with large windows"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/60"></div>
            </div>

            {/* Content */}
            <div className="container relative z-10 text-center text-white px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-400 text-sm font-semibold mb-6 backdrop-blur-sm">
                        PRODUZIONE MADE IN ITALY
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                        Produzione Infissi e Serramenti: <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                            L'Eccellenza del Made in Italy a Casa Tua
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Finestre, Porte e Soluzioni Outdoor progettate per durare.
                        Dalla nostra fabbrica direttamente ai tuoi spazi, garantendo risparmio energetico, sicurezza e design.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#contatti" className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                            RICHIEDI UN PREVENTIVO GRATUITO
                        </a>
                        <a href="#showroom" className="btn btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
                            VISITA I NOSTRI SHOWROOM
                        </a>
                    </div>
                    {/*</motion.div>*/}

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
