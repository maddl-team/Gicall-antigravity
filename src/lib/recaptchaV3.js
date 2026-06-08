const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

let scriptLoading = null;

function loadRecaptchaScript() {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('reCAPTCHA disponibile solo nel browser'));
  }

  if (window.grecaptcha?.execute) {
    return Promise.resolve();
  }

  if (scriptLoading) {
    return scriptLoading;
  }

  scriptLoading = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Caricamento reCAPTCHA fallito'));
    document.head.appendChild(script);
  });

  return scriptLoading;
}

export async function getRecaptchaToken(action = 'contact') {
  if (!siteKey) {
    throw new Error('reCAPTCHA non configurato');
  }

  await loadRecaptchaScript();

  return new Promise((resolve, reject) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(siteKey, { action })
        .then(resolve)
        .catch(reject);
    });
  });
}
