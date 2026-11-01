import type { Metadata, Viewport } from "next";
import { Unbounded, Onest, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/CursorGlow";
import { BackgroundCanvas } from "@/components/BackgroundCanvas";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import { JsonLd } from "@/components/JsonLd";

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F8F6" },
    { media: "(prefers-color-scheme: dark)", color: "#060B08" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://azamqulov.com"),
  alternates: {
    canonical: "https://azamqulov.com",
    languages: {
      "uz-UZ": "https://azamqulov.com",
      "en-US": "https://azamqulov.com",
      "x-default": "https://azamqulov.com",
    },
  },
  title: {
    default: "Azamqulov Musurmon — Web Developer & Frontend Dasturchi | Portfolio",
    template: "%s | Azamqulov Musurmon",
  },
  description:
    "Azamqulov Musurmon — O'zbekistonlik professional Web Developer va Frontend Dasturchi. Zamonaviy web-ilovalar, React, Next.js, Vue.js, yuqori tezlikdagi CRM va biznes tizimlari yaratish bo'yicha mutaxassis.",
  keywords: [
    "Azamqulov Musurmon",
    "Musurmon Azamqulov",
    "Azamqulov",
    "azamqulov.com",
    "Azamqulov Musurmon Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Frontend Dasturchi",
    "Full-Stack Developer Uzbekistan",
    "Web Developer Toshkent",
    "Dasturchi Toshkent",
    "Sayt yaratish Toshkent",
    "Veb sayt buyurtma qilish",
    "React Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "TypeScript Developer",
    "JavaScript Dasturchi",
    "Tailwind CSS",
    "CRM tizimlar yaratish",
    "Telegram bot dasturlash",
    "Responsive Web Design",
    "Clean Code",
    "UI/UX Design",
  ],
  authors: [{ name: "Azamqulov Musurmon", url: "https://azamqulov.com" }],
  creator: "Azamqulov Musurmon",
  publisher: "Azamqulov Musurmon",
  category: "Technology & Software Engineering",
  classification: "Web Development Portfolio",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "profile",
    firstName: "Musurmon",
    lastName: "Azamqulov",
    username: "Musurmon_dev",
    gender: "male",
    locale: "uz_UZ",
    alternateLocale: ["en_US", "ru_RU"],
    url: "https://azamqulov.com",
    title: "Azamqulov Musurmon — Web Developer & Frontend Dasturchi | Portfolio",
    description:
      "Azamqulov Musurmon — O'zbekistonlik professional Web Developer va Frontend Dasturchi. Zamonaviy web-ilovalar, React, Next.js, Vue.js va biznes tizimlari.",
    siteName: "Azamqulov Musurmon Portfolio",
    images: [
      {
        url: "https://azamqulov.com/images/musurmon-portrait.jpg",
        width: 800,
        height: 1067,
        alt: "Azamqulov Musurmon (Musurmon Azamqulov) — Web Developer rasmiy fotosurati va portreti",
        type: "image/jpeg",
      },
      {
        url: "https://azamqulov.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Azamqulov Musurmon — Web Developer & Frontend Dasturchi Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azamqulov Musurmon — Web Developer & Frontend Dasturchi | Portfolio",
    description:
      "Azamqulov Musurmon — O'zbekistonlik professional Web Developer va Frontend Dasturchi. Zamonaviy web-ilovalar, React, Next.js, Vue.js va biznes tizimlari.",
    images: [
      "https://azamqulov.com/images/musurmon-portrait.jpg",
      "https://azamqulov.com/og-image.png",
    ],
    site: "@Musurmon_dev",
    creator: "@Musurmon_dev",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${onest.variable} ${unbounded.variable} ${jetbrainsMono.variable} font-sans antialiased relative min-h-screen transition-colors duration-300 selection:bg-emerald-500 selection:text-white`}
      >
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <ScrollProgress />
            <BackgroundCanvas />
            {/* Ambient cyber light orbs & grid with GPU composited layer */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden gpu-layer">
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-b from-emerald-600/12 via-teal-700/5 to-transparent rounded-full blur-[80px] dark:from-emerald-500/15 dark:via-green-900/10 dark:opacity-80 will-change-transform" />
              <div className="absolute top-[45%] -left-48 w-[550px] h-[550px] bg-gradient-to-tr from-green-600/12 via-emerald-500/5 to-transparent rounded-full blur-[90px] dark:from-green-600/10 dark:opacity-60 will-change-transform" />
              <div className="absolute bottom-10 -right-48 w-[600px] h-[600px] bg-gradient-to-bl from-forest/15 via-emerald-800/8 to-transparent rounded-full blur-[90px] dark:from-emerald-900/20 dark:opacity-60 will-change-transform" />
              <div className="absolute inset-0 bg-grid-cyber opacity-70 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <CursorGlow />
            <div className="relative z-10 flex min-h-screen flex-col">
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
