import Image from 'next/image';
import { buildMetadata } from '@/lib/metadata';
import BlogToc from '@/components/BlogToc';

const title = 'Materiale per le finestre, qual è il migliore?';
const description =
  "Probabilmente non esiste un materiale per le finestre migliore o peggiore: molto dipende da come e dove vuoi montare i tuoi infissi.";
const coverImage = '/images/blog_materiali-finestre.webp';
const author = {
  name: 'Redazione GICALL',
  role: 'Consulenza tecnica serramenti',
  avatar: '/Logo-Gicall.png',
};

const toc = [
  { id: 'pvc', label: 'Finestre in PVC' },
  { id: 'legno', label: 'Finestre in legno' },
  { id: 'alluminio', label: 'Finestre in alluminio' },
  { id: 'scelta', label: 'Quindi, quale scegliere?' },
];

export const metadata = buildMetadata({
  title,
  description,
  path: '/blog/finestre-in-pvc-alluminio-o-legno-quale-conviene-scegliere',
  image: coverImage,
  keywords: 'materiale per le finestre',
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
            <span className="text-slate-700 font-semibold">Materiali finestre</span>
          </nav>

          <div className="space-y-4 lg:pr-8">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-600">Consigli</p>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">{title}</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">{description}</p>
          </div>
          <div className="text-sm text-slate-500 mb-6">
            Pubblicato da <span className="font-semibold text-slate-800">{author.name}</span>
          </div>

          <p>Scegliere il <strong>materiale per le finestre</strong> è un passaggio fondamentale per riuscire a ottenere ottimi risultati sia in termini funzionali, sia per l&apos;estetica della dimora.</p>
          <p>In una casa, le finestre non sono esclusivamente uno <strong>strumento per gestire le aperture</strong> e proteggere da freddo, caldo, umidità e intrusioni non autorizzate.</p>
          <p>
            Infatti, gli infissi possono diventare un elemento di design raffinato. A questo punto la domanda è chiara: meglio scegliere finestre in alluminio, in PVC o in legno? Quali sono i <strong>punti di forza e di debolezza</strong> di queste soluzioni?
          </p>
          <p>La risposta la trovi in questo articolo del nostro blog che ti aiuterà a individuare le soluzioni migliori per estetica, sicurezza e <strong>risparmio energetico</strong>.</p>

          <section id="pvc" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Finestre in PVC</h2>
            <p>
              Ecco un modello che spesso scegliamo nel momento in cui vogliamo ottenere delle <strong>caratteristiche specifiche</strong> dal nostro telaio. Noi sappiamo che con il PVC rispettiamo quelle che sono le principali norme per avere un buon risparmio energetico.
            </p>
            <p>
              Tra i vantaggi di un infisso realizzato con questo materiale abbiamo, appunto, l&apos;isolamento dal caldo e dal freddo. Inoltre, parliamo di un <strong>elemento perfetto </strong>per realizzare finestre con caratteristiche specifiche in termini di igiene e design.
            </p>
            <p>
              Infatti, puoi ottenere colori e fantasie differenti. Una finestra in PVC è facile da pulire e non ha bisogno di manutenzione continua. Forse, l&apos;unico aspetto negativo lo possiamo ritrovare dal punto di vista estetico: nel tempo, <strong>tende a scolorirsi </strong>se è a pieno contatto con il sole. E non offre lo stesso calore di una finestra in legno.
            </p>
            <p>
              Però una finestra in Polivinile di Cloruro è leggera, economica. Adatta<strong> a usi intensivi</strong> e a prova di scasso se viene gestita in un certo modo. Vuoi un riscontro ufficiale? Dai uno{' '}
              <a href="https://www.gicall.it/produzione/pvc/" className="text-amber-600 hover:text-amber-700">
                sguardo alla nostra offerta
              </a>
              : il PVC è un materiale per le finestre eccellente.
            </p>
          </section>

          <section id="legno" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Finestre in legno</h2>
            <p>
              Soluzione classica quando si cerca un materiale per le finestre. Storicamente, gli infissi sono stati in legno e questa opzione è richiesta da chi ha bisogno di una r<strong>iproduzione fedele</strong> di alcuni dettagli. Di sicuro le finestre in legno sono ancora le più eleganti, e hanno prestazioni importanti dal punto di vista della sicurezza.
            </p>
            <p>
              Il legno che si usa per costruire gli infissi può raggiungere lo stesso livello di isolamento termico e sonoro di materiali performanti come il PVC o l&apos;alluminio ma ha alcuni difetti da considerare. In primo luogo il costo, questo materiale per le finestre impone dei prezzi elevati sia per la lavorazione che la <strong>scelta della materia prima</strong>.
            </p>
            <figure className="not-prose my-6">
              <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/blog_legno.webp" alt="Legno, materiale per le finestre" fill sizes="100vw" className="object-cover" />
              </div>
              <figcaption className="text-sm text-slate-500 mt-2 text-center">Legno, materiale per le finestre.</figcaption>
            </figure>
            <p>
              Che deve essere sempre di altissima qualità per poter competere con gli <strong>standard attuali</strong>. E poi c&apos;è il discorso relativo alla manutenzione: le finestre in legno subiscono l&apos;avanzare degli anni e devono essere restaurate se in contatto con fonti di umidità persistenti o acqua di mare. Cosa accade dopo una serie di rimaneggiamenti?
            </p>
            <p>
              Le finestre in legno devono solo essere sostituite: non si possono recuperare in eterno e avere sempre le stesse qualità. Una soluzione potrebbe essere la{' '}
              <a href="https://www.gicall.it/produzione/alluminio-legno/" className="text-amber-600 hover:text-amber-700">
                finestra in legno-alluminio
              </a>
              : presenta le caratteristiche del metallo ma l&apos;estetica di un faggio.
            </p>
            <p>O magari di una <strong>quercia</strong>. In questo modo ti liberi dal peso della manutenzione esterna senza rinunciare al colore caldo e accogliente della materia prima naturale.</p>
          </section>

          <section id="alluminio" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Finestre in alluminio</h2>
            <p>
              Molti clienti preferiscono il metallo quando devono scegliere il materiale per le finestre. La scelta cade sull&apos;alluminio perché è una soluzione pratica, leggera e conveniente. Un acciaio o una lega differente va bene per eventuale <strong>tapparella di sicurezza</strong> o grata anti-intrusione da usare quando cerchi tranquillità.
            </p>
            <p>
              Noi, ad esempio,{' '}
              <a href="https://www.gicall.it/produzione/ferro/" className="text-amber-600 hover:text-amber-700">
                utilizziamo il ferro
              </a>{' '}
              proprio per questi lavori ma anche per cancelli e recinzioni di sicurezza. Ma per il telaio delle finestre optiamo sempre per l&apos;alluminio: leggero, pratico, versatile e resistente. Rispetto al PVC, cosa cambia?
            </p>
            <p>
              L&apos;alluminio può essere utilizzato per infissi di grandi dimensioni e con spessori minimi. Resta invariata la durata nel tempo, la resistenza agli agenti atmosferici e a eventuali attacchi esterni. Forse, può essere un po&apos; asettico e freddo ma non dimenticare che anche in questi casi puoi <strong>puntare su diverse opzioni</strong>.
            </p>
            <p>
              Come, ad esempio, l&apos;alluminio che riproduce la trama del legno. Un dettaglio da ricordare: scegli sempre infissi in alluminio con taglio termico, sono quelli che garantiscono ottime prestazioni per l&apos;isolamento termico e acustico. Se, ad esempio,{' '}
              <a href="https://www.gicall.it/produzione/alluminio/" className="text-amber-600 hover:text-amber-700">
                scegli gli infissi Gicall
              </a>{' '}
              puoi contare proprio su questa procedura molto tecnica.
            </p>
            <p>
              Il taglio termico è un&apos;attività di miglioramento che consiste nell&apos;inserimento - tra il profilo esterno e quello interno - di una serie di materiali a bassa conducibilità e guarnizioni. I vantaggi, in questo caso, sono evidenti perché puoi evitare il passaggio degli spifferi e, appunto, isolare la stanza da sbalzi di temperatura.
            </p>
          </section>

          <section id="scelta" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Quindi, quale scegliere?</h2>
            <p>
              Individuare il materiale per le finestre adatto alla tua attività di allestimento e ristrutturazione di una casa (la tua) non è facile. Per questo suggeriamo di<strong> affidare alcuni passaggi</strong> ai professionisti del settore. Se vuoi cambiare infissi e hai bisogno di consigli per scegliere il materiale delle finestre puoi contattare noi.
            </p>
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
