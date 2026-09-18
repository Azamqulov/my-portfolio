"use client";

import React, { useEffect, useRef } from "react";

type SectionShape = "hero" | "about" | "skills" | "projects" | "contact";

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
  baseTargetX: number;
  baseTargetY: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  colorLight: string;
  colorDark: string;
  phase: number;
  speed: number;
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
    const particleCount = isMobile ? 95 : 240;

    let currentSection: SectionShape = "hero";
    let isTransitioning = false;
    let transitionProgress = 1; // 0 to 1

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 100,
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

    // Delicate, soft pastel cyan/teal/sky-blue palettes matching Screenshot 2
    const lightColors = [
      "rgba(14, 165, 233, ", // Sky 500
      "rgba(20, 184, 166, ", // Teal 500
      "rgba(56, 189, 248, ", // Sky 400
      "rgba(45, 212, 191, ", // Teal 400
      "rgba(99, 102, 241, ", // Indigo 500
    ];

    const darkColors = [
      "rgba(0, 217, 192, ",  // Brand Teal
      "rgba(56, 189, 248, ", // Cyan 400
      "rgba(129, 140, 248, ",// Indigo 400
      "rgba(165, 243, 252, ",// Cyan 200
      "rgba(99, 102, 241, ", // Indigo 500
    ];

    // Helper: sample points along a curve/line with soft organic dispersion
    const sampleLineWithDispersion = (
      p1: Point,
      p2: Point,
      count: number,
      jitter: number = 6
    ): Point[] => {
      const pts: Point[] = [];
      for (let i = 0; i <= count; i++) {
        const t = count === 0 ? 0.5 : i / count;
        pts.push({
          x: p1.x + (p2.x - p1.x) * t + (Math.random() - 0.5) * jitter,
          y: p1.y + (p2.y - p1.y) * t + (Math.random() - 0.5) * jitter,
        });
      }
      return pts;
    };

    // -------------------------------------------------------------
    // SECTION SHAPE GENERATORS
    // -------------------------------------------------------------

    // 1. Hero: Serpentine ambient flow spanning across the screen
    const generateHeroFlow = (w: number, h: number, count: number): Point[] => {
      const pts: Point[] = [];
      for (let i = 0; i < count; i++) {
        const x = (i / count) * w * 1.1 - w * 0.05;
        const wave = Math.sin((x / w) * Math.PI * 3) * (h * 0.22);
        const y = h * 0.48 + wave + (Math.random() - 0.5) * 90;
        pts.push({ x, y });
      }
      return pts;
    };

    // 2. About: The exact Question Mark '?' from Screenshot 2!
    // Delicate, airy question mark silhouette with soft organic point distribution
    const generateQuestionMark = (w: number, h: number, count: number): Point[] => {
      const cx = w * 0.5;
      const cy = h * 0.46;
      const scale = Math.min(w, h) * (isMobile ? 0.38 : 0.32);
      const pts: Point[] = [];

      // Top arc of question mark
      const arcCount = Math.floor(count * 0.52);
      const arcRadius = scale * 0.52;
      const arcCenter: Point = { x: cx, y: cy - scale * 0.35 };

      for (let i = 0; i < arcCount; i++) {
        // Angle from -140 deg to +70 deg
        const t = i / arcCount;
        const theta = -Math.PI * 0.85 + t * (Math.PI * 1.4);
        const r = arcRadius + (Math.random() - 0.5) * 14;
        pts.push({
          x: arcCenter.x + Math.cos(theta) * r,
          y: arcCenter.y + Math.sin(theta) * r,
        });
      }

      // Middle curving stem down towards center
      const stemCount = Math.floor(count * 0.32);
      const pStart: Point = { x: cx + arcRadius * 0.65, y: cy - scale * 0.1 };
      const pMid: Point = { x: cx, y: cy + scale * 0.2 };
      const pEnd: Point = { x: cx, y: cy + scale * 0.48 };

      pts.push(...sampleLineWithDispersion(pStart, pMid, Math.floor(stemCount / 2), 12));
      pts.push(...sampleLineWithDispersion(pMid, pEnd, Math.floor(stemCount / 2), 10));

      // Bottom dot of question mark (separated by a gap)
      const dotCount = count - pts.length;
      const dotCenter: Point = { x: cx, y: cy + scale * 0.72 };
      for (let i = 0; i < dotCount; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * 12;
        pts.push({
          x: dotCenter.x + Math.cos(a) * r,
          y: dotCenter.y + Math.sin(a) * r,
        });
      }

      return pts;
    };

    // 3. Skills: Wide planetary orbital rings / atom network
    const generateSkillsOrbits = (w: number, h: number, count: number): Point[] => {
      const cx = w * 0.5;
      const cy = h * 0.48;
      const r = Math.min(w, h) * (isMobile ? 0.36 : 0.28);
      const pts: Point[] = [];

      const r1 = r;
      const r2 = r * 0.65;
      const count1 = Math.floor(count * 0.6);
      const count2 = count - count1;

      // Orbit 1 tilted
      for (let i = 0; i < count1; i++) {
        const theta = (i / count1) * Math.PI * 2;
        const xRaw = Math.cos(theta) * r1;
        const yRaw = Math.sin(theta) * (r1 * 0.45);
        // rotate 30 deg
        const x = cx + xRaw * Math.cos(0.5) - yRaw * Math.sin(0.5) + (Math.random() - 0.5) * 8;
        const y = cy + xRaw * Math.sin(0.5) + yRaw * Math.cos(0.5) + (Math.random() - 0.5) * 8;
        pts.push({ x, y });
      }

      // Orbit 2 tilted opposite
      for (let i = 0; i < count2; i++) {
        const theta = (i / count2) * Math.PI * 2;
        const xRaw = Math.cos(theta) * r2;
        const yRaw = Math.sin(theta) * (r2 * 0.45);
        // rotate -30 deg
        const x = cx + xRaw * Math.cos(-0.5) - yRaw * Math.sin(-0.5) + (Math.random() - 0.5) * 8;
        const y = cy + xRaw * Math.sin(-0.5) + yRaw * Math.cos(-0.5) + (Math.random() - 0.5) * 8;
        pts.push({ x, y });
      }

      return pts;
    };

    // 4. Projects: Expansive open constellation frame with soft perimeter
    const generateProjectsConstellation = (w: number, h: number, count: number): Point[] => {
      const cx = w * 0.5;
      const cy = h * 0.48;
      const bw = Math.min(w * 0.72, 540);
      const bh = Math.min(h * 0.56, 380);
      const pts: Point[] = [];

      const corners: Point[] = [
        { x: cx - bw / 2, y: cy - bh / 2 },
        { x: cx + bw / 2, y: cy - bh / 2 },
        { x: cx + bw / 2, y: cy + bh / 2 },
        { x: cx - bw / 2, y: cy + bh / 2 },
      ];

      const perSide = Math.floor(count / 4);
      for (let i = 0; i < 4; i++) {
        const pA = corners[i];
        const pB = corners[(i + 1) % 4];
        pts.push(...sampleLineWithDispersion(pA, pB, perSide, 14));
      }

      while (pts.length < count) {
        pts.push({
          x: cx + (Math.random() - 0.5) * bw,
          y: cy + (Math.random() - 0.5) * bh,
        });
      }
      return pts.slice(0, count);
    };

    // 5. Contact: Soaring origami paper airplane
    const generateContactAirplane = (w: number, h: number, count: number): Point[] => {
      const cx = w * 0.5;
      const cy = h * 0.46;
      const scale = Math.min(w, h) * (isMobile ? 0.38 : 0.3);
      const pts: Point[] = [];

      const nose: Point = { x: cx + scale * 0.65, y: cy - scale * 0.7 };
      const leftWing: Point = { x: cx - scale * 0.8, y: cy + scale * 0.35 };
      const rightWing: Point = { x: cx + scale * 0.3, y: cy + scale * 0.68 };
      const centerTail: Point = { x: cx - scale * 0.1, y: cy + scale * 0.2 };

      const per = Math.floor(count / 5);
      pts.push(...sampleLineWithDispersion(nose, leftWing, per, 8));
      pts.push(...sampleLineWithDispersion(leftWing, centerTail, per, 8));
      pts.push(...sampleLineWithDispersion(centerTail, nose, per, 8));
      pts.push(...sampleLineWithDispersion(nose, rightWing, per, 8));
      pts.push(...sampleLineWithDispersion(rightWing, centerTail, per, 8));

      while (pts.length < count) {
        pts.push({ x: cx, y: cy });
      }
      return pts.slice(0, count);
    };

    const getTargetPoints = (section: SectionShape, w: number, h: number, count: number): Point[] => {
      switch (section) {
        case "hero":
          return generateHeroFlow(w, h, count);
        case "about":
          return generateQuestionMark(w, h, count);
        case "skills":
          return generateSkillsOrbits(w, h, count);
        case "projects":
          return generateProjectsConstellation(w, h, count);
        case "contact":
          return generateContactAirplane(w, h, count);
      }
    };

    // Initialize particles
    let particlesList: Particle[] = [];
    const initParticles = () => {
      const targets = getTargetPoints(currentSection, width, height, particleCount);
      particlesList = [];

      for (let i = 0; i < particleCount; i++) {
        const target = targets[i] || { x: width / 2, y: height / 2 };
        const initialX = Math.random() * width;
        const initialY = Math.random() * height;

        particlesList.push({
          x: initialX,
          y: initialY,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          targetX: target.x,
          targetY: target.y,
          baseTargetX: target.x,
          baseTargetY: target.y,
          size: Math.random() * 1.4 + 1.2, // 1.2px to 2.6px (small & delicate like Screenshot 2)
          alpha: Math.random() * 0.25 + 0.35, // 0.35 to 0.60
          baseAlpha: Math.random() * 0.25 + 0.35,
          colorLight: lightColors[i % lightColors.length],
          colorDark: darkColors[i % darkColors.length],
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.015 + 0.025,
        });
      }
    };

    initParticles();

    // Sinuous Snake Wave Flow & Morph
    const transitionToSection = (newSection: SectionShape) => {
      if (newSection === currentSection) return;
      currentSection = newSection;
      isTransitioning = true;
      transitionProgress = 0;

      const newTargets = getTargetPoints(newSection, width, height, particleCount);

      // Trigger serpentine river flow: disperse particles in a flowing S-curve wave across the screen
      for (let i = 0; i < particlesList.length; i++) {
        const p = particlesList[i];
        const nt = newTargets[i] || { x: width / 2, y: height / 2 };
        p.baseTargetX = nt.x;
        p.baseTargetY = nt.y;
        p.targetX = nt.x;
        p.targetY = nt.y;

        // Serpentine velocity wave ("ilon izi")
        const waveAngle = Math.sin((p.y / height) * Math.PI * 2.5 + i * 0.1) * Math.PI * 0.7;
        const waveSpeed = Math.random() * 8 + 5;
        p.vx += Math.cos(waveAngle) * waveSpeed;
        p.vy += (Math.random() - 0.5) * 5;
      }
    };

    // IntersectionObserver for sections
    const sectionMap: Record<string, SectionShape> = {
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
            const section = sectionMap[entry.target.id];
            if (section) {
              transitionToSection(section);
              break;
            }
          }
        }
      },
      {
        threshold: 0.22,
      }
    );

    const observeSections = () => {
      Object.keys(sectionMap).forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    };

    const timeoutId = setTimeout(observeSections, 300);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const newTargets = getTargetPoints(currentSection, width, height, particleCount);
      for (let i = 0; i < particlesList.length; i++) {
        const nt = newTargets[i] || { x: width / 2, y: height / 2 };
        particlesList[i].baseTargetX = nt.x;
        particlesList[i].baseTargetY = nt.y;
        particlesList[i].targetX = nt.x;
        particlesList[i].targetY = nt.y;
      }
    };

    window.addEventListener("resize", handleResize);

    // Main animation loop
    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const isDark =
        document.documentElement.classList.contains("dark") ||
        (!document.documentElement.classList.contains("light") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      // Subtle ambient background grid lines
      ctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.012)" : "rgba(0, 0, 0, 0.018)";
      ctx.lineWidth = 1;
      const gridSize = 80;
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

      // Update and draw particles
      for (let i = 0; i < particlesList.length; i++) {
        const p = particlesList[i];

        // Sinuous serpentine wave breathing across the page ("ilon izi")
        const snakeWaveX = Math.sin(time * 0.0015 + p.y * 0.004 + p.phase) * 12;
        const snakeWaveY = Math.cos(time * 0.0015 + p.x * 0.004 + p.phase) * 6;

        const effectiveTargetX = p.baseTargetX + snakeWaveX;
        const effectiveTargetY = p.baseTargetY + snakeWaveY;

        // Smooth spring attraction to target
        const dx = effectiveTargetX - p.x;
        const dy = effectiveTargetY - p.y;
        const spring = 0.032;
        const friction = 0.88;

        p.vx += dx * spring;
        p.vy += dy * spring;

        // Gentle Mouse Repulsion (doesn't destroy the shape)
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mdist = Math.hypot(mdx, mdy);
        if (mdist < mouse.radius && mdist > 0) {
          const repForce = ((mouse.radius - mdist) / mouse.radius) * 2.8;
          p.vx -= (mdx / mdist) * repForce;
          p.vy -= (mdy / mdist) * repForce;
        }

        // Apply physics
        p.vx *= friction;
        p.vy *= friction;
        p.x += p.vx;
        p.y += p.vy;

        // Draw particle with soft alpha (like Screenshot 2)
        const colorPrefix = isDark ? p.colorDark : p.colorLight;
        const currentAlpha = isDark ? p.baseAlpha * 1.1 : p.baseAlpha * 0.85;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${colorPrefix}${currentAlpha})`;
        ctx.fill();

        // Delicate soft halo for slightly larger particles in dark mode
        if (isDark && p.size > 2.0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `${colorPrefix}0.15)`;
          ctx.fill();
        }
      }

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
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-85 transition-opacity duration-700"
    />
  );
};
