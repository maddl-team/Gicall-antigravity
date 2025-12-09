import { siteUrl, siteSections } from '@/lib/metadata';

export default function sitemap() {
  const lastModified = new Date();
  return siteSections.map(({ path }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changefreq: 'monthly',
    priority: path === '/' ? 1.0 : 0.7,
  }));
}
