# 📜 GOLDEN RULES — Azamqulov Musurmon Portfolio

## 1. Project Overview & Tech Stack
- **Egasining ismi:** Azamqulov Musurmon (Xo'jayin)
- **Roli:** Full-Stack Developer & AI Product Builder
- **Platforma:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion
- **Dizayn standarti:** Dark-first (#0A0A0B), Electric gradient (#00D9C0 → #6366F1), Bento Grid, Glassmorphism, 3D tilt, Awwwards-tier micro-interactions.

## 2. Core Architecture
- `src/app/`: Next.js App Router (Layout, Page, Favicon, Metadata, Viewport)
- `src/components/`:
  - `Navbar.tsx`: Floating glassmorphic header with dark/light mode toggle & mobile drawer
  - `Hero.tsx`: Dynamic typewriter headline, particle canvas background, count-up stats, magnetic CTAs
  - `About.tsx`: Bio, vision, tech philosophy, and 4 core engineering pillars
  - `Skills.tsx`: Categorized skill bento grid with modern icons & hover glow
  - `FeaturedProjects.tsx`: 5 flagship projects in interactive bento layout (Boshqar.uz, Jarvis AI, Uzum AI, ThumbAI, IconForge)
  - `AllProjects.tsx`: Filterable showcase (All, AI, Web/SaaS, Desktop, Bots, EdTech) with smooth animations
  - `Process.tsx`: 5-step engineering and AI product development approach
  - `Contact.tsx`: Interactive contact form, direct copy links (Telegram, GitHub, Email), confetti trigger
  - `Footer.tsx`: Rich footer with live Uzbekistan time, social links, status
  - `CursorGlow.tsx`: Smooth cursor glow follower
  - `BackgroundCanvas.tsx`: Interactive starfield / mesh grid canvas
- `src/data/`: Structured TypeScript data for projects, skills, and stats.
- `src/lib/`: Utilities (`cn`, formatting, theme helper).

## 3. Quality & Verification Gates
- Clean TypeScript code (zero `any` types)
- Mobile-first responsive design across all devices (320px to 4K)
- Zero console errors / warnings
- Fully verified via `npm run build`
