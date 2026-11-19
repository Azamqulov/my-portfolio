"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Check,
  ArrowRight,
  Bot,
  AlertCircle,
  Loader2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Aos } from "@/components/Aos";
import { useLanguage } from "@/context/LanguageContext";

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage(t.contact.form.validationError);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmittedName(formState.name);
        setSubmitted(true);
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#10B981", "#2D6A4F", "#52B788", "#74C69D"],
        });
        setFormState({ name: "", email: "", message: "" });
      } else {
        setErrorMessage(data.error || t.contact.form.telegramError);
      }
    } catch {
      setErrorMessage(t.contact.form.networkError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-gradient-to-t from-emerald-600/10 via-green-900/10 to-transparent rounded-full blur-[140px] -z-10 dark:opacity-70 opacity-30" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Aos animation="fade-up" delay={0.05}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">(08)</span>
              <span className="h-[1px] w-12 bg-emerald-500/40" />
              <span className="text-xs uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400 font-semibold">
                {t.contact.tag}
              </span>
            </div>
          </Aos>
          <Aos animation="fade-up" delay={0.12}>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
            >
              {t.contact.heading}
            </h2>
          </Aos>
          <Aos animation="fade-up" delay={0.18}>
            <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal">
              {t.contact.subtitle}
            </p>
          </Aos>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Details */}
          <Aos
            animation="fade-right"
            delay={0.15}
            className="lg:col-span-5 flex flex-col space-y-5"
          >
            {/* Personal Telegram Card */}
            <a
              href={PERSONAL_INFO.contacts.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl border border-emerald-500/40 dark:border-emerald-500/35 bg-white/90 dark:bg-[#0A1410]/90 backdrop-blur-md shadow-sm hover:shadow-md hover:border-emerald-500 transition-all"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <Send className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">
                  {t.contact.telegramDirectLabel || "Shaxsiy Telegram"}
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors font-mono">
                  {PERSONAL_INFO.contacts.telegram}
                </span>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.contacts.email}`}
              className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#0A1410]/90 backdrop-blur-md shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">
                  {t.contact.emailLabel}
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {PERSONAL_INFO.contacts.email}
                </span>
              </div>
            </a>

            {/* Phone Card (+998 77 040 46 24) */}
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
              className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#0A1410]/90 backdrop-blur-md shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">
                  {t.contact.phoneLabel}
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {PERSONAL_INFO.phone}
                </span>
              </div>
            </a>

            {/* Telegram Bot Card */}
            <a
              href="https://t.me/azamqulovService_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl border border-emerald-500/30 dark:border-emerald-500/25 bg-emerald-500/5 dark:bg-emerald-500/10 backdrop-blur-md shadow-sm hover:shadow-md hover:border-emerald-500/50 hover:bg-emerald-500/15 transition-all"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600/20 to-teal-700/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 group-hover:scale-110 transition-transform shadow-inner">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-bold uppercase tracking-wider block">
                    {t.contact.telegramBotLabel}
                  </span>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                </div>
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors font-mono">
                  @azamqulovService_bot
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#0A1410]/90 backdrop-blur-md shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">
                  {t.contact.locationLabel}
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {t.contact.locationValue}
                </span>
              </div>
            </div>
          </Aos>

          {/* Right Column: Form with Fun Doodle */}
          <Aos
            animation="fade-left"
            delay={0.15}
            className="lg:col-span-7 relative"
          >
            {/* Playful Hand-Drawn Doodle */}
            <div className="hidden xl:block absolute -top-10 -right-16 text-emerald-600/80 dark:text-emerald-400/90 font-serif italic text-lg select-none transform rotate-6 pointer-events-none">
              <div className="flex flex-col items-center">
                <span>{t.contact.doodleText1}</span>
                <span>{t.contact.doodleText2}</span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-[#0A1410]/95 p-6 sm:p-8 backdrop-blur-md shadow-xl dark:shadow-2xl">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center p-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg">
                    <Check className="h-6 w-6 stroke-[3]" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {t.contact.form.successTitle}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm">
                    {t.contact.form.successDesc.replace("{name}", submittedName)}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSubmittedName("");
                      setFormState({ name: "", email: "", message: "" });
                      setErrorMessage(null);
                    }}
                    className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 underline"
                  >
                    {t.contact.form.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Error Banner */}
                  {errorMessage && (
                    <div className="flex items-center gap-2 p-3.5 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-medium">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        aria-label={t.contact.form.nameLabel}
                        placeholder={t.contact.form.namePlaceholder}
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-[#060B08]/80 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        aria-label={t.contact.form.emailLabel}
                        placeholder={t.contact.form.emailPlaceholder}
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-[#060B08]/80 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Message */}
                  <div>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      aria-label={t.contact.form.messageLabel}
                      placeholder={t.contact.form.messagePlaceholder}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-[#060B08]/80 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Row 3: Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary-glow hover-sheen w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white transition-all active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>{t.contact.form.submittingBtn}</span>
                        </>
                      ) : (
                        <>
                          <span>{t.contact.form.submitBtn}</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Aos>
        </div>
      </div>
    </section>
  );
};
