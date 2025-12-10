import Image from 'next/image';
import { buildMetadata } from '@/lib/metadata';
import BlogToc from '@/components/BlogToc';

const title = 'Tapparelle o Persiane: quale sistema oscurante scegliere?';
const description =
  'Meglio usare le tapparelle o le persiane? Quale sistema oscurante preferire per la tua dimora? Ecco la risposta alle domande.';
const coverImage = '/images/blog_tapparelle-persiane.webp';
const author = {
  name: 'Redazione GICALL',
  role: 'Consulenza tecnica serramenti',
  avatar: '/Logo-Gicall.png',
};

const toc = [
  { id: 'differenze', label: 'Differenza tra tapparelle e persiane' },
  { id: 'struttura', label: 'Struttura' },
  { id: 'manutenzione', label: 'Manutenzione' },
  { id: 'isolamento', label: 'Isolamento' },
  { id: 'sicurezza', label: 'Sicurezza' },
  { id: 'estetica', label: 'Estetica' },
  { id: 'scelta-finale', label: 'Quindi, quale scegliere?' },
];

export const metadata = buildMetadata({
  title,
  description,
  path: '/blog/meglio-usare-le-tapparelle-o-le-persiane-ecco-pro-e-contro-da-conoscere',
  image: coverImage,
  keywords: 'Tapparelle o Persiane',
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
            <span className="text-slate-700 font-semibold">Tapparelle o persiane</span>
          </nav>

          <div className="space-y-4 lg:pr-8">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-600">Consigli</p>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">{title}</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">{description}</p>
          </div>
          <div className="text-sm text-slate-500 mb-6">
            Pubblicato da <span className="font-semibold text-slate-800">{author.name}</span>
          </div>

          <p>
            Una casa deve sempre poter contare su <strong>tapparelle o persiane</strong> in grado di svolgere il proprio lavoro. Di cosa stiamo parlando esattamente? Molto semplice: questi accessori per le finestre hanno diversi compiti, il primo è quello di oscurare l&apos;ambiente e fare in modo che non entri la luce del sole. Ad esempio, prima di andare a dormire, puoi chiudere le tapparelle o le persiane per garantire sonni tranquilli.
          </p>
          <p>
            Questi sistemi hanno altri scopi: servono a isolare la stanza e a proteggere dai ladri. <strong>Lo fanno fornendo una barriera extra</strong>; in alcuni casi puoi preferire tapparelle o persiane blindate che rendono difficile la vita ai ladri. Ma quale acquistare? E perché devi avere per forza queste coperture davanti alle finestre?
          </p>

          <section id="differenze" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Differenza tra tapparelle e persiane</h2>
            <p>
              Prima di scegliere la soluzione migliore per oscurare e proteggere una stanza, conviene capire <strong>di cosa stiamo parlando</strong> e quali sono le singole caratteristiche.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Tapparelle</h3>
            <p>
              Le tapparelle - anche note come{' '}
              <a href="https://www.gicall.it/prodotti/avvolgibili/" className="text-amber-600 hover:text-amber-700">
                persiane avvolgibili
              </a>{' '}
              - sono le coperture che si inseriscono in un cassone nella parte superiore della finestra e si arrotolano intorno a un asse. Poi, attraverso un comando manuale a cinghia o elettrico, hai la possibilità di far scendere la copertura realizzata in PVC, alluminio, <strong>legno o acciaio coibentato</strong>.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Persiane</h3>
            <p>
              L&apos;alternativa: un sistema di <strong>ante imperniate al telaio della finestra</strong> che si aprono e chiudono come delle porte. Ci sono modelli differenti e sono realizzate in legno (per le case d&apos;epoca), allumini o acciaio. Il sistema di chiusura può essere scorrevole, battente o pieghevoli a libro. Inoltre, ci sono{' '}
              <a href="https://www.gicall.it/prodotti/grate-e-persiane/" className="text-amber-600 hover:text-amber-700">
                modelli blindati
              </a>
              .
            </p>
          </section>

          <section id="scelta" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Meglio tapparelle o persiane?</h2>
            <p>
              Concentriamoci sulle necessità di un utente che sta ristrutturando casa e ha bisogno di un&apos;indicazione utile per scegliere la copertura delle finestre.
            </p>
            <p>
              Chiaramente, ci possono sempre essere delle zanzariere ma la protezione in questo caso riguarda gli animali molesti, gli insetti. Per proteggere dalla luce, <strong>sventare rapine e isolare casa</strong> hai bisogno di strumenti differenti. Quali, per l&apos;esattezza?
            </p>

            <h3 id="struttura" className="text-xl md:text-2xl font-semibold text-slate-900 scroll-mt-28">
              Struttura
            </h3>
            <p>
              Spesso la scelta dipende da come è stata costruita la casa e dove si trova l&apos;edificio. La tapparella è la soluzione ideale quando non puoi sfruttare grandi spazi esterni e non c&apos;è la possibilità di montare delle ante: in effetti, questa è la soluzione più compatta e meno invadente dal punto di vista strutturale. Questo vale soprattutto quando hai delle <strong>finestre molto grandi</strong>: le avvolgibili motorizzate sono essenziali.
            </p>

            <h3 id="manutenzione" className="text-xl md:text-2xl font-semibold text-slate-900 scroll-mt-28">
              Manutenzione
            </h3>
            <p>
              Dipende dal materiale che si sceglie in entrambi i casi. Di sicuro, le soluzioni in legno sono quelle che devono essere curate con maggior frequenza attraverso il passaggio di carta abrasiva e verniciatura. Le intemperie e il sole, infatti, possono segnare sia l&apos;estetica che la <strong>funzionalità delle tapparelle </strong>e delle persiane.
            </p>
            <p>
              Quest&apos;ultime, però, sono più esposte dato che rimangono sempre esposte. In determinate località, <strong>l&apos;intensità della luce solare</strong> può far perdere il colore iniziale o dare una tonalità giallognola alle strutture in plastica, che poi devi sostituire.
            </p>
            <p>
              D&apos;altro canto, le tapparelle con avvolgibile possono essere colpite da un problema storico: la grandine. Se scegli i <strong>modelli in PVC</strong>, infatti, c&apos;è il rischio che le assi vengano bucate dai colpi subiti a causa del ghiaccio. Oggi è facile trovarsi di fronte a condizioni climatiche estreme, se la tua area è soggetta a forti grandinate conviene acquistare modelli in alluminio o acciaio che non si ammaccano o bucano.
            </p>

            <h3 id="isolamento" className="text-xl md:text-2xl font-semibold text-slate-900 scroll-mt-28">
              Isolamento
            </h3>
            <p>
              Se gestite in modo adeguato, entrambe le soluzioni possono garantire un buon isolamento termico e dai rumori. Nello specifico, però, le tapparelle hanno un <strong>punto debole</strong>: il cassonetto dove si trova il meccanismo avvolgibile.
            </p>
            <p>Questo box deve essere <strong>adeguatamente isolato</strong>, altrimenti diventa un problema perché lascia passare l&apos;aria e rende inutile l&apos;infisso di qualità montato a regola d&apos;arte.</p>

            <h3 id="sicurezza" className="text-xl md:text-2xl font-semibold text-slate-900 scroll-mt-28">
              Sicurezza
            </h3>
            <p>
              Anche in questo caso, possiamo considerare tapparelle e <strong>persiane equivalenti</strong>. In entrambi i casi, infatti, esistono soluzioni rinforzate e blindate che consentono di aumentare il livello di{' '}
              <a href="https://www.gicall.it/category/sicurezza-della-casa/" className="text-amber-600 hover:text-amber-700">
                sicurezza della casa
              </a>
              . Basta comprare il modello giusto.
            </p>

            <h3 id="estetica" className="text-xl md:text-2xl font-semibold text-slate-900 scroll-mt-28">
              Estetica
            </h3>
            <p>
              In altri casi, invece, la sfida tra tapparelle e persiane viene vinta da quest&apos;ultime perché la casa ha delle esigenze estetiche da rispettare. Soprattutto nel centro storico, potrebbe essere decisiva la scelta delle ante in legno per avere un recupero adeguato della casa. Sarebbe un <strong>peccato rovinare un restauro</strong> scegliendo delle persiane avvolgibili dalle finiture moderne: bisogna rispettare il vincolo estetico.
            </p>
          </section>

          <section id="scelta-finale" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Quindi, quale scegliere? Tapparelle o persiane?</h2>
            <p>
              Non esiste una risposta definitiva. Dipende da esigenze, località, usi e abitudini. Molte persone amano avere la tapparella alle finestre, altre preferiscono la persiana. L&apos;importante è <strong>farsi aiutare da chi ha esperienza</strong>. Vuoi maggiori informazioni?
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
