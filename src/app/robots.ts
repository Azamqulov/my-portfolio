import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: [
          "/",
          "/favicon.ico",
          "/icon.png",
          "/apple-icon.png",
          "/images/",
          "/_next/image",
          "/*.ico",
          "/*.png",
          "/*.jpg",
          "/*.jpeg",
          "/*.webp",
          "/*.svg",
        ],
      },
    ],
    sitemap: [
      "https://azamqulov.com/sitemap.xml",
      "https://azamqulov.com/image-sitemap.xml",
    ],
    host: "https://azamqulov.com",
  };
}
