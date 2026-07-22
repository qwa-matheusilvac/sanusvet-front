import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";

import { siteConfig } from "@/components/site-data";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Sanus Vet | Clínica Veterinária 24 Horas em São Caetano do Sul",
    template: "%s | Sanus Vet",
  },
  applicationName: siteConfig.name,
  description:
    "A Sanus Vet é sua clínica veterinária de referência 24 horas em São Caetano do Sul. Equipe especializada, tecnologia de ponta e cuidado integral para seu pet.",
  category: "Saúde animal",
  classification: "Clínica veterinária",
  referrer: "origin-when-cross-origin",
  keywords: [
    "clínica veterinária São Caetano do Sul",
    "veterinário 24h São Caetano",
    "emergência veterinária São Caetano do Sul",
    "veterinário especialista",
    "exames veterinários",
    "cirurgia veterinária",
    "Sanus Vet",
    "Saúde Animal",
    "vacinação pet",
    "consultas veterinárias",
    "raio-x pet",
    "ultrassom pet",
  ],
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: [
      { url: "/image_0.png", type: "image/png" },
      { url: "/image_0.png", rel: "shortcut icon", type: "image/png" },
    ],
    apple: [{ url: "/image_0.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: siteConfig.name,
    title: "Sanus Vet | Clínica Veterinária 24 Horas em São Caetano do Sul",
    description:
      "Clínica veterinária 24 horas em São Caetano do Sul com equipe especializada, exames, cirurgias e atendimento humanizado para seu pet.",
    images: [
      {
        url: "/og-sanusvet.svg",
        width: 1200,
        height: 630,
        alt: "Sanus Vet - Clínica Veterinária 24 Horas em São Caetano do Sul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanus Vet | Clínica Veterinária 24 Horas em São Caetano do Sul",
    description:
      "Equipe especializada, tecnologia de ponta e atendimento veterinário 24 horas em São Caetano do Sul.",
    images: ["/og-sanusvet.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {siteConfig.googleAnalyticsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.googleAnalyticsId}');
              `}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
