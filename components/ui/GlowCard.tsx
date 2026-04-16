"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "cyan" | "purple" | "blue";
  hover?: boolean;
  delay?: number;
}

const glowMap = {
  cyan: {
    glow: "hover:shadow-cyan-500/20",
    border: "hover:border-cyan-500/30",
    bg: "rgba(34,211,238,0.04)",
  },
  purple: {
    glow: "hover:shadow-purple-500/20",
    border: "hover:border-purple-500/30",
    bg: "rgba(168,85,247,0.04)",
  },
  blue: {
    glow: "hover:shadow-blue-500/20",
    border: "hover:border-blue-500/30",
    bg: "rgba(59,130,246,0.04)",
  },
};

export default function GlowCard({
  children,
  className = "",
  glowColor = "cyan",
  hover = true,
  delay = 0,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { glow, border } = glowMap[glowColor];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`
        relative rounded-2xl border border-white/5 bg-white/[0.03]
        backdrop-blur-sm overflow-hidden
        transition-all duration-300
        ${hover ? `hover:shadow-xl ${glow} ${border} cursor-pointer` : ""}
        ${className}
      `}
    >
      {/* Top gradient line */}
      <div
        className={`absolute top-0 left-0 right-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
          glowColor === "cyan"
            ? "bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
            : glowColor === "purple"
            ? "bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
            : "bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        }`}
      />
      {children}
    </motion.div>
  );
}
