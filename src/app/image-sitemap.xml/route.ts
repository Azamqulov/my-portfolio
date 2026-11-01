import { NextResponse } from "next/server";

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://azamqulov.com/</loc>
    <image:image>
      <image:loc>https://azamqulov.com/images/musurmon-portrait.jpg</image:loc>
      <image:title>Azamqulov Musurmon — Web Developer &amp; Frontend Dasturchi</image:title>
      <image:caption>Azamqulov Musurmon (Musurmon Azamqulov) professional portreti va rasmiy fotosurati. O'zbekistonlik dasturchi.</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://azamqulov.com/musurmon.jpg</image:loc>
      <image:title>Musurmon Azamqulov</image:title>
      <image:caption>Azamqulov Musurmon rasmiy fotosurati</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://azamqulov.com/og-image.png</image:loc>
      <image:title>Azamqulov Musurmon Portfolio</image:title>
      <image:caption>Azamqulov Musurmon shaxsiy portfoliosi</image:caption>
    </image:image>
  </url>
  <url>
    <loc>https://azamqulov.com/#about</loc>
    <image:image>
      <image:loc>https://azamqulov.com/images/musurmon-portrait.jpg</image:loc>
      <image:title>Azamqulov Musurmon shaxsiy portreti</image:title>
      <image:caption>Azamqulov Musurmon (Musurmon Azamqulov) — Men haqimda bo'limidagi rasmiy surat</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://azamqulov.com/musurmon.jpg</image:loc>
      <image:title>Azamqulov Musurmon fotosurati</image:title>
      <image:caption>Azamqulov Musurmon dasturchi portreti</image:caption>
    </image:image>
  </url>
  <url>
    <loc>https://azamqulov.com/#projects</loc>
    <image:image>
      <image:loc>https://azamqulov.com/images/project-ecommerce.jpg</image:loc>
      <image:title>Azamqulov Musurmon — E-Commerce loyihasi</image:title>
      <image:caption>Azamqulov Musurmon tomonidan qurilgan do'kon tizimi</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://azamqulov.com/images/project-taskmanager.jpg</image:loc>
      <image:title>Azamqulov Musurmon — Task Manager loyihasi</image:title>
      <image:caption>Azamqulov Musurmon tomonidan yaratilgan vazifalar tizimi</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://azamqulov.com/images/project-salom.jpg</image:loc>
      <image:title>Azamqulov Musurmon — Salom.uz loyihasi</image:title>
      <image:caption>Azamqulov Musurmon tomonidan yaratilgan boshqaruv paneli</image:caption>
    </image:image>
  </url>
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
