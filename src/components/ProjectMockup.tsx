"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Bot,
  ShoppingBag,
  TrendingUp,
  CheckCircle2,
  Copy,
  Check,
  Activity,
  Layers,
  ArrowUpRight,
  Palette,
  Monitor,
  RefreshCw,
} from "lucide-react";

interface ProjectMockupProps {
  projectId: string;
  className?: string;
  isCompact?: boolean;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({
  projectId,
  className = "",
  isCompact = false,
}) => {
  const [copied, setCopied] = useState(false);

  // Dynamic animation states for Boshqar.uz
  const [salesStep, setSalesStep] = useState(0);
  const [revenueStep, setRevenueStep] = useState(0);

  // Dynamic animation states for Jarvis AI
  const [jarvisStep, setJarvisStep] = useState(0);

  // Dynamic animation states for Uzum AI
  const [uzumStep, setUzumStep] = useState(0);

  // Timer loop for auto-updating animations every 3.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSalesStep((prev) => (prev + 1) % 4);
      setRevenueStep((prev) => (prev + 1) % 4);
      setJarvisStep((prev) => (prev + 1) % 3);
      setUzumStep((prev) => (prev + 1) % 3);
    }, 3800);

    return () => clearInterval(timer);
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  switch (projectId) {
    case "boshqar-uz": {
      const LIVE_TRANSACTIONS = [
        {
          id: "#2841",
          amount: "320,000 UZS",
          item: "Qahva & Nonushta to'plami",
          client: "CoffeeBar Pro",
          status: "To'landi",
        },
        {
          id: "#2842",
          amount: "1,450,000 UZS",
          item: "Smart POS printer & Barcode",
          client: "Optom Savdo",
          status: "To'landi",
        },
        {
          id: "#2843",
          amount: "890,000 UZS",
          item: "Kiyimlar savdosi (Ombor)",
          client: "Brend Do'kon",
          status: "To'landi",
        },
        {
          id: "#2844",
          amount: "185,000 UZS",
          item: "Mini market savati",
          client: "Supermarket #3",
          status: "To'landi",
        },
      ];

      const REVENUE_DATA = [
        { amount: "14.8M UZS", growth: "+18.4%", badge: "Avto-to'ldirish faol" },
        { amount: "15.3M UZS", growth: "+20.1%", badge: "Sinxronizatsiya (0.2s)" },
        { amount: "16.2M UZS", growth: "+22.7%", badge: "AI Smart POS Faol" },
        { amount: "16.9M UZS", growth: "+25.4%", badge: "Savdo rekordi yangilandi" },
      ];

      const currentTx = LIVE_TRANSACTIONS[salesStep];
      const currentRev = REVENUE_DATA[revenueStep];

      // Dynamic animated chart bar heights
      const barPatterns = [
        [35, 60, 45, 80, 95, 70, 100],
        [45, 70, 55, 90, 85, 80, 95],
        [50, 65, 75, 85, 100, 90, 90],
        [40, 55, 65, 75, 90, 85, 100],
      ];
      const activeBars = barPatterns[salesStep];

      return (
        <div
          className={`relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-[#0F291E]/95 via-[#091D14]/95 to-[#05120B]/98 text-white shadow-2xl backdrop-blur-2xl transition-all duration-500 group-hover:border-emerald-500/40 ${className}`}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 bg-emerald-500/15 rounded-full blur-2xl -z-10" />

          {/* Single Clean Top Window Bar (No double header!) */}
          <div className="flex items-center justify-between border-b border-emerald-500/20 bg-[#0A2216]/80 px-4 py-3 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 border border-rose-600/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 border border-amber-600/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
              <span className="ml-2 font-mono text-[11px] font-semibold text-emerald-100 flex items-center gap-1.5">
                <span>boshqar.uz — ERP/POS Live</span>
                <span className="text-[10px] text-emerald-400 font-normal hidden sm:inline">(Multi-tenant)</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Pulsing Live Radar Indicator */}
              <div className="flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[9.5px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  Live
                </span>
              </div>

              {/* Copy URL action */}
              <button
                onClick={() => handleCopy("https://boshqar.uz")}
                title="Havoladan nusxa olish"
                className="flex items-center gap-1 font-mono text-[10px] text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-400" />
                    <span>Nusxa olindi!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3 text-emerald-400" />
                    <span className="hidden sm:inline">Nusxa olish</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Inner ERP Layout with Dark Green Glassmorphic Cards */}
          <div className="p-4 sm:p-5 space-y-3.5">
            {/* Stat Cards Row */}
            <div className="grid grid-cols-3 gap-2.5">
              {/* Stat 1: Daily Revenue with Live Counter */}
              <div className="rounded-xl border border-emerald-500/20 bg-gradient-to-b from-[#143B2B]/60 to-[#0A2218]/70 p-3 backdrop-blur-md shadow-sm">
                <span className="text-[10px] text-emerald-300/80 block font-mono">Kunlik Tushum</span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentRev.amount}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm sm:text-base font-bold text-white font-mono block">
                      {currentRev.amount}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
                      <TrendingUp className="h-3 w-3" /> {currentRev.growth}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Stat 2: AI Smart Product Entry */}
              <div className="rounded-xl border border-emerald-500/20 bg-gradient-to-b from-[#143B2B]/60 to-[#0A2218]/70 p-3 backdrop-blur-md shadow-sm">
                <span className="text-[10px] text-emerald-300/80 block font-mono">AI Smart Entry</span>
                <span className="text-sm sm:text-base font-bold text-emerald-400 block font-mono">Faol</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRev.badge}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-[9.5px] text-emerald-300/70 font-mono block mt-0.5 truncate"
                  >
                    {currentRev.badge}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Stat 3: Enterprise Security & Tenant Isolation */}
              <div className="rounded-xl border border-emerald-500/20 bg-gradient-to-b from-[#143B2B]/60 to-[#0A2218]/70 p-3 backdrop-blur-md shadow-sm">
                <span className="text-[10px] text-emerald-300/80 block font-mono">Xavfsizlik</span>
                <span className="text-sm sm:text-base font-bold text-emerald-300 font-mono block">IDOR Safe</span>
                <span className="text-[9.5px] text-emerald-300/70 font-mono block mt-0.5">
                  Tenant Izolyatsiya
                </span>
              </div>
            </div>

            {/* Bottom Section: Dynamic Animated Chart + Live Rotating Sales */}
            <div className="grid grid-cols-12 gap-3 items-center rounded-xl border border-emerald-500/20 bg-gradient-to-br from-[#0C2419]/70 to-[#071710]/80 p-3.5 backdrop-blur-md">
              {/* Left Bar Chart */}
              <div className="col-span-7 sm:col-span-8 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-emerald-200">
                  <span className="flex items-center gap-1.5">
                    <Activity className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Haftalik Tranzaksiyalar</span>
                  </span>
                  <span className="text-emerald-400 font-semibold text-[10.5px]">1,280+ Savdo</span>
                </div>

                {/* Animated Chart Bars */}
                <div className="flex items-end gap-1.5 sm:gap-2 h-14 pt-1.5">
                  {activeBars.map((val, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center h-full justify-end">
                      <motion.div
                        animate={{ height: `${val}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="w-full rounded-t-sm bg-gradient-to-t from-emerald-800 via-green-600 to-emerald-400 opacity-90 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Live Transaction Box with Dynamic Updating Animation */}
              <div className="col-span-5 sm:col-span-4 border-l border-emerald-500/20 pl-3 space-y-1 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="text-[9.5px] font-mono text-emerald-300/80 uppercase tracking-wider block">
                    So&apos;nggi Savdo:
                  </span>
                  <RefreshCw className="h-2.5 w-2.5 text-emerald-400 animate-spin" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTx.id}
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-0.5"
                  >
                    <p className="font-bold text-white text-xs font-mono">
                      {currentTx.id} • {currentTx.amount}
                    </p>
                    <p className="text-[9.5px] text-emerald-200/80 font-sans truncate">
                      {currentTx.item}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[9.5px] text-emerald-400 font-mono font-semibold pt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                      <span>{currentTx.status}</span>
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      );
    }

    case "jarvis-ai": {
      const JARVIS_DIALOGS = [
        {
          q: "Lokal LLM xotirasi holatini tekshir va latency o'lcha.",
          ans: "100% Offline (Ollama). Latency: 12ms. Barcha sessiyalar toza, internetga chiqmagan.",
        },
        {
          q: "Oxirgi 4,210 ta tranzaksiyada xavfsizlik anomaliyalari bormi?",
          ans: "Tahlil yakunlandi (15ms): Hech qanday shubhali faollik aniqlanmadi. IDOR safe.",
        },
        {
          q: "Windows tizim telemetriyasini arxivlash protokoli qanday?",
          ans: "SQLite lokal bazasiga shifrlangan holda yozildi. Tashqi serverlarga ma'lumot jo'natilmadi.",
        },
      ];

      const currentDialog = JARVIS_DIALOGS[jarvisStep];

      return (
        <div
          className={`relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-[#0F291E]/95 via-[#091D14]/95 to-[#05120B]/98 text-white shadow-xl backdrop-blur-2xl transition-all duration-500 group-hover:border-emerald-500/40 ${className}`}
        >
          {/* Windows Header */}
          <div className="flex items-center justify-between border-b border-emerald-500/20 bg-[#0A2216]/80 px-3.5 py-2">
            <div className="flex items-center gap-2">
              <Bot className="h-4 w-4 text-emerald-400" />
              <span className="font-mono text-[11px] font-bold text-emerald-100">
                Jarvis AI — Tauri 2 Native
              </span>
            </div>
            <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 text-[9px] font-mono text-emerald-300 font-bold">
              Ollama: 100% Offline
            </span>
          </div>

          {/* Dynamic Animated Chat Interface */}
          <div className="p-3.5 space-y-2 text-xs">
            <div className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                U
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDialog.q}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl rounded-tl-none bg-[#143B2B]/70 border border-emerald-500/20 p-2 text-emerald-100 text-[11px]"
                >
                  {currentDialog.q}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-emerald-600 to-green-700 text-white flex items-center justify-center font-bold text-[10px] shrink-0 shadow-sm">
                AI
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDialog.ans}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl rounded-tl-none bg-emerald-950/60 border border-emerald-500/30 p-2.5 text-slate-200 text-[11px] space-y-1"
                >
                  <p className="font-bold text-emerald-400 flex items-center gap-1 text-[10px]">
                    <CheckCircle2 className="h-3 w-3" /> Mahalliy tahlil yakunlandi:
                  </p>
                  <p className="text-emerald-100/90 text-[10.5px] leading-relaxed">
                    {currentDialog.ans}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      );
    }

    case "uzum-ai-assistant": {
      const UZUM_PRODUCTS = [
        {
          name: "Simsiz Quloqchinlar Pro",
          price: "249,000 UZS",
          rating: "9.4 / 10",
          summary: "👍 Batareya 28s chidaydi. Tovush baland va tiniq. Xarid tavsiya etiladi.",
        },
        {
          name: "Ergonomik Smart Soat 8",
          price: "389,000 UZS",
          rating: "9.2 / 10",
          summary: "👍 AMOLED ekran, puls va qadam hisobi aniq. O'zbekcha menyu mavjud.",
        },
        {
          name: "Mexanik Gaming Klaviatura",
          price: "520,000 UZS",
          rating: "8.9 / 10",
          summary: "👍 Qulay bosilish, RGB chiroqlar. Narx/sifat balansi o'ta maqbul.",
        },
      ];

      const currentProduct = UZUM_PRODUCTS[uzumStep];

      return (
        <div
          className={`relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-[#0F291E]/95 via-[#091D14]/95 to-[#05120B]/98 text-white shadow-xl backdrop-blur-2xl transition-all duration-500 group-hover:border-emerald-500/40 ${className}`}
        >
          {/* Chrome Extension Header */}
          <div className="flex items-center justify-between border-b border-emerald-500/20 bg-[#0A2216]/80 px-3.5 py-2">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4 text-emerald-400" />
              <span className="font-mono text-[11px] font-bold text-emerald-100">
                uzum.uz / product / 84920
              </span>
            </div>
            <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 text-[9px] font-mono text-emerald-300 font-bold">
              Gemini 2.0 Flash
            </span>
          </div>

          <div className="p-3.5 space-y-2.5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.name}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between pb-1.5 border-b border-emerald-500/20">
                  <span className="text-xs font-bold text-white">
                    {currentProduct.name}
                  </span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    {currentProduct.price}
                  </span>
                </div>

                {/* AI Review Widget */}
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/50 p-2.5 text-[11px] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-400 text-[10px]">
                    <Sparkles className="h-3 w-3" />
                    <span>AI Xulosa: 1,420 ta sharh tahlili</span>
                  </div>
                  <p className="text-emerald-100/90 text-[10.5px] leading-snug">
                    {currentProduct.summary}
                  </p>
                  <p className="text-emerald-400 font-bold text-[10px] pt-0.5">
                    Tavsiya: Xarid qilish tavsiya etiladi ({currentProduct.rating}).
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      );
    }

    case "thumb-ai":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-[#0F291E]/95 via-[#091D14]/95 to-[#05120B]/98 text-white shadow-xl backdrop-blur-2xl transition-all duration-500 group-hover:border-emerald-500/40 ${className}`}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-emerald-500/20 bg-[#0A2216]/80 px-3.5 py-2">
            <div className="flex items-center gap-2">
              <Palette className="h-4 w-4 text-emerald-400" />
              <span className="font-mono text-[11px] font-bold text-emerald-100">
                ThumbAI Studio / FLUX 1.1
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 font-semibold">1280x720 Canvas</span>
          </div>

          <div className="p-3">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-emerald-500/30 bg-gradient-to-tr from-emerald-950 via-[#0B2117] to-black flex items-center justify-center p-3 text-center shadow-inner">
              <div className="space-y-1.5">
                <span className="text-sm font-black text-amber-300 drop-shadow-lg uppercase tracking-wide block">
                  AI BILAN 10X TEZROQ!
                </span>
                <span className="inline-block rounded-md bg-emerald-600 px-2 py-0.5 text-[9px] font-extrabold text-white uppercase tracking-wider shadow">
                  FLUX GENERATED
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case "icon-forge":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-[#0F291E]/95 via-[#091D14]/95 to-[#05120B]/98 text-white shadow-xl backdrop-blur-2xl transition-all duration-500 group-hover:border-emerald-500/40 ${className}`}
        >
          {/* Windows Header */}
          <div className="flex items-center justify-between border-b border-emerald-500/20 bg-[#0A2216]/80 px-3.5 py-2">
            <div className="flex items-center gap-2">
              <Monitor className="h-4 w-4 text-emerald-400" />
              <span className="font-mono text-[11px] font-bold text-emerald-100">
                IconForge — Windows Explorer
              </span>
            </div>
            <span className="rounded bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 text-[9px] font-mono text-emerald-400 font-bold">
              Native Rust
            </span>
          </div>

          <div className="p-3.5 flex items-center gap-3">
            <div className="h-16 w-16 rounded-xl border border-dashed border-emerald-400/60 bg-emerald-400/15 flex flex-col items-center justify-center text-emerald-400 font-black text-base shadow-sm shrink-0">
              <span>.ico</span>
              <span className="text-[8px] font-mono font-normal text-emerald-300">256px</span>
            </div>
            <div className="flex-1 space-y-1 text-[11px]">
              <div className="font-bold text-white text-xs">
                Node.js & Cargo Loyihalar
              </div>
              <div className="text-emerald-200/80 text-[10.5px]">
                Multi-res: 16px, 32px, 64px, 256px
              </div>
              <span className="inline-block text-emerald-400 font-mono text-[10px] font-semibold">
                ✓ Bir bosishda papka ikonkasi tayyor
              </span>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div
          className={`relative overflow-hidden rounded-xl border border-emerald-500/25 bg-gradient-to-br from-[#0F291E]/95 via-[#091D14]/95 to-[#05120B]/98 p-3 text-xs text-white ${className}`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20 font-mono text-[10px] text-emerald-300/80">
            <span>Terminal / Preview</span>
            <span className="text-emerald-400 font-semibold">Production Ready</span>
          </div>
          <div className="mt-2 text-emerald-100 text-[11px] flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            <span>Tekshirilgan va barqaror arxitektura</span>
          </div>
        </div>
      );
  }
};
