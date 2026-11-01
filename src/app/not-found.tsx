import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Sahifa Topilmadi | Azamqulov Musurmon",
  description: "Kechirasiz, siz qidirgan sahifa mavjud emas yoki boshqa manzilga ko'chirilgan.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md w-full space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-mono text-emerald-700 dark:text-emerald-400">
          <Sparkles className="h-3.5 w-3.5" />
          <span>404 XATOLIK</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Sahifa Topilmadi
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Kechirasiz, siz murojaat qilgan sahifa mavjud emas yoki o&apos;chirilgan.
          Asosiy sahifaga qaytib, portfolio va loyihalar bilan tanishishingiz mumkin.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all hover:scale-105 active:scale-95"
          >
            <Home className="h-4 w-4" />
            <span>Bosh Sahifaga Qaytish</span>
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 px-6 py-3 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-white transition-all hover:border-emerald-500/50"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Bog&apos;lanish</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
