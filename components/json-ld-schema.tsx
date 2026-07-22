import { faqItems, medicalSpecialties, siteConfig } from "./site-data";

export function JSONLDSchema() {
  const streetAddress = siteConfig.addressLine.replace(/^Endereço:\s*/i, "");
  const hasValidGeo =
    !siteConfig.latitude.includes("LAT_COORD") &&
    !siteConfig.longitude.includes("LON_COORD");
  const hasValidCnpj = siteConfig.cnpj !== "00.000.000/0001-00";

  const veterinaryCareSchema = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: siteConfig.name,
    alternateName: siteConfig.legalName,
    image: `${siteConfig.url}/og-sanusvet.svg`,
    description: siteConfig.clinicDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.country,
    },
    ...(hasValidGeo
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: siteConfig.latitude,
            longitude: siteConfig.longitude,
          },
        }
      : {}),
    url: siteConfig.url,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    sameAs: [siteConfig.instagramUrl],
    ...(hasValidCnpj ? { taxID: siteConfig.cnpj } : {}),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    medicalSpecialty: medicalSpecialties,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneRaw,
        contactType: "customer service",
        availableLanguage: ["pt-BR"],
      },
      {
        "@type": "ContactPoint",
        telephone: `+${siteConfig.whatsappRaw}`,
        contactType: "WhatsApp",
        availableLanguage: ["pt-BR"],
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "pt-BR",
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const schema = [websiteSchema, veterinaryCareSchema, faqSchema];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
