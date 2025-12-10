import Image from 'next/image';
import { buildMetadata } from '@/lib/metadata';
import BlogToc from '@/components/BlogToc';

const title = 'Ecco i consigli per proteggere le finestre da ladri e furti in casa';
const description = 'Guida pratica per rendere finestre e portefinestre più sicure: grate, infissi di qualità, sistemi di allarme e buone abitudini.';
const coverImage = '/images/blog_finestre.webp';
const author = {
  name: 'Redazione GICALL',
  role: 'Consulenza tecnica serramenti',
  avatar: '/Logo-Gicall.png',
};

const toc = [
  { id: 'grate', label: 'Aggiungi protezioni di ferro alle finestre' },
  { id: 'qualita', label: 'Acquista sempre una finestra di grande qualità' },
  { id: 'allarme', label: 'Procurati un sistema di allarme ben strutturato' },
  { id: 'persiane', label: 'Non ignorare il ruolo delle persiane antiscasso' },
  { id: 'dettagli', label: 'Attenzione ai dettagli che fanno la differenza' },
];

export const metadata = buildMetadata({
  title: `${title} | Blog GICALL`,
  description,
  path: '/blog/ecco-i-consigli-per-proteggere-le-finestre-da-ladri-e-furti-in-casa',
  image: coverImage,
});

export default function BlogPostPage() {
  return (
    <article className="bg-white text-slate-900">
      <header className="relative min-h-[50vh] flex items-end overflow-hidden mb-12">
        <Image src={coverImage} alt={title} fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
      </header>

      <div className="container grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 py-16 mt-12">
        <div className="max-w-none text-lg text-slate-600 leading-relaxed space-y-6">
          <nav className="text-sm text-slate-500 mb-4" aria-label="Breadcrumb">
            <a href="/" className="hover:text-amber-600">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="/blog" className="hover:text-amber-600">
              Blog
            </a>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-semibold">Proteggere le finestre</span>
          </nav>

          <div className="space-y-4 lg:pr-8">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-600">Sicurezza casa</p>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">{title}</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">{description}</p>
          </div>
          <div className="text-sm text-slate-500 mb-6">
            Pubblicato da <span className="font-semibold text-slate-800">{author.name}</span>
          </div>
          <p>
            Sappiamo che la sicurezza della casa è un bene prezioso. Non possiamo permetterci di lasciare un fronte scoperto come quello delle finestre, che devi proteggere dai ladri e dagli scassinatori. Ecco perché dobbiamo scoprire quali sono le nuove tecnologie che ci consentono di <strong>dormire sonni tranquilli</strong>, di andare in vacanza senza avere paura di ritornare a casa e trovare tutto in disordine. Con beni preziosi che mancano.
          </p>
          <p>
            Chiaramente nessuno ti può assicurare che i ladri di appartamento non riescano a entrare. A volte questo accade anche per disattenzioni personali (es. pubblicare sui social che sei in ferie). In questi casi, anche l’infisso blindato più resistente non basta. Ma il tuo dovere è provarci e scoprire tutte le soluzioni per <strong>proteggere le finestre dai ladri</strong>.
          </p>

          <section id="grate" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Aggiungi delle protezioni di ferro alle finestre</h2>
            <p>
              Nei casi peggiori, soprattutto quando la finestra è a livello della strada, la soluzione migliore è <strong>sventare i tentativi di furto</strong> montando una grata metallica. Non è la più elegante dal punto di vista estetico, ma esistono soluzioni differenti che non devono essere per forza brutte da vedere. Puoi prendere ispirazione nella sezione{' '}
              <a href="/grate-persiane" className="text-amber-600 hover:text-amber-700">
                grate e persiane
              </a>{' '}
              del nostro portale.
            </p>
            <p>
              La nostra produzione prevede serrature di sicurezza con puntali da 12 mm, cerniere a infilo che eliminano i segni delle saldature e lavorazioni artigianali su misura per allineare il disegno allo stile della casa. Le inferriate garantiscono un livello extra di sicurezza, soprattutto se assemblate a regola d’arte sull’infisso, e ti consentono di lasciare casa anche per periodi lunghi.
            </p>
            <figure className="not-prose my-6">
              <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/grata.webp" alt="Esempio di finestra sicura con grata" fill sizes="100vw" className="object-cover" />
              </div>
              <figcaption className="text-sm text-slate-500 mt-2 text-center">Esempio di finestra sicura con grata.</figcaption>
            </figure>
            <p>
              Poi, dato che le nostre lavorazioni sono artigianali puoi chiedere qualsiasi disegno o fantasia. In modo da allineare questo elemento alla tua casa.
            </p>
          </section>

          <section id="qualita" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Acquista sempre una finestra di grande qualità</h2>
            <p>
              Andiamo al sodo: se vuoi proteggere la tua casa ed evitare intrusioni non desiderate devi acquistare una finestra di qualità. Con un telaio resistente, vetri adeguati al compito e, soprattutto, una serratura a prova di scasso. Anche le cerniere devono essere in grado di sostenere eventuali azioni da parte di malintenzionati.
            </p>
            <p>
              Meglio avere una finestra con meccanismi antieffrazione, con una struttura per affrontare determinate azioni. Di solito, gli infissi si dividono per classi di sicurezza.
            </p>
            <p>
              Le finestre di 2 grado sono capaci di resistere all’azione di uno scassinatore di bassa esperienza con una strumentazione base, quella di 3 grado può sopportare l’azione avanzata anche in termini di competenze e la classe di sicurezza 4 può resistere al lavoro di un malintenzionato con attrezzi elettrici per scassinare.
            </p>
            <div className="not-prose mt-4">
              <a href="/contatti" className="btn btn-primary inline-block">
                Scegli la tua finestra di qualità
              </a>
            </div>
          </section>

          <section id="allarme" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Procurati un sistema di allarme ben strutturato</h2>
            <p>
              Gli infissi fanno molto, ma non bastano: serve un allarme che faccia scappare gli scassinatori e avvisi le Forze dell’Ordine. Combina sensori su porte/finestre, videosorveglianza e, nelle situazioni più delicate, un <strong>nebbiogeno anti-intrusione</strong> che rilascia una fitta nebbia e blocca l’azione dei ladri.
            </p>
            <p>
              Le finestre possono fare tanto per proteggere la tua casa da malintenzionati. Ma non bastano, non quando c’è bisogno dell’intervento degli agenti di sicurezza.
            </p>
            <p>
              Ecco perché insieme a un buon lavoro con gli infissi devi anche puntare su quello che ti consente di attivare un allarme in grado sia di far scappare gli scassinatori e di avvisare Polizia o Carabinieri. In questo modo possono intervenire nel momento in cui si presenta un accesso forzato, si in tua presenza che in assenza.
            </p>
            <p>
              Per le situazioni più delicate puoi attivare anche un sistema di video sorveglianza insieme ai sensori di accesso, e magari un nebbiogeno anti-intrusione.
            </p>
            <p>
              Ovvero un dispositivo che rilascia una fitta nebbia e mette in grande difficoltà i ladri. Così o se ne scappano o rischiano di incappare nelle Forze dell’Ordine.
            </p>
            <figure className="not-prose my-6">
              <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/finestra-sicura.webp" alt="Finestra sicura con allarme" fill sizes="100vw" className="object-cover" />
              </div>
            </figure>
            <p>
              Che ovviamente dovrebbero essere avvisate in automatico dall’allarme che nel frattempo continua ad attirare l’attenzione con sirene e e luci intermittenti. Con uno scenario del genere è difficile immaginare di poter continuare la rapina.
            </p>
          </section>

          <section id="persiane" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Non ignorare il ruolo delle persiane antiscasso</h2>
            <p>Le persiane non servono solo a fermare la luce: le versioni di sicurezza, in ferro zincato e trattato, aumentano la protezione anche contro intrusi esperti. Scegli modelli con serrature e ancoraggi robusti, così il serramento diventa un vero ostacolo meccanico.</p>
          </section>

          <section id="dettagli" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Attenzione ai dettagli che fanno la differenza</h2>
            <p>Buone abitudini contano: chiudi sempre le finestre, non lasciare oggetti di valore in vista, non comunicare online quando non sei in casa. I ladri spesso studiano la proprietà: non dare informazioni sulle date in cui sei via e installa luci esterne con sensori di movimento per scoraggiare i malintenzionati.</p>
            <p>Anche il “trucco” delle luci accese non regge a lungo: chi ti osserva capisce che non c’è nessuno. Meglio puntare su illuminazione esterna automatica e su inferriate/persiane di sicurezza che rendono più difficile l’ingresso.</p>
          </section>

          <div className="mt-12 mb-20 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4">
            <div className="relative h-16 w-16 rounded-full overflow-hidden bg-white border border-slate-200">
              <Image src={author.avatar} alt={author.name} fill sizes="64px" className="object-contain p-2" />
            </div>
            <div>
              <p className="font-bold text-slate-900">{author.name}</p>
              <p className="text-sm text-slate-600">{author.role}</p>
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 self-start">
          <BlogToc toc={toc} />
        </aside>
      </div>
    </article>
  );
}
