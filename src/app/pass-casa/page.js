import PassCasaView from '@/components/pass-casa/PassCasaView';
import { buildMetadata } from '@/lib/metadata';
import { ASSETS, getPassCasaState } from '@/lib/passCasa';

export const dynamic = 'force-dynamic';

export const metadata = buildMetadata({
  title: 'Inaugurazione showroom Gicall a Capena | 5 dicembre 2026',
  description: 'Sabato 5 dicembre 2026, dalle 15:00, inauguriamo il nuovo showroom Gicall in Via Traversa del Grillo km 1,600 a Capena. Conferma la presenza e scopri il Pass Casa.',
  keywords: 'Inaugurazione Gicall, showroom Capena, Pass Casa, infissi Roma',
  path: '/pass-casa',
  image: ASSETS.poster.src,
});

export default async function PassCasaPage({ searchParams }) {
  const params = await searchParams;
  const preview = process.env.NODE_ENV === 'development' && typeof params?.fase === 'string'
    ? params.fase
    : '';
  const state = getPassCasaState(new Date(), preview);

  return (
    <PassCasaView state={state} />
  );
}
