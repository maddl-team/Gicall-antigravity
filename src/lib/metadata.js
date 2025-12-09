export const siteUrl = 'https://www.gicall.it';
export const defaultOgImage = '/hero/gicall_hero_homepage.webp';

export const siteSections = [
  { path: '/', name: 'Home' },
  { path: '/chi-siamo', name: 'Chi Siamo' },
  { path: '/finestre-pvc', name: 'Finestre in PVC' },
  { path: '/finestre-legno-alluminio', name: 'Finestre Legno Alluminio' },
  { path: '/finestre-alluminio', name: 'Finestre in Alluminio' },
  { path: '/sistemi-scorrevoli', name: 'Sistemi Scorrevoli' },
  { path: '/pergole-bioclimatiche', name: 'Pergole Bioclimatiche' },
  { path: '/tende-da-sole', name: 'Tende da Sole' },
  { path: '/avvolgibili-cassonetti', name: 'Avvolgibili e Cassonetti' },
  { path: '/lavorazioni-ferro', name: 'Lavorazioni in Ferro' },
  { path: '/porte-interne', name: 'Porte Interne' },
  { path: '/porte-blindate', name: 'Porte Blindate' },
  { path: '/grate-persiane', name: 'Grate e Persiane' },
  { path: '/servizi', name: 'Servizi' },
  { path: '/zanzariere', name: 'Zanzariere' },
  { path: '/contatti', name: 'Contatti' },
];

const toAbsoluteUrl = (pathOrUrl) =>
  pathOrUrl.startsWith('http') ? pathOrUrl : `${siteUrl}${pathOrUrl}`;

export const buildMetadata = ({ title, description, keywords, path, image = defaultOgImage }) => {
  const url = `${siteUrl}${path}`;
  const imageUrl = toAbsoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'GICALL',
      locale: 'it_IT',
      type: 'website',
      images: [
        {
          url: imageUrl,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    metadataBase: new URL(siteUrl),
  };
};
