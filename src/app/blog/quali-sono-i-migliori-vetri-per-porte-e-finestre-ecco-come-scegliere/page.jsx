import Image from 'next/image';
import { buildMetadata } from '@/lib/metadata';
import BlogToc from '@/components/BlogToc';

const title = 'Vetri per infissi: quale conviene scegliere?';
const description =
  'I vetri per infissi possono fare la differenza. Ecco alcuni modelli che puoi valutare per il tuo lavoro di ristrutturazione.';
const coverImage = '/images/blog_vetro.webp';
const author = {
  name: 'Redazione GICALL',
  role: 'Consulenza tecnica serramenti',
  avatar: '/Logo-Gicall.png',
};

const toc = [
  { id: 'tipo-vetro', label: 'Tipo di vetro per infissi' },
  { id: 'isolamento', label: 'Isolamento acustico e termico' },
  { id: 'sicurezza', label: 'Sicurezza del vetro usato' },
  { id: 'estetica', label: 'Estetica dei vetri' },
];

export const metadata = buildMetadata({
  title,
  description,
  path: '/blog/quali-sono-i-migliori-vetri-per-porte-e-finestre-ecco-come-scegliere',
  image: coverImage,
  keywords: 'Vetri per infissi',
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
            <span className="text-slate-700 font-semibold">Vetri per infissi</span>
          </nav>

          <div className="space-y-4 lg:pr-8">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-600">Tecnologia</p>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">{title}</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">{description}</p>
          </div>
          <div className="text-sm text-slate-500 mb-6">
            Pubblicato da <span className="font-semibold text-slate-800">{author.name}</span>
          </div>

          <p>
            Quando devi realizzare un rinnovo degli ambienti, o stai per ristrutturare una casa appena acquistata, può essere una buona idea ragionare sui <strong>migliori vetri per infiss</strong>i in modo da ottenere la soluzione ideale per la tua abitazione. O per gli uffici aziendali.
          </p>
          <p>
            Scegliere una finestra con telaio di qualità può dare grandi sicurezze ai tuoi ambienti e consentire alle stanze di mantenere temperature adeguate. Ma è chiaro che i vetri fanno tanto sia dal punto di vista del risparmio energetico che dell&apos;insonorizzazione.
          </p>
          <p>
            Senza dimenticare la resa estetica. <strong>Vuoi maggiori informazioni?</strong> Certo, scegliere in autonomia non è semplice, per questo abbiamo riunito in questo articolo tutte le considerazioni per acquistare la giusta combinazione di telaio e vetri per infissi.
          </p>

          <section id="tipo-vetro" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Tipo di vetro per infissi</h2>
            <p>
              Primo punto da considerare quando scegli i tuoi strati di materiale trasparente che ti dividono dall&apos;esterno: il tipo di vetro. Di solito, il modello singolo è quello più economico ma meno performante <strong>sotto tutti i punti di vista</strong>. La sicurezza è minima.
            </p>
            <p>
              Meglio puntare su un modello doppio, con due lastre di vetro separate da uno spazio riempito di gas isolante (come l&apos;argon). In questo modo, puoi contare su un miglior isolamento termico e acustico. Anche il vetro stratificato - composto da due o più elementi <strong>intervallati da una pellicola plastica</strong> - ottimizza la sicurezza in casa.
            </p>
            <p>E si riduce l&apos;inquinamento acustico. Quindi può essere <strong>un&apos;ottima scelta </strong>per le finestre che si trovano ai piani bassi, in cui c&apos;è rischio di scasso e rumore derivato dal traffico.</p>
          </section>

          <section id="isolamento" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Isolamento acustico e termico</h2>
            <p>
              Altro elemento fondamentale per scegliere i vetri degli infissi: la capacità di isolare l&apos;interno dall&apos;esterno <strong>sotto diversi punti di vista</strong>. In primo luogo quello acustico.
            </p>
            <p>Oltre a scegliere una <strong>struttura adeguata</strong> in PVC, legno o alluminio, puoi individuare il vetro ideale che si valuta anche grazie alla trasmittanza termica degli infissi.</p>
            <p>Vale a dire un&apos;unità di misura che ti consente di valutare quanto calore viene trasferito attraverso il vetro: un parametro basso indica ottimo isolamento termico.</p>
            <p>
              La trasmittanza termica del vetro (Ug) deve essere considerata insieme a quella del telaio per avere un parametro adeguato da prendere in esame, senza dimenticare il<strong> coefficiente di guadagno solare </strong>che permette di dedurre la quantità di calore trasmessa su una superficie irradiata dal sole: un valore elevato è per i climi freddi.
            </p>
            <p>
              Sempre a proposito dell&apos;efficienza energetica, si possono considerare degli infissi con vetro basso emissivo (low-e) che presenta trattamenti speciali sulla superficie in grado di riflettere il calore, riducendo il riflesso e l&apos;abbagliamento del vetro.
            </p>
          </section>

          <section id="sicurezza" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Sicurezza del vetro usato</h2>
            <p>
              Quando si cerca una struttura particolarmente adatta a garantire determinati standard di sicurezza, spesso la scelta<strong> cade sul vetro temperato</strong>. Una soluzione che viene presentata come fino a cinque volte più resistente rispetto al vetro standard.
            </p>
            <p>
              Il vetro temperato è riscaldato e raffreddato in tempi rapidi: questo offre una resistenza particolare agli urti, in modo da essere la scelta preferita da chi cerca <strong>porte e finestre difficili da infrangere</strong>. Sia per evitare che i malintenzionati entrino in casa, sia per avere degli ambienti più sicuri dato che i vetri non si infrangono facilmente.
            </p>
            <p>
              Questo non significa avere di fronte un vetro infrangibile o antiproiettile. Però è molto sicuro: se il vetro temperato si rompe, si frantuma in piccoli pezzi smussati e non in elementi appuntiti. Questa caratteristica riduce il <strong>rischio di lesioni</strong> per la rottura.
            </p>
            <p>
              Bisogna considerare, inoltre, che i vetri per infissi più sicuri sono quelli antisfondamento o addirittura i <strong>modelli blindati</strong>. In questo modo, hai la possibilità di garantire massima affidabilità ai tuoi spazi. Sia per gli infissi di casa che in azienda.
            </p>
          </section>

          <section id="estetica" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Estetica dei vetri</h2>
            <p>
              Altro parametro per scegliere bene i vetri per i tuoi infissi: l&apos;aspetto estetico. In primo luogo, ricorda che esistono delle soluzioni che possono oscurare la vista in modo da tutelare la privacy. Ad esempio, puoi scegliere un <strong>vetro satinato</strong> che consente di oscurare la visuale grazie a uno specifico trattamento chimico. In alternativa?
            </p>
            <p>
              Puoi scegliere i <strong>vetri sabbiati che mantengono lo stesso vantaggio</strong> - quindi impediscono di visualizzare cosa avviene dall&apos;altra parte - in più hai la possibilità di effettuare disegni con fantasie specifiche. In questo modo, puoi ottenere il risultato sperato senza ricorrere a fastidiose e dozzinali fasce adesive con pellicole oscuranti.
            </p>
            <p>La tua casa ha bisogno della massima qualità possibile, anche quando devi scegliere i migliori vetri per infissi delle finestre o delle porte, sia interne che esterne.</p>
            <div className="not-prose mt-4">
              <a href="https://www.gicall.it/prodotti/finestre/" className="btn btn-primary inline-block">
                Dai uno sguardo alle nostre finestre
              </a>
            </div>
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
