export default function RecaptchaNotice() {
  return (
    <p className="text-xs text-slate-400 leading-relaxed">
      Questo sito è protetto da reCAPTCHA. Si applicano la{' '}
      <a
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-slate-500"
      >
        Privacy Policy
      </a>{' '}
      e i{' '}
      <a
        href="https://policies.google.com/terms"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-slate-500"
      >
        Termini di servizio
      </a>{' '}
      di Google.
    </p>
  );
}
