import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Privacy Policy | GICALL',
  description: 'Informativa sul trattamento dei dati personali ai sensi del GDPR per gli utenti del sito GICALL.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white text-slate-900 pt-10 pb-12 md:pt-16 md:pb-16">
      <div className="container py-16 md:py-20">
        <div className="space-y-4 lg:pr-8 mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-600">Privacy</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Informativa sulla Privacy</h1>
          <p className="text-lg text-slate-600 leading-relaxed">Ultimo aggiornamento: 17/12/2025</p>
        </div>

        <div className="max-w-4xl space-y-6 text-lg text-slate-600 leading-relaxed">
          <p>
            La presente informativa descrive le modalità di gestione del sito web gicall-antigravity.vercel.app (di seguito
            &quot;Sito&quot;) in riferimento al trattamento dei dati personali degli utenti che lo consultano, ai sensi
            dell&apos;art. 13 del Regolamento UE 2016/679 (GDPR).
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">1. Titolare del Trattamento</h2>
          <p>
            Il Titolare del trattamento dei dati è:
            <br />
            Gicall S.r.l.s.
            <br />
            Sede legale: Via I Maggio 33/A, 00013, Fonte Nuova (RM)
            <br />
            P.IVA: 01234567890
            <br />
            Email di contatto: info@gicall.it
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">2. Tipologia di Dati Raccolti</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">A. Dati forniti volontariamente dall&apos;utente</h3>
          <p>Attraverso il modulo di contatto presente sul Sito, raccogliamo i seguenti dati personali:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Dati Anagrafici e di Contatto: Nome, Cognome, Email, Telefono, Città, CAP.</li>
            <li>
              Dati relativi alla richiesta: Tipologia di intervento (es. Ristrutturazione, Nuova Costruzione), Prodotti di
              interesse (es. Finestre, Porte Blindate), Messaggio o note aggiuntive.
            </li>
          </ul>
          <p>
            L&apos;invio facoltativo di questi dati comporta la successiva acquisizione dell&apos;indirizzo del mittente,
            necessario per rispondere alle richieste, nonché degli altri eventuali dati personali inseriti.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">B. Dati di Navigazione e Cookie</h3>
          <p>
            I sistemi informatici preposti al funzionamento di questo Sito acquisiscono, nel corso del loro normale
            esercizio, alcuni dati personali la cui trasmissione è implicita nell&apos;uso dei protocolli di comunicazione di
            Internet (es. indirizzi IP, tipo di browser). Inoltre, il sito utilizza strumenti di tracciamento e widget di
            terze parti (vedi Cookie Policy per i dettagli):
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Google Analytics 4 (GA4) per statistiche.</li>
            <li>Pixel di Facebook (Meta) per monitoraggio conversioni e marketing.</li>
            <li>Widget Social: Instagram (feed post) e Trustindex (recensioni Google).</li>
            <li>Google Maps per la geolocalizzazione.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">3. Finalità e Base Giuridica del Trattamento</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Risposta a richieste di preventivo o assistenza</h3>
          <p>
            Finalità: Gestire la tua richiesta di contatto, elaborare preventivi per infissi/serramenti o fornire assistenza
            tecnica.
            <br />
            Base Giuridica: Esecuzione di misure precontrattuali adottate su richiesta dell&apos;interessato (art. 6.1.b GDPR).
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Statistica e Analisi (GA4)</h3>
          <p>
            Finalità: Analizzare come gli utenti utilizzano il sito per migliorarne le prestazioni.
            <br />
            Base Giuridica: Consenso dell&apos;utente (tramite banner cookie).
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Marketing e Remarketing (Pixel Facebook)</h3>
          <p>
            Finalità: Monitorare l&apos;efficacia delle campagne pubblicitarie e mostrare inserzioni pertinenti.
            <br />
            Base Giuridica: Consenso dell&apos;utente (tramite banner cookie).
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Adempimento obblighi legali</h3>
          <p>
            Finalità: Adempiere a obblighi previsti da leggi, regolamenti o normativa comunitaria (es. fatturazione).
            <br />
            Base Giuridica: Obbligo legale (art. 6.1.c GDPR).
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">4. Destinatari dei Dati</h2>
          <p>I dati personali potrebbero essere condivisi con:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Fornitori di servizi tecnici: Hosting provider (Vercel), gestori di posta elettronica, consulenti IT.</li>
            <li>
              Piattaforme esterne: Google Ireland Ltd. (per Analytics e Maps), Meta Platforms Ireland Ltd. (per Pixel e
              Instagram), Trustindex (per il widget recensioni).
            </li>
            <li>Consulenti: Studio commercialista per la gestione contabile/fiscale.</li>
            <li>Autorità competenti: Qualora obbligatorio per legge.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">5. Trasferimento dei Dati Extra UE</h2>
          <p>
            Alcuni dei fornitori terzi utilizzati (Google, Meta, Vercel) potrebbero trasferire i dati negli Stati Uniti.
            Tale trasferimento avviene sulla base del Data Privacy Framework (DPF), a cui tali aziende aderiscono,
            garantendo un livello di protezione adeguato conforme agli standard europei.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">6. Tempi di Conservazione</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Dati di contatto/preventivi: Conservati per il tempo necessario a gestire la richiesta e, in caso di acquisto,
              per i 10 anni previsti dalla normativa fiscale. Se non segue un acquisto, verranno cancellati dopo 24 mesi.
            </li>
            <li>
              Dati di navigazione/marketing: Secondo le scadenze impostate dai cookie di terze parti (es. GA4, Meta),
              consultabili nelle rispettive privacy policy.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">7. Diritti dell&apos;Interessato</h2>
          <p>
            In ogni momento, puoi esercitare i diritti previsti dagli artt. 15-22 del GDPR:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Chiedere l&apos;accesso ai tuoi dati personali.</li>
            <li>Ottenere la rettifica o la cancellazione degli stessi.</li>
            <li>Limitare il trattamento.</li>
            <li>Opporsi al trattamento.</li>
            <li>Revocare il consenso (per i cookie/marketing).</li>
          </ul>
          <p>
            Per esercitare tali diritti, invia una richiesta a: <a href="mailto:info@gicall.it">info@gicall.it</a>
          </p>
        </div>
      </div>
    </section>
  );
}
