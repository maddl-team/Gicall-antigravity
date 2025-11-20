import { FiFacebook, FiInstagram, FiLinkedin, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <Link to="/" className="text-2xl font-bold text-white tracking-tighter mb-4 block">
                        GICALL<span className="text-amber-500">.</span>
                    </Link>
                    <p className="text-sm mb-4">
                        Produzione e installazione di serramenti in PVC e alluminio.
                        Qualità Made in Italy per la tua casa.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition-colors"><FiFacebook size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><FiInstagram size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><FiLinkedin size={20} /></a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-bold mb-4">Navigazione</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
                        <li><a href="/#prodotti" className="hover:text-amber-500 transition-colors">Prodotti</a></li>
                        <li><a href="/#produzione" className="hover:text-amber-500 transition-colors">Produzione</a></li>
                        <li><a href="/#certificazioni" className="hover:text-amber-500 transition-colors">Certificazioni</a></li>
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h4 className="text-white font-bold mb-4">Prodotti</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/finestre-pvc" className="text-slate-400 hover:text-amber-500 transition-colors">Finestre in PVC</Link></li>
                        <li><Link to="/finestre-alluminio" className="text-slate-400 hover:text-amber-500 transition-colors">Finestre in Alluminio</Link></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Zanzariere</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Avvolgibili</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-bold mb-4">Contatti</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                            <FiMapPin className="mt-1 text-amber-500" />
                            <span>Via dei Merciari, snc<br />05018 Orvieto (TR)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FiPhone className="text-amber-500" />
                            <span>+39 0763 300000</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FiMail className="text-amber-500" />
                            <span>info@gicall.it</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container">
                <div className="border-t border-slate-800 my-8"></div>
            </div>

            <div className="container text-center text-xs pb-8">
                <p>&copy; {new Date().getFullYear()} Gicall S.r.l.s. - P.IVA 01234567890 - Privacy Policy - Cookie Policy</p>
            </div>
        </footer>
    );
};

export default Footer;
