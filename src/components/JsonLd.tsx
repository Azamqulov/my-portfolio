import React from "react";
import { FEATURED_PROJECTS, SHOWCASE_PROJECTS, PERSONAL_INFO } from "@/data/portfolioData";

export const JsonLd: React.FC = () => {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Primary Person Entity (Google Knowledge Panel & Search Image)
      {
        "@type": "Person",
        "@id": "https://azamqulov.com/#person",
        name: "Azamqulov Musurmon",
        givenName: "Musurmon",
        familyName: "Azamqulov",
        additionalName: "Musurmon",
        alternateName: [
          "Musurmon Azamqulov",
          "Azamqulov",
          "Musurmon",
          "Musurmon_dev",
          "Azamqulov Musurmon Web Developer",
          "Azamqulov Musurmon Frontend Developer",
          "Musurmon Dasturchi",
          "Azamqulov Dasturchi",
          "Musurmon Azamqulov Toshkent",
        ],
        url: "https://azamqulov.com/",
        image: {
          "@type": "ImageObject",
          "@id": "https://azamqulov.com/#person-image",
          url: "https://azamqulov.com/images/musurmon-portrait.jpg",
          contentUrl: "https://azamqulov.com/images/musurmon-portrait.jpg",
          thumbnailUrl: "https://azamqulov.com/images/musurmon-portrait.jpg",
          name: "Azamqulov Musurmon",
          caption: "Azamqulov Musurmon — Web Developer & Frontend Dasturchi",
          description:
            "Azamqulov Musurmon shaxsiy fotosurati va professional portreti. O'zbekistonlik Web Developer va Frontend dasturchi.",
          representativeOfPage: true,
          width: 800,
          height: 1067,
          encodingFormat: "image/jpeg",
          author: {
            "@id": "https://azamqulov.com/#person",
          },
        },
        jobTitle: "Web Developer & Frontend Dasturchi",
        description:
          "Azamqulov Musurmon — O'zbekistonlik professional Web Developer va Frontend Dasturchi. Zamonaviy web-ilovalar, React, Next.js, Vue.js, yuqori yuklanishli biznes tizimlari mutaxassisi. Bog'lanish: Telegram @Musurmon_dev (https://t.me/Musurmon_dev), Email: azamqulov0102@gmail.com, Tel: +998 77 040 46 24.",
        email: `mailto:${PERSONAL_INFO.contacts.email}`,
        telephone: PERSONAL_INFO.phone,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service & direct inquiries",
            email: PERSONAL_INFO.contacts.email,
            telephone: PERSONAL_INFO.phone,
            url: PERSONAL_INFO.contacts.telegramUrl,
            availableLanguage: ["Uzbek", "Russian", "English"],
          },
        ],
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

      // 2. Standalone ImageObject Entity for Google Images Search
      {
        "@type": "ImageObject",
        "@id": "https://azamqulov.com/#musurmon-portrait",
        name: "Azamqulov Musurmon fotosurati",
        alternateName: [
          "Musurmon Azamqulov",
          "Azamqulov Musurmon",
          "Azamqulov Musurmon rasmi",
          "Musurmon Azamqulov photo",
          "Azamqulov Musurmon portreti",
        ],
        contentUrl: "https://azamqulov.com/images/musurmon-portrait.jpg",
        thumbnailUrl: "https://azamqulov.com/images/musurmon-portrait.jpg",
        caption: "Azamqulov Musurmon — Web Developer, Frontend Dasturchi",
        description:
          "Azamqulov Musurmon (Musurmon Azamqulov) professional portreti. Veb-dasturchi va frontend mutaxassisi.",
        width: 800,
        height: 1067,
        encodingFormat: "image/jpeg",
        representativeOfPage: true,
        about: {
          "@id": "https://azamqulov.com/#person",
        },
        creator: {
          "@id": "https://azamqulov.com/#person",
        },
        copyrightHolder: {
          "@id": "https://azamqulov.com/#person",
        },
        inLanguage: "uz-UZ",
      },

      // 3. WebSite Entity
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
        primaryImageOfPage: {
          "@id": "https://azamqulov.com/#person-image",
        },
        inLanguage: ["uz-UZ", "en-US", "ru-RU"],
      },

      // 4. ProfilePage Entity
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
        primaryImageOfPage: {
          "@id": "https://azamqulov.com/#person-image",
        },
        breadcrumb: {
          "@id": "https://azamqulov.com/#breadcrumb",
        },
      },

      // 5. ProfessionalService Entity (Uzbekistan Local Business / Tech Services)
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

      // 6. BreadcrumbList Entity
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

      // 7. ItemList for Flagship Projects
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
