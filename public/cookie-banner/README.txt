Consent Manager Installation Instructions

1. Extract the contents of this zip file
2. Place the files in your website directory
3. Add the following code to your HTML page, inside the <head> tag:

<link rel="stylesheet" id="silktide-consent-manager-css" href="path-to-css/silktide-consent-manager.css">
<script src="path-to-js/silktide-consent-manager.js"></script>
<script>
silktideCookieBannerManager.updateCookieBannerConfig({
  background: {
    showBackground: false
  },
  cookieIcon: {
    position: "bottomLeft"
  },
  cookieTypes: [
    {
      id: "necessari",
      name: "Necessari",
      description: "<p>Questi cookie sono necessari per il corretto funzionamento del sito web e non possono essere disattivati. Sono utili per operazioni come l'accesso e l'impostazione delle preferenze sulla privacy.</p>",
      required: true,
      onAccept: function() {
        console.log('Add logic for the required Necessari here');
      }
    },
    {
      id: "analytics",
      name: "Analytics",
      description: "<p>Questi cookie ci aiutano a migliorare il sito monitorando quali sono le pagine più popolari e come i visitatori si muovono nel sito.</p>",
      required: false,
      onAccept: function() {
        gtag('consent', 'update', {
          analytics_storage: 'granted',
        });
        dataLayer.push({
          'event': 'consent_accepted_analytics',
        });
      },
      onReject: function() {
        gtag('consent', 'update', {
          analytics_storage: 'denied',
        });
      }
    },
    {
      id: "pubblicit",
      name: "Pubblicità",
      description: "<p>Questi cookie forniscono funzionalità aggiuntive e personalizzazioni per migliorare la tua esperienza. Possono essere impostati da noi o dai partner di cui utilizziamo i servizi.</p>",
      required: false,
      onAccept: function() {
        gtag('consent', 'update', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
        });
        dataLayer.push({
          'event': 'consent_accepted_pubblicit',
        });
      },
      onReject: function() {
        gtag('consent', 'update', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
        });
      }
    }
  ],
  text: {
    banner: {
      description: "<p>Utilizziamo i cookie sul nostro sito per migliorare la tua esperienza utente, fornire contenuti personalizzati e analizzare il nostro traffico. <a href=\"https://gicall.it/cookie-policy\" target=\"_blank\">Cookie Policy.</a></p>",
      acceptAllButtonText: "Accetta",
      acceptAllButtonAccessibleLabel: "Accetta tutti i cookie",
      rejectNonEssentialButtonText: "Rifiuta",
      rejectNonEssentialButtonAccessibleLabel: "Rifiuta i cookie non necessari",
      preferencesButtonText: "Personalizza",
      preferencesButtonAccessibleLabel: "Personalizza"
    },
    preferences: {
      title: "Personalizza le tue preferenze sui cookie",
      description: "<p>Rispettiamo il tuo diritto alla privacy. Puoi scegliere di non consentire alcuni tipi di cookie. Le tue preferenze sui cookie saranno applicate a tutto il nostro sito web.</p>",
      creditLinkText: "Crea il tuo banner",
      creditLinkAccessibleLabel: ""
    }
  },
  position: {
    banner: "bottomCenter"
  }
});
</script>
