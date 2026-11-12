'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { ASSETS, UTM_KEYS, inviteSessionKey, isPastInstant, INVITE_HIDE_AT } from '@/lib/passCasa';
import './pass-casa.css';

function passCasaHref() {
  const params = new URLSearchParams(window.location.search);
  const next = new URLSearchParams();
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) next.set(key, value);
  }
  const query = next.toString();
  return query ? `/pass-casa?${query}` : '/pass-casa';
}

export default function InaugurazioneInvite() {
  const titleId = useId();
  const closeRef = useRef(null);
  const dialogRef = useRef(null);
  const previouslyFocused = useRef(null);
  const [mode, setMode] = useState(null);
  const [href, setHref] = useState('/pass-casa');

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)');
    const expiredPreview = process.env.NODE_ENV === 'development'
      && new URLSearchParams(window.location.search).get('invito') === 'scaduto';
    const dismissed = window.sessionStorage.getItem(inviteSessionKey()) === '1';
    const hidden = expiredPreview || dismissed || isPastInstant(INVITE_HIDE_AT);

    const apply = () => {
      if (hidden) {
        setMode(null);
        return;
      }
      setHref(passCasaHref());
      setMode(desktop.matches ? 'popup' : 'banner');
    };

    apply();
    desktop.addEventListener('change', apply);
    return () => desktop.removeEventListener('change', apply);
  }, []);

  const dismiss = useCallback(() => {
    window.sessionStorage.setItem(inviteSessionKey(), '1');
    setMode(null);
  }, []);

  useEffect(() => {
    if (mode !== 'popup') return undefined;
    previouslyFocused.current = document.activeElement;
    closeRef.current?.focus();
    const stopScroll = () => window.lenis?.stop();
    stopScroll();
    const stopTimer = window.setTimeout(stopScroll, 50);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        dismiss();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll('a[href], button:not([disabled])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(stopTimer);
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      window.lenis?.start();
      previouslyFocused.current?.focus?.();
    };
  }, [dismiss, mode]);

  if (mode === 'banner') {
    return (
      <aside className="pass-casa pc-on-dark relative z-[1] bg-[var(--pc-black)] px-4 pb-4 pt-28 text-[var(--pc-ivory)] md:hidden">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-base font-semibold leading-snug">Inaugurazione Gicall a Capena</p>
            <p className="mt-1 text-sm text-[var(--pc-gold-bright)]">5 dicembre · dalle 15:00</p>
          </div>
          <button type="button" className="pc-btn pc-btn-ghost min-h-10 px-3" onClick={dismiss} aria-label="Chiudi l'invito">
            Chiudi
          </button>
        </div>
        <Link href={href} className="pc-btn pc-btn-primary mt-4 w-full">
          Scopri l’inaugurazione
        </Link>
      </aside>
    );
  }

  if (mode !== 'popup') return null;

  return createPortal(
    <div className="pc-invite fixed inset-0 z-[10000] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/75" onClick={dismiss} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="pc-dialog"
      >
        <p id={titleId} className="pc-sr">Inaugurazione del nuovo showroom Gicall a Capena</p>
        <div className="pc-dialog-bar">
          <button ref={closeRef} type="button" className="pc-btn pc-btn-ghost" onClick={dismiss}>
            Chiudi
          </button>
        </div>
        <Image
          src={ASSETS.poster.src}
          alt={ASSETS.poster.alt}
          width={ASSETS.poster.width}
          height={ASSETS.poster.height}
          sizes="(min-width: 768px) 420px, 100vw"
          className="h-auto w-full"
        />
        <Link href={href} className="pc-btn pc-btn-primary" onClick={dismiss}>
          Scopri l’inaugurazione
        </Link>
      </div>
    </div>,
    document.body,
  );
}
