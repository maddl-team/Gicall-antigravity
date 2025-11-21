import { FiFacebook, FiInstagram, FiLinkedin, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-50 text-slate-700 py-16 border-t border-slate-200">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block mb-6">
                            <img
                                src="/Logo-Gicall.png"
                                alt="GICALL Logo"
                                className="h-12 w-auto"
                            />
                        </Link>
                        <p className="text-sm mb-6 text-slate-600 leading-relaxed">
                            Produzione e installazione di serramenti in PVC e alluminio.
                            Qualità Made in Italy per la tua casa.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com/gicall"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-200 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300"
                            >
                                <FiFacebook size={20} />
                            </a>
                            <a
                                href="https://instagram.com/gicall"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-200 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300"
                            >
                                <FiInstagram size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/company/gicall"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-200 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300"
                            >
                                <FiLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Infissi & Serramenti */}
                    <div>
                        <h4 className="text-slate-900 font-bold mb-4 text-sm uppercase tracking-wider">Infissi & Serramenti</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/finestre-pvc" className="hover:text-amber-600 transition-colors">Finestre in PVC</Link></li>
                            <li><Link to="/finestre-alluminio" className="hover:text-amber-600 transition-colors">Finestre in Alluminio</Link></li>
                            <li><Link to="/finestre-legno-alluminio" className="hover:text-amber-600 transition-colors">Legno Alluminio</Link></li>
                            <li><Link to="/sistemi-scorrevoli" className="hover:text-amber-600 transition-colors">Sistemi Scorrevoli</Link></li>
                        </ul>
                    </div>

                    {/* Porte & Outdoor */}
                    <div>
                        <h4 className="text-slate-900 font-bold mb-4 text-sm uppercase tracking-wider">Porte & Outdoor</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/porte-interne" className="hover:text-amber-600 transition-colors">Porte da Interno</Link></li>
                            <li><Link to="/porte-blindate" className="hover:text-amber-600 transition-colors">Porte Blindate</Link></li>
                            <li><Link to="/grate-persiane" className="hover:text-amber-600 transition-colors">Grate e Persiane</Link></li>
                            <li><Link to="/zanzariere" className="hover:text-amber-600 transition-colors">Zanzariere</Link></li>
                            <li><Link to="/avvolgibili" className="hover:text-amber-600 transition-colors">Avvolgibili</Link></li>
                            <li><Link to="/tende-da-sole" className="hover:text-amber-600 transition-colors">Tende da Sole</Link></li>
                            <li><Link to="/pergole" className="hover:text-amber-600 transition-colors">Pergole</Link></li>
                        </ul>
                    </div>

                    {/* Azienda & Contatti */}
                    <div>
                        <h4 className="text-slate-900 font-bold mb-4 text-sm uppercase tracking-wider">Azienda</h4>
                        <ul className="space-y-2 text-sm mb-6">
                            <li><Link to="/chi-siamo" className="hover:text-amber-600 transition-colors">Chi Siamo</Link></li>
                            <li><Link to="/servizi" className="hover:text-amber-600 transition-colors">Servizi</Link></li>
                            <li><Link to="/contatti" className="hover:text-amber-600 transition-colors">Contatti</Link></li>
                        </ul>

                        <h4 className="text-slate-900 font-bold mb-4 text-sm uppercase tracking-wider">Contatti Rapidi</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <FiPhone className="text-amber-600 shrink-0" size={16} />
                                <a href="tel:+390763300000" className="hover:text-amber-600 transition-colors">+39 0763 300000</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FiMail className="text-amber-600 shrink-0" size={16} />
                                <a href="mailto:info@gicall.it" className="hover:text-amber-600 transition-colors">info@gicall.it</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                        <p>&copy; {new Date().getFullYear()} Gicall S.r.l.s. - P.IVA 01234567890 - Tutti i diritti riservati</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-amber-600 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-amber-600 transition-colors">Cookie Policy</a>
                            <a href="#" className="hover:text-amber-600 transition-colors">Note Legali</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
