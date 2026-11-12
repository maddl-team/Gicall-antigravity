'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { getRecaptchaToken } from '@/lib/recaptchaV3';
import { EVENT, MAPS_SEARCH_URL, UTM_KEYS, buildCalendarIcs } from '@/lib/passCasa';
import RecaptchaNotice from '@/components/RecaptchaNotice';
import { trackDirectionsClick, trackLeadIfConsented } from './tracking';

const UTM_STORAGE = 'gicall_inaugurazione_capena_2026_utm';

function readUtms() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = {};
  let hasUrlValue = false;
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) {
      fromUrl[key] = value;
      hasUrlValue = true;
    }
  }
  if (hasUrlValue) {
    sessionStorage.setItem(UTM_STORAGE, JSON.stringify(fromUrl));
    return fromUrl;
  }
  try {
    const stored = JSON.parse(sessionStorage.getItem(UTM_STORAGE) || '{}');
    return stored && typeof stored === 'object' ? stored : {};
  } catch {
    return {};
  }
}

function downloadCalendar() {
  const blob = new Blob([buildCalendarIcs()], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'inaugurazione-gicall-capena.ics';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export default function RsvpForm({ closed, eventEnded }) {
  const headingId = useId();
  const errorRef = useRef(null);
  const lock = useRef(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [participants, setParticipants] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    readUtms();
  }, []);

  if (eventEnded) {
    return (
      <div className="pc-rsvp">
        <h2 id="conferma-titolo" tabIndex={-1} className="pc-display">
          L’inaugurazione si è conclusa
        </h2>
        <p className="pc-rsvp-lead">
          Il nuovo showroom resta aperto per una visita su appuntamento.
        </p>
        <Link href="/contatti" className="pc-btn pc-btn-primary" style={{ marginTop: '1.5rem' }}>
          Prenota una visita in showroom
        </Link>
      </div>
    );
  }

  if (closed) {
    return (
      <div className="pc-rsvp">
        <h2 id="conferma-titolo" tabIndex={-1} className="pc-display">
          Conferma la tua presenza
        </h2>
        <p className="pc-rsvp-lead">
          La conferma online è chiusa. Ti aspettiamo in showroom sabato 5 dicembre, dalle 15:00.
        </p>
        <a
          href={MAPS_SEARCH_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackDirectionsClick}
          className="pc-btn pc-btn-primary"
          style={{ marginTop: '1.5rem' }}
        >
          Indicazioni stradali
        </a>
      </div>
    );
  }

  if (accepted) {
    return (
      <div className="pc-rsvp" role="status">
        <h2 id="conferma-titolo" tabIndex={-1} className="pc-display">
          Ti aspettiamo in showroom
        </h2>
        <p className="pc-rsvp-lead">
          {EVENT.dateLabel}. La gift card si sceglie in showroom.
        </p>
        <p className="pc-rsvp-lead">{EVENT.address}</p>
        <div className="pc-actions">
          <a
            href={MAPS_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackDirectionsClick}
            className="pc-btn pc-btn-primary"
          >
            Indicazioni stradali
          </a>
          <button type="button" className="pc-btn pc-btn-ink" onClick={downloadCalendar}>
            Aggiungi al calendario
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (lock.current) return;
    lock.current = true;
    setSubmitting(true);
    setFormError('');
    setErrors({});

    let recaptchaToken = '';
    try {
      recaptchaToken = await getRecaptchaToken('inaugurazione');
    } catch {
      setFormError('Verifica di sicurezza non riuscita. Riprova.');
      setSubmitting(false);
      lock.current = false;
      errorRef.current?.focus();
      return;
    }

    try {
      const response = await fetch('/api/inaugurazione', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          participants,
          privacy,
          marketing,
          utm: readUtms(),
          recaptchaToken,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.ok !== true) {
        if (data.fields) setErrors(data.fields);
        throw new Error(data.error || 'Invio non riuscito. Riprova.');
      }
      trackLeadIfConsented();
      setAccepted(true);
    } catch (error) {
      setFormError(error.message || 'Invio non riuscito. Riprova.');
      errorRef.current?.focus();
    } finally {
      setSubmitting(false);
      lock.current = false;
    }
  };

  return (
    <div className="pc-rsvp">
      <h2 id="conferma-titolo" tabIndex={-1} className="pc-display">
        Conferma la tua presenza
      </h2>
      <p id={headingId} className="pc-rsvp-lead">
        La conferma è gradita. La gift card si sceglie in showroom il giorno dell’inaugurazione.
      </p>

      <form className="pc-form" onSubmit={handleSubmit} aria-describedby={headingId} noValidate>
        <div>
          <label htmlFor="rsvp-nome" className="pc-label">Nome e cognome</label>
          <input
            id="rsvp-nome"
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled={submitting}
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'rsvp-nome-errore' : undefined}
            className="pc-field"
          />
          {errors.name && <p id="rsvp-nome-errore" className="pc-error">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="rsvp-email" className="pc-label">Email</label>
          <input
            id="rsvp-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            disabled={submitting}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'rsvp-email-errore' : undefined}
            className="pc-field"
          />
          {errors.email && <p id="rsvp-email-errore" className="pc-error">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="rsvp-partecipanti" className="pc-label">
            Numero di partecipanti <span className="pc-optional">(facoltativo)</span>
          </label>
          <input
            id="rsvp-partecipanti"
            name="participants"
            type="number"
            min="1"
            max="20"
            inputMode="numeric"
            disabled={submitting}
            value={participants}
            onChange={(event) => setParticipants(event.target.value)}
            aria-invalid={errors.participants ? 'true' : 'false'}
            aria-describedby={errors.participants ? 'rsvp-partecipanti-errore' : undefined}
            className="pc-field"
          />
          {errors.participants && <p id="rsvp-partecipanti-errore" className="pc-error">{errors.participants}</p>}
        </div>

        <label className="pc-check-row">
          <input
            type="checkbox"
            name="privacy"
            className="pc-check"
            required
            disabled={submitting}
            checked={privacy}
            onChange={(event) => setPrivacy(event.target.checked)}
          />
          <span>
            Acconsento al trattamento dei dati per gestire la conferma di presenza, secondo la{' '}
            <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
          </span>
        </label>
        {errors.privacy && <p className="pc-error">{errors.privacy}</p>}

        <label className="pc-check-row">
          <input
            type="checkbox"
            name="marketing"
            className="pc-check"
            disabled={submitting}
            checked={marketing}
            onChange={(event) => setMarketing(event.target.checked)}
          />
          <span>Acconsento a ricevere comunicazioni su iniziative e prodotti Gicall. Facoltativo.</span>
        </label>

        <RecaptchaNotice />

        {formError && (
          <p ref={errorRef} tabIndex={-1} role="alert" className="pc-error">
            {formError}
          </p>
        )}

        <button type="submit" className="pc-btn pc-btn-primary" disabled={submitting}>
          {submitting ? 'Invio in corso…' : 'Conferma la tua presenza'}
        </button>
      </form>
    </div>
  );
}
