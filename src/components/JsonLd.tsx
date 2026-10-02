import React from "react";
import { FEATURED_PROJECTS, SHOWCASE_PROJECTS, PERSONAL_INFO } from "@/data/portfolioData";

export const JsonLd: React.FC = () => {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Person Entity
      {
        "@type": "Person",
        "@id": "https://azamqulov.com/#person",
        name: "Azamqulov Musurmon",
        givenName: "Musurmon",
        familyName: "Azamqulov",
        alternateName: [
          "Musurmon Azamqulov",
          "Azamqulov",
          "Musurmon_dev",
          "Azamqulov Musurmon Web Developer",
          "Azamqulov Musurmon Frontend Developer",
          "Musurmon Dasturchi",
        ],
        url: "https://azamqulov.com/",
        image: {
          "@type": "ImageObject",
          "@id": "https://azamqulov.com/#person-image",
          url: "https://azamqulov.com/og-image.png",
          caption: "Azamqulov Musurmon",
        },
        jobTitle: "Web Developer & Frontend Dasturchi",
        description:
          "Azamqulov Musurmon — O'zbekistonlik professional Web Developer va Frontend Dasturchi. Zamonaviy web-ilovalar, React, Next.js, Vue.js, yuqori yuklanishli tizimlar va toza arxitektura mutaxassisi.",
        email: `mailto:${PERSONAL_INFO.contacts.email}`,
        telephone: PERSONAL_INFO.phone,
        nationality: {
          "@type": "Country",
          name: "Uzbekistan",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "UZ",
          addressLocality: "Toshkent",
          addressRegion: "Toshkent shahri",
        },
        sameAs: [
          PERSONAL_INFO.contacts.telegramUrl,
          PERSONAL_INFO.contacts.githubUrl,
          PERSONAL_INFO.contacts.instagramUrl,
          PERSONAL_INFO.contacts.linkedinUrl,
          PERSONAL_INFO.contacts.youtubeUrl,
        ],
        knowsAbout: [
          "Web Development",
          "Frontend Engineering",
          "Full-Stack Development",
          "JavaScript",
          "TypeScript",
          "React.js",
          "Next.js",
          "Vue.js",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Node.js",
          "REST APIs",
          "Framer Motion",
          "Web Performance Optimization",
          "Search Engine Optimization (SEO)",
          "UI/UX Design",
          "Telegram Bot Development",
          "CRM Systems",
          "Responsive Design",
        ],
      },

      // 2. WebSite Entity
      {
        "@type": "WebSite",
        "@id": "https://azamqulov.com/#website",
        url: "https://azamqulov.com/",
        name: "Azamqulov Musurmon — Web Developer & Frontend Dasturchi | Portfolio",
        alternateName: "Azamqulov Musurmon Portfolio",
        description:
          "Azamqulov Musurmon — Web Developer va Frontend Dasturchining rasmiy portfolio veb-sayti. Bajarilgan loyihalar, texnologiyalar va professional xizmatlar.",
        publisher: {
          "@id": "https://azamqulov.com/#person",
        },
        inLanguage: ["uz-UZ", "en-US", "ru-RU"],
      },

      // 3. ProfilePage Entity
      {
        "@type": "ProfilePage",
        "@id": "https://azamqulov.com/#profilepage",
        url: "https://azamqulov.com/",
        name: "Azamqulov Musurmon — Web Developer Portfolio",
        isPartOf: {
          "@id": "https://azamqulov.com/#website",
        },
        about: {
          "@id": "https://azamqulov.com/#person",
        },
        mainEntity: {
          "@id": "https://azamqulov.com/#person",
        },
        breadcrumb: {
          "@id": "https://azamqulov.com/#breadcrumb",
        },
      },

      // 4. ProfessionalService Entity (Uzbekistan Local Business / Tech Services)
      {
        "@type": "ProfessionalService",
        "@id": "https://azamqulov.com/#service",
        name: "Azamqulov Musurmon — Web Dasturlash va Frontend Xizmatlari",
        description:
          "Yuqori tezlikdagi zamonaviy web-saytlar, veb-ilovalar, CRM tizimlar va Telegram botlar ishlab chiqish xizmati.",
        url: "https://azamqulov.com/",
        provider: {
          "@id": "https://azamqulov.com/#person",
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Uzbekistan",
          },
          {
            "@type": "City",
            name: "Tashkent",
          },
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "UZ",
          addressLocality: "Toshkent",
        },
        telephone: PERSONAL_INFO.phone,
        priceRange: "$$",
        currenciesAccepted: "UZS, USD",
        paymentAccepted: "Payme, Click, Bank Transfer, Cash",
        openingHours: "Mo-Sa 09:00-19:00",
      },

      // 5. BreadcrumbList Entity
      {
        "@type": "BreadcrumbList",
        "@id": "https://azamqulov.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Bosh sahifa",
            item: "https://azamqulov.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Loyihalar",
            item: "https://azamqulov.com/#projects",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Xizmatlar",
            item: "https://azamqulov.com/#services",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Men haqimda",
            item: "https://azamqulov.com/#about",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Bog'lanish",
            item: "https://azamqulov.com/#contact",
          },
        ],
      },

      // 6. ItemList for Flagship Projects
      {
        "@type": "ItemList",
        "@id": "https://azamqulov.com/#projects-list",
        name: "Azamqulov Musurmon Portfolio Loyihalari",
        itemListElement: SHOWCASE_PROJECTS.map((proj, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          item: {
            "@type": "SoftwareApplication",
            name: proj.title,
            description: proj.description,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Cross-platform, Mobile",
            author: {
              "@id": "https://azamqulov.com/#person",
            },
            keywords: proj.tags.join(", "),
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
};
