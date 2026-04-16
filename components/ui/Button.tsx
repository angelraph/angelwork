"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  external = false,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40",
    secondary:
      "border border-cyan-500/40 text-cyan-400 font-semibold hover:border-cyan-400/70 hover:bg-cyan-500/5 backdrop-blur-sm",
    ghost:
      "text-slate-300 hover:text-white font-medium",
  };

  const baseClasses = `relative inline-flex items-center gap-2 rounded-xl font-medium tracking-wide transition-all duration-200 cursor-pointer
    ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <motion.span
      className={baseClasses}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Shimmer effect on primary */}
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-xl overflow-hidden">
          <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </span>
      )}
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        style={{ display: "inline-block" }}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
      {content}
    </button>
  );
}
