export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://alsterfacility.de/#business",
    name: "Alsterfacility e.K.",
    description:
      "Professionelle Gebäudereinigung in Hamburg. Schnell. Sauber. Verlässlich.",
    url: "https://alsterfacility.de",
    telephone: "+494012345678",
    email: "info@alsterfacility.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Musterstraße 123",
      addressLocality: "Hamburg",
      postalCode: "20095",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "53.5511",
      longitude: "9.9937",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "€€",
    image: "https://alsterfacility.de/og-image.jpg",
    sameAs: [
      // Social media profiles can be added here
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "53.5511",
        longitude: "9.9937",
      },
      geoRadius: "50000",
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://alsterfacility.de/#organization",
    name: "Alsterfacility e.K.",
    legalName: "Alsterfacility e.K.",
    url: "https://alsterfacility.de",
    logo: "https://alsterfacility.de/logo.png",
    foundingDate: "2008",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+494012345678",
      contactType: "customer service",
      email: "info@alsterfacility.de",
      availableLanguage: ["de"],
      areaServed: "DE",
    },
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@type": "LocalBusiness",
      name: "Alsterfacility e.K.",
      url: "https://alsterfacility.de",
    },
    areaServed: {
      "@type": "City",
      name: "Hamburg",
    },
    description: service.description,
    url: service.url,
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
