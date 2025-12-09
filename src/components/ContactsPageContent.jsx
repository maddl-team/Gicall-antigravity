"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaFacebook, FaInstagram, FaLinkedin, FaTools } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const ContactsPageContent = () => {
    // Scroll to top logic removed as Next.js handles navigation scroll

    const locations = [
        {
            name: "SEDE ROMA",
            subtitle: "Fabbrica & Showroom",
            description: "Il cuore produttivo di GICALL. Qui puoi visitare lo showroom e, su richiesta, vedere la fabbrica.",
            address: "Via Traversa del Grillo, 00060 Capena (RM)",
            phone: "+39 320 820 3824",
            mobile: null,
            email: "roma@gicall.it",
            directions: "A pochi minuti dall'uscita autostradale, comodo parcheggio riservato ai clienti.",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.5!2d12.5386!3d42.1389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f5e5e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sVia%20Traversa%20del%20Grillo%2C%2000060%20Capena%20RM!5e0!3m2!1sit!2sit!4v1620000000000!5m2!1sit!2sit"
        },
        {
            name: "SEDE ORVIETO",
            subtitle: "Showroom",
            description: "Il nostro punto di riferimento per l'Umbria e l'Alto Lazio.",
            address: "Via Tevere, 26, 05018 Sferracavallo (TR)",
            phone: "+39 329 013 0130",
            mobile: "+39 329 013 0130",
            email: "orvieto@gicall.it",
            directions: "Situato in [Zona specifica], facile da raggiungere dal centro.",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.1!2d12.1000!3d42.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f5e5e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sVia%20Tevere%2C%2026%2C%2005018%20Sferracavallo%20TR!5e0!3m2!1sit!2sit!4v1620000000000!5m2!1sit!2sit"
        }
    ];

    const schedule = [
        { day: "Lunedì", morning: "09:00 - 13:00", afternoon: "14:00 - 17:00" },
        { day: "Martedì", morning: "09:00 - 13:00", afternoon: "14:00 - 17:00" },
        { day: "Mercoledì", morning: "09:00 - 13:00", afternoon: "14:00 - 17:00" },
        { day: "Giovedì", morning: "09:00 - 13:00", afternoon: "14:00 - 17:00" },
        { day: "Venerdì", morning: "09:00 - 13:00", afternoon: "14:00 - 17:00" },
        { day: "Sabato", morning: "09:00 - 13:00", afternoon: "Chiuso" },
        { day: "Domenica", morning: "Chiuso", afternoon: "Chiuso" }
    ];

    return (
        <div className="font-sans text-slate-900 antialiased selection:bg-amber-100 selection:text-amber-900">
            <main>
                {/* Hero Section */}
                <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop"
                            alt="Showroom GICALL"
                            fill
                            sizes="100vw"
                            className="object-cover opacity-40"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
                    </div>

                    <div className="container relative z-10 px-4 pt-20 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                                Siamo qui per <span className="text-amber-500">ascoltarti</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                                Hai un progetto in mente? Vuoi toccare con mano i materiali? Vieni a trovarci nei nostri showroom o contattaci per una consulenza telefonica.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Locations Section */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                Dove ci trovi
                            </h2>
                            <p className="text-lg text-slate-600">
                                Due showroom a tua disposizione per toccare con mano la qualità GICALL
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {locations.map((location, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg"
                                >
                                    <div className="p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <FaMapMarkerAlt className="text-3xl text-amber-500" />
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900">{location.name}</h3>
                                                <p className="text-amber-600 font-semibold">{location.subtitle}</p>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 mb-6">{location.description}</p>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex items-start gap-3">
                                                <FaMapMarkerAlt className="text-amber-500 mt-1 shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-slate-800">Indirizzo</p>
                                                    <p className="text-slate-600">{location.address}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <FaPhone className="text-amber-500 mt-1 shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-slate-800">Telefono</p>
                                                    <a href={`tel:${location.phone}`} className="text-amber-600 hover:text-amber-700">
                                                        {location.phone}
                                                    </a>
                                                </div>
                                            </div>
                                            {location.mobile && (
                                                <div className="flex items-start gap-3">
                                                    <FaWhatsapp className="text-amber-500 mt-1 shrink-0" />
                                                    <div>
                                                        <p className="font-semibold text-slate-800">WhatsApp</p>
                                                        <a href={`https://wa.me/${location.mobile.replace(/\s/g, '')}`} className="text-amber-600 hover:text-amber-700">
                                                            {location.mobile}
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
                                            <div className="flex items-start gap-3">
                                                <FaEnvelope className="text-amber-500 mt-1 shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-slate-800">Email</p>
                                                    <a href={`mailto:${location.email}`} className="text-amber-600 hover:text-amber-700">
                                                        {location.email}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Map Embed */}
                                    <div className="h-64 bg-slate-200">
                                        <iframe
                                            src={location.mapEmbed}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title={`Mappa ${location.name}`}
                                        ></iframe>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Schedule Section */}
                <section className="section bg-slate-50">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="text-center mb-12">
                                    <div className="flex items-center justify-center gap-3 mb-4">
                                        <FaClock className="text-4xl text-amber-500" />
                                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                            I nostri orari
                                        </h2>
                                    </div>
                                    <p className="text-lg text-slate-600">
                                        Per dedicarti la giusta attenzione, consigliamo di fissare un appuntamento, soprattutto per preventivi complessi.
                                    </p>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                    <table className="w-full">
                                        <thead className="bg-slate-900 text-white">
                                            <tr>
                                                <th className="px-6 py-4 text-left font-bold">Giorno</th>
                                                <th className="px-6 py-4 text-left font-bold">Mattina</th>
                                                <th className="px-6 py-4 text-left font-bold">Pomeriggio</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {schedule.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className={`${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'
                                                        } ${item.day === 'Domenica' ? 'opacity-60' : ''}`}
                                                >
                                                    <td className="px-6 py-4 font-semibold text-slate-900">{item.day}</td>
                                                    <td className="px-6 py-4 text-slate-600">{item.morning}</td>
                                                    <td className="px-6 py-4 text-slate-600">{item.afternoon}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="max-w-3xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                        Inviaci un messaggio
                                    </h2>
                                    <p className="text-lg text-slate-600">
                                        Compila il form sottostante. Il nostro ufficio tecnico o commerciale ti risponderà entro 24 ore lavorative.
                                    </p>
                                </div>

                                <form className="bg-slate-50 p-8 rounded-2xl shadow-lg space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Nome e Cognome *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                                placeholder="Mario Rossi"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                                placeholder="mario.rossi@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Telefono *
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                                placeholder="+39 123 456 7890"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Sede di interesse
                                            </label>
                                            <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all">
                                                <option value="">Seleziona...</option>
                                                <option value="roma">Roma</option>
                                                <option value="orvieto">Orvieto</option>
                                                <option value="non-so">Non so</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Oggetto
                                        </label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all">
                                            <option value="">Seleziona...</option>
                                            <option value="preventivo">Richiesta Preventivo</option>
                                            <option value="assistenza">Assistenza Post-Vendita</option>
                                            <option value="collaborazione">Collaborazione</option>
                                            <option value="altro">Altro</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Messaggio *
                                        </label>
                                        <textarea
                                            required
                                            rows="6"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                                            placeholder="Descrivi il tuo progetto o la tua richiesta..."
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            required
                                            className="mt-1 w-5 h-5 text-amber-500 border-slate-300 rounded focus:ring-amber-200"
                                        />
                                        <label className="text-sm text-slate-600">
                                            Acconsento al trattamento dei dati personali secondo la Privacy Policy *
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-amber-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
                                    >
                                        Invia Messaggio
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Technical Assistance Section */}
                <section className="section bg-slate-50">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 bg-amber-100 rounded-full">
                                        <FaTools className="text-3xl text-amber-600" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                        Hai già i nostri infissi e ti serve aiuto?
                                    </h2>
                                </div>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Se sei già nostro cliente e hai bisogno di assistenza tecnica o manutenzione, per velocizzare la pratica ti invitiamo a inviare una mail dedicata a{' '}
                                    <a href="mailto:assistenza@gicall.it" className="text-amber-600 font-semibold hover:text-amber-700">
                                        assistenza@gicall.it
                                    </a>
                                    {' '}allegando, se possibile, una foto del problema.
                                </p>
                                <div className="bg-amber-50 p-6 rounded-lg">
                                    <p className="text-sm text-slate-700">
                                        <strong>Nota:</strong> Per un intervento più rapido, specifica sempre il tuo codice cliente e l'indirizzo dell'installazione.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Social Section */}
                <section className="py-16 bg-slate-900 text-white">
                    <div className="container text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                            Seguici sui social
                        </h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Guarda le foto dei nostri ultimi cantieri in tempo reale
                        </p>
                        <div className="flex justify-center gap-6">
                            <a
                                href="https://facebook.com/gicall"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-slate-800 rounded-full hover:bg-amber-500 transition-colors duration-300"
                            >
                                <FaFacebook className="text-3xl" />
                            </a>
                            <a
                                href="https://instagram.com/gicall"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-slate-800 rounded-full hover:bg-amber-500 transition-colors duration-300"
                            >
                                <FaInstagram className="text-3xl" />
                            </a>
                            <a
                                href="https://linkedin.com/company/gicall"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-slate-800 rounded-full hover:bg-amber-500 transition-colors duration-300"
                            >
                                <FaLinkedin className="text-3xl" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ContactsPageContent;
