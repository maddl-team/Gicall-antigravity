import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

const title = "Blog di Gicall - Novità, Consigli e Guide su Infissi e Serramenti";
const subtitle =
  "Esplora il blog di Gicall per scoprire le ultime novità, consigli pratici e guide dettagliate su finestre, porte, grate e persiane.";

const posts = [
  {
    title: "Ecco i consigli per proteggere le finestre da ladri e furti in casa",
    slug: "ecco-i-consigli-per-proteggere-le-finestre-da-ladri-e-furti-in-casa",
    image: "/images/blog_finestre.webp",
    category: "Sicurezza",
    excerpt:
      "Grate, infissi di qualità e allarmi: come aumentare la sicurezza di finestre e portefinestre.",
  },
  {
    title: "Finestre in PVC, alluminio o legno: quale conviene scegliere?",
    slug: "finestre-in-pvc-alluminio-o-legno-quale-conviene-scegliere",
    image: "/images/blog_materiali-finestre.webp",
    category: "Consigli",
    excerpt:
      "Confronto tra materiali, pro e contro, isolamento e manutenzione per scegliere il serramento giusto.",
  },
  {
    title: "Serratura della porta blindata: guida per scegliere la migliore per te",
    slug: "serratura-della-porta-blindata-guida-per-scegliere-la-migliore-per-te",
    image: "/images/blog_serratura-1.webp",
    category: "Sicurezza",
    excerpt:
      "Cilindro, defender, classe antieffrazione e consigli pratici per migliorare l’ingresso di casa.",
  },
  {
    title: "Meglio usare le tapparelle o le persiane? Ecco pro e contro da conoscere",
    slug: "meglio-usare-le-tapparelle-o-le-persiane-ecco-pro-e-contro-da-conoscere",
    image: "/images/blog_tapparelle-persiane.webp",
    category: "Consigli",
    excerpt:
      "Differenze tra tapparelle e persiane per luce, isolamento, sicurezza ed estetica.",
  },
  {
    title: "Come risolvere i rumori molesti in condominio?",
    slug: "come-risolvere-i-rumori-molesti-in-condominio",
    image: "/images/blog_rumori-molesti.webp",
    category: "Comfort",
    excerpt:
      "Vetri fonoassorbenti, posa corretta e buone pratiche per ridurre i rumori e migliorare il comfort.",
  },
  {
    title: "Quali sono i migliori vetri per porte e finestre? Ecco come scegliere",
    slug: "quali-sono-i-migliori-vetri-per-porte-e-finestre-ecco-come-scegliere",
    image: "/images/blog_vetro.webp",
    category: "Tecnologia",
    excerpt:
      "Basso emissivo, triplo vetro, sicurezza e selezione solare: una guida rapida alle scelte giuste.",
  },
];

export const metadata = buildMetadata({
  title: `${title}`,
  description: subtitle,
  path: "/blog",
  image: "/images/blog_finestre.webp",
  keywords: "blog infissi serramenti",
});

export default function BlogIndexPage() {
  return (
    <section className="bg-white text-slate-900 py-16 md:py-24">
      <div className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-600">
            Blog
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">{subtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-amber-100 text-amber-700 rounded-full w-fit">
                  {post.category}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xl font-bold leading-snug text-slate-900 group-hover:text-amber-600 transition-colors"
                >
                  {post.title}
                </Link>
                <p className="text-slate-600 text-base leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700"
                >
                  Leggi l&apos;articolo
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
