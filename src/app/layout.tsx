import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/CursorGlow";
import { BackgroundCanvas } from "@/components/BackgroundCanvas";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Azamqulov Musurmon | Full-Stack Developer & AI Product Builder",
  description:
    "Azamqulov Musurmon (Xo'jayin) — Full-Stack Developer va AI Product Builder. Multi-tenant SaaS (Boshqar.uz), Local-First AI (Jarvis AI), Tauri 2 desktop dasturlar va zamonaviy veb ilovalar portfeli.",
  keywords: [
    "Azamqulov Musurmon",
    "Musurmon_dev",
    "Full-Stack Developer",
    "AI Product Builder",
    "Next.js Developer Uzbekistan",
    "Tauri 2 Rust",
    "Boshqar.uz",
    "Jarvis AI",
    "Telegram Bot",
    "NestJS",
    "Vue 3",
  ],
  authors: [{ name: "Azamqulov Musurmon", url: "https://t.me/Musurmon_dev" }],
  creator: "Azamqulov Musurmon",
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://musurmon.dev",
    title: "Azamqulov Musurmon | Full-Stack Developer & AI Product Builder",
    description:
      "SaaS tizimlar, Local-First AI desktop dasturlar va avtomatlashtirilgan platformalar quruvchi dasturchi portfeli.",
    siteName: "Musurmon Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azamqulov Musurmon | Full-Stack Developer & AI Product Builder",
    description:
      "Full-Stack Developer & AI Product Builder portfolio website.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#0A0A0B] text-slate-100 selection:bg-brand-teal selection:text-black antialiased relative min-h-screen`}
      >
        <BackgroundCanvas />
        <CursorGlow />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
