import { Inter } from "next/font/google"; // Using Inter as per legacy design
import "./globals.css";
import Header from "../components/Header";
import MainWrapper from "../components/MainWrapper";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import StructuredData from "../components/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import Script from "next/script";

// Configure Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  ...buildMetadata({
    title: "Gicall - Infissi e Serramenti di Qualità",
    description: "Produzione e installazione di serramenti in PVC, Alluminio e Legno. Made in Italy. Showroom a Roma e Orvieto.",
    keywords: "Infissi, Serramenti, Finestre PVC, Finestre Alluminio, Roma, Orvieto",
    path: "/",
  }),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/gicall_favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        <Script id="gtm-consent-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied'
            });
          `}
        </Script>
        <Script id="gtm-loader" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NQ36L337');
          `}
        </Script>
        <link
          rel="stylesheet"
          id="silktide-consent-manager-css"
          href="/cookie-banner/silktide-consent-manager.css"
        />
        <Script src="/cookie-banner/silktide-consent-manager.js" strategy="afterInteractive" />
        <Script id="silktide-consent-config" strategy="afterInteractive">
          {`
            (function initConsentManager() {
              if (typeof window === 'undefined') return;

              const safeGtag = (...args) => {
                if (typeof window.gtag === 'function') {
                  window.gtag(...args);
                }
              };
              const safeDataLayerPush = (obj) => {
                if (Array.isArray(window.dataLayer)) {
                  window.dataLayer.push(obj);
                }
              };

              const applyConfig = () => {
                const mgr = window.silktideCookieBannerManager;
                if (!mgr) {
                  setTimeout(applyConfig, 50);
                  return;
                }
                mgr.updateCookieBannerConfig({
                  background: { showBackground: false },
                  cookieIcon: { position: "bottomLeft" },
                  cookieTypes: [
                    {
                      id: "necessari",
                      name: "Necessari",
                      description: "<p>Questi cookie sono necessari per il corretto funzionamento del sito web e non possono essere disattivati. Sono utili per operazioni come l'accesso e l'impostazione delle preferenze sulla privacy.</p>",
                      required: true,
                      onAccept: function() {
                        console.log('Necessari attivi');
                      }
                    },
                    {
                      id: "analytics",
                      name: "Analytics",
                      description: "<p>Questi cookie ci aiutano a migliorare il sito monitorando quali sono le pagine più popolari e come i visitatori si muovono nel sito.</p>",
                      required: false,
                      onAccept: function() {
                        safeGtag('consent', 'update', { analytics_storage: 'granted' });
                        safeDataLayerPush({ event: 'consent_accepted_analytics' });
                      },
                      onReject: function() {
                        safeGtag('consent', 'update', { analytics_storage: 'denied' });
                      }
                    },
                    {
                      id: "pubblicit",
                      name: "Pubblicità",
                      description: "<p>Questi cookie forniscono funzionalità aggiuntive e personalizzazioni per migliorare la tua esperienza. Possono essere impostati da noi o dai partner di cui utilizziamo i servizi.</p>",
                      required: false,
                      onAccept: function() {
                        safeGtag('consent', 'update', {
                          ad_storage: 'granted',
                          ad_user_data: 'granted',
                          ad_personalization: 'granted',
                        });
                        safeDataLayerPush({ event: 'consent_accepted_pubblicit' });
                      },
                      onReject: function() {
                        safeGtag('consent', 'update', {
                          ad_storage: 'denied',
                          ad_user_data: 'denied',
                          ad_personalization: 'denied',
                        });
                      }
                    }
                  ],
                  text: {
                    banner: {
                      description: "<p>Utilizziamo i cookie sul nostro sito per migliorare la tua esperienza utente, fornire contenuti personalizzati e analizzare il nostro traffico. <a href='https://gicall.it/cookie-policy' target='_blank'>Cookie Policy.</a></p>",
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
                  position: { banner: "bottomCenter" }
                });
              };

              applyConfig();
            })();
          `}
        </Script>
      </head>
      <body className="antialiased font-sans">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQ36L337" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <SmoothScroll />
        <StructuredData />
        <Header />
        <MainWrapper>
          {children}
        </MainWrapper>
        <Footer />
      </body>
    </html>
  );
}
