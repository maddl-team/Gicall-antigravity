/**
 * Inaugurazione showroom Capena — contenuti e scadenze.
 *
 * Non pubblicare in pagina questi punti, ancora da confermare:
 * - IVA inclusa o esclusa sul minimo di €3.000
 * - azione che perfeziona l'uso del Pass entro il termine
 * - data di scadenza esatta del Pass
 * - orario di fine evento (EVENT_ENDS_AT e FORM_CLOSES_AT usano le 23:00 come fallback tecnico)
 *
 * Il promemoria del 4 dicembre non ha un'automazione nel progetto: va pianificato fuori da questo sito.
 */

export const ORIGIN = 'gicall_inaugurazione_capena_2026';

export const INVITE_HIDE_AT = '2026-12-05T23:00:00+01:00';
export const EVENT_ENDS_AT = '2026-12-05T23:00:00+01:00';
export const FORM_CLOSES_AT = '2026-12-05T23:00:00+01:00';
export const REMINDER_AT = '2026-12-04T09:00:00+01:00';

export const EVENT = {
  title: 'Inaugurazione del nuovo showroom Gicall a Capena',
  dateLabel: 'Sabato 5 dicembre 2026 · dalle 15:00',
  shortDate: '5 dicembre · dalle 15:00',
  address: 'Via Traversa del Grillo km 1,600, 00060 Capena (RM)',
  timeZone: 'Europe/Rome',
  /** 15:00 ora di Roma a dicembre (CET, UTC+1). Nessuna ora di fine: non è confermata. */
  icsStartUtc: '20261205T140000Z',
};

export const SHOWROOM_VISIT_PATH = '/contatti';

export const MAPS_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(EVENT.address)}`;

export const ASSETS = {
  poster: {
    src: '/images/inaugurazione-showroom.jpeg',
    width: 1122,
    height: 1402,
    alt: 'Locandina dell’inaugurazione del nuovo showroom Gicall a Capena, sabato 5 dicembre alle ore 15:00.',
  },
  hero: {
    src: '/images/inaugurazione-showroom-hero.webp',
    width: 404,
    height: 848,
    alt: 'Finestra Gicall aperta su un tramonto, ritaglio fotografico della locandina di inaugurazione.',
  },
};

export const PASSES = [
  {
    id: 'comfort',
    title: 'Comfort',
    text: 'Una zanzariera per una finestra a scelta, entro dimensioni e modelli prestabiliti.',
    src: '/images/pass-casa-comfort.jpeg',
    alt: 'Pass Casa Comfort, edizione inaugurazione: una zanzariera per la tua casa.',
  },
  {
    id: 'design',
    title: 'Design',
    text: 'Upgrade delle maniglie di finestre o porte, tra modelli e finiture selezionati.',
    src: '/images/pass-casa-design.jpeg',
    alt: 'Pass Casa Design, edizione inaugurazione: upgrade delle maniglie di finestre o porte.',
  },
  {
    id: 'tranquillita',
    title: 'Tranquillità — progettazione',
    text: 'Progettazione personalizzata di un sistema di allarme.',
    src: '/images/pass-casa-tranquillita.jpeg',
    alt: 'Pass Casa Tranquillità, edizione inaugurazione: progettazione personalizzata di un sistema di allarme.',
  },
];

export const PASS_IMAGE = { width: 1122, height: 1402 };

export const CONDITIONS = [
  'Spesa minima di €3.000.',
  'Si può scegliere un solo omaggio.',
  'Il Pass si usa entro 90 giorni dall’inaugurazione.',
];

export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

const INVITE_SESSION_KEY = 'gicall_inaugurazione_capena_2026_invite';

export function inviteSessionKey() {
  return INVITE_SESSION_KEY;
}

export function isPastInstant(iso, now = new Date()) {
  const deadline = Date.parse(iso);
  const time = now instanceof Date ? now.getTime() : Number(now);
  return Number.isFinite(deadline) && Number.isFinite(time) && time >= deadline;
}

export function getPassCasaState(now = new Date(), preview = '') {
  if (preview === 'post') {
    return { eventEnded: true, formOpen: false, inviteVisible: false };
  }
  if (preview === 'form-chiuso') {
    return { eventEnded: false, formOpen: false, inviteVisible: true };
  }
  if (preview === 'invito-scaduto') {
    return { eventEnded: false, formOpen: true, inviteVisible: false };
  }
  return {
    eventEnded: isPastInstant(EVENT_ENDS_AT, now),
    formOpen: !isPastInstant(FORM_CLOSES_AT, now),
    inviteVisible: !isPastInstant(INVITE_HIDE_AT, now),
  };
}

function cleanLine(value, max) {
  return String(value ?? '')
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

export function sanitizeUtms(input) {
  if (!input || typeof input !== 'object') return {};
  const utm = {};
  for (const key of UTM_KEYS) {
    const value = cleanLine(input[key], 120);
    if (value) utm[key] = value;
  }
  return utm;
}

export function validateRsvp(body) {
  const name = cleanLine(body?.name, 80);
  const email = cleanLine(body?.email, 120).toLowerCase();
  const privacy = body?.privacy === true;
  const marketing = body?.marketing === true;
  const utm = sanitizeUtms(body?.utm);

  const errors = {};
  if (name.length < 2) errors.name = 'Inserisci nome e cognome.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Inserisci un indirizzo email valido.';
  if (!privacy) errors.privacy = 'Per confermare la presenza serve il consenso al trattamento dei dati.';

  let participants = null;
  const rawParticipants = body?.participants;
  if (rawParticipants !== undefined && rawParticipants !== null && String(rawParticipants).trim() !== '') {
    const parsed = Number(rawParticipants);
    if (!Number.isInteger(parsed) || parsed < 1 || parsed > 20) {
      errors.participants = 'Indica un numero di partecipanti tra 1 e 20, oppure lascia il campo vuoto.';
    } else {
      participants = parsed;
    }
  }

  return {
    ok: Object.keys(errors).length === 0,
    errors,
    value: {
      name,
      email,
      participants,
      privacy,
      marketing,
      utm,
      origin: ORIGIN,
      page: '/pass-casa',
    },
  };
}

export function buildCalendarIcs() {
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
  const description = icsEscape('Sabato 5 dicembre 2026, dalle 15:00 (ora di Roma). L’ora di fine non è indicata.');
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Gicall//Inaugurazione Capena//IT',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:gicall-inaugurazione-capena-2026@gicall.it',
    `DTSTAMP:${stamp}`,
    `DTSTART:${EVENT.icsStartUtc}`,
    `SUMMARY:${icsEscape(EVENT.title)}`,
    `LOCATION:${icsEscape(EVENT.address)}`,
    `DESCRIPTION:${description}`,
    `URL:${MAPS_SEARCH_URL}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

function icsEscape(value) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/\r?\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;');
}
