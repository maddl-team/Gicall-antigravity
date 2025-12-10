import Image from 'next/image';
import { buildMetadata } from '@/lib/metadata';
import BlogToc from '@/components/BlogToc';

const title = 'Rumori molesti in condominio: come risolvere?';
const description =
  'Dover affrontare rumori molesti in condominio non è facile. Ma neanche impossibile. Ecco le soluzioni utili per gestire il problema.';
const coverImage = '/images/blog_rumori-molesti.webp';
const author = {
  name: 'Redazione GICALL',
  role: 'Consulenza tecnica serramenti',
  avatar: '/Logo-Gicall.png',
};

const toc = [
  { id: 'normativa', label: 'Consulta la normativa di riferimento' },
  { id: 'tolleranza', label: 'Valuta la soglia di tolleranza' },
  { id: 'dialogo', label: 'Parla con i tuoi vicini di casa' },
  { id: 'infissi', label: 'Scegli delle buone porte e finestre' },
];

export const metadata = buildMetadata({
  title,
  description,
  path: '/blog/come-risolvere-i-rumori-molesti-in-condominio',
  image: coverImage,
  keywords: 'rumori molesti in condominio',
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
            <span className="text-slate-700 font-semibold">Rumori in condominio</span>
          </nav>

          <div className="space-y-4 lg:pr-8">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-600">Comfort</p>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">{title}</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">{description}</p>
          </div>
          <div className="text-sm text-slate-500 mb-6">
            Pubblicato da <span className="font-semibold text-slate-800">{author.name}</span>
          </div>

          <p>
            La <strong>vita in un condominio </strong>non è sempre facile, in alcuni casi ci sono dei rumori molesti che disturbano la vita comune. Soprattutto in orari in cui non è consentito svolgere attività che potrebbero essere un fastidio per il prossimo. Ma come risolvere?
          </p>
          <p>
            Puoi far valere i tuoi diritti in modi diversi, ci sono delle leggi che ci aiutano a identificare e gestire i rumori condominiali. Anche se, in alcuni casi, conviene <strong>affrontare il problema</strong> a monte e gestire la cosa in autonomia. Vuoi approfondire?
          </p>

          <section id="normativa" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Consulta la normativa di riferimento</h2>
            <p>
              Il primo passo per affrontare situazioni difficili tra condòmini, <strong>legate a schiamazzi e rumori molesti</strong>, è semplice: devi conoscere la normativa di riferimento. Il primo criterio da valutare è la presenza di un eventuale regolamento condominiale.
            </p>
            <p>In questo documento possono esserci dei riferimenti utili rispetto a quali sono i limiti a eventuali attività rumorose. Come, ad esempio, <strong>orari e giorni da rispettare</strong>.</p>
            <p>
              Se tutto ciò è chiarito dal regolamento condominiale, puoi far valere le tue ragioni senza controversie legali o cause ma facendo appello al tuo amministratore di condominio per far rispettare le regole. Diversamente, puoi attingere dai regolamenti comunali che impediscono e sanzionano <strong>emissioni sonore</strong> in orari precisi.
            </p>
            <p>
              Per un&apos;<strong>indicazione di massima</strong> rispetto alla regolamentazione dei rumori molesti in condominio si può prendere come riferimento il testo della{' '}
              <a href="https://www.gazzettaufficiale.it/atto/regioni/caricaArticolo?art.progressivo=0&art.idArticolo=12&art.versione=1&art.codiceRedazionale=092R1026&art.dataPubblicazioneGazzetta=1993-03-06&art.idGruppo=0&art.idSottoArticolo=1#:~:text=5.,ore%2015.00%20alle%20ore%2022.00." target="_blank" rel="noopener" className="text-amber-600 hover:text-amber-700">
                Gazzetta Ufficiale
              </a>
              .
            </p>
            <p>
              Le macchine da giardinaggio si usano dalle ore 9.00 alle 12.00 e dalle 15.00 alle ore 19.00. Per i lavori di <strong>demolizione e costruzione</strong> si opera dalle 9.00 alle 18.00 con pausa dalle 12.00 alle 14.00 mentre le attività ricreative e spettacoli hanno permesso fino alle 22.00. Eventuali deroghe possono essere concesse dal proprio comune.
            </p>
          </section>

          <section id="tolleranza" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Valuta la soglia di tolleranza</h2>
            <p>
              Gli orari in cui si può fare rumore in un condominio sono chiari. Possiamo produrre qualsiasi tipo di inquinamento acustico? Non proprio, ci sono alcune attività che possono essere tollerate e altre no. Ad esempio, il pianto di un bambino può essere considerato fastidioso, ma non è possibile imporre il silenzio in questo caso.
            </p>
            <p>
              Invece, la televisione alta, la musica a palla, la lavatrice accesa di notte, le scarpe con il tacco al piano di sopra e le feste notturne possono essere considerate delle fonti di rumore evitabili. La giurisprudenza ha stabilito come limite della tolleranza le <strong>emissioni sonore pari a 5 decibel </strong>di giorno e 3 decibel di notte.
            </p>
            <p>
              Questa differenza dipende anche dal fatto che di giorno i rumori ambientali sono diffusi, quindi le fonti sono più tollerabili rispetto a una condizione notturna in cui tutto tace e il rumore emerge nitidamente. <strong>Arrecando fastidio</strong> ai confinanti.
            </p>
            <p>Resta il fatto che la misurazione fonometrica in appartamento è<strong> solo un criterio da valutare</strong>, non è l&apos;unico elemento per parlare di disturbo della quiete pubblica.</p>
          </section>

          <section id="dialogo" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Parla con i tuoi vicini di casa</h2>
            <p>
              La soluzione migliore in determinati casi. Se devi <strong>affrontare vicini rumorosi</strong> e dirimpettai che si lasciano andare a rumori molesti di varia natura, prima di procedere per vie legali, puoi scegliere la strada del confronto. A volte basta chiarire il proprio punto di vista per risolvere il problema dei rumori molesti in condominio.
            </p>
            <p>
              Se questo non è possibile, si può chiamare in causa l&apos;amministratore di condominio che ha il dovere di far rispettare il regolamento condominiale che - ricordiamolo - può avere delle norme più restrittive per costringere i condòmini a evitare determinate procedure troppo rumorose per chi ha deliberato, come ad esempio:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Uso di lavatrici di notte.</li>
              <li>Lavori di ristrutturazione di pomeriggio.</li>
              <li>Organizzazione di feste serali.</li>
            </ul>
            <p>Se nel regolamento ci sono queste informazioni, è compito dell&apos;amministratore condominiale <strong>far rispettare le indicazioni.</strong> Quindi sarà il tuo riferimento.</p>
          </section>

          <section id="infissi" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Scegli delle buone porte e finestre</h2>
            <p>
              In alcuni casi non ci sono opzioni: devi sopportare i vicini rumorosi che sono fonte di rumori molesti in condominio. Quindi, cosa fare? Devi continuare la tua opera di isolamento acustico con un buon prodotto per i tuoi infissi. Non si tratta di darla vinta ai disturbatori ma a volte la soglia di tolleranza nei <strong>confronti dei rumori è bassa</strong>.
            </p>
            <p>
              Sicuramente possiamo impedire ai vicini di<strong> possedere un cane </strong>che abbaia o zittire un bambino piccolo che piange o gioca. Quindi si punta sulla convivenza e il quieto vivere: cambiare gli infissi e scegliere delle finestre insonorizzate, in grado di bloccare i rumori sia in entrata che in uscita. Certo, qualcuno potrà pensare:
            </p>
            <blockquote className="border-l-4 border-slate-200 pl-4 italic text-slate-700">
              <p>&quot;è compito di chi fa chiasso rimediare con una spesa per cambiare gli infissi. Perché devo sostenere io il preventivo e acquistare infissi insonorizzati per bloccare il rumore e dormire sonni tranquilli?&quot;</p>
            </blockquote>
            <p>
              In realtà non è così facile ma è giusto cambiare prospettiva. E considerare questo passaggio come un investimento. Acquistare finestre e porte di qualità vuol dire non solo insonorizzare gli ambienti ma anche renderli più efficienti dal punto di vista dell&apos;isolamento termico. Basta avere i <strong>professionisti degli infissi</strong> al tuo fianco.
            </p>
            <p>
              Contattaci per organizzare un sopralluogo in modo da proporre la migliore soluzione per{' '}
              <a href="https://www.gicall.it/prodotti/finestre/" className="text-amber-600 hover:text-amber-700">
                finestre
              </a>{' '}
              e{' '}
              <a href="https://www.gicall.it/prodotti/porte-da-interno-porta-da-esterno/" className="text-amber-600 hover:text-amber-700">
                porte da interni o esterni
              </a>{' '}
              in grado di bloccare rumori molesti di vicini chiassosi, cantieri, locali notturni, discoteche e feste varie, <strong>traffico automobilistico e ferroviario</strong>, lavori in corso, bambini, animali domestici e altro ancora.
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
