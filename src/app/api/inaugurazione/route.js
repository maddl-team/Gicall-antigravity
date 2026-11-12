import { NextResponse } from 'next/server';
import { FORM_CLOSES_AT, isPastInstant, validateRsvp } from '@/lib/passCasa';
import { isInaugurazioneMailReady, sendInaugurazioneEmails } from '@/lib/passCasaMail';
import { verifyRecaptcha } from '@/lib/verifyRecaptcha';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  if (isPastInstant(FORM_CLOSES_AT)) {
    return NextResponse.json({ error: 'La conferma online è chiusa.' }, { status: 403 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Payload non valido.' }, { status: 400 });
  }

  const validation = validateRsvp(body);
  if (!validation.ok) {
    return NextResponse.json({ error: 'Controlla i campi indicati.', fields: validation.errors }, { status: 400 });
  }

  const recaptchaValid = await verifyRecaptcha(body?.recaptchaToken, 'inaugurazione');
  if (!recaptchaValid) {
    return NextResponse.json({ error: 'Verifica di sicurezza non valida. Riprova.' }, { status: 400 });
  }

  if (!isInaugurazioneMailReady()) {
    return NextResponse.json({ error: 'Configurazione SMTP mancante' }, { status: 500 });
  }

  try {
    await sendInaugurazioneEmails(validation.value);
    return NextResponse.json({ ok: true });
  } catch {
    console.error('Invio conferma inaugurazione non riuscito');
    return NextResponse.json({ error: 'Invio non riuscito. Riprova tra poco.' }, { status: 500 });
  }
}
