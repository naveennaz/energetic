export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Energetic Contracting LLC",
    "image": "https://energetic.ae/images/logo.png",
    "@id": "https://energetic.ae",
    "url": "https://energetic.ae",
    "telephone": "+971567945533",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Abu Dhabi",
      "addressLocality": "Abu Dhabi",
      "addressRegion": "Abu Dhabi",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.4539,
      "longitude": 54.3773
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/energeticllc",
      "https://www.linkedin.com/company/energtic",
      "https://wa.me/971567945533"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Commercial Gym Equipment",
    "description": "Premium gym equipment for commercial gyms, corporate fitness centers, and home gyms in Abu Dhabi, UAE. Professional installation and maintenance services.",
    "brand": {
      "@type": "Brand",
      "name": "Energetic Contracting LLC"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "AED",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Energetic Contracting LLC"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Abu Dhabi",
      "containedIn": {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
