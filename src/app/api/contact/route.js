import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch (err) {
    return NextResponse.json({ error: 'Payload non valido' }, { status: 400 });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    city,
    postalCode,
    serviceType,
    products = [],
    message = '',
    privacy,
    page = '',
    ambiente_installazione = '',
    modello_interesse = '',
    interesse_ecobonus = '',
  } = body;

  const isPergoleForm = Boolean(
    ambiente_installazione || modello_interesse || interesse_ecobonus
  );

  const missing = [];
  if (!firstName) missing.push('firstName');
  if (!lastName) missing.push('lastName');
  if (!email) missing.push('email');
  if (!phone) missing.push('phone');
  if (!city) missing.push('city');
  if (!postalCode) missing.push('postalCode');
  if (!isPergoleForm && !serviceType) missing.push('serviceType');
  if (!privacy) missing.push('privacy');

  if (missing.length) {
    return NextResponse.json({ error: 'Campi mancanti', fields: missing }, { status: 400 });
  }

  const serviceTypeLabel = serviceType || 'Non specificato';

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json({ error: 'Configurazione SMTP mancante' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465, // true per 465, false per STARTTLS
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const htmlBody = `
    <h2>Nuova richiesta dal form GICALL</h2>
    <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefono:</strong> ${phone}</p>
    <p><strong>Città:</strong> ${city}</p>
    <p><strong>CAP:</strong> ${postalCode}</p>
    <p><strong>Tipologia servizio:</strong> ${serviceTypeLabel}</p>
    <p><strong>Prodotti di interesse:</strong> ${products.length ? products.join(', ') : 'Non specificato'}</p>
    <p><strong>Messaggio:</strong><br/>${message ? message.replace(/\\n/g, '<br/>') : 'Non specificato'}</p>
    <p><strong>Pagina di origine:</strong> ${page || 'Non disponibile'}</p>
    ${ambiente_installazione ? `<p><strong>Ambiente installazione:</strong> ${ambiente_installazione}</p>` : ''}
    ${modello_interesse ? `<p><strong>Modello di interesse:</strong> ${modello_interesse}</p>` : ''}
    ${interesse_ecobonus ? `<p><strong>Interesse Ecobonus:</strong> ${interesse_ecobonus}</p>` : ''}
  `;

  const textBody = `
Nuova richiesta dal form GICALL
Nome: ${firstName} ${lastName}
Email: ${email}
Telefono: ${phone}
Città: ${city}
CAP: ${postalCode}
Tipologia servizio: ${serviceTypeLabel}
Prodotti di interesse: ${products.length ? products.join(', ') : 'Non specificato'}
Messaggio:
${message || 'Non specificato'}
Pagina di origine: ${page || 'Non disponibile'}
${ambiente_installazione ? `Ambiente installazione: ${ambiente_installazione}\n` : ''}${modello_interesse ? `Modello di interesse: ${modello_interesse}\n` : ''}${interesse_ecobonus ? `Interesse Ecobonus: ${interesse_ecobonus}\n` : ''}`;

  try {
    await transporter.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: MAIL_TO || SMTP_USER,
      replyTo: email,
      subject: `Nuova richiesta da ${firstName} ${lastName} - Form GICALL`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Email send error', err);
    return NextResponse.json({ error: 'Invio email fallito' }, { status: 500 });
  }
}
