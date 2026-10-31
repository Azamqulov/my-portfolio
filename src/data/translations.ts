export type Language = "uz" | "ru" | "en";

export interface LanguageOption {
  code: Language;
  label: string;
  shortLabel: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "uz", label: "O'zbekcha", shortLabel: "UZ", flag: "🇺🇿" },
  { code: "ru", label: "Русский", shortLabel: "RU", flag: "🇷🇺" },
  { code: "en", label: "English", shortLabel: "EN", flag: "🇬🇧" },
];

export const TRANSLATIONS = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      projects: "Loyihalar",
      services: "Xizmatlar",
      about: "Men haqimda",
      contact: "Bog'lanish",
      downloadCv: "CV Yuklab olish",
      switchThemeLight: "Light rejimga o'tish",
      switchThemeDark: "Dark rejimga o'tish",
      menu: "Menyu",
    },
    hero: {
      roles: [
        "Frontend & Backend Dasturchi",
        "React & Next.js Mutaxassisi",
        "TypeScript & Toza Arxitektura",
        "Yuqori Unumdor Veb Ilovalar",
      ],
      greeting: "Salom, men",
      nameFirst: "Azamqulov",
      nameSecond: "Musurmon",
      bio: "Men zamonaviy texnologiyalar yordamida foydalanuvchilar uchun qulay va samarali web-ilovalarni yarataman. Loyihalarimda sifat, ishonchlilik va zamonaviy dizayn ustuvorlik qiladi.",
      viewProjects: "Loyihalarimni ko'rish",
      aboutMe: "Men haqimda",
      status: "Toshkent • Yangi loyihalarga tayyor",
      stats: {
        experience: "Yillik tajriba",
        projects: "Bajarilgan loyihalar",
        reviews: "Mijozlar fikri",
        success: "Muvaffaqiyatli natija",
      },
    },
    about: {
      tag: "— MEN HAQIMDA",
      heading1: "Muammolarni amaliy",
      heading2: "tizimlarga aylantiraman",
      paragraph:
        "Men — full-stack developer. Frontend va backend texnologiyalarida ishlab, zamonaviy, tezkor va qulay web-ilovalar yarataman. Mening maqsadim — shunchaki kod yozish emas, balki foydalanuvchilar uchun haqiqiy qiymat yaratish.",
      cta: "To'liq profilni ko'rish",
      locationPill: "Toshkent • Ochiq",
      proDevPill: "Pro Dev",
      subTitle: "Full-Stack Developer",
      pill1: "Full-Stack & AI",
      pill2: "Clean Code",
      connectTitle: "Bog'lanish",
    },
    skills: {
      tag: "• TEXNOLOGIYALAR VA VOSITALAR",
      heading: "Zamonaviy texnologiyalar bilan ishlayman",
      subtitle:
        "Har bir loyihada toza arxitektura, yuqori xavfsizlik va tezkor yuklanishni ta'minlaydigan zamonaviy stek.",
      cards: {
        frontend: {
          title: "Frontend Development",
          tech: "React, Next.js, TypeScript, Tailwind CSS, HTML, CSS",
        },
        backend: {
          title: "Backend Development",
          tech: "Node.js, Express.js, REST API, MongoDB",
        },
        uiux: {
          title: "UI/UX Dizayn",
          tech: "Figma, responsive dizayn, interfeys animatsiyalari",
        },
        vcs: {
          title: "Version Control",
          tech: "Git, GitHub, GitLab",
        },
        tools: {
          title: "Vositalar & DevOps",
          tech: "VS Code, Postman, Docker, Vercel",
        },
        other: {
          title: "Boshqa Tizimlar",
          tech: "Linux, NPM, Webpack, Agile (Scrum)",
        },
      },
    },
    featuredProjects: {
      tag: "• FLAGMAN LOYIHALAR",
      heading: "Bajarilgan loyihalar",
      archiveLink: "Barcha loyihalar arxivi",
      viewDetailsMockup: "Batafsil ko'rish ↗",
      viewProjectBtn: "Loyihani ko'rish",
      livePreview: "Live Preview",
      modalBadge: "Bajarilgan loyiha",
      modalAboutTitle: "Loyiha Haqida & Funksionallik:",
      modalTechTitle: "Ishlatilgan Texnologiyalar:",
      modalDiscussBtn: "Ushbu loyiha bo'yicha suhbat",
      modalCloseBtn: "Yopish",
      projects: {
        "salom-uz": {
          title: "Salom.uz",
          badge: "Web App",
          description: "Modern va qulay dizaynga ega ko'p funktsiyali sayt.",
        },
        "e-commerce": {
          title: "E-commerce",
          badge: "Web App",
          description: "Online do'kon uchun to'lov tizimi va savat funksiyasi bilan.",
        },
        "task-manager": {
          title: "Task Manager",
          badge: "Web App",
          description: "Vazifalarni boshqarish uchun zamonaviy ilova.",
        },
        "portfolio-v2": {
          title: "Portfolio v2",
          badge: "Web Site",
          description: "Shaxsiy portfolio sayt, zamonaviy dizayn bilan.",
        },
        "chat-app": {
          title: "Chat App",
          badge: "Web App",
          description: "Real-vaqt rejimida chat ilovasi.",
        },
        "blog-platform": {
          title: "Blog Platform",
          badge: "Web App",
          description: "Maqolalar o'qish va boshqarish platformasi.",
        },
      },
    },
    allProjects: {
      tag: "• LOYIHALAR ARXIVI",
      heading: "Loyihalar Arxivini Ko'rish",
      subtitle:
        "Har bir soha va texnologiya bo'yicha to'liq arxitektura va amaliy ishlanmalar.",
      searchPlaceholder: "Loyihalarni qidirish (nomi, stek yoki kategoriya)...",
      filters: {
        all: "Barchasi",
        ai: "AI & DevTools",
        web: "Web & SaaS",
        desktop: "Desktop",
        bot: "Telegram Bot",
        edtech: "EdTech & LMS",
      },
      liveSystem: "Faol Tizim",
      contactLink: "Bog'lanish",
      showAll: "Barcha loyihalarni ko'rish",
      showLess: "Kamroq ko'rsatish",
      notFound: "Hech qanday loyiha topilmadi. Qidiruv so'zini o'zgartirib ko'ring.",
      projects: {
        "boshqar-uz": {
          title: "Boshqar.uz (UBMS)",
          subtitle: "Multi-tenant SaaS ERP/POS Platform",
          description:
            "Kichik va o'rta bizneslar uchun to'liq boshqaruv platformasi — mahsulot, savdo (POS), ombor, mijozlar, xodimlar, tranzaksiyalar va statistikani bitta tizimda birlashtiruvchi SaaS mahsulot.",
        },
        "jarvis-ai": {
          title: "Jarvis AI",
          subtitle: "Local-First Desktop AI Agent",
          description:
            "Bulutga bog'liq bo'lmagan, to'liq lokal ishlaydigan Windows desktop AI assistant. Maxfiylik va tezlikni birinchi o'ringa qo'yuvchi avtonom yordamchi.",
        },
        "uzum-ai-assistant": {
          title: "Uzum AI Assistant",
          subtitle: "AI-Powered Shopping Assistant (Chrome Extension)",
          description:
            "uzum.uz uchun Manifest V3 brauzer kengaytmasi — xarid qiluvchilarga real xulosalar va to'g'ri qaror qabul qilishda sun'iy intellekt orqali ko'maklashadi.",
        },
        "thumb-ai": {
          title: "ThumbAI",
          subtitle: "AI-Powered Thumbnail Designer",
          description:
            "YouTube va Instagram uchun professional visual preview (thumbnail) yaratuvchi aqlli dizayn generatori.",
        },
        "icon-forge": {
          title: "IconForge",
          subtitle: "Windows Explorer Icon Customizer",
          description:
            "Windows papkalari uchun maxsus icon boshqaruv va tahrirlash vositasi — dasturchilar va dizaynerlar uchun yuqori unumdorlik.",
        },
        "ai-agent-devtools": {
          title: "AI Agent DevTools",
          subtitle: "Vue DevTools, lekin AI agentlar uchun",
          description:
            "AI agentlarning fikrlash traektoriyasi, vositalar chaqiruvi va kontekst o'zgarishini 3D fazoda interaktiv vizualizatsiya qiluvchi dasturchi vositasi.",
        },
        vinetka: {
          title: "Vinetka",
          subtitle: "Dekorativ Fotokompozitsiya Tahrirlagichi",
          description:
            "Markaziy Osiyo uslubidagi dekorativ bitiruv va tadbirlar fotokompozitsiyasi uchun veb-asosli Photoshop-o'xshash qulay tahrirlash platformasi.",
        },
        "milliy-sertifikat-bot": {
          title: "Milliy Sertifikat Bot",
          subtitle: "Matematika bo'yicha Imtihon Baholash Tizimi",
          description:
            "Matematika bo'yicha Milliy Sertifikat mock-test Telegram boti, Rasch/IRT modeli asosida qat'iy va adolatli baholash mexanizmi bilan.",
        },
        "vakansiya-elon-boti": {
          title: "Vakansiya E'lon Boti",
          subtitle: "Avtomatlashtirilgan Branded Ish E'lonlari",
          description:
            "Ish e'lonlarini qabul qilib, ularni avtomatik chiroyli formatda branded rasm-karta sifatida generatsiya qilib kanalga joylashtiruvchi bot.",
        },
        "smart-academy": {
          title: "Smart Academy",
          subtitle: "O'quv Markazlari Uchun To'liq LMS",
          description:
            "O'quv markazlari va akademiyalar uchun: o'quvchi, o'qituvchi, guruh, fanlar jadvali va to'lovlar monitoringini to'liq qamrab oluvchi boshqaruv tizimi.",
        },
        "dizayn-ai": {
          title: "DizaynAI",
          subtitle: "Veb Dizaynni AI-Promptga Aylantiruvchi Extension",
          description:
            "Veb-saytlarning vizual dizaynini tahlil qilib ularni yuqori aniqlikdagi AI generatsiya promptlariga aylantiruvchi kengaytma.",
        },
        codelearn: {
          title: "CodeLearn",
          subtitle: "Interaktiv Dasturlash Ta'lim Platformasi",
          description:
            "Nazariy darslar, amaliy topshiriqlar va brauzer ichidagi live-preview kod muhitini birlashtirgan interaktiv dasturlash o'rganish platformasi.",
        },
        edulocal: {
          title: "EduLocal",
          subtitle: "Keng Qamrovli Onlayn Ta'lim Tizimi",
          description:
            "Foydalanuvchi autentifikatsiyasi, modulli darslar, topshiriqlar tekshiruvi, individual profil va o'quvchilar reytingi (gamification) tizimiga ega LMS.",
        },
        "it-center-crm": {
          title: "IT Center Management System",
          subtitle: "O'quv Markazlari Uchun CRM & To'lov Avtomatizatsiyasi",
          description:
            "O'quvchi va o'qituvchilar hisobi, to'lovlar statistikasi, davomat jurnali va avtomatik SMS/Telegram eslatma yuboruvchi kompleks tizim.",
        },
        "london-lc": {
          title: "London LC",
          subtitle: "Zamonaviy Ta'lim Muassasasi Veb-Platformasi",
          description:
            "Zamonaviy til va ta'lim markazi uchun mo'ljallangan yuqori konversiyali landing sahifa, onlayn ro'yxatdan o'tish platformasi.",
        },
        "telegram-payment-bot": {
          title: "Telegram Payment Reminder Bot",
          subtitle: "Avtomatlashtirilgan To'lov Kuzatuvchisi",
          description:
            "Oylik to'lovlarni uzluksiz kuzatuvchi, hisob-kitob qiluvchi va avtomatik eslatma xabarnomalari yuboruvchi tizim.",
        },
      },
    },
    services: {
      tag: "• XIZMATLAR & IMKONIYATLAR",
      heading: "Nimalar bilan yordam bera olaman?",
      subtitle:
        "Sizning g'oyangizni sifatli, xavfsiz va zamonaviy web-ilovaga aylantirishga yordam beraman.",
      guarantee: "Kafolatlangan xizmat",
      items: {
        websites: {
          title: "Veb saytlar",
          description: "Biznesingiz uchun zamonaviy va tezkor web-saytlar.",
        },
        webapps: {
          title: "Veb ilovalar",
          description: "Murakkab funksiyali web-ilovalar va admin panellar.",
        },
        "uiux-service": {
          title: "UI/UX Dizayn",
          description: "Chiroyli va qulay interfeys dizayni.",
        },
        support: {
          title: "Texnik qo'llab-quvvatlash",
          description: "Loyihangiz uchun doimiy texnik yordam.",
        },
      },
    },
    testimonials: {
      tag: "• MIJOZLAR FIKRI",
      autoScroll: "⚡ Avtomatik 3 ta / 6s",
      paused: "⏸ Pauza",
      heading: "Mijozlar nima deyishadi?",
      subtitle:
        "Birgalikda ishlagan hamkorlar va mijozlarning samimiy baholari.",
      items: [
        {
          id: "sardor",
          name: "Sardor Karimov",
          role: "IT kompaniya CEO",
          quote:
            "Loyihani juda sifatli va o'z vaqtida topshirdi. Xizmatidan juda mamnunmiz!",
        },
        {
          id: "dilshodbek",
          name: "Dilshodbek Rahimov",
          role: "Biznes egasi",
          quote:
            "Juda professional yondashuv va tezkor aloqa. Tavsiya qilaman!",
        },
        {
          id: "madina",
          name: "Madina Tursunova",
          role: "Marketing menejer",
          quote:
            "Dizayn va kod sifati a'lo darajada. Yangi loyihalarda ham birga ishlaymiz.",
        },
        {
          id: "bobur",
          name: "Bobur Mirzayev",
          role: "FinTech asoschisi",
          quote:
            "Web ilova arxitekturasi va to'lov integratsiyasi a'lo darajada bajarildi. Rahmat!",
        },
        {
          id: "nilufar",
          name: "Nilufar Karimova",
          role: "Mahsulot Dizayneri",
          quote:
            "Figma eskizlarini to'liq piksel aniqligida jonlantirdi, animatsiyalar juda yoqdi!",
        },
        {
          id: "javohir",
          name: "Javohir Toshmatov",
          role: "Bosh Texnik Direktor",
          quote:
            "Toza TypeScript kodi, yuqori xavfsizlik va tezkor Core Web Vitals unumdorligi.",
        },
      ],
    },
    contact: {
      tag: "• BOG'LANISH",
      heading: "Loyihangizni birga amalga oshiramiz",
      subtitle:
        "Menga xabar yuboring — xabaringiz to'g'ridan-to'g'ri Telegramga yetib boradi. Sizning g'oyangiz — mening ustuvor vazifam!",
      emailLabel: "Email",
      phoneLabel: "Telefon",
      telegramBotLabel: "Telegram Bot",
      locationLabel: "Manzil",
      locationValue: "Toshkent, O'zbekiston",
      doodleText1: "Keling, birga",
      doodleText2: "ishlaymiz! ↗",
      form: {
        nameLabel: "Ismingiz *",
        namePlaceholder: "Masalan: Jamshid",
        emailLabel: "Email manzilingiz *",
        emailPlaceholder: "nomi@example.com",
        messageLabel: "Xabaringiz / Loyiha tavsifi *",
        messagePlaceholder: "Loyiha haqida qisqacha ma'lumot bering...",
        submitBtn: "Xabarni Yuborish",
        submittingBtn: "Yuborilmoqda...",
        successTitle: "Xabaringiz Telegramga Yuborildi!",
        successDesc:
          "Rahmat, {name}! Xabaringiz Telegram guruhiga yetkazildi, tez orada siz bilan bog'lanaman.",
        sendAnother: "Yangi xabar yuborish",
        validationError: "Iltimos, barcha maydonlarni to'liq to'ldiring.",
        networkError:
          "Tarmoq bilan bog'lanishda xatolik yuz berdi. Iltimos internet aloqasini tekshiring.",
        telegramError:
          "Xabarni Telegramga yuborishda xatolik yuz berdi. Iltimos qaytadan urinib ko'ring yoki bot orqali yozing.",
      },
    },
    footer: {
      copyright: "© 2026 Azamqulov Musurmon. Barcha huquqlar himoyalangan.",
      madeWith: "Mehr bilan yaratildi",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      projects: "Проекты",
      services: "Услуги",
      about: "Обо мне",
      contact: "Контакты",
      downloadCv: "Скачать CV",
      switchThemeLight: "Включить светлую тему",
      switchThemeDark: "Включить темную тему",
      menu: "Меню",
    },
    hero: {
      roles: [
        "Frontend & Backend Разработчик",
        "Эксперт React & Next.js",
        "TypeScript & Архитектура",
        "Высокоскоростные Веб-Сервисы",
      ],
      greeting: "Привет, я",
      nameFirst: "Азамкулов",
      nameSecond: "Мусурмон",
      bio: "Создаю современные, удобные и масштабируемые веб-приложения с использованием передовых технологий. В моих проектах в приоритете качество, надёжность и эстетичный дизайн.",
      viewProjects: "Смотреть проекты",
      aboutMe: "Обо мне",
      status: "Ташкент • Открыт к проектам",
      stats: {
        experience: "Лет опыта",
        projects: "Выполненных проектов",
        reviews: "Отзывов клиентов",
        success: "Успешных проектов",
      },
    },
    about: {
      tag: "— ОБО МНЕ",
      heading1: "Превращаю задачи в",
      heading2: "надежные системы",
      paragraph:
        "Я — full-stack разработчик. Работая с frontend и backend технологиями, создаю быстрые, безопасные и удобные веб-приложения. Моя цель — не просто писать код, а создавать реальную ценность для пользователей и бизнеса.",
      cta: "Связаться со мной",
      locationPill: "Ташкент • Доступен",
      proDevPill: "Pro Dev",
      subTitle: "Full-Stack Developer",
      pill1: "Full-Stack & AI",
      pill2: "Clean Code",
      connectTitle: "Контакты",
    },
    skills: {
      tag: "• ТЕХНОЛОГИИ И ИНСТРУМЕНТЫ",
      heading: "Работаю с современным технологическим стеком",
      subtitle:
        "Каждый проект построен на надежной архитектуре, безопасности и максимальной скорости загрузки.",
      cards: {
        frontend: {
          title: "Frontend Разработка",
          tech: "React, Next.js, TypeScript, Tailwind CSS, HTML, CSS",
        },
        backend: {
          title: "Backend Разработка",
          tech: "Node.js, Express.js, REST API, MongoDB",
        },
        uiux: {
          title: "UI/UX Дизайн",
          tech: "Figma, адаптивный дизайн, анимация интерфейсов",
        },
        vcs: {
          title: "Контроль версий",
          tech: "Git, GitHub, GitLab",
        },
        tools: {
          title: "Инструменты & DevOps",
          tech: "VS Code, Postman, Docker, Vercel",
        },
        other: {
          title: "Другие системы",
          tech: "Linux, NPM, Webpack, Agile (Scrum)",
        },
      },
    },
    featuredProjects: {
      tag: "• ФЛАГМАНСКИЕ ПРОЕКТЫ",
      heading: "Реализованные проекты",
      archiveLink: "Архив всех проектов",
      viewDetailsMockup: "Подробнее ↗",
      viewProjectBtn: "Смотреть проект",
      livePreview: "Live Preview",
      modalBadge: "Реализованный проект",
      modalAboutTitle: "О проекте и возможностях:",
      modalTechTitle: "Использованный стек:",
      modalDiscussBtn: "Обсудить этот проект",
      modalCloseBtn: "Закрыть",
      projects: {
        "salom-uz": {
          title: "Salom.uz",
          badge: "Web App",
          description: "Многофункциональная платформа с современным и удобным дизайном.",
        },
        "e-commerce": {
          title: "E-commerce",
          badge: "Web App",
          description: "Онлайн-магазин с интегрированной платежной системой и корзиной.",
        },
        "task-manager": {
          title: "Task Manager",
          badge: "Web App",
          description: "Современное веб-приложение для управления рабочими задачами.",
        },
        "portfolio-v2": {
          title: "Portfolio v2",
          badge: "Web Site",
          description: "Персональный сайт-портфолио с эффектным дизайном и анимацией.",
        },
        "chat-app": {
          title: "Chat App",
          badge: "Web App",
          description: "Приложение для обмена сообщениями в режиме реального времени.",
        },
        "blog-platform": {
          title: "Blog Platform",
          badge: "Web App",
          description: "Платформа для чтения, публикации и управления статьями.",
        },
      },
    },
    allProjects: {
      tag: "• АРХИВ ПРОЕКТОВ",
      heading: "Архив Всех Проектов",
      subtitle:
        "Полный спектр готовых решений и архитектур по различным направлениям.",
      searchPlaceholder: "Поиск проектов (по названию, стеку или категории)...",
      filters: {
        all: "Все",
        ai: "AI & DevTools",
        web: "Web & SaaS",
        desktop: "Desktop",
        bot: "Telegram Bot",
        edtech: "EdTech & LMS",
      },
      liveSystem: "Активная система",
      contactLink: "Связаться",
      showAll: "Показать все проекты",
      showLess: "Свернуть",
      notFound: "Проекты не найдены. Попробуйте изменить поисковый запрос.",
      projects: {
        "boshqar-uz": {
          title: "Boshqar.uz (UBMS)",
          subtitle: "Multi-tenant SaaS ERP/POS Platform",
          description:
            "Комплексная SaaS-платформа для бизнеса: учет товаров, продажи (POS), склад, клиенты, сотрудники, транзакции и аналитика в единой системе.",
        },
        "jarvis-ai": {
          title: "Jarvis AI",
          subtitle: "Local-First Desktop AI Agent",
          description:
            "Автономный Windows AI-ассистент, работающий полностью локально без облака. Приоритет абсолютной приватности и максимальной скорости.",
        },
        "uzum-ai-assistant": {
          title: "Uzum AI Assistant",
          subtitle: "AI-Powered Shopping Assistant (Chrome Extension)",
          description:
            "Расширение Manifest V3 для uzum.uz — интеллектуальный анализ отзывов, плюсов и минусов товаров на базе Gemini AI.",
        },
        "thumb-ai": {
          title: "ThumbAI",
          subtitle: "AI-Powered Thumbnail Designer",
          description:
            "Интеллектуальный генератор привлекательных обложек (thumbnail) для YouTube и Instagram с использованием модели FLUX и холста Konva.",
        },
        "icon-forge": {
          title: "IconForge",
          subtitle: "Windows Explorer Icon Customizer",
          description:
            "Инструмент кастомизации и генерации иконок папок Windows для разработчиков и дизайнеров на Rust и Tauri.",
        },
        "ai-agent-devtools": {
          title: "AI Agent DevTools",
          subtitle: "DevTools для AI-агентов",
          description:
            "Инструмент визуализации траектории рассуждений и вызовов инструментов AI-агентов в интерактивном 3D-пространстве.",
        },
        vinetka: {
          title: "Vinetka",
          subtitle: "Редактор Декоративных Фотокомпозиций",
          description:
            "Веб-редактор фотокомпозиций для выпускных альбомов и мероприятий со сложной обработкой графики на холсте.",
        },
        "milliy-sertifikat-bot": {
          title: "Milliy Sertifikat Bot",
          subtitle: "Система Оценки Экзаменов по Математике",
          description:
            "Telegram-бот для пробных тестов по математике с точной математической моделью оценивания Rasch/IRT.",
        },
        "vakansiya-elon-boti": {
          title: "Vakansiya E'lon Boti",
          subtitle: "Автоматизированные Брендированные Вакансии",
          description:
            "Бот для приема вакансий, автоматической генерации графических карточек и публикации в канал с модерацией.",
        },
        "smart-academy": {
          title: "Smart Academy",
          subtitle: "Комплексная LMS для Учебных Центров",
          description:
            "Система управления для учебных центров: студенты, преподаватели, расписание, группы и мониторинг оплаты.",
        },
        "dizayn-ai": {
          title: "DizaynAI",
          subtitle: "Преобразователь Веб-Дизайна в AI-Промпты",
          description:
            "Браузерное расширение для анализа визуальных элементов сайтов и конвертации их в детализированные промпты для нейросетей.",
        },
        codelearn: {
          title: "CodeLearn",
          subtitle: "Интерактивная Платформа Обучения Кодингу",
          description:
            "Платформа с теоретическими материалами, задачами и живым редактором кода с мгновенным предпросмотром.",
        },
        edulocal: {
          title: "EduLocal",
          subtitle: "Масштабируемая Онлайн-Система Обучения",
          description:
            "LMS с авторизацией, модульными уроками, проверкой домашних заданий и рейтинговой системой (геймификацией).",
        },
        "it-center-crm": {
          title: "IT Center Management System",
          subtitle: "CRM & Автоматизация Оплат для Академий",
          description:
            "Комплексный учет учащихся, журнал посещаемости, финансовая статистика и автоматические SMS/Telegram напоминания.",
        },
        "london-lc": {
          title: "London LC",
          subtitle: "Платформа для Образовательного Центра",
          description:
            "Высококонверсионный лендинг для языкового центра с онлайн-записью и тестированием уровня знаний.",
        },
        "telegram-payment-bot": {
          title: "Telegram Payment Reminder Bot",
          subtitle: "Автоматический Трекер Регулярных Платежей",
          description:
            "Сервис контроля ежемесячных платежей с автоматической отправкой персонализированных уведомлений.",
        },
      },
    },
    services: {
      tag: "• УСЛУГИ И ВОЗМОЖНОСТИ",
      heading: "Чем я могу помочь вашему бизнесу?",
      subtitle:
        "Помогу превратить вашу идею в качественное, безопасное и современное веб-решение.",
      guarantee: "Гарантия качества",
      items: {
        websites: {
          title: "Веб-сайты",
          description: "Быстрые, современные сайты с адаптивным дизайном для бизнеса.",
        },
        webapps: {
          title: "Веб-приложения",
          description: "Сложные SaaS-платформы, личные кабинеты и админ-панели.",
        },
        "uiux-service": {
          title: "UI/UX Дизайн",
          description: "Удобный, эстетичный интерфейс с упором на конверсию.",
        },
        support: {
          title: "Техподдержка",
          description: "Постоянное сопровождение, развитие и оптимизация ваших проектов.",
        },
      },
    },
    testimonials: {
      tag: "• ОТЗЫВЫ КЛИЕНТОВ",
      autoScroll: "⚡ Авто 3 отзыва / 6с",
      paused: "⏸ Пауза",
      heading: "Что говорят клиенты?",
      subtitle:
        "Искренние отзывы партнеров и клиентов о результатах совместной работы.",
      items: [
        {
          id: "sardor",
          name: "Сардор Каримов",
          role: "CEO IT-компании",
          quote:
            "Проект сдан вовремя и с безупречным качеством. Очень довольны сотрудничеством!",
        },
        {
          id: "dilshodbek",
          name: "Дильшодбек Рахимов",
          role: "Владелец бизнеса",
          quote:
            "Исключительно профессиональный подход и быстрая связь. Однозначно рекомендую!",
        },
        {
          id: "madina",
          name: "Мадина Турсунова",
          role: "Маркетинг-менеджер",
          quote:
            "Качество дизайна и кода на высшем уровне. Планируем продолжать сотрудничество.",
        },
        {
          id: "bobur",
          name: "Бобур Мирзаев",
          role: "Основатель FinTech",
          quote:
            "Архитектура приложения и платежная интеграция выполнены безупречно. Большое спасибо!",
        },
        {
          id: "nilufar",
          name: "Нилюфар Каримова",
          role: "Продуктовый дизайнер",
          quote:
            "Макеты из Figma воплощены с точностью до пикселя, анимации получились потрясающими!",
        },
        {
          id: "javohir",
          name: "Жавохир Тошматов",
          role: "Технический директор",
          quote:
            "Чистый TypeScript, внимание к безопасности и высокая производительность Core Web Vitals.",
        },
      ],
    },
    contact: {
      tag: "• КОНТАКТЫ",
      heading: "Давайте реализуем ваш проект вместе",
      subtitle:
        "Напишите мне — сообщение мгновенно поступит ко мне в Telegram. Ваша идея в надёжных руках!",
      emailLabel: "Email",
      phoneLabel: "Телефон",
      telegramBotLabel: "Telegram Bot",
      locationLabel: "Локация",
      locationValue: "Ташкент, Узбекистан",
      doodleText1: "Давайте работать",
      doodleText2: "вместе! ↗",
      form: {
        nameLabel: "Ваше имя *",
        namePlaceholder: "Например: Александр",
        emailLabel: "Ваш Email *",
        emailPlaceholder: "name@example.com",
        messageLabel: "Ваше сообщение / Описание проекта *",
        messagePlaceholder: "Расскажите кратко о вашей идее или задаче...",
        submitBtn: "Отправить Сообщение",
        submittingBtn: "Отправка...",
        successTitle: "Сообщение отправлено в Telegram!",
        successDesc:
          "Спасибо, {name}! Ваше сообщение доставлено в Telegram, я свяжусь с вами в ближайшее время.",
        sendAnother: "Отправить ещё одно сообщение",
        validationError: "Пожалуйста, заполните все обязательные поля.",
        networkError:
          "Произошла ошибка сети. Пожалуйста, проверьте подключение к интернету.",
        telegramError:
          "Ошибка отправки в Telegram. Пожалуйста, повторите попытку или напишите напрямую в бот.",
      },
    },
    footer: {
      copyright: "© 2026 Азамкулов Мусурмон. Все права защищены.",
      madeWith: "Сделано с душой",
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      services: "Services",
      about: "About",
      contact: "Contact",
      downloadCv: "Download CV",
      switchThemeLight: "Switch to light mode",
      switchThemeDark: "Switch to dark mode",
      menu: "Menu",
    },
    hero: {
      roles: [
        "Frontend & Backend Developer",
        "React & Next.js Specialist",
        "TypeScript & Clean Architecture",
        "High-Performance Web Applications",
      ],
      greeting: "Hello, I am",
      nameFirst: "Azamqulov",
      nameSecond: "Musurmon",
      bio: "I build modern, user-friendly, and scalable web applications using cutting-edge technologies. My focus is on high quality, reliability, and clean aesthetics.",
      viewProjects: "View My Projects",
      aboutMe: "About Me",
      status: "Tashkent • Available for new projects",
      stats: {
        experience: "Years Experience",
        projects: "Completed Projects",
        reviews: "Client Reviews",
        success: "Success Rate",
      },
    },
    about: {
      tag: "— ABOUT ME",
      heading1: "Transforming Ideas into",
      heading2: "Practical Systems",
      paragraph:
        "I am a full-stack developer building modern, high-speed, and intuitive web applications across frontend and backend. My mission is to craft real value and seamless user experiences, not just write lines of code.",
      cta: "Get In Touch",
      locationPill: "Tashkent • Available",
      proDevPill: "Pro Dev",
      subTitle: "Full-Stack Developer",
      pill1: "Full-Stack & AI",
      pill2: "Clean Code",
      connectTitle: "Contact",
    },
    skills: {
      tag: "• TECH STACK & TOOLS",
      heading: "Working with Modern Technologies",
      subtitle:
        "A robust technology stack ensuring clean architecture, tight security, and lightning-fast loading speeds.",
      cards: {
        frontend: {
          title: "Frontend Development",
          tech: "React, Next.js, TypeScript, Tailwind CSS, HTML, CSS",
        },
        backend: {
          title: "Backend Development",
          tech: "Node.js, Express.js, REST API, MongoDB",
        },
        uiux: {
          title: "UI/UX Design",
          tech: "Figma, responsive design, interface animations",
        },
        vcs: {
          title: "Version Control",
          tech: "Git, GitHub, GitLab",
        },
        tools: {
          title: "DevTools & Cloud",
          tech: "VS Code, Postman, Docker, Vercel",
        },
        other: {
          title: "Other Systems",
          tech: "Linux, NPM, Webpack, Agile (Scrum)",
        },
      },
    },
    featuredProjects: {
      tag: "• FEATURED PROJECTS",
      heading: "Selected Works",
      archiveLink: "All Projects Archive",
      viewDetailsMockup: "View Details ↗",
      viewProjectBtn: "View Project",
      livePreview: "Live Preview",
      modalBadge: "Completed Project",
      modalAboutTitle: "About the Project & Features:",
      modalTechTitle: "Technologies Used:",
      modalDiscussBtn: "Discuss this project",
      modalCloseBtn: "Close",
      projects: {
        "salom-uz": {
          title: "Salom.uz",
          badge: "Web App",
          description: "Feature-packed web platform with a modern, elegant user experience.",
        },
        "e-commerce": {
          title: "E-commerce",
          badge: "Web App",
          description: "Online store with integrated checkout, payment gateway, and shopping cart.",
        },
        "task-manager": {
          title: "Task Manager",
          badge: "Web App",
          description: "Modern productivity tool for task management and team workflows.",
        },
        "portfolio-v2": {
          title: "Portfolio v2",
          badge: "Web Site",
          description: "Personal developer portfolio built with polished aesthetics and smooth animations.",
        },
        "chat-app": {
          title: "Chat App",
          badge: "Web App",
          description: "Real-time communication and messaging application.",
        },
        "blog-platform": {
          title: "Blog Platform",
          badge: "Web App",
          description: "Content publishing and management system with markdown support.",
        },
      },
    },
    allProjects: {
      tag: "• PROJECTS ARCHIVE",
      heading: "Explore All Projects",
      subtitle:
        "Full spectrum of practical architectures and production implementations.",
      searchPlaceholder: "Search projects (name, tech stack, or category)...",
      filters: {
        all: "All",
        ai: "AI & DevTools",
        web: "Web & SaaS",
        desktop: "Desktop",
        bot: "Telegram Bot",
        edtech: "EdTech & LMS",
      },
      liveSystem: "Live System",
      contactLink: "Get In Touch",
      showAll: "View all projects",
      showLess: "Show less",
      notFound: "No projects found. Try a different search query.",
      projects: {
        "boshqar-uz": {
          title: "Boshqar.uz (UBMS)",
          subtitle: "Multi-tenant SaaS ERP/POS Platform",
          description:
            "Complete SaaS enterprise platform for SMBs: products, POS retail, warehouse, clients, employees, transactions, and real-time analytics in one unified dashboard.",
        },
        "jarvis-ai": {
          title: "Jarvis AI",
          subtitle: "Local-First Desktop AI Agent",
          description:
            "Autonomous Windows desktop AI assistant operating 100% locally with zero cloud dependencies. Built for privacy and lightning-fast responses.",
        },
        "uzum-ai-assistant": {
          title: "Uzum AI Assistant",
          subtitle: "AI-Powered Shopping Assistant (Chrome Extension)",
          description:
            "Manifest V3 browser extension for uzum.uz — analyzes reviews, pros & cons, and provides impartial shopping insights via Gemini AI.",
        },
        "thumb-ai": {
          title: "ThumbAI",
          subtitle: "AI-Powered Thumbnail Designer",
          description:
            "Smart visual generator creating high-conversion thumbnails for YouTube and Instagram using FLUX AI models and interactive canvas editor.",
        },
        "icon-forge": {
          title: "IconForge",
          subtitle: "Windows Explorer Icon Customizer",
          description:
            "Desktop tool for developers and designers to customize Windows folder icons with automated project detection and multi-resolution ICO exports.",
        },
        "ai-agent-devtools": {
          title: "AI Agent DevTools",
          subtitle: "DevTools for AI Agents",
          description:
            "Developer utility providing interactive 3D visualization of AI agent reasoning paths, tool calls, and state transitions.",
        },
        vinetka: {
          title: "Vinetka",
          subtitle: "Decorative Photo Collage Editor",
          description:
            "Web-based graphics editor for Central Asian graduation albums and commemorative photo composites.",
        },
        "milliy-sertifikat-bot": {
          title: "Milliy Sertifikat Bot",
          subtitle: "Mathematics Mock Exam Assessment System",
          description:
            "Telegram bot for mathematics certification mock tests using Rasch / Item Response Theory psychometrics.",
        },
        "vakansiya-elon-boti": {
          title: "Vakansiya E'lon Boti",
          subtitle: "Automated Branded Job Postings",
          description:
            "Bot for receiving job postings, automatically rendering branded image cards, and broadcasting to channels after admin review.",
        },
        "smart-academy": {
          title: "Smart Academy",
          subtitle: "Complete LMS for Learning Centers",
          description:
            "Academy management system covering students, instructors, schedules, class groups, and tuition tracking.",
        },
        "dizayn-ai": {
          title: "DizaynAI",
          subtitle: "Web Design to AI Prompt Extension",
          description:
            "Browser extension extracting web design styling to generate precise AI image and UI prompts.",
        },
        codelearn: {
          title: "CodeLearn",
          subtitle: "Interactive Coding Learning Platform",
          description:
            "Interactive programming education platform combining theory, practical exercises, and in-browser live code execution.",
        },
        edulocal: {
          title: "EduLocal",
          subtitle: "Comprehensive Online Education LMS",
          description:
            "Full LMS with authentication, modular coursework, assignment reviews, student profiles, and gamified rankings.",
        },
        "it-center-crm": {
          title: "IT Center Management System",
          subtitle: "Academy CRM & Payment Automation",
          description:
            "Student records, attendance journals, revenue analytics, and automated SMS / Telegram tuition reminders.",
        },
        "london-lc": {
          title: "London LC",
          subtitle: "Modern Language Center Web Platform",
          description:
            "High-conversion landing page and online enrollment platform for a modern language academy.",
        },
        "telegram-payment-bot": {
          title: "Telegram Payment Reminder Bot",
          subtitle: "Automated Recurring Payment Tracker",
          description:
            "Recurring billing tracker sending scheduled automated payment notifications for education and service providers.",
        },
      },
    },
    services: {
      tag: "• SERVICES & CAPABILITIES",
      heading: "How can I help your business?",
      subtitle:
        "I help turn your vision into high-quality, secure, and modern digital applications.",
      guarantee: "Guaranteed Service",
      items: {
        websites: {
          title: "Websites",
          description: "Modern, high-converting, and fast websites tailored for your business.",
        },
        webapps: {
          title: "Web Applications",
          description: "Custom SaaS platforms, CRM systems, and rich administrative dashboards.",
        },
        "uiux-service": {
          title: "UI/UX Design",
          description: "Clean, intuitive, and engaging interface designs crafted for delight.",
        },
        support: {
          title: "Technical Support",
          description: "Continuous maintenance, optimizations, and technical support for your projects.",
        },
      },
    },
    testimonials: {
      tag: "• CLIENT TESTIMONIALS",
      autoScroll: "⚡ Auto 3 cards / 6s",
      paused: "⏸ Paused",
      heading: "What Clients Say",
      subtitle:
        "Genuine feedback and reviews from partners and clients I've worked with.",
      items: [
        {
          id: "sardor",
          name: "Sardor Karimov",
          role: "IT Company CEO",
          quote:
            "Delivered the project on schedule with exceptional quality. Highly satisfied with the results!",
        },
        {
          id: "dilshodbek",
          name: "Dilshodbek Rahimov",
          role: "Business Owner",
          quote:
            "Highly professional approach and swift communication throughout. Strongly recommended!",
        },
        {
          id: "madina",
          name: "Madina Tursunova",
          role: "Marketing Manager",
          quote:
            "The design fidelity and code quality are top notch. Looking forward to our next projects.",
        },
        {
          id: "bobur",
          name: "Bobur Mirzayev",
          role: "FinTech Founder",
          quote:
            "Web app architecture and payment gateway integration were handled flawlessly. Thank you!",
        },
        {
          id: "nilufar",
          name: "Nilufar Karimova",
          role: "Product Designer",
          quote:
            "Brought our Figma designs to life with pixel-perfect precision and delightful animations!",
        },
        {
          id: "javohir",
          name: "Javohir Toshmatov",
          role: "Chief Technical Officer",
          quote:
            "Clean TypeScript codebase, strong security practices, and stellar Core Web Vitals speed.",
        },
      ],
    },
    contact: {
      tag: "• GET IN TOUCH",
      heading: "Let's Bring Your Project to Life",
      subtitle:
        "Send me a message — it delivers straight to my Telegram. Your project is my highest priority!",
      emailLabel: "Email",
      phoneLabel: "Phone",
      telegramBotLabel: "Telegram Bot",
      locationLabel: "Location",
      locationValue: "Tashkent, Uzbekistan",
      doodleText1: "Let's work",
      doodleText2: "together! ↗",
      form: {
        nameLabel: "Your Name *",
        namePlaceholder: "e.g., Alex Johnson",
        emailLabel: "Your Email *",
        emailPlaceholder: "name@example.com",
        messageLabel: "Your Message / Project Brief *",
        messagePlaceholder: "Tell me briefly about your project goals...",
        submitBtn: "Send Message",
        submittingBtn: "Sending...",
        successTitle: "Message Sent to Telegram!",
        successDesc:
          "Thank you, {name}! Your message was delivered, I will get back to you shortly.",
        sendAnother: "Send another message",
        validationError: "Please fill in all required fields.",
        networkError:
          "Network connection error. Please check your internet connection.",
        telegramError:
          "Failed to send to Telegram. Please try again or reach out directly via the bot.",
      },
    },
    footer: {
      copyright: "© 2026 Musurmon Azamqulov. All rights reserved.",
      madeWith: "Crafted with passion",
    },
  },
};
