"use client";
import Link from 'next/link';
import SocialFeedWidget from './SocialFeedWidget';

const SocialFeedSection = () => {

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
                </div>

                <div className="w-full">
                    <SocialFeedWidget />
                </div>
            </div>
        </section>
    );
};

export default SocialFeedSection;
