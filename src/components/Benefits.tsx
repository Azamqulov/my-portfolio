"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  DollarSign,
  Lightbulb,
  KeyRound,
  MessageSquare,
  LifeBuoy,
  Send,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Benefits: React.FC = () => {
  const { language } = useLanguage();

  const contentUz = {
    tag: "KAFOLATLAR",
    index: "(06)",
    heading: "Nega aynan men bilan ishlash ishonchli",
    subtitle:
      "Vositachilarsiz toza hamkorlik, qat'iy narx va ishga tushirilgandan keyingi bepul kafolat.",
    cards: [
      {
        num: "01",
        title: "Subpudratsiz (To'g'ridan-to'g'ri aloqa)",
        desc: "Loyihani uchinchi shaxslarga topshirmayman. Siz bevosita kod yozadigan va tizim arxitekturasini quradigan mutaxassis bilan muloqot qilasiz.",
        icon: UserCheck,
      },
      {
        num: "02",
        title: "Narx ish davomida oshmaydi",
        desc: "Ish boshlanishidan avval aniq talablar, muddat va byudjet kelishiladi. Jarayon o'rtasida kutilmagan qo'shimcha to'lovlar bo'lmaydi.",
        icon: DollarSign,
      },
      {
        num: "03",
        title: "Optimal va tejamkor yechim",
        desc: "Agar vazifani soddaroq, tezroq va byudjetingizga ancha qulayroq hal qilish imkoni bo'lsa, sizga darhol eng unumli variantni taklif qilaman.",
        icon: Lightbulb,
      },
      {
        num: "04",
        title: "Barcha kod va huquqlar sizniki",
        desc: "Loyiha toza arxitektura va xalqaro standartlarda yoziladi. Barcha kod bazasi, server do'konlari va do'stona hujjatlar to'liq sizga topshiriladi.",
        icon: KeyRound,
      },
      {
        num: "05",
        title: "Har kuni hisobot va tezkor aloqa",
        desc: "Har bir bosqich bo'yicha doimiy aloqada bo'lib, bajarilgan ishlarni ko'rsatib boraman. Hech qachon haftalab javobsiz yo'qolib qolmayman.",
        icon: MessageSquare,
      },
      {
        num: "06",
        title: "Ishga tushgandan so'ng kafolat",
        desc: "Sayt serverga joylangandan keyin ham texnik jihatdan qo'llab-quvvatlayman: savollarga javob beraman va kafolat doirasida bepul tuzatishlar kiritaman.",
        icon: LifeBuoy,
      },
    ],
    ctaTitle: "Loyihangiz bo'yicha bepul konsultatsiya kerakmi?",
    ctaDesc: "G'oyangizni birgalikda tahlil qilamiz, optimal stek va aniq muddatlarni belgilab olamiz.",
    ctaBtn: "Telegramda muhokama qilish",
  };

  const contentRu = {
    tag: "ГАРАНТИИ",
    index: "(06)",
    heading: "Почему со мной надёжно и безопасно",
    subtitle:
      "Прямое общение без посредников, фиксированная стоимость и поддержка после запуска.",
    cards: [
      {
        num: "01",
        title: "Без субподряда (Прямая связь)",
        desc: "Задачу выполняю лично я. Вы общаетесь напрямую с тем, кто пишет код и отвечает за результат.",
        icon: UserCheck,
      },
      {
        num: "02",
        title: "Цена не растёт в процессе",
        desc: "Сначала фиксируем требования и стоимость. По ходу работы никаких внезапных доплат.",
        icon: DollarSign,
      },
      {
        num: "03",
        title: "Проще и выгоднее",
        desc: "Если задачу можно решить быстрее, надежнее и дешевле — сразу предложу этот путь.",
        icon: Lightbulb,
      },
      {
        num: "04",
        title: "Все доступы и код — ваши",
        desc: "Пишу чистый модульный код. Все исходники, ключи и права принадлежат вам на 100%.",
        icon: KeyRound,
      },
      {
        num: "05",
        title: "На связи каждый день",
        desc: "Отчитываюсь по этапам, показываю промежуточные результаты и оперативно отвечаю на вопросы.",
        icon: MessageSquare,
      },
      {
        num: "06",
        title: "Поддержка после сдачи",
        desc: "Остаюсь на связи после запуска проекта: бесплатные правки и консультации в рамках ТЗ.",
        icon: LifeBuoy,
      },
    ],
    ctaTitle: "Нужна консультация по вашему проекту?",
    ctaDesc: "Обсудим задачу, подберем оптимальный стек и рассчитаем точные сроки реализации.",
    ctaBtn: "Написать в Telegram",
  };

  const contentEn = {
    tag: "GUARANTEES",
    index: "(06)",
    heading: "Why Working With Me Is Reliable",
    subtitle:
      "Direct cooperation without middlemen, fixed transparent pricing, and post-launch support.",
    cards: [
      {
        num: "01",
        title: "No Subcontracting (Direct Contact)",
        desc: "I build your solution personally. You communicate directly with the engineer crafting your code.",
        icon: UserCheck,
      },
      {
        num: "02",
        title: "Fixed Pricing Guarantee",
        desc: "Requirements and budget are agreed upon upfront. No hidden costs or surprise rate hikes.",
        icon: DollarSign,
      },
      {
        num: "03",
        title: "Optimal & Cost-Effective",
        desc: "If there is a leaner, faster, and more cost-effective approach to your problem, I will propose it immediately.",
        icon: Lightbulb,
      },
      {
        num: "04",
        title: "Full Code Ownership",
        desc: "Clean, documented, scalable architecture. 100% of the repository and credentials belong to you.",
        icon: KeyRound,
      },
      {
        num: "05",
        title: "Daily Transparency",
        desc: "Regular progress updates at every milestone. Available daily across multiple timezones.",
        icon: MessageSquare,
      },
      {
        num: "06",
        title: "Post-Launch Warranty",
        desc: "I stay available after deployment for maintenance, technical inquiries, and bug-free assurance.",
        icon: LifeBuoy,
      },
    ],
    ctaTitle: "Need a Consultation on Your Project?",
    ctaDesc: "Let's explore your requirements, select the optimal stack, and estimate timeline.",
    ctaBtn: "Discuss in Telegram",
  };

  const c = language === "ru" ? contentRu : language === "en" ? contentEn : contentUz;

  return (
    <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient background light */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header in Asadbek Signature Style */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">{c.index}</span>
            <span className="h-[1px] w-12 bg-emerald-500/40" />
            <span className="text-xs uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400 font-semibold">
              {c.tag}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight max-w-3xl">
            {c.heading}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl font-sans">
            {c.subtitle}
          </p>
        </div>

        {/* 6 Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {c.cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/85 dark:bg-[#0A1410]/85 p-7 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Glow bloom */}
                <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-emerald-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      {card.num}
                    </span>
                    <div className="h-10 w-10 rounded-2xl flex items-center justify-center bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 group-hover:text-emerald-500 group-hover:border-emerald-500/40 transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading mb-2.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* High-conversion Trust CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-600/10 via-forest/10 to-teal-700/10 p-8 sm:p-10 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex flex-col text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Ochiq muloqot & Shaffoflik</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              {c.ctaTitle}
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              {c.ctaDesc}
            </p>
          </div>

          <a
            href="https://t.me/Musurmon_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 px-8 py-4 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all"
          >
            <Send className="h-4 w-4" />
            <span>{c.ctaBtn}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
