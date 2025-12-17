import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.gicall.it',
      },
      {
        protocol: 'https',
        hostname: 'gicall.it',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/prodotti', destination: '/', permanent: true },
      { source: '/riciclaggio', destination: '/', permanent: true },
      { source: '/produzione', destination: '/chi-siamo', permanent: true },
      { source: '/about', destination: '/chi-siamo', permanent: true },
      { source: '/produzione/pvc', destination: '/finestre-pvc', permanent: true },
      { source: '/prodotti/finestre', destination: '/finestre-pvc', permanent: true },
      { source: '/produzione/ferro', destination: '/lavorazioni-ferro', permanent: true },
      { source: '/vetri-infissi', destination: '/blog/quali-sono-i-migliori-vetri-per-porte-e-finestre-ecco-come-scegliere', permanent: true },
      { source: '/prodotti/zanzariere', destination: '/zanzariere', permanent: true },
      { source: '/produzione/alluminio', destination: '/finestre-alluminio', permanent: true },
      { source: '/prodotti/avvolgibili', destination: '/avvolgibili-cassonetti', permanent: true },
      { source: '/category/promozioni', destination: '/blog', permanent: true },
      { source: '/materiale-finestre', destination: '/blog/finestre-in-pvc-alluminio-o-legno-quale-conviene-scegliere', permanent: true },
      { source: '/tecnologia-e-innovazione', destination: '/chi-siamo', permanent: true },
      { source: '/presenta-un-amico', destination: '/', permanent: true },
      { source: '/produzione/pvc/zendow', destination: '/finestre-pvc', permanent: true },
      { source: '/produzione/alluminio-legno', destination: '/finestre-legno-alluminio', permanent: true },
      { source: '/produzione/pvc/elegant', destination: '/finestre-pvc', permanent: true },
      { source: '/prodotti/portoni-blindati', destination: '/porte-blindate', permanent: true },
      { source: '/category/scegliere-le-finestre', destination: '/blog', permanent: true },
      { source: '/prodotti/tende-da-interno', destination: '/tende-da-sole', permanent: true },
      { source: '/richiedi-un-preventivo-gratuito', destination: '/contatti', permanent: true },
      { source: '/produzione/pvc/islide-scorrevoli', destination: '/sistemi-scorrevoli', permanent: true },
      { source: '/prodotti/tende-da-esterno', destination: '/tende-da-sole', permanent: true },
      { source: '/prodotti/complementi-da-giardino', destination: '/pergole-bioclimatiche', permanent: true },
      { source: '/come-proteggere-finestre-ladri', destination: '/blog/ecco-i-consigli-per-proteggere-le-finestre-da-ladri-e-furti-in-casa', permanent: true },
      { source: '/prodotti/grate-e-persiane', destination: '/grate-persiane', permanent: true },
      { source: '/rumori-molesti-in-condominio', destination: '/blog/come-risolvere-i-rumori-molesti-in-condominio', permanent: true },
      { source: '/catalogo-prodotti/finestre-in-alluminio', destination: '/finestre-alluminio', permanent: true },
      { source: '/catalogo-prodotti/cassonetti-in-pvc', destination: '/avvolgibili-cassonetti', permanent: true },
      { source: '/benvenuti-sul-nuovo-sito-gicall', destination: '/blog', permanent: true },
      { source: '/catalogo-prodotti/infissi-in-pvc', destination: '/finestre-pvc', permanent: true },
      { source: '/scegliere-migliore-serratura-porta-blindata', destination: '/blog/serratura-della-porta-blindata-guida-per-scegliere-la-migliore-per-te', permanent: true },
      { source: '/catalogo-prodotti/persiane-in-alluminio', destination: '/grate-persiane', permanent: true },
      { source: '/prodotti/portoni-blindati/portone-blindato', destination: '/porte-blindate', permanent: true },
      { source: '/categorie-prodotti/cassonetti-in-pvc', destination: '/avvolgibili-cassonetti', permanent: true },
    ];
  },
};

export default nextConfig;
