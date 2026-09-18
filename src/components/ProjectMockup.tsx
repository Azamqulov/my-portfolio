"use client";

import React from "react";
import {
  Sparkles,
  Layers,
  Bot,
  Monitor,
  CheckCircle2,
  TrendingUp,
  ShoppingBag,
  Palette,
  ShieldCheck,
  Cpu,
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
  switch (projectId) {
    case "boshqar-uz":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl border border-slate-700/50 dark:border-white/10 bg-[#0B0D13] text-white shadow-md transition-transform duration-500 group-hover:scale-[1.01] ${className}`}
        >
          {/* Top Window Bar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#12151E] px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
              <span className="ml-2 font-mono text-[11px] text-slate-300">
                boshqar.uz — ERP/POS System
              </span>
            </div>
            <span className="rounded-full bg-brand-teal/20 border border-brand-teal/40 px-2.5 py-0.5 font-mono text-[10px] font-bold text-brand-teal">
              Multi-tenant Live
            </span>
          </div>

          {/* Inner ERP Layout */}
          <div className="p-4 sm:p-5 space-y-3.5">
            {/* Stat Cards Row */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
                <span className="text-[10px] text-slate-400 block font-mono">Kunlik Tushum</span>
                <span className="text-sm sm:text-base font-bold text-white font-mono">14.8M UZS</span>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
                  <TrendingUp className="h-3 w-3" /> +18.4%
                </span>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
                <span className="text-[10px] text-slate-400 block font-mono">AI Smart Entry</span>
                <span className="text-sm sm:text-base font-bold text-brand-teal">Faol</span>
                <span className="text-[10px] text-slate-400 font-mono block mt-0.5">Avto-to&apos;ldirish</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
                <span className="text-[10px] text-slate-400 block font-mono">Xavfsizlik</span>
                <span className="text-sm sm:text-base font-bold text-emerald-400">IDOR Safe</span>
                <span className="text-[10px] text-slate-400 font-mono block mt-0.5">Tenant Izolyatsiya</span>
              </div>
            </div>

            {/* Bottom Section: Chart + Live POS Sync */}
            <div className="grid grid-cols-12 gap-3 items-center rounded-xl border border-white/10 bg-white/[0.02] p-3">
              <div className="col-span-8 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span>Haftalik Tranzaksiyalar</span>
                  <span className="text-brand-teal font-semibold">1,280+ Buyurtma</span>
                </div>
                <div className="flex items-end gap-2 h-12 pt-1">
                  {[35, 60, 45, 80, 95, 70, 100].map((val, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div
                        style={{ height: `${val}%` }}
                        className="w-full rounded-t bg-gradient-to-t from-brand-indigo to-brand-teal opacity-90 transition-all duration-300 group-hover:opacity-100"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-4 border-l border-white/10 pl-3 space-y-1 text-[11px]">
                <span className="text-[10px] font-mono text-slate-400 block">So&apos;nggi Savdo:</span>
                <p className="font-bold text-white text-xs">#2841 • 320,000 UZS</p>
                <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                  <CheckCircle2 className="h-3 w-3" /> To&apos;landi
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case "jarvis-ai":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl border border-slate-700/50 dark:border-white/10 bg-[#0B0D13] text-white shadow-md transition-transform duration-500 group-hover:scale-[1.01] ${className}`}
        >
          {/* Windows Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#12151E] px-3.5 py-2">
            <div className="flex items-center gap-2">
              <Bot className="h-4 w-4 text-brand-indigo" />
              <span className="font-mono text-[11px] font-bold text-slate-200">
                Jarvis AI — Tauri 2 Native
              </span>
            </div>
            <span className="rounded bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 text-[9px] font-mono text-emerald-300">
              Ollama: Local
            </span>
          </div>

          {/* Chat Interface Preview */}
          <div className="p-3.5 space-y-2 text-xs">
            <div className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-lg bg-brand-indigo/30 border border-brand-indigo/40 text-brand-indigo flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                U
              </div>
              <div className="rounded-xl rounded-tl-none bg-white/[0.06] p-2 text-slate-200 text-[11px]">
                So&apos;nggi tranzaksiyalarni tahlil qil va anomaliyalarni ko&apos;rsat.
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-brand-teal to-brand-indigo text-white flex items-center justify-center font-bold text-[10px] shrink-0 shadow-sm">
                AI
              </div>
              <div className="rounded-xl rounded-tl-none bg-brand-teal/10 border border-brand-teal/30 p-2.5 text-slate-200 text-[11px] space-y-1">
                <p className="font-bold text-brand-teal flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Mahalliy tahlil yakunlandi (12ms):
                </p>
                <p className="text-slate-300 text-[10.5px] leading-relaxed">
                  4,210 ta yozuv tekshirildi. Barcha sessiyalar toza, internetga chiqmagan (100% Offline).
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    case "uzum-ai-assistant":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl border border-slate-700/50 dark:border-white/10 bg-[#0B0D13] text-white shadow-md transition-transform duration-500 group-hover:scale-[1.01] ${className}`}
        >
          {/* Chrome Extension Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#12151E] px-3.5 py-2">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4 text-brand-teal" />
              <span className="font-mono text-[11px] font-bold text-slate-200">
                uzum.uz / product / 84920
              </span>
            </div>
            <span className="rounded bg-brand-teal/20 border border-brand-teal/40 px-2 py-0.5 text-[9px] font-mono text-brand-teal font-bold">
              Gemini 2.0 Flash
            </span>
          </div>

          <div className="p-3.5 space-y-2.5">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
              <span className="text-xs font-bold text-white">
                Simsiz Quloqchinlar Pro
              </span>
              <span className="text-xs font-bold text-brand-teal font-mono">249,000 UZS</span>
            </div>

            {/* AI Review Widget */}
            <div className="rounded-xl border border-brand-teal/30 bg-brand-teal/10 p-2.5 text-[11px] space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-brand-teal text-[10px]">
                <Sparkles className="h-3 w-3" />
                <span>AI Xulosa: 1,420 ta sharh tahlili</span>
              </div>
              <p className="text-slate-200 text-[10.5px] leading-snug">
                👍 Batareya 28s chidaydi. Tovush baland va tiniq.
              </p>
              <p className="text-emerald-400 font-bold text-[10px] pt-0.5">
                Tavsiya: Xarid qilish tavsiya etiladi (9.4 / 10).
              </p>
            </div>
          </div>
        </div>
      );

    case "thumb-ai":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl border border-slate-700/50 dark:border-white/10 bg-[#0B0D13] text-white shadow-md transition-transform duration-500 group-hover:scale-[1.01] ${className}`}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#12151E] px-3.5 py-2">
            <div className="flex items-center gap-2">
              <Palette className="h-4 w-4 text-pink-400" />
              <span className="font-mono text-[11px] font-bold text-slate-200">
                ThumbAI Studio / FLUX 1.1
              </span>
            </div>
            <span className="text-[10px] font-mono text-pink-400 font-semibold">1280x720 Canvas</span>
          </div>

          <div className="p-3">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-gradient-to-tr from-purple-900 via-indigo-950 to-black flex items-center justify-center p-3 text-center shadow-inner">
              <div className="space-y-1.5">
                <span className="text-sm font-black text-amber-300 drop-shadow-lg uppercase tracking-wide block">
                  AI BILAN 10X TEZROQ!
                </span>
                <span className="inline-block rounded-md bg-red-600 px-2 py-0.5 text-[9px] font-extrabold text-white uppercase tracking-wider shadow">
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
          className={`relative overflow-hidden rounded-2xl border border-slate-700/50 dark:border-white/10 bg-[#0B0D13] text-white shadow-md transition-transform duration-500 group-hover:scale-[1.01] ${className}`}
        >
          {/* Windows Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#12151E] px-3.5 py-2">
            <div className="flex items-center gap-2">
              <Monitor className="h-4 w-4 text-amber-400" />
              <span className="font-mono text-[11px] font-bold text-slate-200">
                IconForge — Windows Explorer
              </span>
            </div>
            <span className="rounded bg-amber-500/20 border border-amber-500/40 px-2 py-0.5 text-[9px] font-mono text-amber-400 font-bold">
              Native Rust
            </span>
          </div>

          <div className="p-3.5 flex items-center gap-3">
            <div className="h-16 w-16 rounded-xl border border-dashed border-amber-400/60 bg-amber-400/15 flex flex-col items-center justify-center text-amber-400 font-black text-base shadow-sm shrink-0">
              <span>.ico</span>
              <span className="text-[8px] font-mono font-normal text-amber-300">256px</span>
            </div>
            <div className="flex-1 space-y-1 text-[11px]">
              <div className="font-bold text-white text-xs">
                Node.js & Cargo Loyihalar
              </div>
              <div className="text-slate-300 text-[10.5px]">
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
          className={`relative overflow-hidden rounded-xl border border-slate-700/50 dark:border-white/10 bg-[#0B0D13] p-3 text-xs text-white ${className}`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-[10px] text-slate-400">
            <span>Terminal / Preview</span>
            <span className="text-brand-teal font-semibold">Production Ready</span>
          </div>
          <div className="mt-2 text-slate-300 text-[11px] flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal" />
            <span>Tekshirilgan va barqaror arxitektura</span>
          </div>
        </div>
      );
  }
};
