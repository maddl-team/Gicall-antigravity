import nodemailer from 'nodemailer';
import { EVENT, MAPS_SEARCH_URL, ORIGIN, REMINDER_AT, buildCalendarIcs } from '@/lib/passCasa';

export function isInaugurazioneMailReady() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  return Boolean(SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function createTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export async function sendInaugurazioneEmails(rsvp) {
  const { SMTP_USER, MAIL_FROM, MAIL_TO } = process.env;
  const transporter = createTransport();
  const from = MAIL_FROM || SMTP_USER;
  const to = MAIL_TO || SMTP_USER;
  const ics = buildCalendarIcs();
  const participants = rsvp.participants == null ? 'Non indicato' : String(rsvp.participants);
  const utmLines = Object.entries(rsvp.utm);
  const utmText = utmLines.length
    ? utmLines.map(([key, value]) => `${key}: ${value}`).join('\n')
    : 'Nessuna';
  const utmHtml = utmLines.length
    ? utmLines.map(([key, value]) => `<li>${escapeHtml(key)}: ${escapeHtml(value)}</li>`).join('')
    : '<li>Nessuna</li>';

  await transporter.sendMail({
    from,
    to,
    replyTo: rsvp.email,
    subject: `Conferma presenza inaugurazione Capena — ${rsvp.name}`,
    text: [
      'Nuova conferma di presenza',
      `Origine: ${ORIGIN}`,
      `Nome: ${rsvp.name}`,
      `Email: ${rsvp.email}`,
      `Partecipanti: ${participants}`,
      `Consenso marketing: ${rsvp.marketing ? 'sì' : 'no'}`,
      `Pagina: ${rsvp.page}`,
      'UTM:',
      utmText,
      '',
      `Promemoria ospite: previsto il ${REMINDER_AT}. Nessun invio automatico è configurato nel sito.`,
    ].join('\n'),
    html: `
      <h2>Nuova conferma di presenza</h2>
      <p><strong>Origine:</strong> ${escapeHtml(ORIGIN)}</p>
      <p><strong>Nome:</strong> ${escapeHtml(rsvp.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(rsvp.email)}</p>
      <p><strong>Partecipanti:</strong> ${escapeHtml(participants)}</p>
      <p><strong>Consenso marketing:</strong> ${rsvp.marketing ? 'sì' : 'no'}</p>
      <p><strong>Pagina:</strong> ${escapeHtml(rsvp.page)}</p>
      <p><strong>UTM:</strong></p>
      <ul>${utmHtml}</ul>
      <p>Promemoria ospite previsto il ${escapeHtml(REMINDER_AT)}. Nessun invio automatico è configurato nel sito.</p>
    `,
  });

  await transporter.sendMail({
    from,
    to: rsvp.email,
    replyTo: to,
    subject: 'Conferma presenza — Inaugurazione showroom Gicall a Capena',
    text: [
      `Ciao ${rsvp.name},`,
      'abbiamo registrato la tua presenza all’inaugurazione del nuovo showroom Gicall.',
      EVENT.dateLabel,
      EVENT.address,
      `Indicazioni: ${MAPS_SEARCH_URL}`,
      'In allegato trovi l’appuntamento per il calendario, con inizio alle 15:00 (ora di Roma).',
      'La gift card del Pass Casa si sceglie in showroom il giorno dell’inaugurazione.',
    ].join('\n'),
    html: `
      <p>Ciao ${escapeHtml(rsvp.name)},</p>
      <p>abbiamo registrato la tua presenza all’inaugurazione del nuovo showroom Gicall.</p>
      <p><strong>${escapeHtml(EVENT.dateLabel)}</strong><br/>${escapeHtml(EVENT.address)}</p>
      <p><a href="${escapeHtml(MAPS_SEARCH_URL)}">Indicazioni stradali</a></p>
      <p>In allegato trovi l’appuntamento per il calendario, con inizio alle 15:00 (ora di Roma).</p>
      <p>La gift card del Pass Casa si sceglie in showroom il giorno dell’inaugurazione.</p>
    `,
    attachments: [
      {
        filename: 'inaugurazione-gicall-capena.ics',
        content: ics,
        contentType: 'text/calendar; charset=utf-8; method=PUBLISH',
      },
    ],
  });
}
