import { FiFacebook, FiInstagram, FiLinkedin, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaTiktok, FaYoutube } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-slate-50 text-slate-700 py-16 border-t border-slate-200">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <div className="relative h-12 w-[127px]">
                                <Image
                                    src="/Logo-Gicall.png"
                                    alt="GICALL Logo"
                                    fill
                                    className="object-contain"
                                    sizes="127px"
                                />
                            </div>
                        </Link>
                        <p className="text-sm mb-6 text-slate-600 leading-relaxed">
                            Produzione e installazione di serramenti in PVC e alluminio.
                            Qualità Made in Italy per la tua casa.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/gicallsrls/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-200 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300"
                                aria-label="Facebook GICALL"
                            >
                                <FiFacebook size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/gicall_srls/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-200 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300"
                                aria-label="Instagram GICALL"
                            >
                                <FiInstagram size={20} />
                            </a>
                            <a
                                href="https://www.tiktok.com/@gicall_finestre"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-200 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300"
                                aria-label="TikTok GICALL"
                            >
                                <FaTiktok size={20} />
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCne5HGMzSs75BY9cDu1FLzA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-200 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300"
                                aria-label="YouTube GICALL"
                            >
                                <FaYoutube size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/gicall/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-200 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300"
                                aria-label="LinkedIn GICALL"
                            >
                                <FiLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Infissi & Serramenti */}
                    <div>
                        <h4 className="text-slate-900 font-bold mb-4 text-sm uppercase tracking-wider">Infissi & Serramenti</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/finestre-pvc" className="hover:text-amber-600 transition-colors">Finestre in PVC</Link></li>
                            <li><Link href="/finestre-alluminio" className="hover:text-amber-600 transition-colors">Finestre in Alluminio</Link></li>
                            <li><Link href="/finestre-alluminio-legno" className="hover:text-amber-600 transition-colors">Alluminio Legno</Link></li>
                            <li><Link href="/sistemi-scorrevoli" className="hover:text-amber-600 transition-colors">Sistemi Scorrevoli</Link></li>
                        </ul>
                    </div>

                    {/* Porte & Outdoor */}
                    <div>
                        <h4 className="text-slate-900 font-bold mb-4 text-sm uppercase tracking-wider">Porte & Outdoor</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/porte-interne" className="hover:text-amber-600 transition-colors">Porte da Interno</Link></li>
                            <li><Link href="/porte-blindate" className="hover:text-amber-600 transition-colors">Porte Blindate</Link></li>
                            <li><Link href="/grate-persiane" className="hover:text-amber-600 transition-colors">Grate e Persiane</Link></li>
                            <li><Link href="/zanzariere" className="hover:text-amber-600 transition-colors">Zanzariere</Link></li>
                            <li><Link href="/avvolgibili-cassonetti" className="hover:text-amber-600 transition-colors">Avvolgibili</Link></li>
                            <li><Link href="/tende-da-sole" className="hover:text-amber-600 transition-colors">Tende da Sole</Link></li>
                            <li><Link href="/pergole-bioclimatiche" className="hover:text-amber-600 transition-colors">Pergole</Link></li>
                        </ul>
                    </div>

                    {/* Azienda & Contatti */}
                    <div>
                        <h4 className="text-slate-900 font-bold mb-4 text-sm uppercase tracking-wider">Azienda</h4>
                        <ul className="space-y-2 text-sm mb-6">
                            <li><Link href="/chi-siamo" className="hover:text-amber-600 transition-colors">Chi Siamo</Link></li>
                            <li><Link href="/servizi" className="hover:text-amber-600 transition-colors">Servizi</Link></li>
                            <li><Link href="/blog" className="hover:text-amber-600 transition-colors">Blog</Link></li>
                            <li><Link href="/contatti" className="hover:text-amber-600 transition-colors">Contatti</Link></li>
                        </ul>

                        <h4 className="text-slate-900 font-bold mb-4 text-sm uppercase tracking-wider">Contatti Rapidi</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <FiPhone className="text-amber-600 shrink-0" size={16} />
                                <a href="tel:+393208203824" className="hover:text-amber-600 transition-colors">320 820 3824</a>              </li>
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
                            <Link href="/privacy-policy" className="hover:text-amber-600 transition-colors">Privacy Policy</Link>
                            <Link href="/cookie-policy" className="hover:text-amber-600 transition-colors">Cookie Policy</Link>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-200 flex justify-center">
                        <p className="text-xs text-slate-500 opacity-80">
                            Web Marketing Agency:
                            <a href="https://maddl.agency/" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex align-items-center ml-1 hover:opacity-100 transition-opacity">
                                MADDL Agency
                                <img src="https://maddl.agency/app/uploads/2019/10/logo-maddl-footer.png" alt="Logo MADDL Agency" style={{ height: '30px', marginLeft: '8px' }} />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
