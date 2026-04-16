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
    glow: "hover:shadow-cyan-100",
    border: "hover:border-cyan-300",
  },
  purple: {
    glow: "hover:shadow-purple-100",
    border: "hover:border-purple-300",
  },
  blue: {
    glow: "hover:shadow-blue-100",
    border: "hover:border-blue-300",
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
        relative rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden
        transition-all duration-300
        ${hover ? `hover:shadow-xl ${glow} ${border} cursor-pointer` : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
