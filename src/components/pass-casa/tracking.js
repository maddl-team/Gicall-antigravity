'use client';

export function trackDirectionsClick() {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'gicall_indicazioni_stradali',
    event_category: 'inaugurazione_capena',
    link_type: 'maps_search',
  });
}

export function trackLeadIfConsented() {
  if (typeof window === 'undefined') return;
  let adsAllowed = false;
  try {
    adsAllowed = window.localStorage.getItem('silktideCookieChoice_pubblicit') === 'true';
  } catch {
    adsAllowed = false;
  }
  if (!adsAllowed) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'gicall_inaugurazione_lead',
    event_category: 'inaugurazione_capena',
    origin: 'gicall_inaugurazione_capena_2026',
    form_id: 'pass-casa-rsvp',
  });
}
