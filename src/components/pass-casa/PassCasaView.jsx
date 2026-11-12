'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ASSETS,
  CONDITIONS,
  EVENT,
  MAPS_SEARCH_URL,
  PASSES,
  PASS_IMAGE,
  SHOWROOM_VISIT_PATH,
} from '@/lib/passCasa';
import RsvpForm from './RsvpForm';
import { trackDirectionsClick } from './tracking';
import './pass-casa.css';

function scrollToConfirmation(event) {
  event.preventDefault();
  const section = document.getElementById('conferma');
  const focusName = document.getElementById('rsvp-nome');
  const focusHeading = document.getElementById('conferma-titolo');
  const focusTarget = focusName && !focusName.disabled ? focusName : focusHeading;
  const finish = () => focusTarget?.focus({ preventScroll: true });

  if (section && window.lenis?.scrollTo) {
    window.lenis.scrollTo(section, { offset: -96, onComplete: finish });
    return;
  }

  section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.setTimeout(finish, 450);
}

function DirectionsLink({ className, children }) {
  return (
    <a
      href={MAPS_SEARCH_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={trackDirectionsClick}
    >
      {children}
    </a>
  );
}

export default function PassCasaView({ state }) {
  const { eventEnded, formOpen } = state;

  return (
    <article className="pass-casa">
      <section className="pc-hero">
        <div className="pc-wrap pc-hero-grid">
          <div>
            <h1 className="pc-display">Inaugurazione del nuovo showroom Gicall a Capena</h1>
            <div className="pc-hero-facts">
              <p className="pc-hero-date">{EVENT.dateLabel}</p>
              <p className="pc-hero-address">{EVENT.address}</p>
            </div>
            {eventEnded ? (
              <>
                <p className="pc-hero-address" style={{ marginTop: '1.35rem' }}>L’inaugurazione si è conclusa</p>
                <div className="pc-actions">
                  <Link href={SHOWROOM_VISIT_PATH} className="pc-btn pc-btn-primary">
                    Prenota una visita in showroom
                  </Link>
                  <DirectionsLink className="pc-btn pc-btn-ghost">Indicazioni stradali</DirectionsLink>
                </div>
              </>
            ) : (
              <div className="pc-actions">
                <a href="#conferma" className="pc-btn pc-btn-primary" onClick={scrollToConfirmation}>
                  Conferma la tua presenza
                </a>
                <DirectionsLink className="pc-btn pc-btn-ghost">Indicazioni stradali</DirectionsLink>
              </div>
            )}
          </div>
          <figure className="pc-hero-frame">
            <Image
              src={ASSETS.hero.src}
              alt={ASSETS.hero.alt}
              width={ASSETS.hero.width}
              height={ASSETS.hero.height}
              priority
              sizes="(min-width: 960px) 352px, 264px"
            />
          </figure>
        </div>
        <div className="pc-wrap pc-showroom">
          <h2 className="pc-display">Cosa trovi in showroom</h2>
          <p>
            Vieni a vedere dal vivo finestre, porte e persiane, e a conoscere le soluzioni Gicall in PVC e alluminio.
          </p>
        </div>
      </section>

      <section className="pc-pass" aria-labelledby="pass-titolo">
        <div className="pc-wrap">
          <header className="pc-pass-head">
            <h2 id="pass-titolo" className="pc-display">L’ultimo tocco lo mettiamo noi.</h2>
            <p>
              Vieni all’inaugurazione, scegli una delle tre gift card in showroom e usa il Pass per un progetto Gicall,
              secondo le condizioni dell’iniziativa. Le card sono informative: la scelta si fa il giorno dell’inaugurazione.
            </p>
          </header>
          <ul className="pc-pass-grid">
            {PASSES.map((pass) => (
              <li key={pass.id} className="pc-pass-card">
                <Image
                  src={pass.src}
                  alt={pass.alt}
                  width={PASS_IMAGE.width}
                  height={PASS_IMAGE.height}
                  sizes="(min-width: 800px) 30vw, 100vw"
                />
                <h3>{pass.title}</h3>
                <p>{pass.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="conferma" className="pc-paper">
        <div className="pc-wrap pc-paper-grid">
          <div>
            <h2 id="condizioni-titolo" className="pc-display">Condizioni</h2>
            <ul className="pc-conditions">
              {CONDITIONS.map((condition) => (
                <li key={condition}>{condition}</li>
              ))}
            </ul>
          </div>
          <RsvpForm closed={!formOpen} eventEnded={eventEnded} />
        </div>
      </section>
    </article>
  );
}
