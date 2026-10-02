# 📜 GOLDEN RULES — Azamqulov Musurmon Portfolio

## 1. Project Overview & Tech Stack
- **Egasining ismi:** Azamqulov Musurmon (Xo'jayin)
- **Roli:** Web Developer & Frontend Dasturchi
- **Platforma:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion
- **Dizayn standarti:** Dark-first (#080B12), Electric sky/blue gradient (#38BDF8 → #3B82F6 → #6366F1), Bento Grid, Glassmorphism, 3D tilt, Awwwards-tier micro-interactions.

## 2. Core Architecture
- `src/app/`: Next.js App Router (Layout, Page, Favicon, Metadata, Viewport, robots.ts, sitemap.ts)
- `src/components/`:
  - `Navbar.tsx`: Floating glassmorphic header with active section tracking, direct CV download (`Musurmon Azamqulov - Professional Resume.pdf`), dark/light mode toggle & mobile drawer
  - `Logo.tsx`: Brand logo combining pure vector triangular M mark and typography
  - `MusurmonIcon.tsx`: Standalone authentic triangular M vector monogram with electric gradient & smooth hover transitions
  - `Hero.tsx`: Dynamic typewriter headline, rotating roles ticker, stats count-up cards, magnetic CTAs
  - `DeveloperWorkspace.tsx`: Linear/Raycast style interactive glassmorphic code studio with character typewriter code typing, auto-advance tab rotation (Hero.tsx → api.ts → config.ts), pause-on-hover, copy code, and test runner simulation
  - `About.tsx`: Bio, vision, tech stack, and interactive 3D luxury developer portrait card with mouse parallax, verified badge, brand monogram plate, and live status
  - `Skills.tsx`: Categorized skill bento grid with modern icons & hover glow, wrapped in fluid AOS reveals
  - `FeaturedProjects.tsx`: 6 flagship projects in interactive bento layout with live preview modals and keyboard accessibility
  - `AllProjects.tsx`: Filterable archive showcase (All, AI, Web/SaaS, Desktop, Bots, EdTech) with real-time search and smooth layout transitions
  - `Services.tsx`: 4 core services cards with custom icons and spring hover scale
  - `Contact.tsx`: Interactive contact form, direct Telegram Bot card (@azamqulovService_bot), Email, Phone, Location cards, direct Telegram group delivery integration, confetti trigger
  - `api/contact/route.ts`: Secure backend route sending contact inquiries directly to Telegram group (-4917241703) via @azamqulovService_bot with fast IPv4 HTTPS client and HTML message formatting
  - `Aos.tsx`: Reusable Animate-On-Scroll (AOS) wrapper (`<Aos>`, `<AosContainer>`, `<AosItem>`) built on Framer Motion with fluid 60fps viewport triggers
  - `ScrollProgress.tsx`: Smooth spring-based scroll progress reading bar matching brand gradient
  - `CursorGlow.tsx`: Smooth desktop mouse cursor glow follower
  - `BackgroundCanvas.tsx`: Interactive starfield / mesh grid canvas
  - `JsonLd.tsx`: Full Schema.org `@graph` structured data (Person, WebSite, ProfilePage, ProfessionalService, Breadcrumbs, ItemList)
- `public/`: High-res transparent PNGs, adaptive SVG favicons, og-image, and site.webmanifest.
- `src/data/`: Structured TypeScript data for projects, skills, and stats (`portfolioData.ts`).
- `src/lib/`: Utilities (`cn`, formatting, theme helper).

## 3. SEO & Entity Identity Architecture
- **Canonical Domain:** `https://azamqulov.com/` (strict non-duplicate canonicalization)
- **Brand Identity:** Azamqulov Musurmon — Web Developer & Frontend Dasturchi
- **Target Keywords (High Intent):**
  - Azamqulov Musurmon, Musurmon Azamqulov, Azamqulov, azamqulov.com
  - Web Developer, Frontend Developer, Frontend Dasturchi, Full-Stack Developer Uzbekistan
  - Web Developer Toshkent, Dasturchi Toshkent, Sayt yaratish Toshkent, Veb sayt buyurtma qilish
  - React Developer, Next.js Developer, Vue.js Developer, TypeScript Developer, Tailwind CSS
  - CRM tizimlar yaratish, Telegram bot dasturlash, Responsive Web Design
- **Verified Entity Socials (`sameAs`):**
  - Telegram: `https://t.me/Musurmon_dev`
  - GitHub: `https://github.com/Azamqulov`
  - Instagram: `https://www.instagram.com/azamqulov.11/`
  - LinkedIn: `https://www.linkedin.com/in/azamqulov`
  - YouTube: `https://youtube.com/@azamqulov`
- **Schema.org JSON-LD Graph:**
  - `Person`: name, jobTitle, address in Tashkent, Uzbekistan, telephone, email, sameAs, knowsAbout
  - `WebSite`: publisher, inLanguage (uz, en, ru)
  - `ProfilePage`: mainEntity pointing to #person
  - `ProfessionalService`: localized Uzbekistan software development service, priceRange ($$), payment methods (Payme, Click, Bank)
  - `BreadcrumbList`: 5-step site breadcrumb navigation
  - `ItemList`: SoftwareApplication items for flagship projects
- **Dynamic Crawl Assets:**
  - `src/app/sitemap.ts`: Dynamic XML sitemap with sections and weekly/monthly change frequencies
  - `src/app/robots.ts`: Clean allow/disallow rules, sitemap reference, host declaration
  - `public/site.webmanifest`: PWA manifest with multi-size maskable icons
  - Semantic HTML5: `main`, `header`, `section`, `article`, `footer`, unique IDs, single `<h1>` hierarchy

## 4. AOS & Animation Standards
- All section headings and card grids trigger via Framer Motion viewport triggers (`viewport: { once: true, amount: 0.15 }`).
- Card collections stagger with `0.08s` delays to give a cinematic cascaded entrance.
- Directional entrances: left column slides `fade-right`, right column slides `fade-left`, cards glide `fade-up`.
- Clamped travel distances (`28-32px`) to eliminate any mobile horizontal overflow or scrollbar jitter.

## 5. Quality & Verification Gates
- Clean TypeScript code (zero `any` types, `npx tsc --noEmit` passing with 0 errors)
- Mobile-first responsive design across all devices (320px to 4K)
- Zero console errors / warnings
- Fully verified runtime (HTTP 200 on `/`, `/robots.txt`, `/sitemap.xml`, `/site.webmanifest`)
