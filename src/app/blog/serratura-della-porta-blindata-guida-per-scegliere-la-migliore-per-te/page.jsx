import Image from 'next/image';
import { buildMetadata } from '@/lib/metadata';
import BlogToc from '@/components/BlogToc';

const title = 'Serratura della porta blindata: guida per scegliere la migliore per te';
const description =
  'Confronto tra serrature meccaniche, elettroniche, cilindro europeo e classi di resistenza per aumentare la sicurezza della tua porta blindata.';
const coverImage = '/images/blog_serratura-1.webp';
const author = {
  name: 'Redazione GICALL',
  role: 'Consulenza tecnica serramenti',
  avatar: '/Logo-Gicall.png',
};

const toc = [
  { id: 'meccanica-elettronica', label: 'Serratura meccanica o elettronica?' },
  { id: 'doppia-mappa', label: 'Serrature a doppia mappa' },
  { id: 'cilindro-europeo', label: 'Serratura a cilindro europeo' },
  { id: 'classe-resistenza', label: 'Come scegliere la classe di resistenza?' },
];

export const metadata = buildMetadata({
  title: `${title} | Blog GICALL`,
  description,
  path: '/blog/serratura-della-porta-blindata-guida-per-scegliere-la-migliore-per-te',
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
            <span className="text-slate-700 font-semibold">Serrature blindate</span>
          </nav>

          <div className="space-y-4 lg:pr-8">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-600">Sicurezza</p>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">{title}</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">{description}</p>
          </div>
          <div className="text-sm text-slate-500 mb-6">
            Pubblicato da <span className="font-semibold text-slate-800">{author.name}</span>
          </div>

          <p>
            Scegliere la <strong>serratura di una porta blindata</strong> a prova di scasso può fare la differenza quando vuoi dare maggior sicurezza alla tua dimora. Infatti, questo meccanismo è fondamentale per evitare che i ladri di appartamento riescano a forzare l&apos;entrata principale della tua dimora. In molti casi, hai pensato alle finestre aggiungendo delle grate di sicurezza ma non investi il massimo per scegliere la serratura più sicura.
          </p>
          <p>
            Ovviamente, considerando il rischio. Ci sono serrature per <a href="https://www.gicall.it/prodotti/portoni-blindati/" className="text-amber-600 hover:text-amber-700">porte e portoni blindati</a> di massima sicurezza che servono il caveau di una banca. <strong>Sono adatte per la tua casa?</strong> Scopriamolo insieme, ecco come scegliere la migliore serratura della porta blindata. Ovvero quella che ti permette di dormire sonni tranquilli.
          </p>

          <section id="meccanica-elettronica" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Serratura meccanica o elettronica?</h2>
            <p>
              Iniziamo dalla base: esistono delle serrature per porte blindate classiche, poi ci sono le soluzioni moderne gestite da un meccanismo elettronico. Quali sono le serrature adatte in questi casi? Di sicuro quelle elettroniche che non <strong>hanno bisogno di chiave</strong> per accedere ma di un riconoscimento biometrico, un codice o una carta.
            </p>
            <p>
              A tutto questo, devi aggiungere la possibilità di utilizzare <strong>serrature elettroniche smart</strong> che ti consentono di controllare l&apos;apertura e la chiusura a distanza. Anche da smartphone. Tutto questo, ovviamente, ha un costo superiore.
            </p>
          </section>

          <section id="doppia-mappa" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Serrature a doppia mappa</h2>
            <p>
              In passato era sicuramente una delle soluzioni più sicure per le porte blindate. La chiave viene inserita nel cilindro, le mappe sono pensate per allinearsi con un set di perni all&apos;interno della serratura. Continuando a girare la chiave, le leve consentono al meccanismo di spostare i catenacci che chiudono e aprono la porta.
            </p>
            <p>
              Anche se questa soluzione è ancora molto utilizzata, le serrature di vecchia generazione possono essere scassinate facilmente con la <strong>chiave bulgara</strong>. Questo grimaldello permette al ladro di fare un&apos;effrazione perfetta, senza lasciare tracce.
            </p>
            <p>
              Quindi sarà difficile anche <strong>spiegare l&apos;accaduto all&apos;assicurazione</strong>. Come evitare questi problemi? Semplice, devi scegliere una serratura per porte blindate di ultima generazione. Vale a dire? Nel prossimo paragrafo trovi la soluzione.
            </p>
          </section>

          <section id="cilindro-europeo" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Serratura a cilindro europeo</h2>
            <p>
              Una delle serrature più sicure per la tua porta blindata è quella a cilindro europeo, molto diffusa sia nelle abitazioni che nelle attività commerciali grazie al buon rapporto tra sicurezza, prezzo e versatilità. Pur essendo una soluzione non troppo impegnativa dal <strong>punto di vista delle risorse economiche</strong>, permette di avere una buona soluzione per evitare effrazioni e scassi. Ma come funziona esattamente?
            </p>
            <p>
              Quando la chiave viene inserita nel cilindro, i denti sollevano i perni a un&apos;altezza specifica. Una volta che sono allineati,<strong> il cilindro può ruotare</strong>. La camma, collegata al cilindro, trasmette il movimento al corpo della serratura per chiudere l&apos;entrata.
            </p>
            <p>
              L&apos;aspetto interessante che ti spinge a scegliere questa serratura per la tua porta blindata: la versatilità. Puoi optare per cilindri anti scasso, quindi progettati per resistere ai tentativi di forzatura effettuati anche con <strong>elettroutensili specifici come i trapani</strong>. Questo grazie a perni rinforzati che mettono al sicuro dai ladri più esperti.
            </p>
            <p>
              Tutto questo senza dimenticare che esistono anche alternative contro la <strong>tecnica del bumping</strong> (effettuata con una chiave con i denti tagliati in modo da sollevare tutti i perni contemporaneamente) o lo strappo. Ovvero l&apos;estrazione forzata del cilindro.
            </p>
            <p>
              Per rendere ancora più sicura la <strong>serratura europea</strong> conviene installare il defender magnetico corazzato che consente di scongiurare l&apos;attacco con il topolino decoder. Ovvero lo strumento che i ladri usano per forzare le porte difese da questa serratura.
            </p>
          </section>

          <section id="classe-resistenza" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Come scegliere la classe di resistenza?</h2>
            <p>
              Per avere un riferimento chiaro, bisogna prendere in considerazione le norme UNI ENV 1627 che definiscono il grado di sicurezza di una chiusura, un portone o una finestra. Le serrature, invece, vengono classificate con la norma EN 1303 per i cilindri.
            </p>
            <p>
              In questo modo, è possibile scegliere una serratura anti effrazione utilizzando come riferimento un numero. Preceduto dalla <strong>sigla RC (Resistance Class)</strong>. Quali sono le condizioni adeguate alle tue esigenze di sicurezza? La classi 3 e 4 sono senza dubbio le soluzioni che fanno al caso tuo perché offrono un grado adeguato di sicurezza.
            </p>
            <p>
              Il tutto a costi adeguati. Le <strong>classi 5 e 6</strong> sono quelle che presentano il livello di affidabilità massimo ma stiamo parlando di serrature per porte blindate adatte a edifici commerciali e industriali situati in zone molto pericolose. Addirittura, l&apos;ultimo step è quello dedicato a gioiellerie e banche che devono essere in grado di superare l&apos;attacco di ladri esperti con attrezzi elettrici pesanti. Di sicuro non è necessario.
            </p>
            <p>
              Basta avere una buona porta capace di resistere ad attacchi ed effrazioni con strumenti elettrici come seghe e trapani. Valutando sempre la posizione geografica, i beni custoditi e il <strong>tasso di criminalità dell&apos;area</strong>. Per tutto questo puoi chiedere a noi che ci occupiamo di porte e portoni blindati ma anche di finestre rinforzate.
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
