'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-4xl font-bold mb-4 text-primary">404 - Pagina Non Trovata</h2>
      <p className="text-lg text-gray-600 mb-8">
        Ci dispiace, la pagina che stai cercando non esiste o è stata spostata.
      </p>
      <Link 
        href="/" 
        className="bg-primary text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors uppercase tracking-wider font-semibold"
      >
        Torna alla Home
      </Link>
    </div>
  );
}
