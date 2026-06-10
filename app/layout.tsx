import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hospitalsanusvet.com.br/"),
  title: "Sanus Vet | Clínica Veterinária 24 Horas em São Caetano do Sul",
  description:
    "A Sanus Vet é sua clínica veterinária de referência 24 horas em São Caetano do Sul. Equipe especializada, tecnologia de ponta e cuidado integral para seu pet.",
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
  alternates: {
    canonical: "https://www.hospitalsanusvet.com.br/",
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
    url: "https://www.hospitalsanusvet.com.br/",
    siteName: "Sanus Vet",
    title: "Sanus Vet | Clínica Veterinária 24 Horas em São Caetano do Sul",
    description:
      "Clínica veterinária 24 horas em São Caetano do Sul com equipe especializada, exames, cirurgias e atendimento humanizado para seu pet.",
    images: [
      {
        url: "/image_0.png",
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
        {children}
      </body>
    </html>
  );
}
