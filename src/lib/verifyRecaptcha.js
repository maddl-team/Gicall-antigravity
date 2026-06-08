const RECAPTCHA_ACTION = 'contact';

export async function verifyRecaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error('RECAPTCHA_SECRET_KEY non configurata');
    return false;
  }

  if (!token) {
    return false;
  }

  const minScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? 0.5);

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret,
        response: token,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      return false;
    }

    if (data.action && data.action !== RECAPTCHA_ACTION) {
      return false;
    }

    if (typeof data.score !== 'number' || data.score < minScore) {
      console.warn('reCAPTCHA score insufficiente:', data.score);
      return false;
    }

    return true;
  } catch (err) {
    console.error('reCAPTCHA verification error', err);
    return false;
  }
}
