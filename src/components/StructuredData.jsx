"use client";
import { usePathname } from 'next/navigation';
import { siteUrl, siteSections } from '@/lib/metadata';

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GICALL',
  url: siteUrl,
  logo: `${siteUrl}/Logo-Gicall.png`,
  sameAs: [],
};

const localBusinesses = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#capena`,
    name: 'GICALL Showroom Capena',
    image: `${siteUrl}/Logo-Gicall.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Traversa del Grillo',
      addressLocality: 'Capena',
      addressRegion: 'RM',
      addressCountry: 'IT',
    },
    postalCode: '00060',
    telephone: '+393208203824',
    email: 'roma@gicall.it',
    url: siteUrl,
    department: 'Fabbrica & Showroom',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#orvieto`,
    name: 'GICALL Showroom Orvieto',
    image: `${siteUrl}/Logo-Gicall.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Tevere, 26',
      addressLocality: 'Sferracavallo',
      addressRegion: 'TR',
      addressCountry: 'IT',
    },
    postalCode: '05018',
    telephone: '+393290130130',
    email: 'orvieto@gicall.it',
    url: siteUrl,
    department: 'Showroom',
  },
];

const titleMap = siteSections.reduce((acc, section) => {
  acc[section.path] = section.name;
  return acc;
}, {});

const StructuredData = () => {
  const pathname = usePathname() || '/';
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${siteUrl}/`,
    },
  ];

  if (pathname !== '/' && titleMap[pathname]) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: titleMap[pathname],
      item: `${siteUrl}${pathname}`,
    });
  }

  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  };

  const payloads = [organization, ...localBusinesses, breadcrumbList];

  return (
    <>
      {payloads.map((entry, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </>
  );
};

export default StructuredData;
