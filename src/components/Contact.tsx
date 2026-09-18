"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MessageSquare,
  Github,
  Copy,
  Check,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Contact: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    emailOrTelegram: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.emailOrTelegram || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00D9C0", "#6366F1", "#38BDF8"],
      });
    }, 600);
  };

  const contactCards = [
    {
      key: "telegram",
      label: "Telegram",
      value: PERSONAL_INFO.contacts.telegram,
      copyValue: "@Musurmon_dev",
      url: PERSONAL_INFO.contacts.telegramUrl,
      icon: MessageSquare,
      desc: "Eng tez javob berish kanali (15-30 daqiqa)",
      badge: "Tezkor",
    },
    {
      key: "email",
      label: "Email",
      value: PERSONAL_INFO.contacts.email,
      copyValue: PERSONAL_INFO.contacts.email,
      url: PERSONAL_INFO.contacts.emailUrl,
      icon: Mail,
      desc: "Rasmiy takliflar va loyiha hujjatlari uchun",
      badge: "Rasmiy",
    },
    {
      key: "github",
      label: "GitHub",
      value: `github.com/${PERSONAL_INFO.contacts.github}`,
      copyValue: PERSONAL_INFO.contacts.githubUrl,
      url: PERSONAL_INFO.contacts.githubUrl,
      icon: Github,
      desc: "Ochiq kodli repozitoriyalar va commitlar tarixi",
      badge: "Kod",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-600/30 dark:border-brand-teal/30 bg-teal-50 dark:bg-brand-teal/10 px-3.5 py-1 text-xs font-mono text-teal-700 dark:text-brand-teal mb-3 font-semibold"
          >
            <span>06 // ALOQA & HAMKORLIK</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Birgalikda yangi{" "}
            <span className="bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-brand-teal dark:to-brand-indigo bg-clip-text text-transparent">
              mahsulot yaratamiz
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-xl text-slate-600 dark:text-slate-300 text-sm sm:text-base"
          >
            Sizda yangi biznes loyiha g&apos;oyasi bormi yoki mavjud tizimingizni
            AI va zamonaviy texnologiyalar bilan kuchaytirmoqchimisiz? Keling,
            suhbatlashamiz.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              const isCopied = copiedKey === card.key;
              return (
                <motion.div
                  key={card.key}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121318] p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-teal/50"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 dark:bg-brand-teal/15 text-teal-600 dark:text-brand-teal border border-teal-500/20 dark:border-brand-teal/30">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                            {card.label}
                          </h4>
                          <span className="text-[10px] font-mono font-semibold text-teal-700 dark:text-brand-teal bg-teal-50 dark:bg-brand-teal/10 px-2 py-0.5 rounded">
                            {card.badge}
                          </span>
                        </div>
                        <span className="text-xs text-slate-700 dark:text-slate-300 font-mono font-semibold">
                          {card.value}
                        </span>
                      </div>
                    </div>

                    {/* Copy and Open Buttons */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleCopy(card.copyValue, card.key)}
                        aria-label="Nusxalash"
                        title="Nusxalash"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors"
                      >
                        {isCopied ? (
                          <Check className="h-3.5 w-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>

                      <a
                        href={card.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${card.label} havolasi`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-brand-teal hover:border-brand-teal/40 transition-colors"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-slate-500 dark:text-slate-400">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}

            {/* Location & Status note */}
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-white/[0.03] p-4 text-xs text-slate-700 dark:text-slate-300 flex items-center gap-3">
              <MapPin className="h-4 w-4 text-teal-600 dark:text-brand-teal shrink-0" />
              <span>
                Joylashuv: <strong>O&apos;zbekiston (Toshkent / Remote)</strong>.
                Dunyoning istalgan nuqtasidan loyihalarni qabul qilaman.
              </span>
            </div>
          </div>

          {/* Right Direct Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121318] p-7 sm:p-9 shadow-lg dark:shadow-2xl"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Tezkor Xabar Yuborish
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Xabaringiz to&apos;g&apos;ridan-to&apos;g&apos;ri Telegram profilimga
              yo&apos;naltiriladi yoki nusxa qilib olinadi.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center p-8 rounded-2xl border border-teal-500/30 bg-teal-50 dark:bg-brand-teal/10 space-y-4"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal text-[#0A0A0B]">
                  <Check className="h-7 w-7 stroke-[3]" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Xabaringiz Qabul Qilindi!</h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 max-w-sm leading-relaxed">
                  Rahmat, {formState.name}! Tez orada siz bilan bog&apos;lanaman.
                  Agar shoshilinch bo&apos;lsa, Telegram orqali to&apos;g&apos;ridan-to&apos;g&apos;ri yozishingiz mumkin.
                </p>
                <a
                  href={`https://t.me/Musurmon_dev?text=${encodeURIComponent(
                    `Salom Musurmon, mening ismim ${formState.name}. Xabar: ${formState.message}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-teal to-brand-indigo px-5 py-2.5 text-xs font-bold text-white shadow-md"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Telegram orqali ochish</span>
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Ismingiz *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masalan: Sardor Aliyev"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Telegram user yoki Email manzilingiz *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@username yoki pochta@domain.uz"
                    value={formState.emailOrTelegram}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        emailOrTelegram: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Loyiha haqida qisqacha ma&apos;lumot *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Loyiha maqsadi, muddat va asosiy talablar haqida yozing..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-teal to-brand-indigo py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-teal/20 transition-all hover:scale-[1.01] hover:shadow-brand-indigo/30 active:scale-[0.99] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Yuborilmoqda...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Xabarni Yuborish</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
