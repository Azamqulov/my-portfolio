export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDetails?: string;
  tags: string[];
  techStack: string[];
  category: "all" | "ai" | "web" | "desktop" | "bot" | "edtech";
  categoryLabel: string;
  featured: boolean;
  bentoSpan?: string; // Tailwind grid span
  metrics?: { label: string; value: string }[];
  accentColor: string;
  links?: {
    demo?: string;
    github?: string;
    telegram?: string;
  };
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient", "Expert"
    highlight?: boolean;
  }[];
}

export const PERSONAL_INFO = {
  name: "Azamqulov Musurmon",
  nickname: "Xo'jayin",
  title: "Full-Stack Developer & AI Product Builder",
  location: "O'zbekiston",
  experienceYears: "2+",
  projectsCount: "15+",
  bio: `Men veb, desktop va brauzer-extension platformalarida ishlaydigan Full-Stack Developer va AI Product Builderman. 2+ yillik tajribam davomida oddiy saytlardan tortib, to'liq business-management tizimlari, LMS platformalari, AI-quvvatlantirilgan mahsulotlar va Telegram-bot avtomatizatsiyalarigacha qurganman.`,
  philosophy: `Men g'oyani ishlaydigan mahsulotga aylantirishni yaxshi ko'raman — Figma dizayndan yoki oddiy tasavvurdan boshlab, to'liq arxitektura, xavfsizlik va real foydalanuvchi tajribasiga ega tizim quraman.`,
  contacts: {
    telegram: "@Musurmon_dev",
    telegramUrl: "https://t.me/Musurmon_dev",
    github: "Azamqulov",
    githubUrl: "https://github.com/Azamqulov",
    email: "azamqulov0102@gmail.com",
    emailUrl: "mailto:azamqulov0102@gmail.com",
  },
  status: "Yangi loyihalar va AI maslahatiga ochiq",
};

export const STATS = [
  { value: "2+", label: "Yil Tajriba", description: "Veb, Desktop & AI mahsulotlar yaratishda" },
  { value: "16+", label: "Muvaffaqiyatli Loyiha", description: "SaaS, CRM, Extension va Botlar" },
  { value: "5+", label: "AI Integratsiyasi", description: "Claude, Gemini, FLUX, Ollama & Edge AI" },
  { value: "100%", label: "Ishonch & Sifat", description: "Toza arxitektura va yuqori xavfsizlik" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    iconName: "Layout",
    description: "Reaktiv, tezkor va estetik jihatdan yuqori darajadagi interfeyslar",
    skills: [
      { name: "React", level: "Expert", highlight: true },
      { name: "Vue.js 3", level: "Expert", highlight: true },
      { name: "Next.js 14", level: "Advanced", highlight: true },
      { name: "TypeScript", level: "Advanced", highlight: true },
      { name: "Tailwind CSS", level: "Expert", highlight: true },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "Vuetify 3", level: "Proficient" },
    ],
  },
  {
    title: "Desktop & Native",
    iconName: "Monitor",
    description: "Kichik o'lchamli, yuqori tezlikdagi lokal desktop ilovalar",
    skills: [
      { name: "Tauri 2", level: "Expert", highlight: true },
      { name: "Rust", level: "Proficient", highlight: true },
      { name: "SQLite", level: "Advanced", highlight: true },
      { name: "Pinia State", level: "Expert" },
      { name: "Native Windows API", level: "Proficient" },
    ],
  },
  {
    title: "Backend & Data",
    iconName: "Server",
    description: "Masshtablanuvchi API'lar, multi-tenant arxitektura va ma'lumotlar bazasi",
    skills: [
      { name: "NestJS", level: "Advanced", highlight: true },
      { name: "Prisma ORM", level: "Expert", highlight: true },
      { name: "PostgreSQL", level: "Advanced", highlight: true },
      { name: "Supabase", level: "Expert", highlight: true },
      { name: "Firebase", level: "Advanced" },
      { name: "RESTful API", level: "Expert" },
      { name: "Redis", level: "Proficient" },
    ],
  },
  {
    title: "AI & Automation",
    iconName: "BrainCircuit",
    description: "Generativ AI modellari integratsiyasi va avtomatlashtirilgan botlar",
    skills: [
      { name: "Claude API", level: "Expert", highlight: true },
      { name: "Gemini 2.0", level: "Expert", highlight: true },
      { name: "Ollama (Local AI)", level: "Advanced", highlight: true },
      { name: "Replicate (FLUX)", level: "Advanced", highlight: true },
      { name: "Python", level: "Advanced" },
      { name: "aiogram 3", level: "Expert", highlight: true },
    ],
  },
  {
    title: "Design & DevTools",
    iconName: "Palette",
    description: "Figma prototiplaridan to'liq production tizimlarigacha",
    skills: [
      { name: "Figma", level: "Advanced", highlight: true },
      { name: "Canva", level: "Advanced" },
      { name: "Git & GitHub CI", level: "Expert" },
      { name: "Chrome Extension API", level: "Advanced" },
      { name: "Three.js (Basics)", level: "Proficient" },
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "boshqar-uz",
    title: "Boshqar.uz (UBMS)",
    subtitle: "Multi-tenant SaaS ERP/POS Platform",
    description: "Kichik va o'rta bizneslar uchun to'liq boshqaruv platformasi — mahsulot, savdo (POS), ombor, mijozlar, xodimlar, tranzaksiyalar va statistikani bitta tizimda birlashtiruvchi SaaS mahsulot.",
    fullDetails: "Loyiha ustida hozirda faol ishlanmoqda: cross-tenant IDOR himoyasi, JWT xavfsizlik, brute-force preventor va AI-quvvatli Smart Product Entry (sun'iy intellekt orqali tovarlarni tezkor kiritish).",
    tags: ["SaaS", "ERP", "POS", "Multi-tenant Architecture", "Enterprise Security"],
    techStack: ["NestJS", "Prisma", "Vue 3", "Tauri (desktop)", "Telegram bot", "Redis", "PostgreSQL"],
    category: "web",
    categoryLabel: "Web & SaaS",
    featured: true,
    bentoSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    accentColor: "from-[#00D9C0] to-[#2563EB]",
    metrics: [
      { label: "Arxitektura", value: "Multi-tenant" },
      { label: "Platformalar", value: "Web + Desktop + Bot" },
      { label: "Xavfsizlik", value: "Enterprise-grade" },
    ],
    links: {
      telegram: "https://t.me/Musurmon_dev",
    },
  },
  {
    id: "jarvis-ai",
    title: "Jarvis AI",
    subtitle: "Local-First Desktop AI Agent",
    description: "Bulutga bog'liq bo'lmagan, to'liq lokal ishlaydigan Windows desktop AI assistant. Maxfiylik va tezlikni birinchi o'ringa qo'yuvchi avtonom yordamchi.",
    fullDetails: "Ollama orqali local LLM model'lar bilan ishlaydi. Chat tarixi, ilova holatini boshqarish va chuqur debug telemetriya tizimiga ega native Tauri 2 desktop dastur.",
    tags: ["Local-First AI", "Desktop App", "Privacy-First", "Offline Intelligence"],
    techStack: ["Tauri 2", "Rust", "Vue 3", "Pinia", "SQLite", "Ollama"],
    category: "desktop",
    categoryLabel: "Desktop & Native",
    featured: true,
    bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    accentColor: "from-[#6366F1] to-[#A855F7]",
    metrics: [
      { label: "Latency", value: "<15ms native" },
      { label: "Maxfiylik", value: "100% Offline" },
    ],
    links: {
      telegram: "https://t.me/Musurmon_dev",
    },
  },
  {
    id: "uzum-ai-assistant",
    title: "Uzum AI Assistant",
    subtitle: "AI-Powered Shopping Assistant (Chrome Extension)",
    description: "uzum.uz uchun Manifest V3 brauzer kengaytmasi — xarid qiluvchilarga real xulosalar va to'g'ri qaror qabul qilishda sun'iy intellekt orqali ko'maklashadi.",
    fullDetails: "Mahsulot sahifasidagi JSON-LD va Next.js hydration data'ni o'qib, Gemini AI orqali o'zbek tilida sharhlar tahlili, ijobiy/salbiy jihatlar va xarid bo'yicha mustaqil tavsiya shakllantiradi.",
    tags: ["AI", "Browser Extension", "E-commerce", "Sentiment Analysis"],
    techStack: ["Chrome Extension (Manifest V3)", "Supabase Edge Functions", "Gemini 2.0 Flash", "TypeScript"],
    category: "ai",
    categoryLabel: "AI & DevTools",
    featured: true,
    bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    accentColor: "from-[#00D9C0] to-[#06B6D4]",
    metrics: [
      { label: "Model", value: "Gemini 2.0 Flash" },
      { label: "Platforma", value: "Chrome Extension" },
    ],
    links: {
      telegram: "https://t.me/Musurmon_dev",
    },
  },
  {
    id: "thumb-ai",
    title: "ThumbAI",
    subtitle: "AI-Powered Thumbnail Designer",
    description: "YouTube va Instagram uchun professional visual preview (thumbnail) yaratuvchi aqlli dizayn generatori.",
    fullDetails: "11 bosqichli wizard orqali foydalanuvchi so'rovini professional AI-promptga aylantiradi, FLUX modeli orqali tasvir generatsiya qiladi va interaktiv canvas ustida tipografiya/effektlar bilan yakuniy dizaynni tayyorlaydi.",
    tags: ["AI", "Generative Design", "Creator Tools", "Canvas Editor"],
    techStack: ["React", "Vite", "Firebase", "Replicate (FLUX)", "react-konva"],
    category: "ai",
    categoryLabel: "AI & DevTools",
    featured: true,
    bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    accentColor: "from-[#EC4899] to-[#8B5CF6]",
    metrics: [
      { label: "Generativ AI", value: "FLUX Model" },
      { label: "Canvas", value: "Konva Editor" },
    ],
    links: {
      telegram: "https://t.me/Musurmon_dev",
    },
  },
  {
    id: "icon-forge",
    title: "IconForge",
    subtitle: "Windows Explorer Icon Customizer",
    description: "Windows papkalari uchun maxsus icon boshqaruv va tahrirlash vositasi — dasturchilar va dizaynerlar uchun yuqori unumdorlik.",
    fullDetails: "Aqlli loyiha aniqlash (package.json, Cargo.toml va h.k.) va canvas-asosli icon editor, 16px dan 256px gacha multi-resolution .ico export bilan ta'minlaydi.",
    tags: ["Developer Tools", "Desktop App", "Productivity", "System Integration"],
    techStack: ["Tauri 2", "Vue 3", "Rust", "Canvas API"],
    category: "desktop",
    categoryLabel: "Desktop & Native",
    featured: true,
    bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    accentColor: "from-[#F59E0B] to-[#EF4444]",
    metrics: [
      { label: "Ekran o'lchami", value: "16px - 256px" },
      { label: "Dvigatel", value: "Native Rust" },
    ],
    links: {
      telegram: "https://t.me/Musurmon_dev",
    },
  },
];

export const ALL_PROJECTS: Project[] = [
  ...FEATURED_PROJECTS,
  {
    id: "ai-agent-devtools",
    title: "AI Agent DevTools",
    subtitle: "Vue DevTools, lekin AI agentlar uchun",
    description: "AI agentlarning fikrlash traektoriyasi, vositalar chaqiruvi va kontekst o'zgarishini 3D fazoda interaktiv vizualizatsiya qiluvchi dasturchi vositasi.",
    tags: ["Developer Tools", "AI", "3D Visualization"],
    techStack: ["Three.js", "Vite", "TypeScript", "Tailwind CSS"],
    category: "ai",
    categoryLabel: "AI & DevTools",
    featured: false,
    accentColor: "from-[#38BDF8] to-[#6366F1]",
  },
  {
    id: "vinetka",
    title: "Vinetka",
    subtitle: "Dekorativ Fotokompozitsiya Tahrirlagichi",
    description: "Markaziy Osiyo uslubidagi dekorativ bitiruv va tadbirlar fotokompozitsiyasi uchun veb-asosli Photoshop-o'xshash qulay tahrirlash platformasi.",
    tags: ["Creative Tools", "Web App", "Canvas", "Image Processing"],
    techStack: ["React", "react-konva", "Supabase", "TypeScript"],
    category: "web",
    categoryLabel: "Web & SaaS",
    featured: false,
    accentColor: "from-[#10B981] to-[#00D9C0]",
  },
  {
    id: "milliy-sertifikat-bot",
    title: "Milliy Sertifikat Bot",
    subtitle: "Matematika bo'yicha Imtihon Baholash Tizimi",
    description: "Matematika bo'yicha Milliy Sertifikat mock-test Telegram boti, Rasch/IRT (Item Response Theory) modeli asosida qat'iy va adolatli baholash mexanizmi bilan.",
    tags: ["EdTech", "Telegram Bot", "Assessment", "Psychometrics"],
    techStack: ["Python", "aiogram", "Supabase", "PostgreSQL"],
    category: "bot",
    categoryLabel: "Telegram Botlar",
    featured: false,
    accentColor: "from-[#6366F1] to-[#EC4899]",
  },
  {
    id: "vakansiya-elon-boti",
    title: "Vakansiya E'lon Boti",
    subtitle: "Avtomatlashtirilgan Branded Ish E'lonlari",
    description: "Ish e'lonlarini qabul qilib, ularni avtomatik chiroyli formatda branded rasm-karta sifatida generatsiya qilib kanalga joylashtiruvchi bot (admin tekshiruvi bilan).",
    tags: ["Automation", "Telegram Bot", "Image Generation", "Workflow"],
    techStack: ["Python", "aiogram", "Supabase", "Pillow"],
    category: "bot",
    categoryLabel: "Telegram Botlar",
    featured: false,
    accentColor: "from-[#F97316] to-[#EAB308]",
  },
  {
    id: "smart-academy",
    title: "Smart Academy",
    subtitle: "O'quv Markazlari Uchun To'liq LMS",
    description: "O'quv markazlari va akademiyalar uchun: o'quvchi, o'qituvchi, guruh, fanlar jadvali va to'lovlar monitoringini to'liq qamrab oluvchi boshqaruv tizimi.",
    tags: ["LMS", "Education", "CRM", "Dashboard"],
    techStack: ["Vue 3", "Vuetify 3", "Firebase", "Pinia"],
    category: "edtech",
    categoryLabel: "EdTech & LMS",
    featured: false,
    accentColor: "from-[#00D9C0] to-[#3B82F6]",
  },
  {
    id: "dizayn-ai",
    title: "DizaynAI",
    subtitle: "Veb Dizaynni AI-Promptga Aylantiruvchi Extension",
    description: "Veb-saytlarning vizual dizaynini tahlil qilib (ranglar palitrasi, tipografiya, spacing, soyalar) ularni yuqori aniqlikdagi AI generatsiya promptlariga aylantiruvchi kengaytma.",
    tags: ["AI", "Design Tools", "Browser Extension"],
    techStack: ["Chrome Extension", "JavaScript", "CSS Extraction Engine"],
    category: "ai",
    categoryLabel: "AI & DevTools",
    featured: false,
    accentColor: "from-[#8B5CF6] to-[#D946EF]",
  },
  {
    id: "codelearn",
    title: "CodeLearn",
    subtitle: "Interaktiv Dasturlash Ta'lim Platformasi",
    description: "Nazariy darslar, amaliy topshiriqlar va brauzer ichidagi live-preview kod muhitini birlashtirgan interaktiv dasturlash o'rganish platformasi.",
    tags: ["EdTech", "Interactive Learning", "Code Editor", "Web App"],
    techStack: ["React", "Monaco Editor", "Node.js", "Docker"],
    category: "edtech",
    categoryLabel: "EdTech & LMS",
    featured: false,
    accentColor: "from-[#14B8A6] to-[#6366F1]",
  },
  {
    id: "edulocal",
    title: "EduLocal",
    subtitle: "Keng Qamrovli Onlayn Ta'lim Tizimi",
    description: "Foydalanuvchi autentifikatsiyasi, modulli darslar, topshiriqlar tekshiruvi, individual profil va o'quvchilar o'rtasidagi reyting (gamification) tizimiga ega LMS.",
    tags: ["LMS", "Gamification", "Authentication", "Cloud"],
    techStack: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    category: "edtech",
    categoryLabel: "EdTech & LMS",
    featured: false,
    accentColor: "from-[#3B82F6] to-[#1D4ED8]",
  },
  {
    id: "it-center-crm",
    title: "IT Center Management System",
    subtitle: "O'quv Markazlari Uchun CRM & To'lov Avtomatizatsiyasi",
    description: "O'quvchi va o'qituvchilar hisobi, to'lovlar statistikasi, davomat jurnali va to'lov muddati yaqinlashganda avtomatik SMS/Telegram eslatma yuboruvchi kompleks tizim.",
    tags: ["CRM", "Education Management", "Automation", "Finances"],
    techStack: ["Vue.js", "Node.js", "PostgreSQL", "SMS Gateway"],
    category: "edtech",
    categoryLabel: "EdTech & LMS",
    featured: false,
    accentColor: "from-[#059669] to-[#10B981]",
  },
  {
    id: "london-lc",
    title: "London LC",
    subtitle: "Zamonaviy Ta'lim Muassasasi Veb-Platformasi",
    description: "Zamonaviy til va ta'lim markazi uchun mo'ljallangan, yuqori konversiyali landing sahifa, onlayn ro'yxatdan o'tish va interaktiv test topshirish platformasi.",
    tags: ["Education", "Web Application", "High Conversion", "Responsive"],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "web",
    categoryLabel: "Web & SaaS",
    featured: false,
    accentColor: "from-[#E11D48] to-[#FB7185]",
  },
  {
    id: "telegram-payment-bot",
    title: "Telegram Payment Reminder Bot",
    subtitle: "Avtomatlashtirilgan To'lov Kuzatuvchisi",
    description: "O'quv markazlari va xizmat ko'rsatish sohalari uchun oylik to'lovlarni uzluksiz kuzatuvchi, hisob-kitob qiluvchi va avtomatik eslatma xabarnomalari yuboruvchi tizim.",
    tags: ["Automation", "Telegram Bot", "Finances", "Cron Job"],
    techStack: ["Python", "Firebase", "APScheduler", "aiogram"],
    category: "bot",
    categoryLabel: "Telegram Botlar",
    featured: false,
    accentColor: "from-[#22C55E] to-[#15803D]",
  },
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Talablar & Tizimli Arxitektura",
    tagline: "G'oyadan aniq blueprintgacha",
    description: "Biznes maqsadlarni chuqur tahlil qilaman. Ma'lumotlar bazasi sxemasi (ERD), API endpoints xaritasi, xavfsizlik chegaralari va optimal texnologik stekni tanlayman.",
    icon: "Layers",
  },
  {
    step: "02",
    title: "Interaktiv UI/UX & Prototip",
    tagline: "Figma va komponentlar arxitekturasi",
    description: "Oddiy ko'rinish emas, balki foydalanuvchiga zavq beruvchi, micro-interaction va qulay navigation'ga ega zamonaviy interfeys dizayni yaratiladi.",
    icon: "Compass",
  },
  {
    step: "03",
    title: "Yuqori Sifatli Muhandislik",
    tagline: "Clean Code & Strict TypeScript",
    description: "Modular, qayta ishlatiluvchi komponentlar, qat'iy tip xavfsizligi, xatolarni oldindan bostirmasdan to'g'ri boshqarish va tezkor yuklanishni ta'minlayman.",
    icon: "Cpu",
  },
  {
    step: "04",
    title: "AI & Kengaytirilgan Integratsiya",
    tagline: "Aqlli funksiyalar va avtomatlashtirish",
    description: "Claude, Gemini yoki mahalliy Ollama modellarini mahsulot mantig'iga uzviy bog'layman. Prompt tuning va resurs samaradorligi nazorat qilinadi.",
    icon: "Sparkles",
  },
  {
    step: "05",
    title: "Testlash, Deploy & Doimiy Sifat",
    tagline: "Production-ready barqarorlik",
    description: "Cross-device testlar, xavfsizlik tekshiruvlari va CI/CD deploy. Ishga tushirilgandan keyin ham barqaror ishlashini monitoring qilaman.",
    icon: "ShieldCheck",
  },
];
