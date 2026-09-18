"use client";

import React from "react";
import {
  Sparkles,
  Layers,
  Terminal,
  Cpu,
  ShoppingBag,
  Palette,
  Bot,
  Monitor,
  CheckCircle2,
  TrendingUp,
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
          className={`relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#0E1015] shadow-lg transition-transform duration-500 group-hover:scale-[1.02] ${className}`}
        >
          {/* Top Window Bar */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 bg-slate-200/70 dark:bg-[#161820] px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 font-mono text-[11px] text-slate-700 dark:text-slate-300">
                boshqar.uz / dashboard
              </span>
            </div>
            <span className="rounded-full bg-brand-teal/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-brand-teal">
              Multi-tenant Live
            </span>
          </div>

          {/* Inner ERP Layout */}
          <div className="p-4 sm:p-5 grid grid-cols-12 gap-3 bg-gradient-to-br from-white to-slate-50 dark:from-[#12141A] dark:to-[#0B0C10]">
            {/* Sidebar Mock */}
            <div className="col-span-3 hidden sm:flex flex-col gap-2 border-r border-slate-200 dark:border-white/10 pr-3">
              <div className="flex items-center gap-1.5 font-bold text-xs text-brand-teal pb-2 border-b border-slate-200 dark:border-white/10">
                <Layers className="h-3.5 w-3.5" />
                <span>UBMS ERP</span>
              </div>
              {["Savdo (POS)", "Ombor", "Moliya", "Mijozlar", "AI Product"].map((item, idx) => (
                <div
                  key={item}
                  className={`rounded-lg px-2 py-1.5 text-[11px] font-medium flex items-center justify-between ${
                    idx === 0
                      ? "bg-brand-teal/10 text-brand-teal font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5"
                  }`}
                >
                  <span>{item}</span>
                  {idx === 0 && <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />}
                </div>
              ))}
            </div>

            {/* Main Content Area */}
            <div className="col-span-12 sm:col-span-9 flex flex-col gap-3">
              {/* Stat Cards Row */}
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#181A22] p-2.5 shadow-sm">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Kunlik Tushum</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-slate-100">14.8M UZS</span>
                  <span className="text-[9px] text-emerald-500 font-mono flex items-center gap-0.5">
                    <TrendingUp className="h-2.5 w-2.5" /> +18.4%
                  </span>
                </div>
                <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#181A22] p-2.5 shadow-sm">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block">AI Smart Entry</span>
                  <span className="text-sm font-bold text-brand-teal">Faol</span>
                  <span className="text-[9px] text-slate-400 font-mono">Autofill on</span>
                </div>
                <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#181A22] p-2.5 shadow-sm">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Xavfsizlik</span>
                  <span className="text-sm font-bold text-emerald-500">IDOR Safe</span>
                  <span className="text-[9px] text-slate-400 font-mono">Tenant isolation</span>
                </div>
              </div>

              {/* Bar Chart Simulation */}
              <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#181A22] p-3">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <span>Haftalik Tranzaksiyalar</span>
                  <span className="font-mono text-brand-teal text-[10px]">Real-time Sync</span>
                </div>
                <div className="flex items-end gap-2 h-14 pt-2">
                  {[40, 65, 50, 85, 95, 75, 100].map((val, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        style={{ height: `${val}%` }}
                        className="w-full rounded-t bg-gradient-to-t from-brand-indigo to-brand-teal opacity-90 transition-all duration-500 group-hover:opacity-100"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "jarvis-ai":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#0E1015] shadow-lg transition-transform duration-500 group-hover:scale-[1.02] ${className}`}
        >
          {/* Windows Header */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 bg-slate-200/70 dark:bg-[#161820] px-3 py-2">
            <div className="flex items-center gap-2">
              <Bot className="h-3.5 w-3.5 text-brand-indigo" />
              <span className="font-mono text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                Jarvis AI — Tauri 2 Native
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Ollama: qwen2.5:7b (Local)</span>
            </div>
          </div>

          {/* Chat Interface Preview */}
          <div className="p-3.5 space-y-2.5 bg-white dark:bg-[#101217] text-xs">
            <div className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-lg bg-brand-indigo/20 text-brand-indigo flex items-center justify-center font-mono font-bold text-[10px]">
                U
              </div>
              <div className="rounded-xl rounded-tl-none bg-slate-100 dark:bg-white/5 p-2 text-slate-700 dark:text-slate-300 max-w-[85%] text-[11px]">
                So&apos;nggi SQLite tranzaksiyalarini tahlil qil va anomaliyalarni ko&apos;rsat.
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-brand-teal to-brand-indigo text-white flex items-center justify-center font-bold text-[10px]">
                AI
              </div>
              <div className="rounded-xl rounded-tl-none bg-gradient-to-r from-brand-teal/10 to-brand-indigo/10 border border-brand-teal/20 p-2.5 text-slate-800 dark:text-slate-200 max-w-[88%] text-[11px] space-y-1">
                <p className="font-medium text-brand-teal">✓ Mahalliy tahlil yakunlandi (12ms):</p>
                <p className="text-slate-600 dark:text-slate-300">
                  4,210 ta yozuv tekshirildi. Barcha sessiyalar toza, internetga ma&apos;lumot chiqmagan (100% Offline).
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    case "uzum-ai-assistant":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#0E1015] shadow-lg transition-transform duration-500 group-hover:scale-[1.02] ${className}`}
        >
          {/* Chrome Extension Header */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 bg-slate-200/70 dark:bg-[#161820] px-3 py-2">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-3.5 w-3.5 text-brand-teal" />
              <span className="font-mono text-[11px] text-slate-700 dark:text-slate-300">
                uzum.uz / product / 84920
              </span>
            </div>
            <span className="rounded bg-brand-teal/15 px-1.5 py-0.5 text-[9px] font-mono text-brand-teal">
              Gemini 2.0 Flash
            </span>
          </div>

          <div className="p-3 bg-white dark:bg-[#12141A] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Simsiz Quloqchinlar Pro
              </span>
              <span className="text-xs font-bold text-brand-teal">249,000 so&apos;m</span>
            </div>

            {/* AI Review summary widget floating */}
            <div className="rounded-xl border border-brand-teal/30 bg-brand-teal/10 p-2.5 text-[11px] space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-brand-teal text-[10px]">
                <Sparkles className="h-3 w-3" />
                <span>AI Xulosa: 1,420 ta sharh tahlili</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-tight">
                👍 Batareya 28 soat chidaydi. Tovush baland va tiniq.
              </p>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-[10px]">
                Tavsiya: Xarid qilish tavsiya etiladi (9.4 / 10).
              </p>
            </div>
          </div>
        </div>
      );

    case "thumb-ai":
      return (
        <div
          className={`relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#0E1015] shadow-lg transition-transform duration-500 group-hover:scale-[1.02] ${className}`}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 bg-slate-200/70 dark:bg-[#161820] px-3 py-2">
            <div className="flex items-center gap-2">
              <Palette className="h-3.5 w-3.5 text-pink-500" />
              <span className="font-mono text-[11px] text-slate-700 dark:text-slate-300">
                ThumbAI Studio / FLUX 1.1
              </span>
            </div>
            <span className="text-[10px] font-mono text-pink-500">1280x720 Canvas</span>
          </div>

          <div className="p-3 bg-white dark:bg-[#12141A]">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-200 dark:border-white/10 bg-gradient-to-tr from-purple-900 via-indigo-900 to-black flex items-center justify-center p-3 text-center">
              <div className="space-y-1">
                <span className="text-sm sm:text-base font-black text-amber-300 drop-shadow-md uppercase tracking-wide block">
                  AI BILAN 10X TEZROQ!
                </span>
                <span className="inline-block rounded bg-red-600 px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">
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
          className={`relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#0E1015] shadow-lg transition-transform duration-500 group-hover:scale-[1.02] ${className}`}
        >
          {/* Windows Header */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 bg-slate-200/70 dark:bg-[#161820] px-3 py-2">
            <div className="flex items-center gap-2">
              <Monitor className="h-3.5 w-3.5 text-amber-500" />
              <span className="font-mono text-[11px] text-slate-700 dark:text-slate-300">
                IconForge — Windows Explorer Editor
              </span>
            </div>
            <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-[9px] font-mono text-amber-500">
              Native Rust
            </span>
          </div>

          <div className="p-3 bg-white dark:bg-[#12141A] flex items-center gap-3">
            <div className="h-16 w-16 rounded-xl border border-dashed border-amber-400/50 bg-amber-400/10 flex items-center justify-center text-amber-500 font-bold text-lg">
              ico
            </div>
            <div className="flex-1 space-y-1 text-[11px]">
              <div className="font-semibold text-slate-800 dark:text-slate-200">
                Proyekt: Node.js / Cargo papka
              </div>
              <div className="text-slate-500 dark:text-slate-400">
                Multi-resolutions: 16px, 32px, 64px, 128px, 256px
              </div>
              <span className="inline-block text-emerald-500 font-mono text-[10px]">
                ✓ Bir bosishda papka ikonkasi o&apos;zgardi
              </span>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div
          className={`relative overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-3 text-xs ${className}`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/5 font-mono text-[10px] text-slate-500">
            <span>Terminal / Preview</span>
            <span className="text-brand-teal">Ready</span>
          </div>
          <div className="mt-2 text-slate-600 dark:text-slate-400 text-[11px] flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal" />
            <span>Optimizatsiyalangan va tekshirilgan arxitektura</span>
          </div>
        </div>
      );
  }
};
