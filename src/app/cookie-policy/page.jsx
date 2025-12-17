import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Cookie Policy | GICALL',
  description: 'Informativa sui cookie utilizzati sul sito GICALL e gestione del consenso.',
  path: '/cookie-policy',
});

export default function CookiePolicyPage() {
  return (
    <section className="bg-white text-slate-900 pt-10 pb-12 md:pt-16 md:pb-16">
      <div className="container py-16 md:py-20">
        <div className="space-y-4 lg:pr-8 mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-600">Cookie</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Cookie Policy</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Questa Cookie Policy è parte integrante della Privacy Policy di Gicall S.r.l.s.
          </p>
        </div>

        <div className="max-w-4xl space-y-6 text-lg text-slate-600 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Cosa sono i Cookie</h2>
          <p>
            I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell&apos;utente, dove vengono
            memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Quali Cookie utilizziamo</h2>

          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">1. Cookie Tecnici (Necessari)</h3>
          <p>
            Questi cookie sono indispensabili per il corretto funzionamento del sito. Includono i cookie necessari per la
            sicurezza del sito e per memorizzare le tue preferenze di consenso (es. se hai accettato o meno i cookie). Non
            richiedono il consenso preventivo.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">2. Cookie Analitici (Statistica)</h3>
          <p>
            Il sito utilizza Google Analytics 4 (GA4) per raccogliere informazioni in forma aggregata sul numero degli utenti
            e su come questi visitano il sito.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Fornitore: Google Ireland Ltd.</li>
            <li>Dati raccolti: Indirizzo IP (anonimizzato), dispositivo, browser, pagine visitate.</li>
            <li>Luogo trattamento: Irlanda / USA.</li>
            <li>Consenso: Richiesto tramite banner.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">3. Cookie di Profilazione e Marketing</h3>
          <p>
            Il sito utilizza il Pixel di Facebook (Meta) per misurare le conversioni delle inserzioni pubblicitarie e creare
            segmenti di pubblico per campagne di remarketing.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Fornitore: Meta Platforms Ireland Ltd.</li>
            <li>Dati raccolti: Dati di utilizzo, tracciamento conversioni.</li>
            <li>Consenso: Richiesto tramite banner.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">4. Widget e Contenuti di Terze Parti</h3>
          <p>
            Sul sito sono presenti funzionalità fornite da terze parti che potrebbero installare propri cookie o raccogliere
            dati di utilizzo:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Google Maps: Mappe interattive incorporate nella Homepage e nella pagina Contatti (Privacy Policy Google).</li>
            <li>Trustindex: Widget per la visualizzazione delle recensioni Google (Privacy Policy Trustindex).</li>
            <li>Instagram Feed: Widget per la visualizzazione degli ultimi post social (Privacy Policy Meta/Instagram).</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Gestione del Consenso</h2>
          <p>
            Alla prima visita, visualizzerai un banner informativo. Chiudendo il banner senza accettare, navigherai utilizzando
            solo i cookie tecnici. Puoi modificare le tue preferenze in qualsiasi momento tramite il pannello di controllo dei
            cookie presente nel footer del sito (se attivo) o attraverso le impostazioni del tuo browser:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Apple Safari</li>
            <li>Microsoft Edge</li>
          </ul>

          <p>
            Titolare del Trattamento: Gicall S.r.l.s. - <a href="mailto:info@gicall.it" className="text-amber-600 hover:text-amber-700">info@gicall.it</a>
          </p>
        </div>
      </div>
    </section>
  );
}
