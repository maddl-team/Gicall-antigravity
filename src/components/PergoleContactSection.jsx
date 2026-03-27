"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiSend, FiCheckCircle, FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';

const PergoleContactSection = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        postalCode: '',
        ambiente_installazione: 'Terrazzo/Balcone',
        modello_interesse: 'Bioclimatica',
        interesse_ecobonus: 'Sì',
        message: '',
        privacy: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox' && name === 'privacy') {
            setFormState({ ...formState, privacy: checked });
        } else {
            setFormState({ ...formState, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');
        try {
            const payload = {
                ...formState,
                page: typeof window !== 'undefined' ? window.location.pathname : '',
            };

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                throw new Error(data.error || 'Invio non riuscito, riprova.');
            }

            setIsSuccess(true);
            setFormState({
                firstName: '', lastName: '', email: '', phone: '', city: '', postalCode: '',
                ambiente_installazione: 'Terrazzo/Balcone',
                modello_interesse: 'Bioclimatica',
                interesse_ecobonus: 'Sì',
                message: '', privacy: false
            });
        } catch (err) {
            setErrorMessage(err.message || 'Errore imprevisto, riprova più tardi.');
            setIsSuccess(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contatti" className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/background_contactform_gicall.webp"
                    alt="Background"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-slate-900/80"></div>
            </div>



            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase mb-2 block">
                            Contattaci
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Richiedi il tuo Progetto Outdoor Gratuito
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Raccontaci il tuo progetto. Essendo produttori, possiamo garantirti la migliore soluzione tecnica al prezzo di fabbrica.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                                    <span className="font-bold text-xl">1</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Risposta Rapida</h4>
                                    <p className="text-slate-400">Analizziamo la tua richiesta e ti ricontattiamo entro 24/48 ore.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                                    <span className="font-bold text-xl">2</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Consulenza Tecnica</h4>
                                    <p className="text-slate-400">Non riceverai un semplice prezzo, ma una soluzione pensata per migliorare l'efficienza energetica.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                                    <span className="font-bold text-xl">3</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Nessuna Sorpresa</h4>
                                    <p className="text-slate-400">I nostri preventivi sono chiari e includono tutto (trasporto, posa, smaltimento).</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <h4 className="text-lg font-bold mb-4 text-white">Preferisci parlare con un esperto?</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <FiPhone className="text-amber-500" />
                                    <span>Telefono: <a href="tel:+390698267004" className="hover:text-white transition-colors font-semibold">06 98267 004</a></span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <FaWhatsapp className="text-amber-500" />
                                    <span>Whatsapp: <a href="https://wa.me/390698267004" className="hover:text-white transition-colors font-semibold">06 98267 004</a></span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <FiMail className="text-amber-500" />
                                    <a href="mailto:info@gicall.it" className="hover:text-white transition-colors">info@gicall.it</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl"
                    >
                        {isSuccess ? (
                            <div className="text-center py-12">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <FiCheckCircle className="text-4xl text-white" />
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-2">Richiesta Inviata!</h3>
                                <p className="text-slate-600">Grazie per averci contattato. Ti risponderemo al più presto.</p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-6 text-amber-600 hover:text-amber-700 font-medium underline"
                                >
                                    Invia un'altra richiesta
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                                        <input
                                            id="firstName"
                                            type="text"
                                            name="firstName"
                                            required
                                            value={formState.firstName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Cognome</label>
                                        <input
                                            id="lastName"
                                            type="text"
                                            name="lastName"
                                            required
                                            value={formState.lastName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            value={formState.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefono (Obbligatorio)</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formState.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">Città</label>
                                        <input
                                            id="city"
                                            type="text"
                                            name="city"
                                            required
                                            value={formState.city}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="postalCode" className="block text-sm font-medium text-slate-700 mb-1">CAP</label>
                                        <input
                                            id="postalCode"
                                            type="text"
                                            name="postalCode"
                                            required
                                            value={formState.postalCode}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                                            placeholder="00000"
                                            maxLength="5"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="ambiente_installazione" className="block text-sm font-medium text-slate-700 mb-1">Dove vuoi installarla?</label>
                                    <select
                                        id="ambiente_installazione"
                                        name="ambiente_installazione"
                                        value={formState.ambiente_installazione}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                                    >
                                        <option>Terrazzo/Balcone</option>
                                        <option>Giardino/Patio</option>
                                        <option>Attività Commerciale</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="modello_interesse" className="block text-sm font-medium text-slate-700 mb-1">Cosa ti interessa?</label>
                                        <select
                                            id="modello_interesse"
                                            name="modello_interesse"
                                            value={formState.modello_interesse}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                                        >
                                            <option>Bioclimatica</option>
                                            <option>Pergotenda</option>
                                            <option>Tenda da Sole</option>
                                            <option>Consulenza</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="interesse_ecobonus" className="block text-sm font-medium text-slate-700 mb-1">Interesse Ecobonus 50%?</label>
                                        <select
                                            id="interesse_ecobonus"
                                            name="interesse_ecobonus"
                                            value={formState.interesse_ecobonus}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                                        >
                                            <option>Sì</option>
                                            <option>No</option>
                                            <option>Info</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Messaggio / Note</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="3"
                                        value={formState.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                                    ></textarea>
                                </div>

                                {errorMessage && (
                                    <div className="p-3 rounded-lg border border-red-200 bg-red-50 text-sm text-red-700">
                                        {errorMessage}
                                    </div>
                                )}

                                <label className="flex items-start gap-2 text-xs text-slate-500 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="privacy"
                                        required
                                        checked={formState.privacy}
                                        onChange={handleInputChange}
                                        className="mt-1 rounded text-amber-500 focus:ring-amber-500"
                                    />
                                    <span>
                                        Acconsento al trattamento dei dati personali secondo la{' '}
                                        <a href="/privacy-policy" className="text-amber-600 hover:text-amber-700 underline">
                                            Privacy Policy
                                        </a>.
                                    </span>
                                </label>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn btn-primary py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Invio in corso...' : <>Invia Richiesta e Scarica Catalogo <FiSend /></>}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PergoleContactSection;
