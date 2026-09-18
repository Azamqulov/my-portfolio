"use client";

import React, { useEffect, useRef } from "react";

type ShapeType = "hero" | "about" | "skills" | "projects" | "contact";

interface Point {
  x: number;
  y: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  baseX: number;
  baseY: number;
  size: number;
  baseAlpha: number;
  colorDark: string;
  colorLight: string;
  phase: number;
}

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const isMobile = width < 768;
    const particleCount = isMobile ? 85 : 210;

    let currentShape: ShapeType = "hero";
    let particles: Particle[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 110,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Color palettes
    const darkColors = ["#00D9C0", "#38BDF8", "#6366F1", "#818CF8", "#A855F7"];
    const lightColors = ["#0D9488", "#0284C7", "#4F46E5", "#6366F1", "#334155"];

    // -------------------------------------------------------------
    // SHAPE GENERATORS (Target Coordinates)
    // -------------------------------------------------------------

    // Helper: sample points evenly along a line segment
    const sampleLine = (p1: Point, p2: Point, count: number): Point[] => {
      const pts: Point[] = [];
      for (let i = 0; i <= count; i++) {
        const t = count === 0 ? 0.5 : i / count;
        pts.push({
          x: p1.x + (p2.x - p1.x) * t,
          y: p1.y + (p2.y - p1.y) * t,
        });
      }
      return pts;
    };

    // 1. Hero Shape: </ > (Code Brackets)
    const generateHeroShape = (w: number, h: number, count: number): Point[] => {
      const cx = w / 2;
      const cy = h / 2;
      const scale = Math.min(w, h) * (isMobile ? 0.38 : 0.32);

      const pts: Point[] = [];
      const perPart = Math.floor(count / 3);

      // Left bracket '<'
      const leftTip: Point = { x: cx - scale * 0.9, y: cy };
      const leftTop: Point = { x: cx - scale * 0.45, y: cy - scale * 0.7 };
      const leftBottom: Point = { x: cx - scale * 0.45, y: cy + scale * 0.7 };
      pts.push(...sampleLine(leftTop, leftTip, Math.floor(perPart / 2)));
      pts.push(...sampleLine(leftTip, leftBottom, Math.floor(perPart / 2)));

      // Center slash '/'
      const slashTop: Point = { x: cx + scale * 0.15, y: cy - scale * 0.85 };
      const slashBottom: Point = { x: cx - scale * 0.15, y: cy + scale * 0.85 };
      pts.push(...sampleLine(slashTop, slashBottom, perPart));

      // Right bracket '>'
      const rightTip: Point = { x: cx + scale * 0.9, y: cy };
      const rightTop: Point = { x: cx + scale * 0.45, y: cy - scale * 0.7 };
      const rightBottom: Point = { x: cx + scale * 0.45, y: cy + scale * 0.7 };
      pts.push(...sampleLine(rightTop, rightTip, Math.floor(perPart / 2)));
      pts.push(...sampleLine(rightTip, rightBottom, Math.floor(perPart / 2)));

      // Pad remaining points to reach exact count
      while (pts.length < count) {
        pts.push({
          x: cx + (Math.random() - 0.5) * scale * 1.5,
          y: cy + (Math.random() - 0.5) * scale * 1.2,
        });
      }
      return pts.slice(0, count);
    };

    // 2. About Shape: Circular Monogram & Profile Core
    const generateAboutShape = (w: number, h: number, count: number): Point[] => {
      const cx = w / 2;
      const cy = h / 2;
      const r = Math.min(w, h) * (isMobile ? 0.36 : 0.28);
      const pts: Point[] = [];

      const circleCount = Math.floor(count * 0.55);
      for (let i = 0; i < circleCount; i++) {
        const theta = (i / circleCount) * Math.PI * 2;
        pts.push({
          x: cx + Math.cos(theta) * r,
          y: cy + Math.sin(theta) * r,
        });
      }

      // Inner Monogram "A" & "M"
      const innerCount = count - circleCount;
      const aLeft: Point = { x: cx - r * 0.5, y: cy + r * 0.45 };
      const aPeak: Point = { x: cx - r * 0.25, y: cy - r * 0.45 };
      const aRight: Point = { x: cx, y: cy + r * 0.45 };
      const aBar1: Point = { x: cx - r * 0.38, y: cy + r * 0.05 };
      const aBar2: Point = { x: cx - r * 0.12, y: cy + r * 0.05 };

      const mStart: Point = { x: cx, y: cy + r * 0.45 };
      const mTopL: Point = { x: cx, y: cy - r * 0.45 };
      const mMid: Point = { x: cx + r * 0.25, y: cy };
      const mTopR: Point = { x: cx + r * 0.5, y: cy - r * 0.45 };
      const mEnd: Point = { x: cx + r * 0.5, y: cy + r * 0.45 };

      pts.push(...sampleLine(aLeft, aPeak, Math.floor(innerCount / 7)));
      pts.push(...sampleLine(aPeak, aRight, Math.floor(innerCount / 7)));
      pts.push(...sampleLine(aBar1, aBar2, Math.floor(innerCount / 14)));

      pts.push(...sampleLine(mStart, mTopL, Math.floor(innerCount / 7)));
      pts.push(...sampleLine(mTopL, mMid, Math.floor(innerCount / 7)));
      pts.push(...sampleLine(mMid, mTopR, Math.floor(innerCount / 7)));
      pts.push(...sampleLine(mTopR, mEnd, Math.floor(innerCount / 7)));

      while (pts.length < count) {
        pts.push({ x: cx, y: cy });
      }
      return pts.slice(0, count);
    };

    // 3. Skills Shape: Neural Network Graph (Constellation Clusters)
    const generateSkillsShape = (w: number, h: number, count: number): Point[] => {
      const cx = w / 2;
      const cy = h / 2;
      const scale = Math.min(w, h) * (isMobile ? 0.42 : 0.34);
      const pts: Point[] = [];

      // 6 Network Hubs
      const hubs: Point[] = [
        { x: cx, y: cy },
        { x: cx - scale * 0.8, y: cy - scale * 0.5 },
        { x: cx + scale * 0.8, y: cy - scale * 0.5 },
        { x: cx - scale * 0.7, y: cy + scale * 0.6 },
        { x: cx + scale * 0.7, y: cy + scale * 0.6 },
        { x: cx, y: cy - scale * 0.75 },
      ];

      // Lines between hubs
      const connections: [number, number][] = [
        [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
        [1, 5], [2, 5], [1, 3], [2, 4], [3, 4]
      ];

      const perConnection = Math.floor((count * 0.65) / connections.length);
      for (const [a, b] of connections) {
        pts.push(...sampleLine(hubs[a], hubs[b], perConnection));
      }

      // Clustered satellite points around hubs
      for (const hub of hubs) {
        for (let i = 0; i < 7; i++) {
          const a = (i / 7) * Math.PI * 2;
          const dist = Math.random() * 28 + 12;
          pts.push({
            x: hub.x + Math.cos(a) * dist,
            y: hub.y + Math.sin(a) * dist,
          });
        }
      }

      while (pts.length < count) {
        const randomHub = hubs[Math.floor(Math.random() * hubs.length)];
        pts.push({
          x: randomHub.x + (Math.random() - 0.5) * 45,
          y: randomHub.y + (Math.random() - 0.5) * 45,
        });
      }
      return pts.slice(0, count);
    };

    // 4. Projects Shape: Bento-Grid Rectangles Architecture
    const generateProjectsShape = (w: number, h: number, count: number): Point[] => {
      const cx = w / 2;
      const cy = h / 2;
      const bw = Math.min(w * 0.65, 480);
      const bh = Math.min(h * 0.55, 360);
      const pts: Point[] = [];

      interface Rect {
        x: number;
        y: number;
        w: number;
        h: number;
      }

      const rects: Rect[] = [
        { x: cx - bw / 2, y: cy - bh / 2, w: bw * 0.62, h: bh * 0.55 },
        { x: cx - bw / 2 + bw * 0.66, y: cy - bh / 2, w: bw * 0.34, h: bh * 0.55 },
        { x: cx - bw / 2, y: cy - bh / 2 + bh * 0.6, w: bw * 0.31, h: bh * 0.4 },
        { x: cx - bw / 2 + bw * 0.34, y: cy - bh / 2 + bh * 0.6, w: bw * 0.31, h: bh * 0.4 },
        { x: cx - bw / 2 + bw * 0.68, y: cy - bh / 2 + bh * 0.6, w: bw * 0.32, h: bh * 0.4 },
      ];

      const perRect = Math.floor(count / rects.length);
      for (const r of rects) {
        const p1 = { x: r.x, y: r.y };
        const p2 = { x: r.x + r.w, y: r.y };
        const p3 = { x: r.x + r.w, y: r.y + r.h };
        const p4 = { x: r.x, y: r.y + r.h };
        const sub = Math.floor(perRect / 4);
        pts.push(...sampleLine(p1, p2, sub));
        pts.push(...sampleLine(p2, p3, sub));
        pts.push(...sampleLine(p3, p4, sub));
        pts.push(...sampleLine(p4, p1, sub));
      }

      while (pts.length < count) {
        pts.push({ x: cx, y: cy });
      }
      return pts.slice(0, count);
    };

    // 5. Contact Shape: Origami Paper Airplane Soaring Upwards
    const generateContactShape = (w: number, h: number, count: number): Point[] => {
      const cx = w / 2;
      const cy = h / 2;
      const scale = Math.min(w, h) * (isMobile ? 0.38 : 0.3);
      const pts: Point[] = [];

      const nose: Point = { x: cx + scale * 0.65, y: cy - scale * 0.75 };
      const leftWing: Point = { x: cx - scale * 0.85, y: cy + scale * 0.4 };
      const rightWing: Point = { x: cx + scale * 0.35, y: cy + scale * 0.75 };
      const centerTail: Point = { x: cx - scale * 0.1, y: cy + scale * 0.25 };

      const per = Math.floor(count / 5);
      pts.push(...sampleLine(nose, leftWing, per));
      pts.push(...sampleLine(leftWing, centerTail, per));
      pts.push(...sampleLine(centerTail, nose, per));
      pts.push(...sampleLine(nose, rightWing, per));
      pts.push(...sampleLine(rightWing, centerTail, per));

      while (pts.length < count) {
        pts.push({ x: cx, y: cy });
      }
      return pts.slice(0, count);
    };

    const getShapePoints = (shape: ShapeType, w: number, h: number, count: number): Point[] => {
      switch (shape) {
        case "hero":
          return generateHeroShape(w, h, count);
        case "about":
          return generateAboutShape(w, h, count);
        case "skills":
          return generateSkillsShape(w, h, count);
        case "projects":
          return generateProjectsShape(w, h, count);
        case "contact":
          return generateContactShape(w, h, count);
      }
    };

    // Initialize particles
    const initParticles = () => {
      const targets = getShapePoints(currentShape, width, height, particleCount);
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        const target = targets[i] || { x: width / 2, y: height / 2 };
        const initialX = width / 2 + (Math.random() - 0.5) * width;
        const initialY = height / 2 + (Math.random() - 0.5) * height;

        particles.push({
          x: initialX,
          y: initialY,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          targetX: target.x,
          targetY: target.y,
          baseX: target.x,
          baseY: target.y,
          size: Math.random() * 2.2 + 1.8,
          baseAlpha: Math.random() * 0.4 + 0.45,
          colorDark: darkColors[i % darkColors.length],
          colorLight: lightColors[i % lightColors.length],
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    // Morph to new shape with explosion velocity burst
    const morphToShape = (newShape: ShapeType) => {
      if (newShape === currentShape) return;
      currentShape = newShape;

      const newTargets = getShapePoints(newShape, width, height, particleCount);
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const nt = newTargets[i] || { x: width / 2, y: height / 2 };
        p.baseX = nt.x;
        p.baseY = nt.y;
        p.targetX = nt.x;
        p.targetY = nt.y;

        if (!prefersReducedMotion) {
          // Physical explosion velocity outward
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * (isMobile ? 8 : 15) + 6;
          p.vx += Math.cos(angle) * speed;
          p.vy += Math.sin(angle) * speed;
        }
      }
    };

    // Scroll & Section IntersectionObserver
    const sectionToShapeMap: Record<string, ShapeType> = {
      hero: "hero",
      about: "about",
      skills: "skills",
      "featured-projects": "projects",
      "all-projects": "projects",
      process: "skills",
      contact: "contact",
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const shape = sectionToShapeMap[entry.target.id];
            if (shape) {
              morphToShape(shape);
              break;
            }
          }
        }
      },
      {
        threshold: 0.25,
      }
    );

    const observeSections = () => {
      Object.keys(sectionToShapeMap).forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    };

    // Delay slightly to ensure DOM has rendered
    const timeoutId = setTimeout(observeSections, 300);

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const newTargets = getShapePoints(currentShape, width, height, particleCount);
      for (let i = 0; i < particles.length; i++) {
        const nt = newTargets[i] || { x: width / 2, y: height / 2 };
        particles[i].baseX = nt.x;
        particles[i].baseY = nt.y;
        particles[i].targetX = nt.x;
        particles[i].targetY = nt.y;
      }
    };

    window.addEventListener("resize", handleResize);

    // Main animation loop
    let lastTime = performance.now();

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const isDark =
        document.documentElement.classList.contains("dark") ||
        (!document.documentElement.classList.contains("light") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      // Subtle ambient grid lines
      ctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.015)" : "rgba(0, 0, 0, 0.02)";
      ctx.lineWidth = 1;
      const gridSize = 72;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Constellation lines connection threshold
      const connectDist = isMobile ? 38 : 55;

      // Draw lines between close assembled particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (d < connectDist) {
            const lineAlpha = (1 - d / connectDist) * (isDark ? 0.16 : 0.09);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark ? p1.colorDark : p1.colorLight;
            ctx.globalAlpha = lineAlpha;
            ctx.stroke();
          }
        }
      }

      // Physics, breathing & drawing particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Harmonic breathing
        const breathX = Math.sin(time * 0.0018 + p.phase) * 1.6;
        const breathY = Math.cos(time * 0.0018 + p.phase) * 1.6;
        const curTargetX = p.baseX + breathX;
        const curTargetY = p.baseY + breathY;

        // Spring attraction to target
        const dx = curTargetX - p.x;
        const dy = curTargetY - p.y;
        const spring = 0.038;
        const friction = 0.85;

        p.vx += dx * spring;
        p.vy += dy * spring;

        // Gentle Mouse Repulsion
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mdist = Math.hypot(mdx, mdy);
        if (mdist < mouse.radius && mdist > 0) {
          const repForce = ((mouse.radius - mdist) / mouse.radius) * 3.5;
          p.vx -= (mdx / mdist) * repForce;
          p.vy -= (mdy / mdist) * repForce;
        }

        // Apply velocities
        p.vx *= friction;
        p.vy *= friction;
        p.x += p.vx;
        p.y += p.vy;

        // Draw particle with glow
        const color = isDark ? p.colorDark : p.colorLight;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = isDark ? p.baseAlpha : p.baseAlpha * 0.85;
        ctx.fill();

        // Extra subtle core for larger dots
        if (p.size > 2.8 && isDark) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.globalAlpha = 0.7;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-80 transition-opacity duration-700"
    />
  );
};
