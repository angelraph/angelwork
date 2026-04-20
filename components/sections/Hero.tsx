"use client";

import { motion } from "framer-motion";
import { ArrowRight, MousePointer2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";
import { useEffect, useRef } from "react";

/* ── Particle canvas ─────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,58,237,${p.opacity})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124,58,237,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.7 }} />;
}

/* ── Status badge ────────────────────────────────────────── */
function StatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8"
      style={{ border: "1px solid rgba(124,58,237,0.3)", background: "rgba(124,58,237,0.08)", color: "#7C3AED" }}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ background: "#7C3AED" }} />
        <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "#7C3AED" }} />
      </span>
      Available for new projects
    </motion.div>
  );
}

/* ── Hero ────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-pattern"
      style={{ background: "#FFFFFF" }}
    >
      {/* Orbs */}
      <div className="orb w-[600px] h-[600px] -top-48 -right-48"
        style={{ background: "rgba(124,58,237,0.15)", filter: "blur(100px)" }} />
      <div className="orb w-[500px] h-[500px] -bottom-32 -left-32"
        style={{ background: "rgba(124,58,237,0.12)", filter: "blur(100px)", animationDelay: "3s" }} />

      <ParticleCanvas />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <StatusBadge />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
          style={{ color: "#0F172A" }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-4 text-xl font-medium sm:text-2xl gradient-text"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          style={{ color: "#475569" }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#projects" size="lg">
            View My Work <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="#contact" size="lg" variant="secondary">
            Get In Touch
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
        >
          {[
            { value: "150k+", label: "Community Members" },
            { value: "4+ yrs", label: "In Web3" },
            { value: "25+", label: "Protocols" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs uppercase tracking-wider mt-1" style={{ color: "#94A3B8" }}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "#94A3B8" }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <MousePointer2 className="h-4 w-4" />
        </motion.div>
        <span className="text-xs uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
}
