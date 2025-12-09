"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiInstagram } from 'react-icons/fi';

const SocialFeedSection = () => {
    // Placeholder images for Instagram feed
    const feedImages = [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=600&auto=format&fit=crop'
    ];

    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                            Ispirati con le Nostre Realizzazioni
                        </h2>
                        <p className="text-slate-600">
                            Seguici su Instagram per scoprire i "dietro le quinte" e le ultime installazioni.
                        </p>
                    </div>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors"
                    >
                        <FiInstagram className="text-xl" /> Seguici su Instagram
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {feedImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer"
                        >
                            <Image
                                src={img}
                                alt={`Gicall Instagram ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <FiInstagram className="text-white text-3xl drop-shadow-lg" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialFeedSection;
