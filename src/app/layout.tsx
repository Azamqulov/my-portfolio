import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/CursorGlow";
import { BackgroundCanvas } from "@/components/BackgroundCanvas";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";
import { JsonLd } from "@/components/JsonLd";

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#080B12" },
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
    type: "website",
    locale: "uz_UZ",
    alternateLocale: ["en_US", "ru_RU"],
    url: "https://azamqulov.com",
    title: "Azamqulov Musurmon — Web Developer & Frontend Dasturchi | Portfolio",
    description:
      "Azamqulov Musurmon — O'zbekistonlik professional Web Developer va Frontend Dasturchi. Zamonaviy web-ilovalar, React, Next.js, Vue.js va biznes tizimlari.",
    siteName: "Azamqulov Musurmon Portfolio",
    images: [
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
    images: ["https://azamqulov.com/og-image.png"],
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
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased relative min-h-screen transition-colors duration-300`}
      >
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ScrollProgress />
          <BackgroundCanvas />
          <CursorGlow />
          <div className="relative z-10 flex min-h-screen flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
